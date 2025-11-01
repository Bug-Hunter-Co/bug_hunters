export interface ModalProjectProps {
    title: string;
    tecnologies: string[];
    description: string;
    path: string;
    srcs: string[];
    onClose: () => void;
}
