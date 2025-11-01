// imports de Material Icons
import { stat } from '@/types/statsAbout';
import { Project } from '@/types/Project';
import { CardItem } from '@/types/CardTeam';
import CodeIcon from '@mui/icons-material/Code';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export const NAVBAR_LINKS = [
    { href: "#inicio", text: "inicio" },
    { href: "#aboutMe", text: "nosotros" },
    { href: "#teamSection", text: "equipo" },
    { href: "#projects", text: "proyectos" },
    { href: "#contact", text: "contacto" },
];

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

export const statsAbout: stat[] = [
    { value: "50+", label: "Proyectos realizados" },
    { value: "100%", label: "Satisfacción clientes" },
    { value: "8+", label: "Meses de experiencia" },
]

export const paragraphsAbout: string[] = [
    "Somos un equipo de desarrolladores apasionados por crear páginas web de alta calidad. Como freelancers, ofrecemos soluciones personalizadas para todo tipo de proyectos: desde sitios corporativos hasta aplicaciones interactivas. En Bug Hunters, ayudamos a las empresas a destacar en línea con experiencias digitales intuitivas, funcionales y seguras.",
    "Únete a nosotros y forma parte de un equipo dinámico, donde la innovación, la creatividad y el trabajo en equipo son la clave para alcanzar el éxito. ¡Si tienes una idea, nosotros la hacemos realidad!"
]

export const projects: Project[] = [
    {
        title: "GreenPath",
        description: "Pagina web para ayudar a vender productos, 'Del campo a tu casa' la mejor opcion",
        tecnologies: ["Next.js", "Tailwind", "MySql"],
        path: "https://google.com",
        srcs: ["/greenpath/landin.png", "/greenpath/login.png", "/greenpath/register.png", "/greenpath/dashboard.png"],
    },
    {
        title: "GreenPath",
        description: "Pagina web para ayudar a vender productos, 'Del campo a tu casa' la mejor opcion",
        tecnologies: ["Next.js", "Tailwind", "MySql"],
        path: "https://google.com",
        srcs: ["/greenpath/landin.png", "/greenpath/login.png", "/greenpath/register.png", "/greenpath/dashboard.png"],
    },
    {
        title: "GreenPath",
        description: "Pagina web para ayudar a vender productos, 'Del campo a tu casa' la mejor opcion",
        tecnologies: ["Next.js", "Tailwind", "MySql"],
        path: "https://google.com",
        srcs: ["/project.webp"],
    },
];

export const contactFooter: string[] = [
    'Nosotros', 'Proyectos', 'Contactanos'
]

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const iconFooter: any[] = [
    FaEnvelope, FaGithub, FaLinkedin
]