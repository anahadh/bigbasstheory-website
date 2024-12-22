import { Link } from "react-router-dom"

const testimonials = [
    {
        name: "Brian Smith",
        testimonial: "The baits I purchased here are impressively durable and incredibly lifelike in the water. Since using them, I’ve consistently reeled in more fish, and they’ve quickly become my go-to choice.",
    },
    {
        name: "María Hernández",
        testimonial: "I decided to try their backpacks and was blown away by how comfortable and spacious they are. I can carry all my tackle, extra baits, and a thermos without feeling weighed down during my long fishing excursions.",
    },
    {
        name: "Amit Patel",
        testimonial: "Their baits have a natural, alluring movement that seems irresistible to fish of all sizes. I’ve noticed a significant uptick in my catch rate, making every trip out feel more productive and rewarding.",
    },
    {
        name: "Hana Tanaka",
        testimonial: "I recently tried one of their specialized fishing backpacks and was immediately impressed by the thoughtful design and numerous compartments. It’s made organizing my gear a breeze and saved me precious time when switching lures or baits.",
    },
    {
        name: "Jean Dupont",
        testimonial: "Their shirts are exceptionally comfortable and breathable, perfect for long days in the sun. Not only do they look great, but they also help keep me cool, allowing me to focus on landing the next big catch.",
    },
    {
        name: "Faith Johnson",
        testimonial: "The baits I bought here strike the perfect balance between durability and realism, holding up even after multiple strikes. I’m seeing better results on every trip, and it’s been a genuine confidence boost in my fishing abilities.",
    }
]

