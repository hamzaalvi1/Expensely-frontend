import type { StackProps, TextProps, TitleProps } from "@mantine/core"

export type HeadingSectionProps = {
  title: string
  description: string
  containerProps?: StackProps
  className?: string
  titleProps?: TitleProps
  descriptionProps?: TextProps
}
