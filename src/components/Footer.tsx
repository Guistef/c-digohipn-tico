import { Shield, Lock, CreditCard } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Shield className="w-4 h-4" />
            Compra Segura
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Lock className="w-4 h-4" />
            SSL Certificado
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <CreditCard className="w-4 h-4" />
            Pagamento Seguro
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-1 mb-4">
          <span className="text-primary text-xl">▶</span>
          <span className="font-bold text-primary text-lg">DRAMAS</span>
          <span className="font-bold text-foreground text-lg">PRIME</span>
          <span className="text-xs text-muted-foreground ml-1">2026</span>
        </div>

        {/* Copyright */}
        <p className="text-center text-muted-foreground text-sm mb-4">
          © 2026 Dramas Prime. Todos os direitos reservados.
        </p>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed">
          Dramas Prime é uma plataforma de streaming de entretenimento asiático. Todo o conteúdo é fornecido
          para visualização pessoal dos assinantes. Ao assinar, você concorda com nossos Termos de Uso e
          Política de Privacidade. Garantia de 7 dias ou seu dinheiro de volta.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Termos de Uso
          </a>
          <span className="text-border">·</span>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Privacidade
          </a>
          <span className="text-border">·</span>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </div>
      </div>
    </footer>
  )
}
