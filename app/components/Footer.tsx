import Logo from "./Logo";

const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
);
const TwitterIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-brand-charcoal/8">
      {/* Main Footer */}
      <div className="w-full px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-brand-charcoal/50 leading-relaxed max-w-xs">
              Sinergi mahasiswa KKN Universitas bersama warga Desa Setanjang
              dalam mewujudkan transformasi digital, kelestarian lingkungan, dan
              kemandirian ekonomi masyarakat.
            </p>
          </div>

          {/* Navigasi */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-brand-green-dark">
              Navigasi
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                About Us
              </a>
              <a href="#kelurahan" className="text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                Profil Desa
              </a>
            </div>
          </div>

          {/* Kelurahan */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-brand-green-dark">
              Kelurahan
            </h4>
            <div className="flex flex-col gap-3">
              <a href="/tandang" className="text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                Kelurahan Tandang
              </a>
              <a href="/jangli" className="text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                Kelurahan Jangli
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-brand-green-dark">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2.5 text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                <FacebookIcon />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2.5 text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                <TwitterIcon />
                Twitter
              </a>
              <a href="#" className="flex items-center gap-2.5 text-sm text-brand-charcoal/50 hover:text-brand-charcoal transition-colors">
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-charcoal/8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-charcoal/40">
          <p>Copyright © {new Date().getFullYear()} KKNT IDBU 70</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-charcoal transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-brand-charcoal transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
