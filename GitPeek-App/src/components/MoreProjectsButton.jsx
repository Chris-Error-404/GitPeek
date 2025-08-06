function MoreProjectsButton(){
    return(
        <>
         <a href="https://github.com/Chris-Error-404" className="px-4 py-2 bg-[var(--foreground)] border border-transparent text-sm font-medium flex items-center justify-center gap-1.5 lg:w-fit w-[100%] rounded-sm transition-all duration-200 hover:bg-transparent hover:border-[var(--border)] hover:text-[var(--foreground)]">
          <i className="bx bxl-github text-xl"></i>
          View more projects</a>
        </>
    );
};


export default MoreProjectsButton;