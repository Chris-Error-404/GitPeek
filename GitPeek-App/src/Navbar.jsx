function Navbar(){
    return(
        <>
        <nav className="bg-[var(--background)] relative top-0">
            <div className="mx-auto max-w-[1400px] px-4 py-4 flex items-center justify-between">
            <a href="../index.html" className="text-[var(--foreground)] text-xl font-extrabold"><i className="bx bxl-github"></i> GitPeek</a>

            <div>
                <div className="light flex items-center gap-6">
                    {/* theme button */}
                    <i className="bx bx-sun text-[var(--foreground)] text-xl"></i>


                    <a href="#" className="typicalDeveloper flex items-center justify-center gap-2" target="_blank" >
                        <img src="../public/img/wht_trans.png" alt="" className="w-[15px]" />
                        <span className="text-xs text-[var(--foreground)] hidden md:inline">typical developer</span>
                    </a>

                </div>
            </div>
            </div>

        </nav>
        </>
    );
};

export default Navbar;