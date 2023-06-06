import {MouseEvent, ReactNode} from "react";

export type TChildren = {
    children?: ReactNode
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    className?: string
    placeholder?: string
}