import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#CFA6A61C] w-full pt-[26vh] pb-[16vh] overflow-hidden text-[#21243D]">
      <div className="h-full flex justify-center flex-col w-[90%] mx-auto">
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 items-center gap-10">
          <div className=" md:w-[38vw] w-[60vw] md:ml-32">
            <h1 className="text-4xl md:text-5xl m-auto font-[900] leading-[31px]">
              Hi i am John,
            </h1>
            <h1 className="text-4xl md:text-5xl font-[900] leading-[47px]">
              Creative Technologist
            </h1>
            <p className="mt-7 text-[16px] leading-[23px] font-[400] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              quibusdam quisquam ullam porro explicabo culpa totam tempora
              incidunt odio, illum perspiciatis maxime magni unde dolore.
            </p>
            <button className="px-6 mt-8 text-[18px] leading-6 py-3 rounded-sm shadow-md shadow-gray-400 text-white font-[500] bg-[#f98585] hover:bg-[#bb6f6f] hover:scale-105 duration-100">
              Download Resume
            </button>
          </div>
          <div className="mx-auto mt-6">
            <Image
              src="/profile-pic.png"
              alt="azeem"
              height={200}
              width={200}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
