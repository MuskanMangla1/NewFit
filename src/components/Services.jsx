export default function Services() {
    return (
        <div className="text-white flex flex-col items-center min-h-screen pt-20 md:pt-30">
            <h1 className="text-3xl md:text-5xl/16 font-semibold mx-5 md:font-bold md:w-1/2 text-center">
                We offer something for <span className="text-teal-500">everybody</span>
            </h1>

            <div className="grid md:grid-cols-4 gap-8 mt-10 md:mt-20 w-full px-5 md:px-20">
                <div
                    className="relative h-80 w-full rounded-3xl overflow-hidden flex items-center justify-center"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-800/50 z-0" />
                    <span className="text-3xl font-bold text-center z-10 w-[70%]">Strength Training</span>
                </div>

                <div
                    className="relative h-80 w-full rounded-3xl overflow-hidden flex items-center justify-center"
                    style={{
                        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-800/50 z-0" />
                    <span className="text-3xl font-bold text-center z-10 w-[70%]">Personal Training</span>
                </div>

                <div
                    className="relative h-80 w-full rounded-3xl overflow-hidden flex items-center justify-center"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-800/50 z-0" />
                    <span className="text-3xl font-bold text-center z-10 w-[70%]">Cardio Sessions</span>
                </div>

                <div
                    className="relative h-80 w-full rounded-3xl overflow-hidden flex items-center justify-center"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-800/50 z-0" />
                    <span className="text-3xl font-bold text-center z-10 w-[70%]">Events For All</span>
                </div>
            </div>
        </div>
    );
}
