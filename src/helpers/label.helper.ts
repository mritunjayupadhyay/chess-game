import { HorizontalKeys, VerticalKeys } from "../App.constant"

export const getLabel = (i: number, j: number) => {
    return `${HorizontalKeys[i]}${VerticalKeys[j]}`
}