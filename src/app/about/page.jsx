import Link from 'next/link'

export default function About() {
    return (
        <div className="md:flex md:h-screen md:items-center">
            <div className='h-[6rem]'></div>

            <div className="md:flex md:m-[5rem] md:gap-[2rem] md:items-center">
            {/* Placeholder for image */}
                <div className='bg-[#83A1C5] h-[35vh] md:h-[50vh] md:grow'></div>

                <div className="md:w-[10%] md:grow">
                    <h1 className='ml-[3rem] mt-[2rem] text-[2rem] font-bold text-[#305076]'>ABOUT US</h1>
                    <p className='ml-[3rem] mt-[2rem] mr-[3rem] text-justify text-[1rem] text-[#305076]'>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                        Ac felis donec et odio pellentesque 
                        diam volutpat. Id porta nibh venenatis 
                        cras sed felis eget velit.</p>
                    <div className='flex justify-center'>
                        <Link href="/menu">
                            <button className="mt-[3rem] bg-[#E1ECF9] w-[11rem] md:mb-[2rem] 
                                            lg:w-[15rem] lg:h-[3.5rem] lg:text-[24px] rounded-full 
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
    )
}