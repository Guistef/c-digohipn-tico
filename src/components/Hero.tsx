import { Play, Tv, Zap, Globe } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        {/* Badge pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full gradient-gold text-accent-foreground font-bold px-4 py-1 text-xs uppercase tracking-wider">
            🎬 Conteúdo Atualizado 2026
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-center mb-6 leading-[1.1] tracking-tight">
          Assista Milhares de{' '}
          <span className="text-primary">Doramas e Séries</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
          Acesso ilimitado aos melhores dramas asiáticos — coreanos, chineses, tailandeses e japoneses — com qualidade HD e 4K, sem anúncios e com dublagem em português.
        </p>

        {/* Drama preview card */}
        <div className="relative mx-auto max-w-2xl mb-10 rounded-2xl overflow-hidden border border-border animate-float">
          <div className="aspect-video bg-card flex items-center justify-center relative">
            {/* Fake video preview */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full gradient-pink glow-pink flex items-center justify-center">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Mais de 5.000 episódios disponíveis
              </p>
            </div>
            {/* Decorative drama tags */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded">HD</span>
              <span className="gradient-gold text-accent-foreground text-xs font-bold px-2 py-0.5 rounded">4K</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
              {['Business Proposal', 'Crash Landing on You', 'Goblin', 'My Love from the Star'].map((title) => (
                <span key={title} className="bg-background/80 backdrop-blur-sm text-foreground text-xs px-2 py-0.5 rounded border border-border">
                  {title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            className="gradient-pink glow-pink-pulse text-primary-foreground font-bold text-lg px-8 py-6 rounded-md w-full sm:w-auto transition-opacity hover:opacity-90"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Começar Agora
          </button>
          <button
            className="border border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-md w-full sm:w-auto bg-background transition-colors"
            onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Benefícios
          </button>
        </div>

        {/* Feature badges */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 md:gap-6 bg-card border border-primary/30 rounded-full px-6 py-3 flex-wrap justify-center">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              Sem Anúncios
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tv className="w-4 h-4 text-primary" />
              HD &amp; 4K
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-primary" />
              80% Dublados
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
