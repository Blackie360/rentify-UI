import { statistics } from "../constants";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section className="-mt-8 sm:mt-0 px-8 sm:px-16 grid-cols-1 grid sm:grid-cols-2 items-center gap-4">
      <div className="space-y-3 sm:space-y-6">
        <p className="text-xl font-montserrat text-coral-red">Rentlify</p>
        <h1 className="font-palanquin text-[2rem] font-bold text-gray-800 sm:text-4xl lg:text-[4rem] lg:leading-tight">
          <span className="">The New collection</span>
          <br />
          <span className="text-coral-red inline-block">
            Rentlify
          </span>{" "}
          Homes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 sm:max-w-sm">
          Discover new rental homes across the country .
        </p>

        <Button label="Rent Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-5 sm:gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative ml-4">
        <img src="/banner.jpg" className="" alt="Image Description" />
        <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
        <div className="absolute bottom-0 left-0">
          <svg
            className="w-2/3 ml-auto h-auto text-white dark:text-slate-900"
            width="630"
            height="451"
            viewBox="0 0 630 451"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="531" y="352" width="99" height="99" fill="currentColor" />
            <rect x="140" y="352" width="106" height="99" fill="currentColor" />
            <rect x="482" y="402" width="64" height="49" fill="currentColor" />
            <rect x="433" y="402" width="63" height="49" fill="currentColor" />
            <rect x="384" y="352" width="49" height="50" fill="currentColor" />
            <rect x="531" y="328" width="50" height="50" fill="currentColor" />
            <rect x="99" y="303" width="49" height="58" fill="currentColor" />
            <rect x="99" y="352" width="49" height="50" fill="currentColor" />
            <rect x="99" y="392" width="49" height="59" fill="currentColor" />
            <rect x="44" y="402" width="66" height="49" fill="currentColor" />
            <rect x="234" y="402" width="62" height="49" fill="currentColor" />
            <rect x="334" y="303" width="50" height="49" fill="currentColor" />
            <rect x="581" width="49" height="49" fill="currentColor" />
            <rect x="581" width="49" height="64" fill="currentColor" />
            <rect x="482" y="123" width="49" height="49" fill="currentColor" />
            <rect x="507" y="124" width="49" height="24" fill="currentColor" />
            <rect x="531" y="49" width="99" height="99" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
