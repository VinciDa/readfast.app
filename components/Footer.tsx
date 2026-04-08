import { getStoreUrl } from "@/lib/platform";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-display font-bold tracking-tight">
              Read<span className="text-accent">Fast</span>
            </span>
            <span className="text-xs text-muted">
              © {new Date().getFullYear()} Bitart Private Limited
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a
              href={getStoreUrl("ios", "footer_link")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              App Store
            </a>
            <a
              href={getStoreUrl("android", "footer_link")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
