import Image from 'next/image'

export default function Contact() {
    return (
        <div>
            <div className="h-[6rem]"></div>
            <div className="flex justify-center">
                <div>
                    <h1 className="mt-[2rem] text-[#305076] text-center text-[1.5rem] tracking-[1.5px]">Have a question?</h1>
                    <a href='tel:9054769999'><p className="mt-[1rem] text-[#305076] text-center underline text-[1.2rem] underline-offset-[4px]">Give us a call</p></a>
                    <a href='tel:9054769999'><p className="mt-[0.5rem] text-center text-white text-[0.8rem] tracking-[1.5px]">(905) 476-9999</p></a>
                </div>
            </div>

            <div className="mt-[2rem]">
                <div className="bg-[#305076] h-[10rem]"></div>
            </div>

            <div>
                <h1 className="mt-[1rem] text-[#305076] text-center text-[1.2rem] tracking-[1.5px]">Business Hours</h1>
                <p className='mt-[1rem] text-[#305076] text-center text-[0.8rem] tracking-[1.5px]'>
                    Mon: 11:00 AM - 9:00 PM <br/>
                    Tue: 11:00 AM - 9:00 PM <br/>
                    Wed: 11:00 AM - 9:00 PM <br/>
                    Thurs: 11:00 AM - 9:00 PM <br/>
                    Fri: 11:00 AM - 9:00 PM <br/>
                    Sat: 11:00 AM - 9:00 PM <br/>
                    Sun: 11:00 AM - 9:00 PM <br/>
                </p>
            </div>
        </div>
    )
}