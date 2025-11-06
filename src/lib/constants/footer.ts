import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactFooterProps {
    text: string;
    url: string;
}

export const contactFooter: ContactFooterProps[] = [
    { text: 'Nosotros', url: "#aboutMe" },
    { text: 'Proyectos', url: "#projects" },
    { text: 'Contactanos', url: "#contact" }
]

interface IconProps {
    icon: any;
    url: string;
}

export const iconFooter: IconProps[] = [
    {
        icon: FaInstagram, url: 'https://www.instagram.com/bughunters.devs?igsh=aHBsdDF4MnZyeXpz'
    },
    {
        icon: FaGithub, url: 'https://github.com/Bug-Hunter-Co'
    },
    {
        icon: FaLinkedin, url: 'https://www.linkedin.com/in/bughunters-team-1308ab397/'
    }
]