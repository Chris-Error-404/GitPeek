function MoreProjectsButton(props){
    return(
        <>
         <a href={props.buttonLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-[var(--foreground)] dark:text-[var(--background)] bg-[var(--background)] dark:bg-[var(--foreground)] border border-transparent text-sm font-medium flex items-center justify-center gap-1.5 lg:w-fit w-[100%] rounded-sm transition-all duration-200 hover:bg-transparent hover:border-[var(--lighter-border)] dark:hover:border-[var(--border)] hover:text-[var(--background)] dark:hover:text-[var(--foreground)] cursor-pointer">
          <i className="bx bxl-github text-xl"></i>
          {props.buttonText}</a>
        </>
    );
};


export default MoreProjectsButton;