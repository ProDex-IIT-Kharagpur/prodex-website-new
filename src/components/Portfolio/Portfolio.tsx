import { useState, useEffect } from "react";
import { portfolioData, portfolioYears } from "./portfolioData";
import { MdHorizontalRule } from "react-icons/md";

//border
const Portfolio = () => {
  const getYearFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("year") || "All";
  };

  const yearFromUrl = getYearFromUrl();
  const initialIndex = portfolioYears.indexOf(yearFromUrl);

  const [activeIndex, setActiveIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );

  useEffect(() => {
    const index = portfolioYears.indexOf(yearFromUrl);
    if (index !== -1 && index !== activeIndex) {
      setActiveIndex(index);
    }
  }, [yearFromUrl, activeIndex]);

  const activeYear = portfolioYears[activeIndex];
  const progress = (activeIndex / (portfolioYears.length - 1)) * 100;
  const [sparkKey, setSparkKey] = useState(0);

  useEffect(() => setSparkKey((k) => k + 1), [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;

      setActiveIndex((i) => {
        const next =
          e.key === "ArrowLeft"
            ? i === 0
              ? portfolioYears.length - 1
              : i - 1
            : i === portfolioYears.length - 1
            ? 0
            : i + 1;

        const params = new URLSearchParams();
        if (portfolioYears[next] !== "All")
          params.set("year", portfolioYears[next]);

        window.history.pushState({}, "", `/?${params}#portfolio`);
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredData =
    activeYear === "All"
      ? portfolioData
      : portfolioData.filter((i) => i.year === activeYear);

  return (
    <section
      id="portfolio"
      tabIndex={0}
      className="px-8 py-20 text-center text-cyan-50 bg-black focus:outline-none"
    >

      {/* ================== TITLE ================== */}
      <h2 className="text-[2.25rem] font-bold text-white mb-0 tracking-wide">
        PORTFOLIO
      </h2>

      <div className="grid grid-cols-1 place-items-center w-full mt-0 mb-8">
        <hr className="w-36 col-start-1 row-start-1 border-gray-800" />
        <MdHorizontalRule
          color="#00f0ff"
          size="60px"
          className="col-start-1 row-start-1"
        />
      </div>


      <p className="max-w-[720px] mx-auto mt-7 mb-12 text-[1.05rem] leading-[1.7] text-[#9fb9c9]">
        When it comes to competitions and events, winning is a tradition here at
        ProDex! Since its inception in 2012, our teams have not just represented
        ProDex and IITKGP, but have also won numerous intra-institutional,
        national and international level events.
        <br />
        <br />
        (*Click on the event banner to learn more)
      </p>

      {/* ================== TIMELINE ================== */}
      <div className="relative max-w-[900px] mx-auto mb-16">
        <div className="relative h-[4px] rounded-full bg-cyan-400/20">
          <div
            className="absolute inset-0 h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(0,229,255,0.9),0_0_28px_rgba(0,229,255,0.6)] transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          >
            <span
              key={sparkKey}
              className="absolute right-[-10px] top-1/2 w-4 h-4 rounded-full -translate-y-1/2 bg-[radial-gradient(circle,#ffffff_0%,#7ff6ff_30%,#00e5ff_55%,rgba(0,229,255,0.35)_100%)] shadow-[0_0_12px_#fff,0_0_28px_rgba(0,229,255,0.9),0_0_55px_rgba(0,229,255,0.7),0_0_85px_rgba(0,229,255,0.4)] animate-[spark-burn_0.9s_infinite_ease-in-out]"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4.5">
          {portfolioYears.map((year, index) => (
            <button
              key={year}
              onClick={() => {
                setActiveIndex(index);
                const params = new URLSearchParams();
                if (year !== "All") params.set("year", year);
                window.history.pushState({}, "", `/?${params}#portfolio`);
              }}
              className={`relative px-4 py-2 rounded-full text-sm cursor-pointer ${
                index === activeIndex
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#031018] font-medium border-none"
                  : "bg-[#050b10] border-2 border-cyan-400/30 text-cyan-100"
              }`}
            >
              {year}
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-[2px] h-5 bg-gradient-to-b from-cyan-400/60 to-cyan-400/20" />
            </button>
          ))}
        </div>
      </div>

      {/* ================== GRID ================== */}
      <div className="max-w-[1200px] mx-auto text-left columns-1 sm:columns-2 lg:columns-3 gap-8">
        {filteredData.map((item) => (
          <a
            key={item.id}
          ring-1ef={
              activeYear === "All"
                ? item.link
                : `${item.link}?fromYear=${activeYear}`
            }
            className="block mb-8 break-inside-avoid rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] shadow-[0_10px_30px_rgba(0,0,0,0.6)] ring-1 ring-cyan-400/15 transition hover:translate-y-[2px] hover:shadow-[0_18px_45px_rgba(0,229,255,0.25)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full transition-transform duration-500 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
