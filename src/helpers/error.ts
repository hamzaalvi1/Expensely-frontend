import axios from "axios";

export interface ErrorResponseData {
  message?: string;
}

const toErrorMessage = (value: unknown): string | undefined => {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return undefined;
  }

  const { message } = value as ErrorResponseData;
  return typeof message === "string" ? message : undefined;
};


export const axiosError = (error: unknown) => {
  if (axios.isAxiosError<ErrorResponseData>(error)) {
    const data = error.response?.data;

    return {
      response: error.response,
      data,
      message:
        toErrorMessage(data) ??
        (data === undefined ? error.message : JSON.stringify(data) ?? error.message),
    };
  }

  return {
    response: undefined,
    data: undefined,
    message:
      error instanceof Error ? error.message : "An unknown error occurred.",
  };
};
