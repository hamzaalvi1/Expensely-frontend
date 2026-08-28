import type { CardProps, TitleProps,StackProps } from "@mantine/core";

export type SectionCardProps = {
    title: string;
    titleProps?: TitleProps;
    containerProps?: CardProps;
    children?: React.ReactNode;
    wrapperProps?: StackProps;
    rightContent?: React.ReactNode;
    withTopAccent?: boolean;
    titleIcon?: React.ReactNode;
}
