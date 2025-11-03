import { Project } from '@/types/Project';

import {
    greenpath_landin,
    greenpath_login,
    greenpath_register,
    greenpath_dashboard,
}
    from '@/lib/images/projects/greenpath_img'

export const projects: Project[] = [
    {
        title: "GreenPath",
        description: "Pagina web para ayudar a vender productos, 'Del campo a tu casa' la mejor opcion",
        tecnologies: ["Next.js", "Tailwind", "MySql"],
        path: "https://google.com",
        srcs: [greenpath_landin, greenpath_login, greenpath_register, greenpath_dashboard]
    },
    {
        title: "GreenPath",
        description: "Pagina web para ayudar a vender productos, 'Del campo a tu casa' la mejor opcion",
        tecnologies: ["Next.js", "Tailwind", "MySql"],
        path: "https://google.com",
        srcs: [greenpath_landin, greenpath_login, greenpath_register, greenpath_dashboard]
    },
    {
        title: "GreenPath",
        description: "Pagina web para ayudar a vender productos, 'Del campo a tu casa' la mejor opcion",
        tecnologies: ["Next.js", "Tailwind", "MySql"],
        path: "https://google.com",
        srcs: [greenpath_landin, greenpath_login, greenpath_register, greenpath_dashboard]
    }
];