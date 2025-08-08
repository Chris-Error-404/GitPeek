function SolidButton(props){
    return(
        <>
        <button className="px-3 py-2 text-[var(--foreground)] dark:text-[var(--background)] bg-[var(--background)] dark:bg-[var(--foreground)] border border-transparent text-sm font-medium flex items-center justify-center gap-1.5 w-[80%] lg:w-fit rounded-sm transition-all duration-200 hover:bg-[var(--foreground)] dark:hover:bg-transparent  hover:border-[var(--lighter-border)] dark:hover:border-[var(--border)] hover:text-[var(--background)] dark:hover:text-[var(--foreground)] cursor-pointer"><i className='bx bx-show'></i>{props.buttonText}</button>
        </>
    );
}

export default SolidButton;