const Landing = () => {
    

    return (
        <>
            <div className="relative w-screen h-[75vh] outline outline-4 grid grid-cols-2">
                <img className="w-full h-full bg-red-500"/>
                <img className="w-full h-full bg-blue-500" />
                <div className="absolute w-[740px] h-[375px] top-[360px] left-[440px] flex flex-col p-5">
                    <p className="mb-4 italic font-bold tracking-wider font-title text-9xl">Tacklepack</p>
                    <p className="text-5xl font-info italic font-thin tracking-wide w-[550px] leading-[60px] mb-7">A sleek backpack for your tackle expeditions</p>
                    <Link to="/shop"  className="relative flex font-info items-center justify-center h-full w-[300px] bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:w-[300px] before:h-full before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                        SHOP NOW
                    </Link>
                </div>
            </div>

            <div className="relative flex justify-center items-center h-[85vh] w-screen bg-background">
                <div className="relative flex flex-row w-3/5 gap-8 mb-60 mt-60 h-5/6">
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-8 space-y-8">
                        <img className="w-full h-3/4 rounded-xl" src="" />
                        <p className="flex justify-center text-4xl font-bold font-info">No Dink Pink Baits</p>
                        <Link to="/shop"  className="relative flex font-info items-center justify-center h-[80px] w-5/6 bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                            SHOP NOW
                        </Link>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-8 space-y-8">
                        <img className="w-full h-3/4 rounded-xl" src="https://cdn.discordapp.com/attachments/1218043126393077861/1318068991725408266/Thaddeus_Stevens_-_Brady-Handy-crop.png?ex=6761a3a8&is=67605228&hm=93f24fc33fadf38204d7022cd57184115387305f8cb18cfb1ab0d0bb5ba8f262&" />
                        <p className="flex justify-center text-4xl font-bold text-center font-info">BBT Shirt Newspaper Decal</p>
                        <Link to="/shop"  className="relative flex font-info items-center justify-center h-[80px] w-5/6 bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                            SHOP NOW
                        </Link>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-8 space-y-8">
                        <img className="w-full h-3/4 rounded-xl" src="https://cdn.discordapp.com/attachments/1218043126393077861/1318068991725408266/Thaddeus_Stevens_-_Brady-Handy-crop.png?ex=6761a3a8&is=67605228&hm=93f24fc33fadf38204d7022cd57184115387305f8cb18cfb1ab0d0bb5ba8f262&" />
                        <p className="flex justify-center text-4xl font-bold font-info">Tacklepack</p>
                        <Link to="/shop"  className="relative flex font-info items-center justify-center h-[80px] w-5/6 bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                            SHOP NOW
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center items-center h-[85vh] w-screen bg-secondary/30 p-10">
                <div className="relative flex flex-col items-end w-1/2 space-y-16">
                    <p className="w-2/3 text-end relative italic font-title font-black leading-[95px] tracking-wide text-[80px] text-black">Understanding Big Bass Theory</p>
                    <p className="relative w-[70%] text-justify font-info text-4xl leading-[60px] tracking-wide text-black">
                        Big Bass Theory was founded by two passionate young tackle enthusiasts, Kota and Cade, who crafted innovative fishing gear to elevate the sport they love. Their determination and vision continue to drive the company today.
                    </p>
                    <Link to="/about"  className="relative flex items-center justify-center h-[80px] w-[70%] bg-primary/50 text-[40px] font-info font-bold transition-all duration-300 ease-in-out hover:bg-primary/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-primary/70 hover:before:scale-x-[1.05] hover:before:scale-y-[1.5]">
                        LEARN MORE
                    </Link>
                </div>

                <div className="relative flex items-start w-1/2 pl-20">
                    <img className="relative w-[60%] border-4 h-[500px] border-primary rounded-2xl" alt="A photo of the founders of the company, Kota and Cade" src="" />
                </div>
            </div>

            <div className="relative flex flex-col items-center self-center justify-center w-2/3 h-auto p-10 mb-40 space-x-5 justify-self-center bg-background">
                <p className="mt-20 font-black font-title text-8xl">Why Big Bass Theory?</p>
                <p className="mt-10 text-4xl italic font-info">Hear from some satisfied customers</p>

                <div className="relative grid items-start justify-center w-full h-auto grid-cols-3 gap-12 mt-20">
                    {testimonials.map((item, index) => {
                        return (
                            <div key={index}  className="relative rounded-2xl flex flex-col w-full h-auto h-max-[90%] bg-gray-400 p-10">
                                <div className="relative flex flex-row w-full h-[40%]">
                                    <div className="flex flex-col space-y-4">
                                        <p className="w-1/2 text-4xl font-bold font-info leading-[40px] text-white tracking-[3px]">{item.name}</p>
                                        <div className="flex flex-row mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <img className="absolute rounded-full right-9 top-9 size-36" src="https://i.pinimg.com/originals/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg" />

                                <p className="flex items-stretch mt-8 text-2xl text-white font-info">{item.testimonial}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="relative flex w-screen h-auto px-20 py-40 bg-primary/30">
                <div className="relative flex flex-row self-center w-2/3 justify-self-center gap-x-8">
                    <img className="aspect-auto" src="https://cdn.pixabay.com/photo/2018/05/01/07/52/tuscany-3364921_640.jpg" />
                
                    <div className="">

                    </div>

                    <img className="aspect-auto" src="https://cdn.pixabay.com/photo/2018/05/01/07/52/tuscany-3364921_640.jpg" />
                </div>
            </div>
        </>
    )
}

export default Landing

{/* <button onClick={handleRightButtonClick}  className="relative z-0 items-center p-2 transition-all duration-300 ease-in-out group active:scale-75">
                    <div className="absolute inset-0 transition-transform duration-300 ease-in-out scale-0 bg-gray-500 rounded-full -z-10 group-hover:scale-125" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="z-20 transition-all duration-300 ease-in-out size-20 group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>

<button onClick={handleLeftButtonClick}  className="relative z-0 items-center p-2 transition-all duration-300 ease-in-out group active:scale-75">
<div className="absolute inset-0 transition-transform duration-300 ease-in-out scale-0 bg-gray-500 rounded-full -z-10 group-hover:scale-125" />
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="z-20 transition-all duration-300 ease-in-out size-20 group-hover:text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button> */}