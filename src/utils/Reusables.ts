import moment from "moment";

export function nonEmptyAndNotNullFields<T extends Record<string, any>>(
  obj: T
): Partial<T> {
  const result: Partial<T> = {};

  for (const key in obj) {
    const value = obj[key];
    if (value !== null && value !== undefined && value !== "") {
      result[key] = value;
    }
  }

  return result;
}

export function returnFilePathname(fileUrl: string, fileExt: string): string {
  let tempImgUrl: string[] = fileUrl.split("/");
  const finalImagePath = tempImgUrl[tempImgUrl.length - 1].concat(
    `.${fileExt}`
  );
  return finalImagePath;
}

export const formatDateRelatively = (time: string) => {
  return moment(new Date(time)).fromNow();
};
