import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Settings,
  Cpu,
  Headphones,
  TrendingUp,
  Shield,
  Zap,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-buildings.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ordixs — Gestão inteligente para sua empresa" },
      {
        name: "description",
        content:
          "Ordixs é o SaaS corporativo que centraliza cadastros, operações, processamento, atendimento e comercial em uma única plataforma elegante e segura.",
      },
      { property: "og:title", content: "Ordixs — Gestão inteligente para sua empresa" },
      {
        property: "og:description",
        content:
          "Centralize operações, processos e atendimento da sua empresa em uma plataforma sofisticada.",
      },
    ],
  }),
});

const features = [
  {
    icon: Users,
    title: "Cadastro",
    description:
      "Gerencie clientes, fornecedores e colaboradores com um cadastro unificado e inteligente.",
  },
  {
    icon: Settings,
    title: "Operações",
    description: "Controle total das operações diárias com fluxos automatizados e auditáveis.",
  },
  {
    icon: Cpu,
    title: "Processamento",
    description: "Processamento robusto de dados em tempo real, garantindo agilidade nas decisões.",
  },
  {
    icon: Headphones,
    title: "Atendimento",
    description:
      "Central de atendimento integrada com histórico completo e métricas de desempenho.",
  },
  {
    icon: TrendingUp,
    title: "Comercial",
    description:
      "Pipeline comercial completo com indicadores estratégicos para acelerar resultados.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Criptografia de ponta, controle granular de acessos e conformidade com LGPD.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Processos otimizados e automações que reduzem o tempo de execução em até 70%.",
  },
  {
    icon: Layers,
    title: "Centralização",
    description: "Toda a operação da sua empresa em um único lugar, com visão integrada.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero (dark) */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Prédios corporativos modernos ao entardecer"
            width={1920}
            height={1280}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>

        {/* Header inside hero */}
        <header className="absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center shadow-[var(--shadow-gold)]">
                <span className="text-navy-deep font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">Ordixs</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#funcionalidades" className="hover:text-gold transition-colors">
                Funcionalidades
              </a>
              <a href="#sobre" className="hover:text-gold transition-colors">
                Sobre
              </a>
              <a href="#beneficios" className="hover:text-gold transition-colors">
                Benefícios
              </a>
            </nav>
            <button className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:border-gold hover:text-gold transition-all">
              Entrar
            </button>
          </div>
        </header>

        <div className="container relative z-10 mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-medium text-gold-soft tracking-wider uppercase">
                Plataforma Corporativa
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-white">
              Gestão inteligente
              <br />
              <span className="bg-gradient-to-r from-gold to-gold-soft bg-clip-text text-transparent">
                para sua empresa
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed">
              Centralize e controle todas as operações do seu negócio em uma única plataforma.
              Cadastros, processos, atendimento e comercial integrados com sofisticação e
              segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-navy-deep transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-gold)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                Começar agora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-all">
                Ver demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features (white) */}
      <section id="funcionalidades" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">
              Funcionalidades
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Tudo que sua empresa precisa em um só lugar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Módulos integrados que cobrem todo o ciclo operacional do seu negócio com
              eficiência e elegância.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-gold/30"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border mb-6 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all">
                  <feature.icon className="h-5 w-5 text-foreground group-hover:text-gold transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About (off-white) */}
      <section id="sobre" className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">
                Sobre o sistema
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-foreground">
                Eficiência, organização e controle em cada detalhe
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                O Ordixs foi desenvolvido para empresas que valorizam excelência operacional.
                Com uma interface refinada e tecnologia de ponta, transformamos a complexidade
                do dia a dia corporativo em decisões claras e ações rápidas.
              </p>
              <ul className="space-y-4">
                {[
                  "Visão 360° de todas as operações em tempo real",
                  "Relatórios estratégicos com inteligência analítica",
                  "Automações que eliminam tarefas repetitivas",
                  "Suporte dedicado e onboarding personalizado",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gold/10 blur-3xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl bg-surface border border-border p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Operações
                    </p>
                    <p className="text-3xl font-bold text-foreground">98.7%</p>
                    <p className="text-xs text-muted-foreground mt-1">Disponibilidade</p>
                  </div>
                  <div className="rounded-xl bg-surface border border-border p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Processos
                    </p>
                    <p className="text-3xl font-bold text-foreground">+12k</p>
                    <p className="text-xs text-muted-foreground mt-1">Por dia</p>
                  </div>
                </div>
                <div className="rounded-xl bg-surface border border-border p-5 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-foreground">Performance mensal</p>
                    <span className="text-xs font-semibold text-gold">+24%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 50, 75, 60, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: "var(--gradient-gold)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-surface border border-border p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Centralização ativa</p>
                      <p className="text-xs text-muted-foreground mt-1">Todos os módulos</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits (white) */}
      <section id="beneficios" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">
              Benefícios
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Por que escolher o Ordixs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Construído para empresas que não aceitam menos do que o melhor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-gold/30 transition-all"
              >
                <div
                  className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-[var(--shadow-gold)]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <b.icon className="h-7 w-7 text-navy-deep" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (off-white card on white) */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 md:p-16 text-center shadow-[var(--shadow-elegant)]">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-navy-deep/5 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                Eleve a gestão da sua empresa
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Junte-se às empresas que já transformaram suas operações com o Ordixs.
              </p>
              <button
                className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-navy-deep transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-gold)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                Começar agora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (dark) */}
      <footer className="bg-navy-deep text-white/70 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center">
                <span className="text-navy-deep font-bold">O</span>
              </div>
              <span className="font-semibold tracking-tight text-white">Ordixs</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Ordixs. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-gold transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
