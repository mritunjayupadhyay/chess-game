import { HorizontalKeys, VerticalKeys } from "../App.constant"

export const getLabel = (i: number, j: number) => {
    return `${VerticalKeys[j]}${HorizontalKeys[i]}`
}