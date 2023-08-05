import SearchBar from "./SeachBar";
import { useState, useEffect } from "react";
import { NonprofitTag } from "../types/Types";
import HorizentalRule from "./HorizentalRule";

function Home() {
  const [npTags, setNpTags] = useState<NonprofitTag[]>();

  const fetchData = async () => {
    try {
      const response: Response = await fetch(
        "https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_300c43da57dd68b8e8ee61b264c2b731"
      );
      const data = await response.json();

      await setNpTags(data?.data?.nonprofitTags || []);
    } catch (error) {
      // Handle errors if any
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    // console.log(data);
    console.log(npTags);
  }, []);

  return (
    <div className="overflow-auto px-8 text-black bg-slate-50 dark:text-white dark:bg-slate-950">
      <div className="mt-8 h-max">
        <div
          className="z-auto filter contrast-150 invert mix-blend-exclusion rounded-lg bg-cover bg-no-repeat bg-fixed"
          style={{
            backgroundPositionX: "left",
            backgroundPositionY: "top",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1554487639-f56df135487e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2794&q=80)",

            // "url(https://images.unsplash.com/photo-1587917998402-c8ddc8d84b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80)",
          }}
        >
          <h1 className="text-5xl md:text-8xl mix-blend-exclusion text-white font-extrabold pt-8 px-8">
            kraken/charity
          </h1>
          {/* <div className="absolute rounded-t-lg bg-white top-0 w-full left-0 mix-blend-exclusion text-6xl p-12 text-gray-900 text-bold">
            <div className="px-6 font-bold mix-blend-darken text-center md:text-right underline">
              -
            </div>
          </div> */}

          <div className="text-gray-950 rounded-lg p-8 md:pt-16 text-5xl font-extrabold">
            <div className="mb-8 text-blue-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
              <span className="px-2 text-cyan-500 hover:text-blue-700 font-extrabold hover:cursor-pointer">
                <a href="#search-tool">Find a charity now.</a>
              </span>
            </div>
            <div className="text-5xl md:text-8xl mix-blend-exclusion text-white ">
              These organizations exemplify dedication, compassion, and
              innovation, channeling their resources towards critical issues
              such as poverty alleviation, education, healthcare, environmental
              preservation, and disaster relief.
            </div>
            <HorizentalRule />
            <div
              className="relative mb-12 grayscale z-auto dark:invert rounded-lg bg-cover bg-no-repeat bg-fixed"
              style={{
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)",
                // "url(https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
              }}
            >
              <div className="relative p-8 z-auto top-0 mix-blend-normal text-white">
                <div>
                  <h2 className="text-6xl font-black mix-blend-exclusion">
                    Featured Charities
                  </h2>
                </div>
                <div className="mb-12 rounded-lg mix-blend-exclusion">
                  <p className="my-8 text-2xl font-medium">
                    Outstanding charities play an instrumental role in shaping a
                    better world, contributing significantly to various causes
                    and creating a positive impact on society as a whole. These
                    organizations exemplify dedication, compassion, and
                    innovation, channeling their resources towards critical
                    issues such as poverty alleviation, education, healthcare,
                    environmental preservation, and disaster relief.
                  </p>
                  <div className="my-4 text-6xl grid md:grid-cols-2">
                    {npTags ? (
                      npTags.map((npTag) => {
                        return <div key={npTag.id}>{npTag.tagName}</div>;
                      })
                    ) : (
                      <>?</>
                    )}
                  </div>
                </div>
                <div className="my-4 mt-8 text-xl font-light mix-blend-exclusion">
                  Disclaimer: All data is provided by every.org
                </div>
              </div>
            </div>
            <div className="mb-4 mix-blend-exclusion  text-white">
              Outstanding charities play an instrumental role in shaping a
              better world, contributing significantly to various causes and
              creating a positive impact on society as a whole.
            </div>
          </div>
        </div>
      </div>
      <div id="search-tool" className="my-12"></div>
      <div className="p-4 mb-12 rounded-lg bg-white dark:bg-slate-900">
        <h1 className="m-4 font-extrabold text-4xl">Kraken/Charity Finder</h1>
        <p className="m-4 text-2xl font-medium">
          In the bustling world of philanthropy, Kraken Charity stands tall as a
          beacon of hope and compassion. With a mission to bridge the gap
          between those in need and generous hearts, this innovative charity
          finder company has revolutionized the way people connect with
          meaningful causes. Armed with cutting-edge technology and a dedicated
          team of passionate souls, Kraken Charity navigates the vast ocean of
          charitable organizations to unearth hidden gems that make a tangible
          difference in the world.
        </p>
        <HorizentalRule />

        <div className="m-4 mt-8">
          <h3 className="text-4xl font-extrabold mb-4">Charity Search</h3>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
