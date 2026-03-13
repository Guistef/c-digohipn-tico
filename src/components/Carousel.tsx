// Drama titles and colors for placeholder cards
const dramaRow1 = [
  { title: 'Business Proposal', genre: 'Romance', color: 'from-pink-900 to-rose-800' },
  { title: 'Crash Landing on You', genre: 'Romance/Drama', color: 'from-blue-900 to-indigo-800' },
  { title: 'Goblin', genre: 'Fantasy/Romance', color: 'from-purple-900 to-violet-800' },
  { title: 'My Love from the Star', genre: 'Romance/Sci-Fi', color: 'from-cyan-900 to-teal-800' },
  { title: 'Descendants of the Sun', genre: 'Action/Romance', color: 'from-green-900 to-emerald-800' },
  { title: 'Vincenzo', genre: 'Action/Comedy', color: 'from-amber-900 to-yellow-800' },
  { title: 'Kingdom', genre: 'Horror/Historical', color: 'from-red-900 to-orange-800' },
  { title: 'It\'s Okay to Not Be Okay', genre: 'Romance/Drama', color: 'from-fuchsia-900 to-pink-800' },
]

const dramaRow2 = [
  { title: 'Itaewon Class', genre: 'Drama/Revenge', color: 'from-orange-900 to-red-800' },
  { title: 'Hotel Del Luna', genre: 'Fantasy/Romance', color: 'from-indigo-900 to-blue-800' },
  { title: 'Strong Woman Do Bong-soon', genre: 'Romance/Comedy', color: 'from-violet-900 to-purple-800' },
  { title: 'Mr. Queen', genre: 'Historical/Comedy', color: 'from-teal-900 to-cyan-800' },
  { title: 'Twenty-Five Twenty-One', genre: 'Youth/Romance', color: 'from-emerald-900 to-green-800' },
  { title: 'Moon Lovers', genre: 'Historical/Romance', color: 'from-rose-900 to-pink-800' },
  { title: 'Pinocchio', genre: 'Romance/Thriller', color: 'from-sky-900 to-blue-800' },
  { title: 'Reply 1988', genre: 'Family/Drama', color: 'from-lime-900 to-green-800' },
]

function DramaCard({ title, genre, color }: { title: string; genre: string; color: string }) {
  return (
    <div className="relative w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] flex-shrink-0 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
      <div className={`aspect-[2/3] bg-gradient-to-br ${color} flex flex-col items-center justify-end p-3 relative`}>
        {/* Play icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full gradient-pink flex items-center justify-center">
            <span className="text-white text-lg ml-0.5">▶</span>
          </div>
        </div>
        {/* Genre tag */}
        <span className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs text-muted-foreground px-1.5 py-0.5 rounded">
          {genre}
        </span>
        {/* Title */}
        <div className="w-full bg-background/80 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs font-semibold text-center leading-tight line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

function CarouselTrack({ items, reverse = false }: { items: typeof dramaRow1; reverse?: boolean }) {
  // Triple items for seamless infinite loop
  const tripled = [...items, ...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}
        style={{ width: 'max-content' }}
      >
        {tripled.map((drama, i) => (
          <DramaCard key={`${drama.title}-${i}`} {...drama} />
        ))}
      </div>
    </div>
  )
}

export function Carousel() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2">
            <span className="gradient-gold text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              🌟 Destaques
            </span>
          </div>
          <p className="text-muted-foreground text-sm hidden sm:block">
            Mais de 5.000 episódios para assistir
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Dramas em{' '}
          <span className="text-primary">Destaque</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 — scrolls left */}
        <CarouselTrack items={dramaRow1} />
        {/* Row 2 — scrolls right */}
        <CarouselTrack items={dramaRow2} reverse />
      </div>
    </section>
  )
}
