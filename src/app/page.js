export default function Page() {
  return (
    <main className="h-auto pt-[6rem] flex justify-center">
      <div className="mt-[5rem] w-3/4">
        <div>
          <h1 className="text-[2rem] font-bold text-[#305076] sm:text-[5rem]">
            Lorem ipsum <br/>
            Dolor sit amet.
          </h1>
          <p className="text-[0.9rem] mt-[20px] font-medium text-[#47688F] sm:text-[1.5rem]">
            Authentic Asian flavours,<br/>
            right to your table
          </p>
          <div className="flex justify-center">
            <button className="mt-[4rem] sm:mt-[6rem] bg-[#E1ECF9] w-[10rem] rounded-3xl p-[10px] text-[18px] text-[#305076] hover:text-[#112235] hover:font-bold ease-in-out duration-500">View Menu</button>
          </div>
        </div>
        <div>
          {/* carousal pictures */}
        </div>
      </div>
    </main>
  )
}
