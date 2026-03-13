export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-primary text-lg">▶</span>
            <span className="font-bold text-primary text-base">DRAMAS</span>
            <span className="font-bold text-foreground text-base">PRIME</span>
            <span className="text-xs text-muted-foreground ml-1">2026</span>
          </div>

          {/* CTA Button */}
          <button
            className="gradient-pink glow-pink text-white font-semibold px-4 py-2 rounded-md text-sm transition-opacity hover:opacity-90"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ⭐ Premium
          </button>
        </div>
      </div>
    </header>
  )
}
