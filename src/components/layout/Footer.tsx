import Link from "next/link";
import { Camera, Video, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sage-50 border-t border-sage-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-charcoal">
              Aqsa.
            </Link>
            <p className="mt-4 text-charcoal/70 text-sm max-w-xs">
              Painting, craft, and DIY content. Inspiring creativity one tutorial at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-charcoal mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-charcoal/70">
              <li><Link href="/gallery" className="hover:text-sage-600 transition-colors">Gallery</Link></li>
              <li><Link href="/videos" className="hover:text-sage-600 transition-colors">Videos</Link></li>
              <li><Link href="/about" className="hover:text-sage-600 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-sage-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-sage-600 transition-colors">
                <Video className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-sage-600 transition-colors">
                <Camera className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-sage-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">Pinterest</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-sage-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charcoal/60">
            © {new Date().getFullYear()} Aqsa Art & Craft. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-charcoal/60">
            <Link href="/privacy" className="hover:text-charcoal transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-charcoal transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
