function Navbar(){
    return(
        <>
        <nav className="bg-[var(--background)] relative top-0">
            <div className="mx-auto max-w-[1400px] px-4 py-4 flex items-center justify-between">
            <a href="../index.html" className="text-[var(--foreground)] text-xl font-extrabold"><i className="bx bxl-github"></i> GitPeek</a>

                <div>
                    {/* theme button */}
                    <i className="bx bx-sun text-[var(--foreground)] text-xl"></i>
                </div>
            </div>

        </nav>
        </>
    );
};

export default Navbar;