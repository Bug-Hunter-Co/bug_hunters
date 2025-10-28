import Image, { StaticImageData } from "next/image";
import { font_geist } from "../ui/fonts";

interface Stat {
    value: string;
    label: string;
}

interface AboutSectionProps {
    image: StaticImageData | string;
    title: string;
    paragraphs: string[];
    stats: Stat[];
}

export default function AboutSection({
    image,
    title,
    paragraphs,
    stats,
}: AboutSectionProps) {
    return (
        <section className={`${font_geist.className} flex dark:bg-[#1E1E1E] bg-[#FFFFFB] text-gray-800 md:px-12`} >
            <div className="mx-auto grid md:grid-cols-2 gap-16 w-8/10 mt-40">
                {/* Imagen */}
                <div className=" flex justify-center items-center w-fit p-16 rounded-xl">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="object-cover rounded-md bg-[#f8faf7] px-20 py-30 shadow"
                    />
                </div>

                <div>
                    <h2 className={`${font_geist.className}text-2xl  md:text-3xl font-extrabold text-gray-900 mb-6 dark:text-[#E0E0E0]`}>
                        {title}
                    </h2>

                    <div className={`${font_geist}space-y-4 text-gray-700 leading-relaxed dark:text-[#B0B0B0]`}>
                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-10 mt-10">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <p className="text-2xl font-extrabold text-[#519872]">{s.value}</p>
                                <p className="text-sm text-gray-500">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}