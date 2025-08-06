import SolidButton from "./components/SolidButton.jsx";
import PeekCard from "./components/PeekCard.jsx";
import InputTag from "./components/InputTag.jsx";

function Peek(){
    return(
        <>
            <div data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-cubic" className="border border-[var(--tag)] rounded-xs py-4 px-4">

                {/* TAKE A PEEK*/}
                <div className="flex justify-start items-center lg:max-w-[80%] min-w-[78%]">

                    <div>
                        <h2 className="mb-4 text-[var(--foreground)] text-[min(10vw,22px)] font-semibold text-left">
                            Take a peek
                        </h2>
                    </div>

                </div>

                <div className="flex flex-col gap-6">

                    {/* Input username*/}
                    <div data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-delay="50" className="flex justify-start items-center gap-4 lg:max-w-[80%] min-w-[78%]">

 
                        <div className="">
                            <h2 className="mb-4 text-base font-medium text-[var(--foreground)] flex items-start justify-start gap-1.5"> Please enter a username</h2>

                            <form action="" className="flex items-center justify-start gap-2 pr-4">
                                <InputTag placeholderText="github-username" />
                                <SolidButton buttonText="Peek" />
                            </form>    
                        </div>
                    </div> 

                    {/* peek result */}
                    <div>
                        {/* <PeekCard /> */}
                    </div>
                </div>

            </div>

        </>
    );
};

export default Peek;