export interface CardProjectProps {
    title: string;
    tecnologies: string[];
    description: string;
    path: string;
    srcs: string[];
    onClick: () => void;
    index?: number;
    visible?: boolean;
}