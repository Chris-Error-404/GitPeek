function UserNotFound(){
    return(
        <>

            <div className="border border-[var(--background)]/20 dark:border-[var(--foreground)]/30 rounded-xs py-4 px-4">
                <h2 className="mb-2 text-lg font-medium text-[var(--backgournd)] dark:text-[var(--foreground)] flex items-center justify-start gap-1.5"><i className="bx bx-error text-[var(--backgournd)] dark:text-[var(--foreground)] text-xl"></i> GitHub user not found</h2>
                <p className="text-[var(--darker-gray)] dark:text-[var(--dark-gray)] text-sm"> This might be because the user has a private account.</p>
        </div>
        </>
    );
}

export default UserNotFound;