function InputTag({ placeholderText, value, onChange }) {
    return (
        <input
            type="text"
            className="border border-[var(--lighter-tag)] dark:border-[var(--tag)] px-2 py-2 rounded-sm text-sm 
                       text-[var(--foreground)] dark:text-[var(--foreground)] 
                       placeholder:text-[var(--background)] dark:placeholder:text-[var(--foreground)] 
                       transition-all duration-200"
            placeholder={placeholderText}
            value={value}
            onChange={onChange}
            required
        />
    );
}

export default InputTag;
