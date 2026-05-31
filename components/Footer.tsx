import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/social-icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-ink text-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-2xl font-extrabold tracking-[0.12em] uppercase">
              {siteConfig.company.name}
            </div>
            <p className="mt-5 max-w-sm text-bg/65 leading-relaxed">
              {siteConfig.company.description}
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center rounded-full bg-surface px-5 py-3 text-sm font-display font-semibold text-ink hover:brightness-105 transition"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg/45">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-bg/75 hover:text-surface transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg/45">
              Offices
            </div>
            <p className="mt-5 text-bg/75 leading-relaxed">{siteConfig.contact.location}</p>
            <p className="mt-2 text-bg/75">{siteConfig.contact.phone}</p>
            <SocialLinks socials={siteConfig.socials} className="mt-6 text-bg" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-bg/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.company.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.legal.links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-bg transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
