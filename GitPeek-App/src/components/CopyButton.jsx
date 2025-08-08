import { useState } from "react";

function CopyButton({ textToCopy }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);

            // Switch back to copy icon after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="px-2 py-2 text-[var(--background)] dark:text-[var(--foreground)] text-sm font-medium flex items-center justify-center gap-1.5 w-fit border border-transparent rounded-sm transition-all duration-200chover:border-[var(--darker-tag)] dark:hover:border-[var(--tag)] cursor-pointer"
        >
            <i className={`bx ${copied ? "bx-check" : "bx-copy"} text-xl`}></i>
        </button>
    );
}

export default CopyButton;
