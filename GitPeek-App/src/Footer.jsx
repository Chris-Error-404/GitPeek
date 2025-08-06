function Footer(){
    return(
        <>
            <footer className="mt-2 px-4 py-4 flex flex-col-reverse lg:flex-row items-center justify-between  border-t border-t-[var(--tag)] lg:gap-0 gap-2">
                <p className="font-meduim text-[var(--foreground)] text-center text-xs">&copy; <a href="https://github.com/Chris-Error-404/GitPeek?tab=GPL-3.0-1-ov-file">Typical Developer</a>  | All Rights Reserved</p>
                <ul className="text-[var(--foreground)] flex items-center gap-2.5">
                    <li><a href="https://github.com/Chris-Error-404" target="_blank" rel="noopener" className="cursor-pointer"><i className="bx bxl-github text-3xl lg:text-xl"></i></a></li>
                    <li><a href="https://x.com/Chris_Error_404" target="_blank" rel="noopener" className="cursor-pointer"><i className="bx bxl-twitter text-3xl lg:text-xl"></i></a></li>
                    <li><a href="https://discord.gg/AJUzJ5dq" target="_blank" rel="noopener" className="cursor-pointer"><i className="bx bxl-discord text-3xl lg:text-xl"></i></a></li>
                    <li><a href="mailto:nzenwatachristopher186@gmail.com" rel="noopener" className="cursor-pointer"><i className="bx bx-envelope text-3xl lg:text-xl"></i></a></li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;