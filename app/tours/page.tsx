import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type TourCategory = "Diving" | "Nature" | "Culture";

type Tour = {
  title: string;
  category: TourCategory;
  price: string;
  duration: "Full Day" | "Half Day";
  description: string;
  image: string;
};

const filters: Array<{ label: string; active?: boolean }> = [
  { label: "All Adventures", active: true },
  { label: "Diving" },
  { label: "Nature" },
  { label: "Culture" },
];

const tours: Tour[] = [
  {
    title: "Bunaken Deep Blue",
    category: "Diving",
    price: "From $120",
    duration: "Full Day",
    description:
      "Immerse yourself in one of the world's most spectacular marine parks with towering coral walls and pelagic life.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjqfJ1zFO2qyFKn_L_FUi3egHX6ujXK7xheh6VCrKF2ZFId6fsXOm5WjbvIejHUUtQW3ni111t4yhII8ado7yHjdznqqAsh4LRhdIsjXTOmVwTYJumXASkS9lgqK7XJjmktVivOlh31sVHSU90AcQnpuppE3kh3V9h1T1kiDWJcMKjPVyH3sn7FBaTSkf3Zwld6xOUlQ--hs8Hxu79MNasNuBAXSldtLS1pbBN5FePEipT1jnZDvzoPA83BKuhDvCRfORrHrr4pzfB",
  },
  {
    title: "Tangkoko Twilight Trek",
    category: "Nature",
    price: "From $85",
    duration: "Half Day",
    description:
      "A magical evening walk to spot elusive tarsiers and endemic Sulawesi birds in their natural habitat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Zo0egzBnIbbarQLneD7E8lccuvrtIF_Z2R3o-J6N9TYXP1793vd9fTWhZUCZ6Jo42nSsDhLSCn4geaIj5VVjb8E3q1DaJ53EtLZ3jtMuDDrDGw91LA8MRyc2vs6I1SXRWXUk25k2HvsiGdZERlC-kMauSl6utfN3VBPiP27UdO1HH-VcveeBSDpEclHLveQo7DC8SoG8PARuij82TRjD9opfBM4Bb4tEOtMENnXqJ5EnAhR52cyuPeUx8NVGo-OQyG7c96MYQjmA",
  },
  {
    title: "Highland Horizons",
    category: "Culture",
    price: "From $95",
    duration: "Full Day",
    description:
      "Explore Tomohon with vibrant markets, serene lakes, and dramatic volcanic landscapes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyhND19gElUZU9c0FVzfjG1XQI4OYaydvuUQj1cVjOb4QcIHlA4rFwGUabz8zguNi0_XP9yycXAGEkNZdq-DAweM_zWnYIiB71EaB2lxKqjdtEnHN6qMrkDvs02OSJm5nOxJngYpzPhhbQ3vXk8stMGB2IAbMEnw8rc_EIavMwx6mJOAJL3Reowc0sIbUGWXfnVJN1KvIoExWtqRniXcO2eKwcry_ldZrJZtfG0QNH674JWOtxgn8FmpwKFNUMvmLbwR5sX5yLB7QE",
  },
  {
    title: "Mt. Mahawu Ascent",
    category: "Nature",
    price: "From $70",
    duration: "Half Day",
    description:
      "A gentle crater-rim trek with sweeping views of Minahasa highlands and Manado Bay.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTvdcDQ2q-QrpxsvWUr4jZMEXjobdtpAHG80G42HCpxx7qaNYbN7QP1Obc-z9e9o0ZIginjdl_9InGT8lOVZIQnHn6Agygvlmmb0k6yH5nBeR9e9tCf4l-sWka-YvHoIxesAahiZuaeYLBmtE4JMuUuTMWxo82qvugfYy5Ic052vqDZVi6SQpqv7h_wonwWsHIMa_jphLjMJwdwri9Ghv6qL4J4aGkqwDtWYBqz8TSRyS5tv4MaGgAdxQ5U6oGKA1Ooy8v1UYmHFC0",
  },
  {
    title: "Lihaga Island Escape",
    category: "Nature",
    price: "From $110",
    duration: "Full Day",
    description:
      "Sail to uninhabited Lihaga Island for white-sand beaches, snorkeling, and pure tropical calm.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvuoXgkgqI33oOmZKDoglfcZXtS4WXfk9E0tI13Y9wnV458J4zg3UogtAJKIo-s9X0TfYaxfMm2-XbP8rKe-HRlaYLRs2duQsqlW-iD_ZuYt-JSplibcG5STUj8vlc3ND0oR0duR8Iqs-2Y8Nr6-25GnYrvv7AGkkeWel8KLh3tyGZzVz6MKZ9UJ9_WTnV4gUTS-twvDnH3aF42zdNzuH_8eo6kA24cjju-2qp0yqi9HS7gUYlIZ0LnIRalygNHhWvbvlBt9LMfjgA",
  },
];

function categoryBadgeClass(category: TourCategory) {
  if (category === "Diving") {
    return "bg-[#d2e4ff] text-[#003e6f]";
  }

  if (category === "Culture") {
    return "bg-[#ffdbc7] text-[#642d00]";
  }

  return "bg-[#a0f399] text-[#1b6d24]";
}

export default function ToursPage() {
  return (
    <>
      <Navbar activeItem="tours" />

      <main className="min-h-screen bg-[var(--color-surface)] pt-24 text-[var(--color-on-surface)]">
        <section className="bg-[#f2f4f6] py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-[var(--color-primary)] md:text-6xl">
              Our Tours
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Discover the raw beauty of North Sulawesi. From abyssal dives to
              misty highland treks, curate your perfect adventure.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-8 md:px-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.label}
                type="button"
                className={[
                  "rounded-full border px-6 py-2 text-sm font-medium transition",
                  filter.active
                    ? "border-transparent bg-[var(--color-primary)] text-white shadow-[0px_8px_20px_rgba(0,62,111,0.18)]"
                    : "border-slate-200 bg-white text-[var(--color-primary)] hover:bg-slate-50",
                ].join(" ")}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <article
                key={tour.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#003e6f]/70 to-transparent" />
                  <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--color-primary)] backdrop-blur">
                    {tour.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span
                    className={`mb-3 inline-flex w-fit rounded px-2 py-1 text-xs font-bold uppercase tracking-wider ${categoryBadgeClass(
                      tour.category,
                    )}`}
                  >
                    {tour.category}
                  </span>

                  <h2 className="font-headline text-2xl font-bold text-[var(--color-primary)]">
                    {tour.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {tour.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-slate-600">{tour.duration}</span>
                    <button
                      type="button"
                      className="font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-container)]"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <a
        href="#"
        aria-label="Contact on WhatsApp"
        className="fixed right-8 bottom-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0px_12px_32px_rgba(25,28,30,0.2)] transition hover:-translate-y-1"
      >
        WA
      </a>

      <Footer />
    </>
  );
}
