// imports de Material Icons
import DataObjectIcon from '@mui/icons-material/DataObject'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import CodeIcon from '@mui/icons-material/Code'
import DataArrayIcon from '@mui/icons-material/DataArray'

const cards = [
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
]

function Card({ icon, title, text }: any) {
    return (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition-transform dark:text-[#E0E0E0]">
            <div className="mb-3">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
        </div>
    )
}

export default function CardsSection() {
    return (
        <section className="w-full grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2  max-sm:grid-cols-1 gap-14 py-8">
            {cards.map(card => (
                <Card key={card.id} {...card} />
            ))}
        </section>
    )
}
