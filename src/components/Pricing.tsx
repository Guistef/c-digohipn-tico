import { Check, Crown } from 'lucide-react'

const monthlyFeatures = [
  'Acesso a todos os dramas',
  'Qualidade HD',
  'Sem anúncios',
  'Novidades mensais',
  'Suporte por e-mail',
]

const lifetimeFeatures = [
  'Acesso vitalício ilimitado',
  'Qualidade HD e 4K',
  'Sem anúncios para sempre',
  'Novidades toda semana',
  'Suporte prioritário 24/7',
  '80% do catálogo dublado',
  'Download para offline',
  'Múltiplos dispositivos',
  'Acesso antecipado a lançamentos',
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="gradient-gold text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              💎 Planos e Preços
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Escolha o Plano{' '}
            <span className="text-primary">Perfeito Para Você</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Invista no seu entretenimento. Assine agora e comece a assistir imediatamente.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Monthly Plan */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1">Plano Mensal</h3>
              <p className="text-muted-foreground text-sm">Ideal para começar a explorar</p>
            </div>

            <div className="mb-6">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-primary">R$ 9,90</span>
                <span className="text-muted-foreground text-base mb-1">/mês</span>
              </div>
              <p className="text-muted-foreground text-xs mt-1">Cobrado mensalmente — cancele quando quiser</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {monthlyFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold h-12 rounded-md transition-colors">
              Assinar Agora
            </button>
          </div>

          {/* Lifetime Plan — Premium */}
          <div className="relative bg-gradient-to-br from-primary/15 via-card to-accent/10 border-2 border-primary rounded-2xl p-8 flex flex-col">
            {/* Best offer badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="gradient-gold text-accent-foreground font-bold px-4 py-1.5 rounded-full text-sm inline-flex items-center gap-1.5 shadow-lg">
                <Crown className="w-4 h-4" />
                MELHOR OFERTA
              </span>
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-xl font-bold mb-1">Plano Vitalício</h3>
              <p className="text-muted-foreground text-sm">Pague uma vez, acesse para sempre</p>
            </div>

            <div className="mb-2">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-primary">R$ 20,00</span>
                <span className="text-muted-foreground text-base mb-1">/vitalício</span>
              </div>
              <p className="text-success text-xs font-semibold mt-1">
                ✓ Economia de R$ 98,80 no primeiro ano
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 mb-6 text-sm text-primary font-semibold">
              🔥 Oferta por tempo limitado — preço pode aumentar em breve
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {lifetimeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full gradient-gold text-accent-foreground font-bold h-12 rounded-md transition-opacity hover:opacity-90 text-base">
              Assinar Plano Vitalício
            </button>

            <p className="text-center text-xs text-muted-foreground mt-3">
              🔒 Pagamento seguro • Garantia de 7 dias
            </p>
          </div>
        </div>

        {/* Trust note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Mais de <strong className="text-foreground">47.000 assinantes</strong> já confiam na Dramas Prime 2026
        </p>
      </div>
    </section>
  )
}
