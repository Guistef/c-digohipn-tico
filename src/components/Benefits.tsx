import { Tv, Globe, Zap, Download, Star, Shield, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Tv,
    title: 'Qualidade HD e 4K',
    description: 'Assista todos os seus dramas favoritos em resolução máxima, com qualidade de imagem cristalina e áudio perfeito.',
  },
  {
    icon: Zap,
    title: 'Sem Anúncios',
    description: 'Experiência 100% livre de interrupções. Nenhum anúncio durante seus episódios favoritos.',
  },
  {
    icon: Globe,
    title: '80% Dublados em PT-BR',
    description: 'A maior coleção de dramas asiáticos dublados em português do Brasil para assistir sem esforço.',
  },
  {
    icon: Download,
    title: 'Download para Offline',
    description: 'Baixe episódios e assista quando e onde quiser, mesmo sem conexão com a internet.',
  },
  {
    icon: Clock,
    title: 'Novidades Toda Semana',
    description: 'Conteúdo novo adicionado semanalmente. Fique sempre por dentro dos últimos lançamentos.',
  },
  {
    icon: Users,
    title: 'Múltiplos Dispositivos',
    description: 'Assista no celular, tablet, computador ou smart TV. Sua conta funciona em todos os seus dispositivos.',
  },
  {
    icon: Shield,
    title: 'Acesso Vitalício Garantido',
    description: 'Pague uma vez e acesse para sempre. Sem mensalidades ou cobranças surpresa no futuro.',
  },
  {
    icon: Star,
    title: '+5.000 Episódios',
    description: 'Biblioteca com milhares de episódios de dramas coreanos, chineses, tailandeses e japoneses.',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Subscriber counter pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-success inline-block animate-pulse" />
            <span>
              <strong className="text-foreground">+47.000</strong> assinantes ativos agora
            </span>
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="gradient-gold text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              ✦ Por Que Escolher
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
            A Melhor Plataforma de{' '}
            <span className="text-primary">Dramas Asiáticos</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Tudo que você precisa para uma experiência premium de entretenimento asiático.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="text-center py-10 px-6 rounded-2xl bg-card border border-border">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">
            Não perca mais tempo buscando
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Todos os Dramas em Um Só Lugar
          </h2>
          <p className="text-muted-foreground mt-3 mb-6 max-w-md mx-auto">
            Chega de buscar em múltiplos sites. Aqui você encontra tudo com qualidade e sem anúncios.
          </p>
          <button
            className="gradient-pink glow-pink text-white font-bold px-8 py-3 rounded-md text-lg hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero Acesso Agora
          </button>
        </div>
      </div>
    </section>
  )
}
