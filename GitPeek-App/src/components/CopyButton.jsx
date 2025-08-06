function CopyButton(){
    return(
        <>
       <button className="px-2 py-2 text-[var(--foreground)] text-sm font-medium flex items-center justify-center gap-1.5 w-fit border border-transparent rounded-sm transition-all duration-200 hover:border-[var(--tag)] cursor-pointer">
        <i className="bx bx-copy text-xl"></i>
        </button>
        </>
    );
};

export default CopyButton;