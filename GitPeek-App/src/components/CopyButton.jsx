import { useState } from "react";

function CopyButton({ textToCopy }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="px-2 py-2 text-[var(--background)] dark:text-[var(--foreground)] text-sm font-medium flex items-center justify-center gap-1.5 w-fit border rounded-sm transition-all duration-200 border-[var(--lighter-tag)] dark:border-[var(--tag)] cursor-pointer"
        >
            <i className={`bx ${copied ? "bx-check" : "bx-copy"} text-xl`}></i>
        </button>
    );
}

export default CopyButton;
