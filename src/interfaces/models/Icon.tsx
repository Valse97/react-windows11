export interface Icon {
    image: string,
    position: { x: number, y: number },
    title: string,
    selected: boolean
}
export type Icons = Array<Icon>