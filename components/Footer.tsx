import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <div>© {currentYear} ONE01 Foundation</div>
          <nav className="flex flex-wrap gap-6 justify-center">
            <Link href="/docs" className="hover:text-neutral-700 transition-colors">
              Docs
            </Link>
            <Link href="/contact" className="hover:text-neutral-700 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
