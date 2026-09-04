import { Table } from "@mantine/core";

export const table = Table.extend({
  styles: {
    thead: {
      backgroundColor: "var(--mantine-color-secondary-3)",
      borderTop: "1px solid var(--mantine-color-neutral-2)",
      borderBottom: "1px solid var(--mantine-color-neutral-2)",
    },
    tfoot: {
      backgroundColor: "var(--mantine-color-secondary-3)",
      borderTop: "1px solid var(--mantine-color-neutral-2)",
    },
    th: {
      padding: "var(--mantine-spacing-md)",
    },
    td: {
      padding: "var(--mantine-spacing-md)",
    },
  },
});
