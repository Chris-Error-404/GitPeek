import { useState } from "react";
import SolidButton from "./components/SolidButton.jsx";
import PeekCard from "./components/PeekCard.jsx";
import UserNotFound from "./components/UserNotFound.jsx";
import InputTag from "./components/InputTag.jsx";

function Peek() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchGitHubUser = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            if (res.status === 404) {
                setError(true);
                setLoading(false);
                return;
            }
            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            setUserData(data);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border border-[var(--lighter-tag)] dark:border-[var(--tag)] rounded-sm py-4 px-4 transition-all duration-200">
            {/* TAKE A PEEK */}
            <div className="flex justify-start items-center lg:max-w-[80%] min-w-[78%]">
                <div>
                    <h2 className="mb-4 text-[var(--background)] dark:text-[var(--foreground)] text-[min(10vw,22px)] font-semibold text-left">
                        Take a peek
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {/* Input username */}
                <div className="flex justify-start items-center gap-4 lg:max-w-[80%] min-w-[78%]">
                    <div>
                        <h2 className="mb-4 text-base font-medium text-[var(--background)] dark:text-[var(--foreground)]">
                            Please enter a username
                        </h2>

                        <form onSubmit={fetchGitHubUser} className="flex items-center justify-start gap-2 pr-4">
                            <InputTag
                                placeholderText="github-username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <SolidButton buttonText={loading ? "Loading..." : "Peek"} />
                        </form>
                    </div>
                </div>

                {/* peek result */}
                <div>
                    {error && <UserNotFound />}
                    {userData && <PeekCard user={userData} />}
                </div>
            </div>
        </div>
    );
}

export default Peek;
