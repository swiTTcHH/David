import image from "../assets/Stand.jpg"

export default function Hero() {
    return (
        <section className="py-8 lg:py-16 flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-8">
            <div className="space-y-5 w-full lg:w-2/3 flex flex-col justify-center">
                <h3 className="uppercase bg-accent2 max-w-max px-4 py-1.5 text-white border-ink border-2 text-xs sm:text-sm font-bold">
                    Frontend &amp; Mobile App Developer
                </h3>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                    David <span className="text-accent1">Okpeta.</span>
                </h1>
                <p className="w-full lg:w-[80%] text-sm sm:text-base leading-relaxed text-ink/90 font-medium">
                    I build fast, responsive, and production-grade web and mobile applications. From React-powered dashboards to full-stack systems with role-based authentication, I turn designs into working and scalable products.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a href="#projects" className="bg-ink border-2 border-ink hover:bg-accent3 hover:text-ink text-white py-2 px-5 font-bold text-sm transition duration-200">
                        View My Work
                    </a>
                    <a href="#contact" className="border-2 border-ink bg-transparent hover:bg-ink hover:text-white py-2 px-5 font-bold text-sm transition duration-200">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="h-[300px] sm:h-[400px] w-full max-w-sm lg:max-w-none lg:w-1/3 shrink-0">
                <img src={image} alt="David Okpeta" className="h-full w-full object-cover object-[15%_25%] rounded-xl border-2 border-ink shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]" />
            </div>
        </section>
    )
}