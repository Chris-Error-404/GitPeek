function Hero(){
    return(
        <>
        <section id="hero">
            <div className="mx-auto max-w-[1400px] p-4 flex flex-col items-center justify-center">

                <div className="flex flex-col items-center justify-center">
                    <a href="https://github.com/Chris-Error-404/GitPeek" target="_blank" rel="noopener" className="mb-2 px-2 py-1 rounded-sm bg-[var(--tag)] fork text-[var(--foreground)] text-xs flex items-center justify-center gap-2">
                        Contribute to this repository
                        <i className="bx bx-arrow-back text-[var(--foreground)] rotate-180"></i>
                    </a>
                    <h1 className="mb-2 text-[var(--foreground)] text-[min(14vw,36px)] font-bold text-center">
                        The Easiest Way to Peek GitHub Profiles
                    </h1>
                    <p className="text-lg font-normal text-[var(--foreground)] lg:w-[60%] text-center">
                        Tired of guessing your friends’ GitHub usernames? GitPeek makes it simple. Enter a username and instantly preview their profile fast, clean and frustration free.
                    </p>
                </div>

            </div>
        </section>
        </>
    );
}

export default Hero;