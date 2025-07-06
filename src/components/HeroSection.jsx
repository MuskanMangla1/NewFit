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
            className="realtive min-h-screen w-full flex items-center justify-center text-white"
        >
            <div className="absolute min-h-screen w-full top-0 left-0 bg-black/50 z-0"/>
            
            <div className="mx-3 md:w-1/2 text-center z-10">
                <h1 className="text-5xl md:text-6xl font-semibold  md:font-bold mb-4">
                    Crush your health and fitness goals in no time
                </h1>

                <p>
                    It doesn’t matter if your goal is to get stronger, burn fat, or to just stay fit our world class coaches will guide you every step of the way.
                </p>
            </div>
        </div>
    )
}