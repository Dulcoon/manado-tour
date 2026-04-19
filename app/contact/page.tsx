import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar activeItem="contact" />

      <main className="mx-auto min-h-screen w-full max-w-7xl bg-[var(--color-surface)] px-6 pt-32 pb-24 text-[var(--color-on-surface)] md:px-12">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-[var(--color-primary)] md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Whether you&apos;re ready to book an expedition to the Minahasa
            highlands or just have a question about Bunaken Marine Park, we are
            here to curate your perfect journey.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <article className="relative overflow-hidden rounded-xl bg-white p-8 shadow-[0px_12px_32px_rgba(25,28,30,0.06)]">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#d2e4ff] to-white opacity-40" />

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#005696]/10 text-[var(--color-primary)]">
                  <span className="text-lg font-bold">WA</span>
                </div>
                <div>
                  <h2 className="font-headline text-xl font-bold text-[var(--color-primary)]">
                    Instant Response
                  </h2>
                  <p className="text-sm text-slate-600">Fastest way to reach us</p>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#003e6f_0%,#005696_100%)] px-6 py-4 text-lg font-bold text-white shadow-[0px_12px_32px_rgba(25,28,30,0.06)] transition hover:opacity-95"
              >
                Message on WhatsApp
              </button>
              <p className="mt-4 text-center text-xs text-slate-600">
                Typical reply time: Under 1 hour
              </p>
            </article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <article className="rounded-xl bg-[#f2f4f6] p-6">
                <h3 className="font-headline text-lg font-semibold text-[var(--color-primary)]">
                  Email Us
                </h3>
                <a
                  href="mailto:hello@coastalcurator.com"
                  className="mt-3 block text-sm text-slate-600 transition hover:text-[var(--color-primary)]"
                >
                  hello@coastalcurator.com
                </a>
              </article>

              <article className="rounded-xl bg-[#f2f4f6] p-6">
                <h3 className="font-headline text-lg font-semibold text-[var(--color-primary)]">
                  Visit Us
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Jl. Boulevard Piere Tendean
                  <br />
                  Manado, North Sulawesi
                  <br />
                  Indonesia 95114
                </p>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-7">
            <article className="rounded-xl bg-white p-8 shadow-[0px_12px_32px_rgba(25,28,30,0.06)] lg:p-10">
              <h2 className="font-headline text-2xl font-bold text-[var(--color-primary)]">
                Send an Inquiry
              </h2>

              <form className="mt-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    <span>Full Name</span>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm outline-none ring-0 transition focus:bg-white focus:shadow-[0_0_0_2px_#1961a1]"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium">
                    <span>Email Address</span>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm outline-none ring-0 transition focus:bg-white focus:shadow-[0_0_0_2px_#1961a1]"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium">
                  <span>Your Message</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the journey you&apos;re dreaming of..."
                    className="w-full resize-none rounded-lg bg-slate-100 px-4 py-3 text-sm outline-none ring-0 transition focus:bg-white focus:shadow-[0_0_0_2px_#1961a1]"
                  />
                </label>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-slate-50 md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </article>

            <article className="group relative h-64 overflow-hidden rounded-xl bg-[#f2f4f6]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Jauv2_gBFFusKh1zcNrObV0K-4MyF-nBrrBLWn_AAj4piV1Eg-0qhsWvGOo1xp-aRflG2BdKuQ3yh1LZ2vGwODqZgkML7EM-FaajQEPsI_9Y1_BgSeumGVCpzFRF2KIX08KTWUPqINxTRjnVxVxJYV2viC8dijNhOtvpB1nlEI-C2I0zc24gZ-anKci_MN4_OJ13xhlcPvfkL86M-pcdEAmtRcb8uvqlS2h809nYjd1lteCnxeAGqj-z5AlrTKlXDjQIYPYOTSG2"
                alt="Map of Manado"
                fill
                className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-white/70 to-transparent p-6">
                <div className="rounded-lg bg-white/90 px-4 py-2 backdrop-blur">
                  <span className="font-headline text-sm font-semibold text-[var(--color-primary)]">
                    Manado HQ
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
