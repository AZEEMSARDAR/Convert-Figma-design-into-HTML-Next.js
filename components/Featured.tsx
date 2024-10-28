import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  return (
    <div className="bg-[#CFA6A61C] pt-14 pb-14">
      <h2 className="sm:w-[67%] w-[49%] m-auto text-lg sm:text-xl font-semibold mb-7">
        Featured works
      </h2>
      <FeaturedCard src={"/Rectangle 30.png"} />
      <FeaturedCard src={"/Rectangle 32.png"} />
      <FeaturedCard src={"/Rectanle 34.png"} />
    </div>
  );
}
