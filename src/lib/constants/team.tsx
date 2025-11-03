import { CardItem } from '@/types/CardTeam';
import CodeIcon from '@mui/icons-material/Code';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export const cardsTeam: CardItem[] = [
    {
        id: 1,
        icon: <DataObjectIcon fontSize="large" color="primary" />,
        title: "Juan",
        text: "Founder & Developer.",
    },
    {
        id: 2,
        icon: <DesignServicesIcon fontSize="large" color="secondary" />,
        title: "Forlan",
        text: "Founder & Developer.",
    },
    {
        id: 3,
        icon: <CodeIcon fontSize="large" color="success" />,
        title: "Moises",
        text: "Founder & Developer.",
    },
    {
        id: 4,
        icon: <DataArrayIcon fontSize="large" color="warning" />,
        title: "Camilo",
        text: "Founder & Developer.",
    },
];