import BulletPointCard from "./components/BulletPointCard.jsx";

function HowItWorks(){
    return(
        <>
        <div className="border border-[var(--tag)] rounded-xs py-4 px-4">

            {/* HOW IT WORKS HEADER */}
            <div className="flex justify-start items-center gap-4 lg:max-w-[80%] min-w-[78%">

                {/* icon */}
                <div>
                    <i className="bx bxs-check-circle text-[var(--background)] text-3xl"></i>
                </div>

                <div>
                    <h2 className="mb-4 text-[var(--foreground)] text-[min(10vw,22px)] font-semibold text-left">
                        How does it work?
                    </h2>
                </div>
            </div>


           <div className="flex flex-col gap-6">

            <BulletPointCard aosDelay="50" header="Search by Username" paragraph="Looking for a developer? Just type their GitHub username into the search bar. GitPeek instantly fetches their public profile using the GitHub API." />

            <BulletPointCard aosDelay="50" header="Real-Time Fetching" paragraph="When you hit search, GitPeek sends a live request to GitHub and retrieves public details like avatar, name, bio, location, and repository stats." />

            <BulletPointCard aosDelay="50" header="Peek the Profile" paragraph="The information is displayed in a clean, focused card, perfect for quick viewing, inspiration, or sharing with friends and collaborators." />

            </div>

        </div>
        </>
    );
};

export default HowItWorks;