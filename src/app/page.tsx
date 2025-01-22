import Twitter from "@/assets/twitter.png";
import Facebook from "@/assets/facebook.png";
import Medium from "@/assets/medium.png";
import Illustration from "@/assets/Revenue-bro 1.svg";
export default function Home() {
  return (
    <div className="text-4xl h-screen bg-[#1D1D1D]">
      <div className=" flex items-center justify-between p-10">
        <div className=" flex items-center gap-[26px]">
          <Image src={Twitter} alt="twitter" />
          <Image src={Facebook} alt="facebook" />
          <Image src={Medium} alt="medium" />
        </div>
        <div className=" flex items-center gap-[5px] font-[500] text-[#EEEEEE] text-[25px]">
          <Image src={Medium} alt="medium" />
          <p>Finance</p>
        </div>
        <div className=" flex items-center gap-[10px]">
          <Image src={Medium} alt="medium" />
        </div>
      </div>

      <div className="">
        <div className=" max-w-[560px]">
          <p className=" font-[700] text-[48px] text-[#D2D2D2]">
            Mutual Investment
          </p>
          <p className="text-[#A9A9A9] text-[24px] font-[400] mt-[27px]">
            At Finance we care about your future. We help you invest the way you
            want. So you can relax, have fun and let your fund grow.
          </p>
          <div className=" inline pb-[10px] border-b-2 border-[#27AE60] fontoverpass text-[#27AE60] text-[20px] mt-[40px]">
            <p className=" py-[10px] max-w-[200px]">Learn More</p>
          </div>
        </div>
        <Image src={Medium} alt="medium" />
      </div>
    </div>
  );
}
