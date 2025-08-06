function SolidButton(props){
    return(
        <>
        <button className="px-3 py-2 bg-[var(--foreground)] border border-transparent text-sm font-medium flex items-center justify-center gap-1.5 lg:w-fit w-[100%] rounded-sm transition-all duration-200 hover:bg-transparent hover:border-[var(--border)] hover:text-[var(--foreground)] cursor-pointer"><i className='bx bx-show'></i>{props.buttonText}</button>
        </>
    );
}

export default SolidButton;