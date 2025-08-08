function Navbar({ onToggleDark, isDark }){
    return(
        <>
        <nav className="backdrop-blur-lg bg-[var(--forekground)]/30 dark:bg-[var(--background)]/30 sticky top-0 z-10 transition-all duration-200">
            <div className="mx-auto max-w-[1400px] px-4 py-3.5 flex items-center justify-between">
            <a href="../index.html" className="text-[var(--background)] dark:text-[var(--foreground)] text-xl font-semibold"><i className="bx bxl-github"></i> GitPeek</a>

                <div>
                    {/* theme button */}
                    <i className={`bx ${isDark ? 'bx-moon' : 'bx-sun'} text-[var(--background)] dark:text-[var(--foreground)] text-xl cursor-pointer`} onClick={onToggleDark}></i>
                </div>
            </div>

        </nav>
        </>
    );
};

export default Navbar;

