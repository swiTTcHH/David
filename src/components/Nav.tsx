import image from "../assets/Profile.png"

export default function Nav() {
    return (
        <div className="px-12 py-2 border-b-2 border-ink flex justify-between items-center">
            <div className="flex items-center gap-3 font-bold">
                <img src={image} alt="" className="w-18 aspect-square object-cover rounded-full"/>
                swiTTcHH🧑‍💻
            </div>

            <nav className="space-x-3 [&_a]:hover:text-accent1 [&_a]:hover:underline transition duration-500">
                <a href="#projects" className="">Projects</a>
                <a href="#skills" className="">Skills</a>
                <a href="#experience" className="">Experience</a>
                <a href="#contact" className="">Contact</a>
            </nav>
        </div>
    )
}