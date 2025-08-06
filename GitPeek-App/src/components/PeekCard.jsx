import MoreProjectsButton from "./MoreProjectsButton.jsx";
import CopyButton from "./CopyButton.jsx";

const user = {
    avatar: 'https://avatars.githubusercontent.com/u/185910033?v=4',
    name: ' Nzenwata Christopher',
    username: 'Chris-Error-404',
    type: 'User',
    id: '185910033',
    html_url: 'https://github.com/Chris-Error-404',
    created_at: '2024-10-22',
    followers: '13',
    following: '17',
    company: 'TechHubSquare',
    public_repos: '30',
    public_gist: '1',
    location: 'Port Harcourt, Rivers State',
    blog: 'https://nzenwata-christopher.vercel.app/'
}


function PeekCard(){
    return(
        <>
        <div className="border border-[var(--foreground)]/30 rounded-xs py-4 px-4">
        
            {/* Card top | main */}
            <div className="flex flex-col lg:flex-row items-start justify-start gap-6 border-b border-[var(--tag)] pb-5">

                <img src={user.avatar} alt="" className="rounded-full w-[120px] h-[120px]" />

                <div className="flex flex-col items-start justify-start gap-1.5 w-full">
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                        {user.name}
                    </h3>
                    <h4 className="font-medium text-base text-[var(--foreground)]">
                        {user.username}
                    </h4>
                    
                    <div className="mt-1 flex items-center justify-start gap-2 w-full">
                        <MoreProjectsButton buttonText="View profile" buttonLink={user.html_url} />
                        <CopyButton />
                    </div>
                </div>
            </div>

            {/* Card bottom | Extra */}
            <ul className="more text-[var(--dark-gray)] pt-4 text-sm flex flex-col gap-1.5">
                <li>followers: {user.followers}</li>
                <li>following: {user.following}</li>
                <li>public_repos: {user.public_repos}</li>
                <li>public_gist: {user.public_gist}</li>
                <li>blog: <a href={user.blog} className="underline">{user.blog}</a></li>
                <li>company: {user.company}</li>
                <li>location: {user.location}</li>
                <li>type: {user.type}</li>
                <li>id: {user.id}</li>
                <li>created_at: {user.created_at}</li>
            </ul>
        </div>
        </>
    );
};

export default PeekCard;