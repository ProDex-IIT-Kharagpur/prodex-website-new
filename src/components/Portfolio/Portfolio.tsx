import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { portfolioData, portfolioYears } from "./portfolioData";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeYear = portfolioYears[activeIndex];

  const progress = (activeIndex / (portfolioYears.length - 1)) * 100;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i === 0 ? portfolioYears.length - 1 : i - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === portfolioYears.length - 1 ? 0 : i + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredData =
    activeYear === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.year === activeYear);

  return (
    <>
      {/* ================= STYLES (Former Portfolio.css) ================= */}
      <style>{`
        .portfolio {
          padding: 5rem 2rem;
          text-align: center;
          background: radial-gradient(
            circle at top,
            rgba(0, 180, 255, 0.08),
            #050b10 60%
          );
          color: #e6f6ff;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        .portfolio h2 {
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          margin-bottom: 0.8rem;
          color: #eafaff;
        }

        .portfolio h2::after {
          content: "";
          display: block;
          width: 60px;
          height: 3px;
          margin: 0.8rem auto 0;
          background: linear-gradient(90deg, #00e5ff, #1da1f2);
          border-radius: 4px;
        }

        .subtitle {
          max-width: 720px;
          margin: 1.8rem auto 3rem;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #9fb9c9;
        }

        .portfolio-grid {
          column-count: 3;
          column-gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          text-align: left;
        }

        .portfolio-card {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.01)
          );
          display: block;
          margin-bottom: 2rem;
          break-inside: avoid;
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.6),
            inset 0 0 0 1px rgba(0, 229, 255, 0.15);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .portfolio-card:hover {
          transform: translateY(2px);
          box-shadow:
            0 18px 45px rgba(0, 229, 255, 0.25),
            inset 0 0 0 1px rgba(0, 229, 255, 0.35);
        }

        .portfolio-card img {
          width: 100%;
          display: block;
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover img {
          transform: scale(1.08);
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        .timeline-line {
          height: 3px;
          background: rgba(0, 229, 255, 0.2);
          border-radius: 999px;
        }

        .timeline-progress {
          height: 100%;
          background: linear-gradient(90deg, #00e5ff, #1da1f2);
          border-radius: 999px;
          transition: width 0.5s ease;
        }

        .timeline-years {
          display: flex;
          justify-content: space-between;
          margin-top: 1.2rem;
        }

        .timeline-year {
          background: #050b10;
          border: 2px solid rgba(0, 229, 255, 0.3);
          color: #bfefff;
          padding: 0.45rem 1rem;
          border-radius: 999px;
          cursor: pointer;
        }

        .timeline-year.active {
          background: linear-gradient(135deg, #00e5ff, #1da1f2);
          color: #031018;
          border: none;
        }

        @media (max-width: 1024px) {
          .portfolio-grid { column-count: 2; }
        }

        @media (max-width: 600px) {
          .portfolio-grid { column-count: 1; }
        }
      `}</style>

      {/* ================= COMPONENT ================= */}
      <section className="portfolio" id="portfolio" tabIndex={0}>
        <h2>PORTFOLIO</h2>

        <p className="subtitle">
          When it comes to competitions and events, winning is a tradition here
          at ProDex! Since its inception in 2012, our teams have not just
          represented ProDex and IITKGP, but have also won numerous
          intra-institutional, national and international level events.
          <br />
          <br />
          (*Click on the event banner to learn more)
        </p>

        <div className="timeline">
          <div className="timeline-line">
            <div
              className="timeline-progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="timeline-years">
            {portfolioYears.map((year, index) => (
              <button
                key={year}
                className={`timeline-year ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredData.map((item) => (
            <Link key={item.id} to={item.link} className="portfolio-card">
              <img src={item.image} alt={item.title} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
