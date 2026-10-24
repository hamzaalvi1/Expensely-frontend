import { API_METHODS, type ApiMethods } from "@/constants/api-methods";
import { BaseURL } from "@/constants/base-url";
import { axiosError } from "@/helpers/error";
import { errorLogger } from "@/helpers/toast";
import { getAccessToken } from "@/helpers/auth";
import type { Headers, QueryParams } from "@/types/commons";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";



export class FetchAPI {
  private static singleton: FetchAPI | null = null;

  private readonly client: AxiosInstance;
  private url = "";
  private method: ApiMethods = API_METHODS.GET;
  private data: unknown = {};
  private headers: Headers = {};
  private queryParams: QueryParams = {};

  private constructor() {
    this.client = axios.create({ baseURL: BaseURL });
  }

  static getInstance(): FetchAPI {
    if (FetchAPI.singleton === null) {
      FetchAPI.singleton = new FetchAPI();
    }

    return FetchAPI.singleton;
  }

  request(url: string, method: ApiMethods = API_METHODS.GET): this {
    this.reset();
    this.url = url;
    this.method = method;
    return this;
  }

  setData<T>(data: T): this {
    this.data = data;
    return this;
  }

  setHeaders(headers: Headers): this {
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  setQueryParams(queryParams: QueryParams): this {
    this.queryParams = { ...this.queryParams, ...queryParams };
    return this;
  }

  attachToken(): this {
    const token = getAccessToken();

    if (token) {
      this.headers.Authorization = `Bearer ${token}`;
    } else {
      delete this.headers.Authorization;
    }

    return this;
  }

  async send<T>(): Promise<T> {
    const config: AxiosRequestConfig = {
      method: this.method,
      url: this.url,
      headers: { ...this.headers },
      data: this.data,
      params: { ...this.queryParams },
    };

    this.reset();

    try {
      const response = await this.client.request<T>(config);
      return response.data;
    } catch (error: unknown) {
      const { response, data, message } = axiosError(error);
      errorLogger(message);

      return Promise.reject({
        status: response?.status,
        message,
        data,
      });
    }
  }

  private reset(): void {
    this.url = "";
    this.method = API_METHODS.GET;
    this.data = {};
    this.headers = {};
    this.queryParams = {};
  }
}

export const fetchAPI = FetchAPI.getInstance();
