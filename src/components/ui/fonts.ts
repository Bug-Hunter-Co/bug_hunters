import { Montserrat, Hammersmith_One } from "next/font/google"

// title font
export const font_title = Montserrat({
    subsets: ["latin"],
    weight: ["600","800"]
})

// paragraph font
export const font_paragraph = Hammersmith_One({
    subsets: ["latin"],
    weight: ["400"]  // Aquí debes usar un arreglo, no un objeto
})
