import bgImage from "../assets/unnamed.jpg";

export default function HeroSection() {
    return(
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative md:mt-20 min-h-screen w-full flex items-center justify-center text-white z-10"
        >
            <div className="absolute h-[100%] w-full top-0 left-0 bg-black/60 z-0"/>
            
            <div className="mx-5 md:w-1/2 text-center z-50 flex flex-col gap-6 items-center justify-center">
                <h1 className="text-4xl md:text-6xl/18 font-semibold  md:font-bold mb-4">
                    Crush your health and fitness goals in no time
                </h1>

                <p className="text-sm/6 md:text-base/6 md:w-[80%]">
                    It doesn’t matter if your goal is to get stronger, burn fat, or to just stay fit our world class coaches will guide you every step of the way.
                </p>

                <div>
                    <button className="bg-teal-500 py-2 px-6 text-black font-medium rounded-full hover:bg-teal-600 transition-colors duration-300">
                        Start your free trial
                    </button>
                </div>

                <div className="mt-16 flex md:w-[60%] gap-2 md:gap-4">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="text-left text-sm/6 md:text-base">“6 months after joining I lost 15lbs and I’m getting stronger.”</p>
                </div>
            </div>
        </div>
    )
}