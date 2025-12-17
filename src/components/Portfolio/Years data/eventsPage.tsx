import { useParams, Link, useSearchParams } from "react-router-dom";
import { eventsData } from "./eventsData";
import logo from "../../../assets/prodex.png";

export default function EventPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams(); // use search params link

  const fromYear = searchParams.get("fromYear") || "All"; // restore year

  const event = eventsData.find((e) => e.slug === slug);

  const fallbackImage = logo;

  if (!event) {
    return <h2 style={{ padding: "4rem" }}>Event not found</h2>;
  }

  return (
    <>
      {/* ================== STYLES (unchanged) ================== */}
      <style>{`
        #main {
          min-height: 100vh;
          background: radial-gradient(
            circle at top,
            rgba(0, 180, 255, 0.08),
            #050b10 60%
          );
          color: #eafaff;
        }

        .video-responsive {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          box-shadow:
            0 15px 40px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(0, 229, 255, 0.25);
        }

        .event-header {
          position: sticky;
          top: 0;
          z-index: 3000;
          background: linear-gradient(
            180deg,
            rgba(5, 11, 16, 0.95),
            rgba(5, 11, 16, 0.85)
          );
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0, 229, 255, 0.15);
        }

        .event-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.9rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .event-logo img {
          height: 36px;
          filter: drop-shadow(0 0 10px rgba(0, 229, 255, 0.6));
        }

        .event-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          color: #9fb9c9;
        }

        .event-breadcrumbs a {
          color: #00e5ff;
          text-decoration: none;
        }

        .event-breadcrumbs a:hover {
          color: #7ff6ff;
        }

        .breadcrumb-current {
          color: #bfefff;
        }

        .breadcrumb-dropdown {
          position: relative;
        }

        .breadcrumb-trigger {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }

        .breadcrumb-menu {
          position: absolute;
          top: 130%;
          right: 0;
          min-width: 260px;
          background: linear-gradient(
            145deg,
            rgba(5, 11, 16, 0.96),
            rgba(5, 11, 16, 0.88)
          );
          border-radius: 12px;
          padding: 0.5rem 0;
          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.8),
            inset 0 0 0 1px rgba(0, 229, 255, 0.2);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.25s ease;
          z-index: 2000;
        }

        .breadcrumb-dropdown:hover .breadcrumb-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .breadcrumb-menu li a {
          display: block;
          padding: 0.5rem 1.1rem;
          color: #bfefff;
          font-size: 0.88rem;
        }

        .breadcrumb-menu li a:hover {
          background: rgba(0, 229, 255, 0.15);
        }

        .event-title {
          padding: 2rem 2rem 2rem;
          background: radial-gradient(
            circle at left,
            rgba(0, 229, 255, 0.12),
            transparent 55%
          );
          border-bottom: 1px solid rgba(0, 229, 255, 0.12);
        }

        .event-title h1 {
          max-width: 1200px;
          margin: 0 auto;
          font-size: 2.2rem;
          font-weight: 700;
          color: #eafaff;
        }

        .portfolio-details {
          padding: 4rem 2rem;
        }

        .portfolio-details-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
        }

        .portfolio-details-carousel img {
          width: 100%;
          border-radius: 16px;
          box-shadow:
            0 15px 40px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(0, 229, 255, 0.25);
        }

        .portfolio-info {
          padding: 2rem;
          border-radius: 16px;
          max-height: 200px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.01)
          );
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.6),
            inset 0 0 0 1px rgba(0, 229, 255, 0.2);
        }

        .portfolio-description {
          grid-column: 1 / -1;
          margin-top: 1rem;
          // padding-top: 3rem;
          // border-top: 1px solid rgba(0, 229, 255, 0.12);
        }
        /* Subtitle */
        .portfolio-description h2 {
          font-size: 1.7rem;
          font-weight: 600;
          color: #bfefff;
          margin-bottom: 1.4rem;
          position: relative;
          letter-spacing: 0.4px;
        }

        /* underline like TEAM divider */
        .portfolio-description h2::after {
          content: "";
          display: block;
          width: 64px;
          height: 3px;
          margin-top: 0.6rem;
          background: linear-gradient(90deg, #00e5ff, #1da1f2);
          border-radius: 999px;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.6);
        }

        /* Description text */
        .portfolio-description p {
          font-size: 1.02rem;
          line-height: 1.75;
          color: #cfefff;
          max-width: 900px;
          margin-bottom: 1.2rem;
          opacity: 0.95;
        }

        /* Slight emphasis for first paragraph */
        .portfolio-description p:first-of-type {
          font-size: 1.05rem;
          color: #eafaff;
        }

        @media (max-width: 900px) {
          .portfolio-details-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ================== HEADER ================== */}
      <header className="event-header">
        <div className="event-header-inner">
          <div className="event-logo">
            <Link to="/">
              <img src={logo} alt="ProDex Logo" />
            </Link>
          </div>

          <nav className="event-breadcrumbs">
            <Link to="/">Home</Link>
            <span>›</span>

            {/* Go back to same year */}
            <Link
              to={`/${fromYear !== "All" ? `?year=${fromYear}` : ""}#portfolio`}
            >
              Portfolio
            </Link>

            <span>›</span>
            <span className="breadcrumb-current">{event.year}</span>
          </nav>
        </div>
      </header>

      {/* ================== TITLE ================== */}
      <section className="event-title">
        <h1>Portfolio Details: {event.title}</h1>
      </section>

      {/* ================== CONTENT ================== */}
      <main id="main">
        <section className="portfolio-details">
          <div className="portfolio-details-container">
            <div className="portfolio-details-carousel">
              {event.video ? (
                <iframe
                  className="video-responsive"
                  src={event.video}
                  title={event.title}
                  frameBorder="0"
                  allowFullScreen
                />
              ) : (
                <img src={event.image || fallbackImage} alt={event.title} />
              )}
            </div>

            <div className="portfolio-info">
              <h3>Event Information</h3>
              <ul>
                <li>
                  <strong>Event Name:</strong> {event.title}
                </li>
                {event.venue && (
                  <li>
                    <strong>Venue:</strong> {event.venue}
                  </li>
                )}
                {event.date && (
                  <li>
                    <strong>Date:</strong> {event.date}
                  </li>
                )}
                {event.url && (
                  <li>
                    <strong>URL:</strong>{" "}
                    <a href={event.url} target="_blank" rel="noreferrer">
                      Click to Visit
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="portfolio-description">
              <h2>{event.subtitle}</h2>
              {event.description
                .trim()
                .split("\n\n")
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
