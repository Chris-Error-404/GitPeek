function ContributeButton(){
    return(
        <>
        <a href="https://github.com/Chris-Error-404/GitPeek" target="_blank" rel="noopener" className="mb-2 px-2 py-1 rounded-sm border border-transparent bg-[var(--tag)] fork text-[var(--foreground)] shadow-md text-xs flex items-center justify-center gap-2 transition-all duration-200 hover:border-[var(--foreground)]/20">
        Contribute to this repository
        <i className="bx bx-arrow-back text-[var(--foreground)] rotate-180"></i></a>
        </>
    );
};

export default ContributeButton;