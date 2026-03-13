const testimonials = [
  {
    name: 'Ana Carolina S.',
    location: 'São Paulo, SP',
    avatar: 'AC',
    rating: 5,
    text: 'Finalmente encontrei uma plataforma com todos os meus dramas coreanos favoritos dublados em português! A qualidade de imagem é incrível e não tem nenhum anúncio chato. Recomendo demais!',
  },
  {
    name: 'Maria Fernanda L.',
    location: 'Rio de Janeiro, RJ',
    avatar: 'MF',
    rating: 5,
    text: 'O plano vitalício valeu cada centavo. Já assisti mais de 200 episódios em duas semanas. A plataforma é muito fácil de usar e funciona super bem no celular.',
  },
  {
    name: 'Juliana T.',
    location: 'Belo Horizonte, MG',
    avatar: 'JT',
    rating: 5,
    text: 'Sou fã de doramas há anos e nunca vi uma plataforma com tanto conteúdo assim. Business Proposal, Crash Landing on You, Goblin... todos em HD e dublados. Perfeito!',
  },
  {
    name: 'Camila R.',
    location: 'Curitiba, PR',
    avatar: 'CR',
    rating: 5,
    text: 'O melhor investimento que fiz esse ano! Por um valor ridiculamente baixo tenho acesso vitalício a milhares de dramas. O suporte é super atencioso e rápido.',
  },
  {
    name: 'Priscila M.',
    location: 'Fortaleza, CE',
    avatar: 'PM',
    rating: 5,
    text: 'Comecei com o plano mensal e já no primeiro mês migrei para o vitalício. Vale muito mais a pena! Dramas novos toda semana e a qualidade 4K é impressionante.',
  },
  {
    name: 'Beatriz O.',
    location: 'Porto Alegre, RS',
    avatar: 'BO',
    rating: 5,
    text: 'Minha família inteira virou fã de doramas por causa da Dramas Prime! Consigo assistir no celular, no notebook e na smart TV sem nenhum problema. Super recomendo!',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent text-base">★</span>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="gradient-gold text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              💬 Depoimentos
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            O Que Nossas{' '}
            <span className="text-primary">Assinantes Dizem</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Mais de 47.000 pessoas já descobriram o melhor jeito de assistir doramas.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-4">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-pink border-2 border-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="gradient-gold text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                    ✓ Verificado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Junte-se a mais de <strong className="text-foreground">47.000 assinantes</strong> felizes
          </p>
          <button
            className="gradient-pink glow-pink text-white font-bold px-8 py-3 rounded-md text-lg hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  )
}
