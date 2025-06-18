export function Footer() {
  return (
    <footer className="bg-[#27272A] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FanSpace</h3>
            <p className="text-white/70">
              The platform where creators and fans connect through exclusive content.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="/explore" className="text-white/70 hover:text-white">Explore</a></li>
              <li><a href="/search" className="text-white/70 hover:text-white">Search</a></li>
              <li><a href="/pricing" className="text-white/70 hover:text-white">Pricing</a></li>
              <li><a href="/guidelines" className="text-white/70 hover:text-white">Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="text-white/70 hover:text-white">Help Center</a></li>
              <li><a href="/safety" className="text-white/70 hover:text-white">Safety</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-white">Contact Us</a></li>
              <li><a href="/feedback" className="text-white/70 hover:text-white">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-white/70 hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="text-white/70 hover:text-white">Privacy Policy</a></li>
              <li><a href="/cookies" className="text-white/70 hover:text-white">Cookie Policy</a></li>
              <li><a href="/copyright" className="text-white/70 hover:text-white">Copyright</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 FanSpace. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white">Twitter</a>
              <a href="#" className="text-white/60 hover:text-white">Instagram</a>
              <a href="#" className="text-white/60 hover:text-white">Facebook</a>
              <a href="#" className="text-white/60 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
