import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-[#1D1D1D] relative">
      <div className=" mx-[10px] md:mx-auto max-w-6xl ">
        <div className="flex items-center justify-between p-[10px] lg:p-10">
          <div className=" hidden lg:flex items-center gap-[26px] justify-start">
            <Image
              src="/assets/twitter.png"
              alt="twitter"
              width={18}
              height={18}
            />
            <Image
              src="/assets/facebook.png"
              alt="facebook"
              width={18}
              height={18}
            />
            <Image
              src="/assets/medium.png"
              alt="medium"
              width={18}
              height={18}
            />
          </div>

          <div className="flex items-center gap-[5px] font-[500] text-[#EEEEEE] text-[25px] font-Maven justify-center">
            <Image
              src="/assets/miniIcon.svg"
              alt="icon"
              width={25}
              height={25}
            />
            <p>Finance</p>
          </div>

          <div className="flex items-center gap-[10px] justify-end">
            <Image
              src="/assets/align-text-left.svg"
              alt="alignleft"
              width={18}
              height={18}
            />
          </div>
        </div>

        <div className=" grid lg:flex items-center lg:justify-between mt-[20px] lg:mt-[50px]">
          <div className=" w-full  lg:max-w-[560px] space-y-[27px]">
            <p className="font-[700] text-[20px] lg:text-[48px] text-[#D2D2D2]">
              Mutual Investment
            </p>
            <p className="text-[#A9A9A9] text-[16px] lg:text-[24px] font-[400] mt-[27px]">
              At Finance we care about your future. We help you invest the way
              you want. So you can relax, have fun and let your fund grow.
            </p>
            <div className="inline  ">
              <p className="rounded-full text-center py-[5px] lg:py-[10px] max-w-[200px] font-Overpass text-[#ffffff] bg-[#27AE60] font-[600] text-[14px] lg:text-[24px] mt-[20px] lg:mt-[65px]">
                Learn More
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[500px] h-[500px]">
            <Image
              src="/assets/RevenueBro.svg"
              alt="Revenue"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex items-center gap-[10px] justify-center pb-[20px]">
          <Image
            src="/assets/arrow-down-circle.svg"
            alt="alignleft"
            width={18}
            height={18}
          />
        </div>
      </div>

      <div className=" absolute left-0 bottom-0">
        <Image
          src="/assets/Group1.svg"
          alt="footer background"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
