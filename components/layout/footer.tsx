import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 rounded-t-3xl border-t border-slate-200 bg-slate-50 pt-16 pb-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-8 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h3 className="font-headline text-2xl font-extrabold text-[var(--color-primary)]">
            The Coastal Curator
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
            Curating high-end, deep blue adventures and highland escapes in
            North Sulawesi, Indonesia.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#005696]"
          >
            Chat on WhatsApp
          </Link>
        </div>

        <div>
          <h4 className="font-headline text-base font-bold text-slate-900">
            Connect
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <Link href="#" className="transition hover:text-[var(--color-primary)]">
                WhatsApp
              </Link>
            </li>
            <li>
              <Link href="#" className="transition hover:text-[var(--color-primary)]">
                Email
              </Link>
            </li>
            <li>
              <Link href="#" className="transition hover:text-[var(--color-primary)]">
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-base font-bold text-slate-900">
            Information
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Manado, Indonesia</li>
            <li>
              <Link href="#" className="transition hover:text-[var(--color-primary)]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl border-t border-slate-200 px-6 pt-6 md:px-8">
        <p className="text-center text-sm text-slate-500">
          © 2026 The Coastal Curator. Deep Blue Adventures in North Sulawesi.
        </p>
      </div>
    </footer>
  );
}
