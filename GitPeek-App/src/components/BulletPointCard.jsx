function BulletPointCard(props){
    return(
        <>
            <div data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-delay={props.aosDelay} data-aos-duration="200" className="flex justify-start items-center gap-4 lg:max-w-[80%] min-w-[78%] bg-[var(--foreground)] dark:bg-[var(--background)]">

                {/* icon */}
                <div>
                    <i className="bx bxs-check-circle text-[var(--background)] dark:text-[var(--foreground)] text-[min(14vw,30px)]"></i>
                </div>

                <div className="">
                    <h2 className="mb-1 text-base font-medium text-[var(--background)] dark:text-[var(--foreground)] flex items-start justify-start gap-1.5">{props.header}</h2>
                    <p className="text-[var(--darker-gray)] dark:text-[var(--dark-gray)] text-sm">{props.paragraph}</p>
                </div>
            </div> 
        </>
    );
};

export default BulletPointCard;