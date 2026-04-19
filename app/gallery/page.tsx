import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type GalleryItem = {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
  contentClassName?: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Bunaken Marine Park",
    subtitle: "Abyssal blues and vibrant life",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxh92skeycf9p1rjjvT_1WIu3_zRUA0sl_oTJU5OLV3Q7s33n-FpeRZCpPCUnxuKUJvPjkKCYvwhQeGOmTZp3A9MMyneiitLn-Xnq_5iZkkrm7Lhv-lqmoQGEgQtXH-tv1ThedgW9pR03s9ZyVCzMrTZf82EBWOPTzUs_udYVW_NhyjBZOfJlrAFa4myPi_HlcpVRAZ1wcf432iP_A0AGeHzPekxiPqzBKSQQRmXvUC2t_ohSBGmujb981Zkg9BBBsuKNeqBkTc4K0",
    className: "lg:col-span-2 lg:row-span-2",
    contentClassName: "p-8",
  },
  {
    title: "Tangkoko Reserve",
    subtitle: "The elusive Spectral Tarsier",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgl_lW2NId82Cf9PJSvQp54ixv3bqqEQC93N6PiZ433cgxHzlTGz68z7S9iAvfuRQGqWykSsBWQ8lG_tLBJ-pfyQENkTA3k9ag_k9-_fIWNxvq4XkHGJzNqf2Uz5UThj6VgC9xsHpmICGHU30AqBOcGYpMxsAC5wbZsaVZOYaZHMu6ZQjbjnVR6K7Gb3LffVqENgVOTHkxFVtbkJdjNdtyjod-CWLrh7153ujT7zgSkccsskt3AENBHN6-BUwDFt5F5qHTHMbrbroA",
    contentClassName: "p-6",
  },
  {
    title: "Lihaga Island",
    subtitle: "Pristine white sands",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb9osWvuRlC0I00QY13rYG5eQ9UVK8AiQ9bCcx04e5qfwtTch0LK16PlusVqB2LvWuOhd_w1GvA1eGaXlpt0QpTUVPB4qjmtzGqr5S5N8h3XDN5mjEJSLOXOTYYgBTsPogKWMNlIFyUx2a6H5LDQK1gJlYsMszFWzciPb6nyaPzJyF42NapxsYhstJABo3mzUA4e4YdU0Bqed2JQ-41SKW8bTheRA-3NrgPgdrFf4WPWpGAJV_2vrGY5JHw2k7vclIpOL0zbA96S1Y",
    contentClassName: "p-6",
  },
  {
    title: "Minahasa Highlands",
    subtitle: "Misty greens of Tomohon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5GN8bsKS6asOj6i1-6J3yvsQH_iN7V1Ay-sXiDaFN_ku9wh0znYMS91XZpUnLwwvROYCFiwpEbRhtlJPZQ0zI-SXzg6tuNtWIilK_iJE0GUgf9jjn0YZCxiL_l-zv_f9NTNARAK_3Qeb3TEZWrC0XxVZ0SUrb74rgGTo2maDM_thhgJZfvlmbP9KPpQ7m0OmNHxx25YLnNBvocypufOddY-sJbeVOLADu11q40Emlfzdl-fZ6DRiK1xfAT6w6TFKnhsKk8T97NQf_",
    className: "lg:col-span-2",
    contentClassName: "p-8",
  },
  {
    title: "Mt. Mahawu",
    subtitle: "Volcanic landscapes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfllEIdsMwqmJ6zk0pSWRQAuSxNCmjN5-xD9DhmMyhoid5R6ABzgbsXJAuOEzqJ1fw9G7_Q5mpjnStBUra7Y7QIN957KY_CMz63TAZKmbq3izZlWrjXSgivy-tI-wM-X2KkVbtVeI8RIzsXAlatN_hGGH1oSqMZHmsjr6lFZycy7-Xxh654zobekQ6h29uTpZMxwS2KKSvwX8xqzI1IoEpe-Cc9EHuMJ4pgjVzXEFEK1CP9cPgEz4Yt4iUNVqrCBZT8KhMcSFbsLqZ",
    contentClassName: "p-6",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar activeItem="gallery" />

      <main className="mx-auto w-full max-w-[1440px] flex-1 bg-[var(--color-surface)] px-6 pt-32 pb-24 text-[var(--color-on-surface)] md:px-12">
        <section className="mb-16 max-w-3xl text-center md:mb-24 md:text-left">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-[var(--color-primary)] md:text-7xl">
            Visions of
            <br />
            North Sulawesi
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Explore the abyssal blues and misty highlands through our curated
            collection of moments. A glimpse into the profound depth of the
            Celebes Sea and beyond.
          </p>
        </section>

        <section className="grid auto-rows-[300px] grid-cols-1 gap-6 md:auto-rows-[400px] md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-xl bg-[#f2f4f6] shadow-[0px_12px_32px_rgba(25,28,30,0.06)] ${item.className ?? ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003e6f]/60 via-transparent to-transparent" />

              <div className={`absolute inset-x-0 bottom-0 ${item.contentClassName ?? "p-6"}`}>
                <h2 className="font-headline text-xl font-bold text-white md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-white/90">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
