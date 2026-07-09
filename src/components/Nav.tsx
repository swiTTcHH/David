import image from "../assets/Profile.png"

export default function Nav() {
    return (
        <div className="px-4 sm:px-12 py-4 border-b-2 border-ink flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 font-black text-lg">
                <img src={image} alt="David Okpeta" className="w-14 sm:w-16 aspect-square object-cover rounded-full border-2 border-ink shadow-[2px_2px_0px_0px_rgba(13,13,13,1)]"/>
                swiTTcHH 🧑‍💻
            </div>

            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-bold text-sm [&_a]:hover:text-accent1 [&_a]:hover:underline transition duration-300">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}