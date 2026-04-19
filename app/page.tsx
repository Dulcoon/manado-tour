import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const features = [
  {
    title: "Expert Local Guides",
    description:
      "Born and raised in Minahasa, our guides know hidden reefs and highland trails better than anyone.",
    badgeClass: "bg-[#d2e4ff] text-[#003e6f]",
  },
  {
    title: "Safe & Secure Booking",
    description:
      "Transparent pricing, flexible cancellation, and support throughout your entire journey.",
    badgeClass: "bg-[#a0f399] text-[#1b6d24]",
  },
  {
    title: "Curated Experiences",
    description:
      "No generic templates. We tailor each itinerary to your adventure appetite and pace.",
    badgeClass: "bg-[#ffdbc7] text-[#642d00]",
  },
];

const tours = [
  {
    title: "Bunaken Deep Blue",
    price: "From $150 / day",
    description:
      "Immerse yourself in world-class wall diving and pristine marine biodiversity.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    className: "md:col-span-8",
    overlayClass: "from-[#003e6f]/90 via-[#003e6f]/40",
  },
  {
    title: "Tangkoko Wildlife",
    price: "From $85 / day",
    description:
      "Encounter the rare Tarsier and macaques in dense jungle trails.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-4",
    overlayClass: "from-black/80 via-black/20",
  },
  {
    title: "Tomohon Highland Retreat",
    price: "From $95 / day",
    description:
      "Cool mountain air, active volcanoes, and rich Minahasan culture.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80",
    className: "md:col-span-12 h-[320px]",
    overlayClass: "from-[#642d00]/80 via-transparent",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar activeItem="home" />

      <main className="bg-[var(--color-surface)] text-[var(--color-on-surface)]">
        <header className="relative flex min-h-[860px] items-center overflow-hidden pt-28 pb-16">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=2000&q=80"
            alt="Aerial view of North Sulawesi coast"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)]/95 via-[var(--color-surface)]/80 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-slate-300/50 bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] backdrop-blur-sm">
                Local Experts in North Sulawesi
              </span>
              <h1 className="mt-6 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
                Explore the <br />
                <span className="bg-[linear-gradient(135deg,#003e6f_0%,#005696_100%)] bg-clip-text text-transparent">
                  Wonders of
                </span>{" "}
                <br />
                North Sulawesi.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl">
                From the abyssal blues of Bunaken to the misty highland greens
                of Tomohon, discover deep blue adventures with guided precision.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#tours"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#003e6f_0%,#005696_100%)] px-8 py-4 text-lg font-semibold text-white shadow-[0px_12px_30px_rgba(0,62,111,0.25)] transition hover:-translate-y-1"
                >
                  Explore Tours
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white px-8 py-4 text-lg font-semibold text-[var(--color-primary)] transition hover:bg-slate-50"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-[#f2f4f6] py-24">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
            <div className="mb-16 text-center">
              <h2 className="font-headline text-4xl font-bold">The Curator Difference</h2>
              <p className="mt-3 text-lg text-slate-600">
                Why explorers trust us with their journey.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2"
                >
                  <div className={`mb-6 inline-flex rounded-full px-4 py-2 text-sm font-bold ${feature.badgeClass}`}>
                    Featured
                  </div>
                  <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tours" className="py-24">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-bold tracking-[0.14em] text-[var(--color-primary)] uppercase">
                  Signature Journeys
                </span>
                <h2 className="mt-2 font-headline text-5xl font-bold tracking-tight">
                  Curated Expeditions
                </h2>
              </div>
              <a href="#" className="font-semibold text-[var(--color-primary)]">
                View All Tours
              </a>
            </div>

            <div className="grid auto-rows-[400px] grid-cols-1 gap-6 md:grid-cols-12">
              {tours.map((tour) => (
                <article
                  key={tour.title}
                  className={`group relative overflow-hidden rounded-2xl ${tour.className}`}
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${tour.overlayClass} to-transparent`}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-bold text-slate-900">
                      {tour.price}
                    </span>
                    <h3 className="mt-4 font-headline text-3xl font-bold text-white">
                      {tour.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm text-slate-200 md:text-base">
                      {tour.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
