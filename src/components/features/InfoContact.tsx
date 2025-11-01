import { AiFillTikTok } from "react-icons/ai";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { font_paragraph, font_title } from "../../styles/fonts"

export const InfoContact = () => {
    return (
        <div className={`${font_paragraph.className} h-fit max-sm:w-full w-84 col-span-2 dark:bg-[#2A2A2A] bg-[#F4F5F0] p-8 rounded-lg`}>
            <h4 className={`${font_title.className} text-[#223843] text-2xl font-semibold dark:text-[#E0E0E0] mb-4`}>Informacion de contacto</h4>
            <div className="dark:text-[#B0B0B0] text-gray-800 flex flex-col gap-4 w-fit max-sm:w-full">
                <span><EmailIcon className="dark:text-[#519872] text-[#223843]" /> bughunters.startup@gmail.com</span>
                <span><LocalPhoneIcon className="dark:text-[#519872] text-[#223843]" /> +57 3150581737</span>
                <hr />
                <p>Siguenos</p>
                <div className="flex items-center text-2xl gap-3">
                    <LinkedInIcon className="cursor-pointer" />
                    <InstagramIcon className="cursor-pointer" />
                    <AiFillTikTok className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
