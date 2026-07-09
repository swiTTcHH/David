import image from "../assets/Stand.jpg"

export default function Hero() {
    return (
        <section className="px-12 py-8 flex">
            <div className="space-y-3 w-2/3">
                <h3 className="uppercase bg-accent2 max-w-max px-4 py-1.5 text-white border-ink border-2">Frontend & Mobile App Developer</h3>
                <h1 className="text-6xl font-bold">David <span className="text-accent1">Okpeta.</span></h1>
                <p className="w-[40%]">I build fast, responsive, and production-grade web and mobile applications. From React-powered dashboards to full-stack systems with role-based authentication. I turn designs into working and scalable products</p>
                <div className="space-x-3">
                    <button className="bg-ink border-2 border-ink hover:bg-accent3 text-white py-2 px-4">View My Work</button>
                    <button className="border-2 border-ink hover:bg-ink hover:text-white py-2 px-4">Get In Touch</button>
                </div>
            </div>

            <div className="h-[400px] border w-1/3">
                <img src={image} alt="" className="h-max" />
            </div>
        </section>
    )
}