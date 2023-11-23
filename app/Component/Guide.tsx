import Image from "next/image"
export default function Guide() {
    return (
        <section className=" padding-container max-container w-full pb-24">

            <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            />
            <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">we are here for you</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 ">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guise you to easy path</h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum facilis error blanditiis nihil aspernatur nulla et, corrupti, a asperiores commodi ullam officia ratione provident natus iste reiciendis sint ex.</p>
        </div>
            <div className="flexCenter max-container relative w-full 
            ">
                <Image
                src="/boat.png"
                alt="boat"
                width={1440}
                height={550}
                className="w-full object-cover object-center 2xl:rounded-5xl"
                />
                <div className="absolute flex bg-white py-8 pl-5 
                 pr-7 rounded-3xl border shadow-md md:left[5%] lg:top-20">
                    <Image 
                    src="/meter.svg"
                    alt="meter"
                    width={16}
                    height={158}
                    className="h-full w-auto "
                    ></Image>
                    <div className="flexBetween flex-col ">
                        <div className="flex w-full flex-col ">
                            <div className="flexBetween w-full ">
                                <p className="regular-16 text-gray-20">Destination </p>
                                <p className="bold-16 text-green-50 px-5">48min</p>
                            </div>
                            <p className="bold-20 mt-2">Indian himilya</p>
                        </div>

                        <div className="flex w-full flex-col ">
                                <p className="regular-16 text-gray-20">start track </p>
                            <h4 className="bold-20 mt-2 whitespace-nowrap ">mt everst</h4>
                        </div>
                    </div>

                </div>
             </div>
        </section>
    )
  }
  