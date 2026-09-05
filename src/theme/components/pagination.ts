import { Pagination } from "@mantine/core";

export const pagination = Pagination.extend({
  defaultProps: {
    radius: "xs",
    gap: "xs",
  },
  styles: {
    control: {
      borderWidth: "1px",
      "&:not([data-active])": {
        borderColor: "var(--mantine-color-neutral-2)",
      },
    },
  },
});
