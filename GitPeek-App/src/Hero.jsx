import ContributeButton from "./components/ContributeButton.jsx";
import MoreProjectsButton from "./components/MoreProjectsButton.jsx";
import ConnectOnXButton from "./components/ConnectOnXButton.jsx";

function Hero(){
    return(
        <>
        <section id="hero" className="mt-10">
            <div className="mx-auto max-w-[1400px] p-4 flex flex-col items-center justify-center">

                <div className="flex flex-col items-center justify-center">

                    <ContributeButton />

                    <h1 className="mb-2 text-[var(--foreground)] text-[min(20vw,30px)] sm:text-[28px] md:text-[32px] font-semibold text-center">
                        The Easiest Way to Peek GitHub Profiles
                    </h1>
                    <p className="mb-4 text-base lg:text-lg font-normal text-[var(--foreground)] lg:w-[60%] text-center">
                        Want to take a quick look at someone's Github porfile? GitPeek makes it simple. Enter a username and instantly preview their profile fast, clean and frustration free.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                    {/* github button */}
                    <MoreProjectsButton buttonText="View more projects" buttonLink="https://github.com/Chris-Error-404"/>
                    <ConnectOnXButton />

                    {/* twitter button */}
                    
                </div>
                </div>

            </div>
        </section>
        </>
    );
}

export default Hero;