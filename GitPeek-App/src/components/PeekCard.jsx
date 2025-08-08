import MoreProjectsButton from "./MoreProjectsButton.jsx";
import CopyButton from "./CopyButton.jsx";


function PeekCard({ user }) {

    /* twitter link conversion */
    let xUsername = user.twitter_username;
    let link = 'https://x.com/' + xUsername ;
    

    return (
        <div className="border border-[var(--background)]/20 dark:border-[var(--foreground)]/30 rounded-xs py-4 px-4">
            {/* Card top */}
            <div className="flex flex-col lg:flex-row items-start justify-start gap-6 border-b border-[var(--lighter-tag)] dark:border-[var(--tag)] pb-5">
                <img
                    src={user.avatar_url}
                    alt={user.name || user.login}
                    className="rounded-full w-[120px] h-[120px]"
                />

                <div className="flex flex-col items-start justify-start gap-1.5 w-full">
                    <h3 className="font-semibold text-lg text-[var(--background)] dark:text-[var(--foreground)]">
                        {user.name || "No name available"}
                    </h3>
                    <h4 className="font-medium text-base text-[var(--background)] dark:text-[var(--foreground)]">
                        {user.login}
                    </h4>

                    <div className="mt-1 flex items-center justify-start gap-2 w-full">
                        <MoreProjectsButton buttonText="View profile" buttonLink={user.html_url} />
                        <CopyButton textToCopy={user.html_url} />
                    </div>
                </div>
            </div>

            {/* Card bottom */}
            <ul className="more text-[var(--darker-gary)] dark:text-[var(--dark-gray)] pt-4 text-sm flex flex-col gap-2">
                <li>followers: {user.followers}</li>
                <li>following: {user.following}</li>
                <li>public_repos: {user.public_repos}</li>
                <li>public_gists: {user.public_gists}</li>
                <li>Languages_used:{" "}{user.languages && user.languages.length > 0 ? user.languages.map(lang => lang.name).join(", ") : "No public repos with detectable languages"}
                </li>

                {user.blog && (
                 <li>
                    blog: <a href={user.blog} target="_blank" rel="noopener noreferrer" className="underline">{user.blog}</a>
                </li>
                )}
  
                {user.twitter_username && (
                <li>
                    x/twitter: <a href={link} target="_blank" rel="noopener noreferrer" className="underline">{xUsername}</a>
                </li>
                )}

                {user.company && (
                    <li>company: {user.company}</li>
                )}
            
                <li>Open to work: {user.hireable ? "Yes" : "No"}</li>

                {user.location && (
                    <li>location: {user.location}</li>
                )}
                
                <li>type: {user.type}</li>
                <li>id: {user.id}</li>
                <li>Joined: {new Date(user.created_at).toLocaleDateString()}</li>
            </ul>
        </div>
    );
}

export default PeekCard;
