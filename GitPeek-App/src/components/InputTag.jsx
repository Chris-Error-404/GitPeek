function InputTag(props){
    return(
        <>
        <input type="text" className="border border-[var(--tag)] px-2 py-2 rounded-sm text-sm" placeholder={props.placeholderText} required />
        </>
    );
};

export default InputTag;