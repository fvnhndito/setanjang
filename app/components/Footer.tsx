import Logo from "./Logo";

const TiktokIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.21 8.21 0 004.76 1.52V6.78a4.84 4.84 0 01-1-.09z" /></svg>
);
const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#eeede9] text-brand-charcoal border-t border-brand-charcoal/10 transition-colors duration-300">
      {/* Main Footer */}
      <div className="w-full px-5 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Logo size="md" variant="dark" />
            <p className="text-sm text-brand-charcoal/80 leading-relaxed max-w-xs">
              Sinergi mahasiswa KKN Universitas bersama warga Kelurahan Jangli dan Tandang
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
              <a href="/#lashing" className="w-fit text-sm text-brand-charcoal/70 hover:text-brand-green-dark transition-colors">
                Tali Lashing
              </a>
              <a href="/kkn" className="w-fit text-sm text-brand-charcoal/70 hover:text-brand-green-dark transition-colors">
                Tim KKN
              </a>
            </div>
          </div>

          {/* Kelurahan */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-brand-green-dark">
              Wilayah
            </h4>
            <div className="flex flex-col gap-3">
              <a href="/tandang" className="w-fit text-sm text-brand-charcoal/70 hover:text-brand-green-dark transition-colors">
                Kelurahan Tandang
              </a>
              <a href="/jangli" className="w-fit text-sm text-brand-charcoal/70 hover:text-brand-green-dark transition-colors">
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
              <a 
                href="https://www.instagram.com/se.tanjang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-fit flex items-center gap-2.5 text-sm text-brand-charcoal/70 hover:text-brand-green-dark transition-colors"
              >
                <InstagramIcon />
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@kknidbu70" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-fit flex items-center gap-2.5 text-sm text-brand-charcoal/70 hover:text-brand-green-dark transition-colors"
              >
                <TiktokIcon />
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-charcoal/10 px-5 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-charcoal/50">
          <p>Copyright © {new Date().getFullYear()} KKNT IDBU 70</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-green-dark transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-brand-green-dark transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
