import Link from "next/link";
import cbpdLogo from "../../public/cbpd-logo-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-slate-300 border-t border-primary-800">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <img src={cbpdLogo.src} alt="CBPD Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Global Recognition and Prestige. Professional association dedicated to awarding certification based on the practical application of knowledge.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Verify Certificate', path: '/verifications' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="hover:text-brand-red transition-colors text-sm font-medium">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3">
              {[
                { name: 'Contact Us', path: '/contact' },
                { name: 'Become a Partner', path: '/partner' },
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="hover:text-brand-red transition-colors text-sm font-medium">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Central Board of Professional Development</span>
                  <span>1 Canada Square, Canary Wharf</span>
                  <span>London, E14 5DY, United Kingdom</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@cbpd.co.uk</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-16 pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2026 CBPD. All rights reserved. Registered Number: ZC015593</p>
          <div className="flex gap-4">
                        {/* Social Icons */}
            <a href="https://www.facebook.com/share/1CZ5M3cWip/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-800 hover:bg-brand-red transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/></svg>
            </a>
            <a href="https://www.instagram.com/cbpd_uk?utm_source=qr&igsh=MXJjeTEwbXRrZ2Fpdw==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-800 hover:bg-brand-red transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-800 hover:bg-brand-red transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.292c-.966 0-1.75-.789-1.75-1.761s.784-1.761 1.75-1.761 1.75.789 1.75 1.761-.784 1.761-1.75 1.761zm13.75 10.292h-3v-4.5c0-1.086-.021-2.486-1.514-2.486-1.514 0-1.745 1.184-1.745 2.41v4.576h-3v-9h2.879v1.232h.041c.401-.761 1.378-1.562 2.839-1.562 3.038 0 3.6 2 3.6 4.604v5.726z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-800 hover:bg-brand-red transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184a2.99 2.99 0 012.12 2.117C22 7.5 22 12 22 12s0 4.5-.265 6.699a2.99 2.99 0 01-2.12 2.117C16.5 21 12 21 12 21s-4.5 0-6.699-.184a2.99 2.99 0 01-2.117-2.12C3 16.5 3 12 3 12s0-4.5.184-6.699a2.99 2.99 0 012.117-2.117C7.5 3 12 3 12 3s4.5 0 6.699.184zM10 15l5-3-5-3v6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
