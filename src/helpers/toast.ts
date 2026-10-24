import { notifications } from "@mantine/notifications";

export const errorLogger = (message: string): void => {
  notifications.show({
    title: "Request failed",
    message,
    color: "red",
  });
};

export const successLogger = (message: string): void => {
  notifications.show({
    title: 'Success',
    message,
    color: 'green',
  });
};