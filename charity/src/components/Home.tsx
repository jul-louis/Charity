import SearchBar from "./SeachBar";
import { useState, useEffect } from "react";
import { CharityCard, CharityResponse } from "../types/Types";
import HorizentalRule from "./HorizentalRule";

function Home() {
  const jsonString = '{"nonprofit": { ... }}';
  const [data, setData] = useState<CharityResponse<Object>>();

  const fetchData = async () => {
    const response: Response = await fetch(
      "https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_300c43da57dd68b8e8ee61b264c2b731"
    );
    const data = response.json();

    setData(await data);
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="overflow-auto p-4 text-black bg-teal-50 dark:text-white dark:bg-slate-950">
      <div className=" overflow-scroll my-3 pb-4">
        <div
          className="relative filter grayscale contrast-100 mix-blend-exclusion rounded-lg bg-cover bg-no-repeat bg-fixed"
          style={{
            backgroundPositionX: "left",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1587917998402-c8ddc8d84b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80)",
          }}
        >
          <h1 className="text-8xl mix-blend-hue font-bold pt-8 px-8">
            kraken charity
          </h1>
          <div className="absolute rounded-t-lg bg-white top-0 w-full right-0 mix-blend-exclusion text-6xl p-12 text-gray-900 text-bold">
            <div className="px-6 font-bold mix-blend-darken text-center md:text-right underline">
              SEARCH
            </div>
          </div>
          <div className="absolute rounded-t-lg w-full top-0 right-0 text-6xl p-10 px-11 text-slate-300 text-extrabold">
            <div className="px-6 text-white hover:text-gray-900 font-extrabold text-center md:text-right hover:cursor-pointer">
              <a href="#search">SEARCH</a>
            </div>
          </div>

          <div className="z-50 overflow-scroll text-gray-600 mix-blend-hue hover:mix-blend-normal hover:text-gray-950 transition duration-700 ease-in-out rounded-lg p-8 py-28 text-5xl font-extrabold">
            Outstanding charities play an instrumental role in shaping a better
            world, contributing significantly to various causes and creating a
            positive impact on society as a whole. These organizations exemplify
            dedication, compassion, and innovation, channeling their resources
            towards critical issues such as poverty alleviation, education,
            healthcare, environmental preservation, and disaster relief.
          </div>
        </div>
      </div>
      <HorizentalRule />
      <div id="search" className="p-4 mb-12 rounded-lg bg-white dark:bg-black">
        <h1 className="m-4 text-2xl">Kraken Charity</h1>
        <p className="m-4 text-xl">
          In the bustling world of philanthropy, Kraken Charity stands tall as a
          beacon of hope and compassion. With a mission to bridge the gap
          between those in need and generous hearts, this innovative charity
          finder company has revolutionized the way people connect with
          meaningful causes. Armed with cutting-edge technology and a dedicated
          team of passionate souls, Kraken Charity navigates the vast ocean of
          charitable organizations to unearth hidden gems that make a tangible
          difference in the world.
        </p>

        <div className="m-4 mt-8">
          <h3 className="text-2xl mb-4">Find a Charity</h3>
          <SearchBar />
        </div>
        <HorizentalRule />
        <div>
          <h2 className="text-4xl p-4">Featured Charities</h2>
        </div>
        <div className="mb-12 rounded-lg bg-white dark:bg-black">
          <p className="m-4 text-xl">
            Outstanding charities play an instrumental role in shaping a better
            world, contributing significantly to various causes and creating a
            positive impact on society as a whole. These organizations exemplify
            dedication, compassion, and innovation, channeling their resources
            towards critical issues such as poverty alleviation, education,
            healthcare, environmental preservation, and disaster relief.
          </p>
          <div className="m-4">{JSON.stringify(data?.data)}</div>
        </div>
        <div className="m-4 mt-8 text-m">
          <hr className="w-1/2" />
          Disclaimer: All Data is Provided by Every.org
        </div>
      </div>

      <HorizentalRule />
    </div>
  );
}

export default Home;
