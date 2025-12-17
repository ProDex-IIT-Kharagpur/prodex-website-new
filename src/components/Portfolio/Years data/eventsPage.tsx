import { useParams, Link, useSearchParams } from "react-router-dom";
import { eventsData } from "./eventsData";
import logo from "../../../assets/prodex.png";

export default function EventPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  const fromYear = searchParams.get("fromYear") || "All";
  const event = eventsData.find((e) => e.slug === slug);
  const fallbackImage = logo;

  // Group events by year for dropdown
  const eventsByYear = eventsData.reduce((acc, e) => {
    acc[e.year] = acc[e.year] || [];
    acc[e.year].push(e);
    return acc;
  }, {});

  if (!event) {
    return <h2 className="p-16 text-cyan-100">Event not found</h2>;
  }

  return (
    <>
      {/* ================== HEADER ================== */}
      <header className="sticky top-0 z-[3000] backdrop-blur-xl bg-gradient-to-b from-[#050b10]/95 to-[#050b10]/85 border-b border-cyan-400/15">
        <div className="max-w-[1200px] mx-auto px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="ProDex Logo"
              className="h-9 drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2 text-sm text-cyan-200/70">
            <Link to="/" className="text-cyan-400 hover:text-cyan-200">
              Home
            </Link>

            <span>›</span>

            {/* ================== PORTFOLIO DROPDOWN ================== */}
            <div className="relative group">
              <span className="cursor-pointer text-cyan-400 hover:text-cyan-200">
                Portfolio
              </span>

              {/* Dropdown */}
              <div
                className="
                  absolute right-0 top-full mt-2
                  min-w-[280px]
                  rounded-xl
                  bg-gradient-to-br from-[#050b10]/95 to-[#050b10]/90
                  backdrop-blur-xl
                  shadow-[0_18px_45px_rgba(0,0,0,0.8)]
                  ring-1 ring-cyan-400/20
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                  z-[5000]
                "
              >
                <ul className="py-2 max-h-[360px] overflow-y-auto">
                  {Object.entries(eventsByYear).map(([year, events]) => (
                    <li key={year}>
                      <div className="px-4 py-1 text-xs uppercase tracking-wide text-cyan-300/60">
                        {year}
                      </div>

                      {events.map((e) => (
                        <Link
                          key={e.slug}
                          to={`/event/${e.slug}?fromYear=${year}`}
                          className="
                            block px-4 py-2
                            text-sm text-cyan-100
                            hover:bg-cyan-400/10
                            hover:text-cyan-50
                            transition
                          "
                        >
                          {e.title}
                        </Link>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <span>›</span>
            <span className="text-cyan-100">{event.year}</span>
          </nav>
        </div>
      </header>

      {/* ================== TITLE ================== */}
      <section className="px-8 py-8 border-b border-cyan-400/15 bg-[radial-gradient(circle_at_left,rgba(0,229,255,0.12),transparent_55%)]">
        <h1 className="max-w-[1200px] mx-auto text-[2.2rem] font-bold text-cyan-50">
          Portfolio Details: {event.title}
        </h1>
      </section>

      {/* ================== CONTENT ================== */}
      <main className="min-h-screen text-cyan-50 bg-[radial-gradient(circle_at_top,rgba(0,180,255,0.08),#050b10_60%)]">
        <section className="px-8 py-16">
          <div className="max-w-[1200px] mx-auto grid grid-cols-[1.2fr_0.8fr] gap-12 max-[900px]:grid-cols-1">
            {/* Media */}
            <div>
              {event.video ? (
                <iframe
                  className="w-full aspect-video rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] ring-1 ring-cyan-400/25"
                  src={event.video}
                  title={event.title}
                  allowFullScreen
                />
              ) : (
                <img
                  src={event.image || fallbackImage}
                  alt={event.title}
                  className="w-full rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] ring-1 ring-cyan-400/25"
                />
              )}
            </div>

            {/* Info Card */}
            <div className="p-8 max-h-[200px] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] shadow-[0_10px_30px_rgba(0,0,0,0.6)] ring-1 ring-cyan-400/20">
              <h3 className="mb-4 text-lg font-semibold text-cyan-100">
                Event Information
              </h3>
              <ul className="space-y-2 text-sm text-cyan-100/90">
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
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-200"
                    >
                      Click to Visit
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* ================== DESCRIPTION ================== */}
            <div className="col-span-full mt-4">
              <h2 className="text-[1.7rem] font-semibold text-cyan-100 tracking-wide mb-6 relative after:content-[''] after:block after:w-16 after:h-[3px] after:mt-2 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:shadow-[0_0_12px_rgba(0,229,255,0.6)]">
                {event.subtitle}
              </h2>

              {event.description
                .trim()
                .split("\n\n")
                .map((p, i) => (
                  <p
                    key={i}
                    className={`max-w-[900px] mb-5 leading-[1.75] ${
                      i === 0
                        ? "text-[1.05rem] text-cyan-50"
                        : "text-[1.02rem] text-cyan-100/90"
                    }`}
                  >
                    {p}
                  </p>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
