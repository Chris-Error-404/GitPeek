import HowItWorks from "./HowItWorks.jsx";
import Peek from "./Peek.jsx";

function Container(){
    return(
        <>
        <section id="main-container" className="mt-10 lg:mt-15 px-4">
            <div className="mx-auto max-w-[1400px] flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6">
                <HowItWorks />
                <Peek />
            </div>
        </section>
        </>
    );
};

export default Container;