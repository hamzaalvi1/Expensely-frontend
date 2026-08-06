
import { normalizePath } from "./normalize-path";

export const localizedPath = (
  path: string,
  lang?: string,
) => {
  return `/${lang ? `${lang}/` : ""}${normalizePath(path)}`;
};
