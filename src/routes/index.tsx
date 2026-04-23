import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-buildings.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ordixs — Gestão inteligente para sua empresa" },
      {
        name: "description",
        content:
          "Ordixs é a plataforma corporativa que unifica cadastros, operações, atendimento e comercial com a sofisticação de um produto premium.",
      },
      { property: "og:title", content: "Ordixs — Plataforma corporativa premium" },
      {
        property: "og:description",
        content:
          "Uma única plataforma para conduzir sua empresa com clareza, controle e elegância.",
      },
    ],
  }),
});

const modules = [
  { number: "01", title: "Cadastro", description: "Clientes, fornecedores e equipes em um cadastro unificado e inteligente." },
  { number: "02", title: "Operações", description: "Fluxos automatizados, auditáveis e desenhados para escala." },
  { number: "03", title: "Processamento", description: "Dados em tempo real para decisões precisas e imediatas." },
  { number: "04", title: "Atendimento", description: "Central integrada com histórico completo e métricas claras." },
  { number: "05", title: "Comercial", description: "Pipeline e indicadores estratégicos para acelerar resultados." },
];

const principles = [
  { label: "Segurança", value: "Conformidade total", description: "Criptografia ponta a ponta, LGPD e controles granulares." },
  { label: "Performance", value: "+70% mais ágil", description: "Automações que reduzem tempo de execução em processos críticos." },
  { label: "Centralização", value: "Visão única", description: "Toda a operação em uma interface coerente e silenciosa." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero (dark) */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Arquitetura corporativa contemporânea"
            width={1920}
            height={1280}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
        </div>

        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-8 py-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md border border-gold/40 flex items-center justify-center">
                <span className="text-gold font-medium text-sm tracking-tight">O</span>
              </div>
              <span className="text-base font-medium tracking-tight text-white">Ordixs</span>
            </div>
            <nav className="hidden md:flex items-center gap-10 text-sm font-light text-white/60">
              <a href="#plataforma" className="hover:text-white transition-colors">Plataforma</a>
              <a href="#modulos" className="hover:text-white transition-colors">Módulos</a>
              <a href="#principios" className="hover:text-white transition-colors">Princípios</a>
            </nav>
            <button className="text-sm font-light text-white/80 hover:text-gold transition-colors">
              Acessar
            </button>
          </div>
        </header>

        <div className="container relative z-10 mx-auto px-8 pt-40 pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-10 bg-gold/60" />
              <span className="text-[11px] font-light text-gold tracking-[0.3em] uppercase">
                Plataforma Corporativa
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02] mb-10 text-white">
              Conduza sua empresa
              <br />
              <span className="italic font-extralight text-gold-soft">com clareza absoluta.</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-white/65 max-w-xl mb-14 leading-relaxed">
              Uma plataforma silenciosa que unifica operações, processos e pessoas — desenhada
              para empresas que valorizam excelência.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-deep transition-all hover:bg-gold">
                Começar agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
              <button className="group inline-flex items-center gap-2 text-sm font-light text-white/80 hover:text-gold transition-colors">
                Ver demonstração
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom meta line */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10">
          <div className="container mx-auto px-8 py-6 flex items-center justify-between text-[11px] font-light text-white/40 tracking-wider uppercase">
            <span>Versão 2025</span>
            <span className="hidden md:inline">Confiabilidade · Sofisticação · Performance</span>
            <span>BR</span>
          </div>
        </div>
      </section>

      {/* Manifesto (light) */}
      <section id="plataforma" className="py-32 md:py-48 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-10 bg-gold/80" />
              <span className="text-[11px] font-light text-foreground/50 tracking-[0.3em] uppercase">
                A plataforma
              </span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-foreground mb-12">
              Tecnologia discreta.
              <br />
              <span className="text-foreground/40">Resultados evidentes.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-20">
              <p className="text-lg font-light text-foreground/70 leading-[1.7]">
                Ordixs nasceu para empresas que entendem que a verdadeira sofisticação está
                naquilo que não se nota — fluxos que simplesmente funcionam, decisões que
                acontecem no tempo certo, equipes que operam em sintonia.
              </p>
              <p className="text-lg font-light text-foreground/70 leading-[1.7]">
                Cada detalhe foi pensado para reduzir ruído. Cada interação, para devolver
                tempo. Uma plataforma que se ajusta à maturidade do seu negócio sem impor
                complexidade desnecessária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules (off-white) */}
      <section id="modulos" className="py-32 md:py-44 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-gold/80" />
                <span className="text-[11px] font-light text-foreground/50 tracking-[0.3em] uppercase">
                  Módulos
                </span>
              </div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light tracking-tight text-foreground leading-[1.1] max-w-2xl">
                Cinco módulos.
                <br />
                <span className="text-foreground/40">Uma única operação.</span>
              </h2>
            </div>
            <p className="text-base font-light text-foreground/60 max-w-sm leading-relaxed">
              Tudo o que sua empresa precisa para operar com fluidez, integrado em uma
              única plataforma.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden">
              {modules.map((m) => (
                <div
                  key={m.number}
                  className="group relative bg-card p-10 md:p-12 transition-all hover:bg-background"
                >
                  <div className="flex items-start justify-between mb-16">
                    <span className="text-[11px] font-light text-foreground/40 tracking-[0.2em]">
                      {m.number}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-foreground/30 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="text-2xl font-light tracking-tight mb-4 text-foreground">
                    {m.title}
                  </h3>
                  <p className="text-sm font-light text-foreground/55 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
              {/* Filler card to complete the grid elegantly */}
              <div className="hidden lg:flex bg-card p-10 md:p-12 flex-col justify-end">
                <div className="h-px w-8 bg-gold/60 mb-6" />
                <p className="text-sm font-light text-foreground/50 leading-relaxed">
                  Integrações sob medida e expansão modular conforme sua operação evolui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles (white) */}
      <section id="principios" className="py-32 md:py-48 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-24">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-10 bg-gold/80" />
                <span className="text-[11px] font-light text-foreground/50 tracking-[0.3em] uppercase">
                  Princípios
                </span>
                <div className="h-px w-10 bg-gold/80" />
              </div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light tracking-tight text-foreground leading-[1.1]">
                Construído sobre
                <br />
                <span className="italic font-extralight text-foreground/50">três pilares.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-px md:bg-border/40 md:rounded-2xl md:overflow-hidden">
              {principles.map((p) => (
                <div
                  key={p.label}
                  className="md:bg-background p-10 md:p-14 text-center md:text-left"
                >
                  <p className="text-[11px] font-light text-gold tracking-[0.25em] uppercase mb-8">
                    {p.label}
                  </p>
                  <p className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6 leading-tight">
                    {p.value}
                  </p>
                  <p className="text-sm font-light text-foreground/55 leading-relaxed max-w-xs mx-auto md:mx-0">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA (dark, minimal) */}
      <section className="py-32 md:py-44 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, oklch(0.74 0.1 78 / 0.15), transparent 70%)" }} />
        <div className="container relative mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px w-10 bg-gold/60" />
              <span className="text-[11px] font-light text-gold tracking-[0.3em] uppercase">
                Comece hoje
              </span>
              <div className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-tight leading-[1.1] mb-10">
              Eleve a gestão da
              <br />
              <span className="italic font-extralight text-gold-soft">sua empresa.</span>
            </h2>
            <p className="text-lg font-light text-white/60 max-w-xl mx-auto mb-14 leading-relaxed">
              Junte-se às empresas que escolheram operar com sofisticação.
            </p>
            <button className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy-deep transition-all hover:bg-gold">
              Começar agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep text-white/50 border-t border-white/10">
        <div className="container mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md border border-gold/40 flex items-center justify-center">
                <span className="text-gold font-medium text-sm tracking-tight">O</span>
              </div>
              <span className="font-medium tracking-tight text-white text-base">Ordixs</span>
            </div>
            <div className="flex items-center gap-10 text-xs font-light tracking-wider uppercase">
              <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Termos</a>
              <a href="#" className="hover:text-gold transition-colors">Contato</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-light text-white/30 tracking-wider uppercase">
            <span>© {new Date().getFullYear()} Ordixs</span>
            <span>Plataforma corporativa premium</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
