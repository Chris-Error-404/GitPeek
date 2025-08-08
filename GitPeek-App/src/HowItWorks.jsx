import BulletPointCard from "./components/BulletPointCard.jsx";

function HowItWorks(){
    return(
        <>
        <div className="border border-[var(--lighter-tag)] dark:border-[var(--tag)] rounded-xs py-4 pb-5 px-4 h-fit transition-all duration-200">

            {/* HOW IT WORKS HEADER */}
            <div className="flex justify-start items-center gap-4 lg:max-w-[80%] min-w-[78%">

                {/* icon */}
                <div>
                    <i className="bx bxs-check-circle text-[var(--foreground)] dark:text-[var(--background)] text-3xl mb-4"></i>
                </div>

                <div>
                    <h2 className="mb-4 text-[var(--background)] dark:text-[var(--foreground)] text-[min(10vw,22px)] font-semibold text-left">
                        How does it work?
                    </h2>
                </div>
            </div>


           <div className="flex flex-col gap-6">

            <BulletPointCard aosDelay="0" header="Search by Username" paragraph="Looking for a developer? Just type their GitHub username into the search bar. GitPeek instantly fetches their public profile using the GitHub API." />

            <BulletPointCard aosDelay="50" header="Real-Time Fetching" paragraph="When you hit 'Peak', GitPeek sends a live request to GitHub and retrieves public details like avatar, name, followers, following etc." />

            <BulletPointCard aosDelay="100" header="Peek the Profile" paragraph="The information is displayed in a clean, focused card, perfect for quick viewing" />

            </div>

        </div>
        </>
    );
};

export default HowItWorks;