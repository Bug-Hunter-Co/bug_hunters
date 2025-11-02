export interface CardItem {
    id: number
    icon: React.ReactNode
    title: string
    text: string
}

export interface CardProps extends CardItem {
    index: number
    visible: boolean
}
