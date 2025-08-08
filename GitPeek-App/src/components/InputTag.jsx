function InputTag(props){
    return(
        <>
        <input type="text" className="border border-[var(--lighter-tag)] dark:border-[var(--tag)] px-2 py-2 rounded-sm text-sm placeholder:text-[var(--background)] dark:placeholder:text-[var(--foreground)] transition-all duration-200" placeholder={props.placeholderText} required />
        </>
    );
};

export default InputTag;