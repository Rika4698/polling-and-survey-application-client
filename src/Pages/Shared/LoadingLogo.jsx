

const LoadingLogo = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 ">
            <div className="relative w-32 h-32">

                <div className="absolute inset-0 border-2 border-purple-500/10 dark:border-purple-700/10 rounded-full animate-[ping_3s_infinite_ease-out]"></div>
                <div className="absolute inset-0 border-4 border-purple-600/30 border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin"></div>

                <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                    <img src="https://i.ibb.co/qMNMJSM/survey-swift-high-resolution-logo-transparent.png" 
            alt="Survey Swift Logo" 
            className="w-20 h-16 object-contain" />

                </div>

            </div>

            <div className="flex items-center space-x-1 tracking-widest uppercase">
                {
                    ['S', 'u', 'r', 'v', 'e', 'y', 'S', 'w', 'i', 'f', 't'].map((char, index) => (
                        <span key={index} className="text-lg font-semibold text-slate-800 dark:text-slate-200 animate-pulse-stagger" style={{animationDelay:`${index * 0.15}s`}}>
                            {char}

                        </span>
                    ))
                }
            </div>
            
        </div>
    );
};

export default LoadingLogo;