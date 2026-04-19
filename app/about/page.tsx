import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar activeItem="about" />

      <main className="bg-[var(--color-surface)] px-4 pt-24 pb-16 text-[var(--color-on-surface)] md:px-8">
        <section className="mx-auto mb-24 w-full max-w-7xl">
          <div className="relative h-[614px] min-h-[500px] w-full overflow-hidden rounded-xl bg-slate-200">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqEkSWbg--JXPRIp4cZoV8J9OMMuG1K65RVvcOZob434CXwcP4rMw7NrH_UcVLO5veVNaJnjdroBZogVjxgirgVlHUTpNTaPMyJAdyaG8EkTZorqnc1ELurD0UXoPpHujxRgDRDl7qC714aIH9s8PUrEOefNBCsFkuTyrKSbqG6WfbKMJzcoD2ulYQODU6Pe1HZkx31RYVoYanoB6cyKxyP6w0T3C283pbPXxhkgoSpIzoMmFFiUjJriSkpmXcnuNKEKEYh0R-7vSb"
              alt="Scenic view of the Celebes Sea"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003e6f]/80 via-[#003e6f]/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-16">
              <h1 className="font-headline text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                Beyond the Surface
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-medium text-white/90 md:text-xl">
                Curating immersive, sustainable journeys through the hidden
                depths of North Sulawesi.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-32 w-full max-w-7xl">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="relative order-2 w-full lg:order-1 lg:w-1/2">
              <div className="relative z-10 mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD05QibHSOQHnFs52Yp95SBkNjw0WLO__GfQsCmlogCy3HR16T2zIXkWzRB0TI_VLGkmxq3YKgIRWVHxkB4tjaiybOT_yiJ6Mw8zcZDhYECRfNuW0CMT8qlxnL1DbkwXYmm3iHBa8hoUZo9cyWyQginGP4pLpSeV02HshLCoBjfMWqWbv72kZ0cmYCW_NfpltBxeUQ7NZ3c4XGh8dZUwdyXFBA3dxKPAKu76Hl-qqCh-h1e26KTckBMwioFbCs3-95x_qs6k3mHAtik"
                  alt="Local guide in lush jungle"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 z-20 hidden h-48 w-48 overflow-hidden rounded-xl outline-4 outline-white md:block">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHFk15jCAnJr4IrfSjrK2e2OZFz1lHL1P66zhClx295dTjRqC_bxwx1wxuoLEJbtKTHu2Rc2nkL3iFYXcyNUHTmX9FyMnMeIokEM4GS2QtmXCETN6nxrRl3NKr2dBmcrmtSUp_wTi2cKgupPW2Dg6YQDL0pg2zHoLIDjU3suWj0zq9hDaTifYcEo73ACfwvOeKzT3yIKBvFqkmOzNGqXcPTdBkEZcwbsuGMBko0kvBo7i90_qpQzZt2WsiWz1LlA7TpACrZliLpxB2"
                  alt="Detail of local craft"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 w-full lg:order-2 lg:w-1/2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#a0f399]/20 px-3 py-1.5 text-[#1b6d24]">
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Our Mission
                </span>
              </div>

              <h2 className="font-headline text-4xl font-bold leading-tight text-[var(--color-primary)] md:text-5xl">
                Preserving beauty through conscious exploration.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                The Coastal Curator was born from a profound respect for North
                Sulawesi, from abyssal marine trenches to volcanic highlands. We
                saw a need for travel that honors this fragile ecosystem.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Our mission is to shift the paradigm from mass tourism to
                mindful immersion. We partner directly with local communities
                and conservationists to offer journeys that leave a positive
                footprint.
              </p>

              <button
                type="button"
                className="mt-8 rounded-full border border-slate-300 bg-white px-8 py-3 font-semibold text-[var(--color-primary)] shadow-[0_4px_12px_rgba(25,28,30,0.04)] transition hover:bg-slate-50"
              >
                View Sustainability Report
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
