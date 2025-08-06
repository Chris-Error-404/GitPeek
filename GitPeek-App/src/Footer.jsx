function Footer(){
    return(
        <>
            <footer className="mt-2 px-4 py-4 flex items-center justify-between  border-t border-t-[var(--tag)]">
                <p className="font-meduim text-[var(--foreground)] text-center text-xs">&copy; <a href="#">Typical Developer</a>  | All Rights Reserved</p>
                <ul className="text-[var(--foreground)] flex items-center gap-2.5">
                    <li><a href="" className="cursor-pointer"><i className="bx bxl-github text-xl"></i></a></li>
                    <li><a href="" className="cursor-pointer"><i className="bx bxl-twitter text-xl"></i></a></li>
                    <li><a href="" className="cursor-pointer"><i className="bx bxl-discord text-xl"></i></a></li>
                    <li><a href="" className="cursor-pointer"><i className="bx bx-envelope text-xl"></i></a></li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;