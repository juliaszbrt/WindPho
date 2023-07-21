// rafce
import Carousel from "./carousel"
import CarouselPlaceholder from "./carouselPlaceholder"
import Link from 'next/link';

const home = () => {
    return (
        <main>
            <div className="pt-[6rem] flex justify-center md:h-screen">
                <div className="md:flex md:items-center">
                    <div>
                        <div className="flex md:gap-[5rem]">
                            <div>
                                <h1 className="mt-[5rem] text-[2.5rem] font-bold text-[#305076] sm:text-[5rem] md:mt-[0rem]">
                                    Lorem ipsum <br />
                                    Dolor sit amet.
                                </h1>
                                <p className="text-[1.2rem] mt-[20px] font-medium text-[#47688F] sm:text-[1.5rem]">
                                    Authentic Asian flavours,<br />
                                    right to your table
                                </p>
                            </div>
                            {/* big screen carousel placeholder */}
                            <div className="invisible md:visible bg-[#83A1C5] md:h-[25rem] md:w-[25rem]"></div>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/menu">
                                <button className="mt-[4rem] sm:mt-[5rem] bg-[#E1ECF9] w-[11rem] 
                                                lg:w-[15rem] lg:h-[3.5rem] lg:text-[24px] rounded-3xl 
                                                p-[10px] tracking-[2px] text-[18px] text-[#305076] 
                                                hover:text-[#112235] hover:font-bold ease-in-out duration-500"
                                        type="button">
                                                        View Menu
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    {/* <Carousel /> */}
                    <CarouselPlaceholder />
            </div>
        </main>
    )
}

export default home