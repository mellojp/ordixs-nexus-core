import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Check,
  Cpu,
  Database,
  Headset,
  Workflow,
} from "lucide-react";
import heroImage from "@/assets/hero-buildings.jpg";
import logoImage from "@/assets/logo.png";
import differentialInterfaceImage from "@/assets/differential-interface.png";
import differentialModularImage from "@/assets/differential-modular.png";
import differentialIntelligenceImage from "@/assets/differential-intelligence.png";
import differentialImplementationImage from "@/assets/differential-implementation.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const viewportOnce = { once: true, amount: 0.22 };
const smoothTransition = { duration: 0.55, ease: "easeOut" };

const modules = [
  {
    number: "01",
    title: "Cadastro",
    description: "Clientes, fornecedores e equipes em um cadastro unificado e inteligente.",
    icon: Database,
    accent: "Base unificada",
    preview:
      "Centraliza os registros essenciais da operação e mantém cada relacionamento com histórico, contexto e dados consistentes.",
    details: ["Clientes e fornecedores", "Equipes e permissões", "Histórico cadastral"],
  },
  {
    number: "02",
    title: "Operações",
    description: "Fluxos automatizados, auditáveis e desenhados para escala.",
    icon: Workflow,
    accent: "Orquestração contínua",
    preview:
      "Organiza rotinas recorrentes, distribui responsabilidades e torna cada etapa acompanhável sem depender de controles paralelos.",
    details: ["Fluxos e etapas", "Responsáveis por processo", "Auditoria operacional"],
  },
  {
    number: "03",
    title: "Processamento",
    description: "Dados em tempo real para decisões precisas e imediatas.",
    icon: Cpu,
    accent: "Leitura em tempo real",
    preview:
      "Processa informações críticas da empresa para transformar registros dispersos em leituras acionáveis e indicadores confiáveis.",
    details: ["Consolidação de dados", "Indicadores em tempo real", "Regras de processamento"],
  },
  {
    number: "04",
    title: "Atendimento",
    description: "Central integrada com histórico completo e métricas claras.",
    icon: Headset,
    accent: "Contato com contexto",
    preview:
      "Reúne interações, solicitações e contexto do cliente para que o atendimento seja mais rápido, preciso e rastreável.",
    details: ["Histórico de contato", "Solicitações e retornos", "Métricas de atendimento"],
  },
  {
    number: "05",
    title: "Comercial",
    description: "Pipeline e indicadores estratégicos para acelerar resultados.",
    icon: BriefcaseBusiness,
    accent: "Receita com visibilidade",
    preview:
      "Dá visibilidade ao funil comercial, acompanha oportunidades e conecta ações de venda aos indicadores da operação.",
    details: ["Pipeline comercial", "Oportunidades e propostas", "Indicadores de receita"],
  },
];

const plans = [
  {
    name: "Essencial",
    audience: "Estruturação",
    tagline: "Para empresas em estruturação",
    summary: "Base ideal para organizar processos centrais com implantação rápida e baixo atrito.",
    outcome: "Operação inicial padronizada e pronta para crescer com segurança.",
    features: [
      "Módulos de cadastro e operações",
      "Até 10 usuários ativos",
      "Suporte em horário comercial",
      "Onboarding guiado",
    ],
  },
  {
    name: "Corporativo",
    audience: "Escala",
    tagline: "Para operações em escala",
    summary:
      "Camada completa para empresas que já exigem integração ampla, governança e velocidade.",
    outcome: "Mais fluidez operacional com visão consolidada entre áreas.",
    features: [
      "Todos os módulos integrados",
      "Usuários ilimitados",
      "Suporte prioritário 12×6",
      "Integrações personalizadas",
    ],
    featured: true,
  },
  {
    name: "Sob medida",
    audience: "Complexidade",
    tagline: "Para grupos e operações complexas",
    summary:
      "Modelo consultivo para grupos que precisam de arquitetura dedicada e desenho específico.",
    outcome: "Adoção com aderência máxima aos requisitos operacionais e contratuais.",
    features: [
      "Arquitetura dedicada",
      "SLA contratual personalizado",
      "Gerente de conta exclusivo",
      "Consultoria estratégica",
    ],
  },
];

const differentials = [
  {
    title: "Interface intuitiva",
    description:
      "Uma experiência desenhada para transformar rotinas complexas em jornadas claras, com leitura rápida, ações previsíveis e menos ruído para quem opera todos os dias.",
    supporting:
      "Cada tela prioriza contexto, foco e continuidade, ajudando equipes a trabalhar com mais precisão sem depender de treinamentos extensos ou processos paralelos.",
    image: differentialInterfaceImage,
  },
  {
    title: "Arquitetura modular",
    description:
      "A estrutura acompanha o ritmo da operação: comece pelo essencial, ative novos módulos quando fizer sentido e evolua sem reconstruir processos do zero.",
    supporting:
      "O crescimento acontece por camadas, preservando consistência entre áreas e evitando que a expansão da empresa se transforme em complexidade operacional.",
    image: differentialModularImage,
  },
  {
    title: "Inteligência operacional",
    description:
      "Indicadores, automações e leituras contextuais trabalham em conjunto para revelar prioridades, antecipar gargalos e sustentar decisões com mais precisão.",
    supporting:
      "A operação deixa de depender apenas de percepção individual e passa a contar com sinais objetivos para coordenar equipes, prazos e resultados.",
    image: differentialIntelligenceImage,
  },
  {
    title: "Implantação assistida",
    description:
      "A adoção é conduzida com método, proximidade e clareza, respeitando a maturidade da empresa e reduzindo atrito durante a transição.",
    supporting:
      "Do mapeamento inicial aos ajustes finais, o processo é orientado para aderência real à rotina, garantindo avanço seguro sem interromper a operação.",
    image: differentialImplementationImage,
  },
];

function Index() {
  const [selectedPlan, setSelectedPlan] = useState(plans.find((plan) => plan.featured) ?? plans[0]);
  const [expandedModule, setExpandedModule] = useState(modules[0].number);
  const [differentialsApi, setDifferentialsApi] = useState<CarouselApi>();
  const [activeDifferential, setActiveDifferential] = useState(0);

  useEffect(() => {
    if (!differentialsApi) {
      return;
    }

    const updateCurrentSlide = () => {
      setActiveDifferential(differentialsApi.selectedScrollSnap());
    };

    updateCurrentSlide();
    differentialsApi.on("select", updateCurrentSlide);
    differentialsApi.on("reInit", updateCurrentSlide);

    return () => {
      differentialsApi.off("select", updateCurrentSlide);
      differentialsApi.off("reInit", updateCurrentSlide);
    };
  }, [differentialsApi]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Arquitetura corporativa contemporânea"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
        </div>

        <header className="absolute left-0 right-0 top-0 z-20 border-b border-white/8 bg-white/4 backdrop-blur-md">
          <div className="container mx-auto flex items-center gap-6 px-6 py-5 md:px-8">
            <a href="#" aria-label="Ordixs" className="shrink-0">
              <img src={logoImage} alt="Ordixs" className="h-8 w-auto md:h-9" />
            </a>

            <nav className="ml-auto hidden items-center justify-end gap-10 text-sm font-light text-white/65 md:flex">
              <a href="#plataforma" className="transition-colors hover:text-white">
                Plataforma
              </a>
              <a href="#modulos" className="transition-colors hover:text-white">
                Módulos
              </a>
              <a href="#planos" className="transition-colors hover:text-white">
                Planos
              </a>
            </nav>
          </div>
        </header>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="container relative z-10 mx-auto px-8 pb-24 pt-36 md:pb-28 md:pt-40"
        >
          <motion.div variants={fadeUp} transition={smoothTransition} className="max-w-4xl">
            <div className="mb-12 flex items-center gap-3">
              <div className="h-px w-10 bg-gold/60" />
              <span className="text-[11px] font-light uppercase tracking-[0.3em] text-gold">
                Plataforma Corporativa
              </span>
            </div>
            <h1 className="mb-10 text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02] text-white">
              Conduza sua empresa
              <br />
              <span className="font-extralight italic text-gold-soft">com clareza absoluta.</span>
            </h1>
            <p className="mb-14 max-w-xl text-lg font-light leading-relaxed text-white/65 md:text-xl">
              Uma plataforma que unifica operações, processos e pessoas, desenhada para empresas que
              valorizam excelência.
            </p>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="https://portal.ordixs.com.br/login"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-deep transition-all hover:bg-gold"
              >
                Acessar sistema
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
              <button className="group inline-flex items-center gap-2 text-sm font-light text-white/80 transition-colors hover:text-gold">
                Conversar com consultor
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="plataforma" className="relative overflow-hidden bg-background py-32 md:py-48">
        {/* <div
          className="pointer-events-none absolute left-[-10%] top-[-35%] hidden h-[170%] w-[82%] rounded-[10rem] blur-[2px] md:block"
          style={{
            background: "oklch(0.96 0.018 94)",
            transform: "rotate(-37deg)",
          }}
        /> */}
        <div className="container mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={smoothTransition}
            className="relative z-10 mx-auto max-w-4xl"
          >
            <div className="mb-12 flex items-center gap-3">
              <div className="h-px w-10 bg-gold/80" />
              <span className="text-[11px] font-light uppercase tracking-[0.3em] text-foreground/50">
                A plataforma
              </span>
            </div>
            <h2 className="mb-12 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-foreground">
              Tecnologia discreta.
              <br />
              <span className="text-foreground/40">Resultados evidentes.</span>
            </h2>
            <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
              <p className="text-lg font-light leading-[1.7] text-foreground/70">
                Ordixs nasceu para empresas que entendem que a verdadeira sofisticação está naquilo
                que não se nota: fluxos que simplesmente funcionam, decisões que acontecem no tempo
                certo, equipes que operam em sintonia.
              </p>
              <p className="text-lg font-light leading-[1.7] text-foreground/70">
                Cada detalhe foi pensado para reduzir ruído. Cada interação, para devolver tempo.
                Uma plataforma que se ajusta à maturidade do seu negócio sem impor complexidade
                desnecessária.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="modulos" className="border-y border-border/60 bg-surface py-32 md:py-44">
        <div className="container mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={smoothTransition}
            className="mx-auto mb-20 flex max-w-6xl flex-col gap-8 md:mb-28 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-gold/80" />
                <span className="text-[11px] font-light uppercase tracking-[0.3em] text-foreground/50">
                  Módulos
                </span>
              </div>
              <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-tight text-foreground">
                Múltiplos módulos.
                <br />
                <span className="text-foreground/40">Uma única operação.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base font-light leading-relaxed text-foreground/60">
              Tudo o que sua empresa precisa para operar com fluidez, integrado em uma única
              plataforma.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[var(--shadow-card)]"
          >
            {modules.map((module) => {
              const isExpanded = expandedModule === module.number;

              return (
                <motion.article
                  key={module.number}
                  layout="position"
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="border-b border-border/60 last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedModule(isExpanded ? "" : module.number)}
                    className={`group grid w-full gap-6 p-8 text-left transition-colors md:grid-cols-[0.3fr_1fr_0.24fr] md:items-center md:p-9 ${
                      isExpanded ? "bg-surface" : "hover:bg-surface/70"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background text-gold transition-colors ${
                          isExpanded
                            ? "border-gold/25"
                            : "border-border/70 group-hover:border-gold/25"
                        }`}
                      >
                        <module.icon className="h-4 w-4" strokeWidth={1.45} />
                      </span>
                      <h3 className="text-2xl font-light tracking-tight text-foreground">
                        {module.title}
                      </h3>
                    </div>

                    <p className="text-sm font-light leading-7 text-foreground/58">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-between gap-4 md:justify-end">
                      <p className="text-[10px] font-light uppercase tracking-[0.24em] text-gold/90 md:text-right">
                        {module.accent}
                      </p>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-foreground/28 transition-all duration-300 group-hover:text-gold ${
                          isExpanded ? "rotate-180 text-gold" : ""
                        }`}
                        strokeWidth={1.35}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.42, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/50 bg-background/45 px-8 pb-8 pt-7 md:px-9 md:pb-9">
                          <div className="grid gap-8 rounded-[1.25rem] border border-border/60 bg-card/70 p-6 md:grid-cols-[1fr_0.9fr] md:p-7">
                            <div>
                              <p className="mb-4 text-[10px] font-light uppercase tracking-[0.24em] text-gold/90">
                                Preview do módulo
                              </p>
                              <p className="max-w-2xl text-sm font-light leading-7 text-foreground/62">
                                {module.preview}
                              </p>
                            </div>

                            <div>
                              <p className="mb-4 text-[10px] font-light uppercase tracking-[0.24em] text-foreground/34">
                                Principais frentes
                              </p>
                              <div className="flex flex-wrap gap-2.5">
                                {module.details.map((detail) => (
                                  <span
                                    key={detail}
                                    className="rounded-full border border-border/70 bg-background px-3.5 py-2 text-xs font-light text-foreground/60"
                                  >
                                    {detail}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="diferenciais" className="bg-background py-32 md:py-44">
        <div className="container mx-auto mb-20 px-8 md:mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={smoothTransition}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-gold/80" />
              <span className="text-[11px] font-light uppercase tracking-[0.3em] text-foreground/50">
                Diferenciais
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-tight text-foreground">
              O que torna o Ordixs
              <br />
              <span className="font-extralight italic text-foreground/50">incomparável.</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-8">
          <Carousel
            setApi={setDifferentialsApi}
            opts={{ align: "start", loop: true }}
            className="group w-full"
          >
            <CarouselContent className="-ml-0">
              {differentials.map((differential) => (
                <CarouselItem key={differential.title} className="pl-0">
                  <article className="relative min-h-[34rem] overflow-hidden border-y border-border/60 bg-navy-deep text-white md:min-h-[42rem]">
                    <img
                      src={differential.image}
                      alt={differential.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/28 via-navy-deep/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-[78%] bg-gradient-to-r from-navy-deep/90 via-navy-deep/68 to-transparent md:w-[62%]" />

                    <div className="relative grid min-h-[34rem] md:min-h-[42rem] md:grid-cols-[0.42fr_0.58fr]">
                      <div className="flex min-h-[34rem] items-center py-12 pl-24 pr-8 md:min-h-[42rem] md:py-16 md:pl-28 md:pr-12 lg:pl-32">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={viewportOnce}
                          variants={fadeUp}
                          transition={smoothTransition}
                          className="max-w-[31rem] space-y-8"
                        >
                          <h3 className="text-[clamp(2.35rem,4.2vw,4.35rem)] font-light leading-[0.98] tracking-tight text-white">
                            {differential.title}
                          </h3>

                          <div className="h-px w-16 bg-gold/55" />

                          <p className="text-[1.05rem] font-light leading-8 text-white/74 md:text-[1.16rem] md:leading-9">
                            {differential.description}
                          </p>

                          <p className="text-[0.95rem] font-light leading-8 text-white/52 md:text-[1rem]">
                            {differential.supporting}
                          </p>
                        </motion.div>
                      </div>
                      <div className="hidden md:block" />
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="!left-4 !top-1/2 z-10 h-12 w-12 rounded-none border border-white/12 bg-white/8 text-white/65 shadow-none backdrop-blur-md transition-colors hover:bg-white/14 hover:text-white md:!left-6 md:h-14 md:w-14" />
            <CarouselNext className="!right-4 !top-1/2 z-10 h-12 w-12 rounded-none border border-white/12 bg-white/8 text-white/65 shadow-none backdrop-blur-md transition-colors hover:bg-white/14 hover:text-white md:!right-6 md:h-14 md:w-14" />
          </Carousel>

          <div className="container mx-auto flex justify-center px-8">
            <div className="flex items-center gap-3">
              {differentials.map((differential, index) => {
                const isActive = index === activeDifferential;

                return (
                  <motion.button
                    layout
                    key={differential.title}
                    type="button"
                    onClick={() => differentialsApi?.scrollTo(index)}
                    aria-label={`Ir para ${differential.title}`}
                    whileHover={{ scaleX: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className={`h-[2px] rounded-full transition-all duration-300 ${
                      isActive ? "w-16 bg-gold" : "w-8 bg-foreground/14 hover:bg-foreground/25"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="border-y border-border/60 bg-surface-muted py-32 md:py-44">
        <div className="container mx-auto px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={smoothTransition}
              className="mb-20 grid gap-10 md:mb-24 md:grid-cols-[0.95fr_1.05fr] md:items-end"
            >
              <div>
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-px w-10 bg-gold/80" />
                  <span className="text-[11px] font-light uppercase tracking-[0.3em] text-foreground/50">
                    Modalidades
                  </span>
                </div>
                <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.65rem)] font-light leading-[1.08] tracking-tight text-foreground">
                  Estrutura clara.
                  <br />
                  <span className="font-extralight italic text-foreground/45">
                    Evolução sem excesso.
                  </span>
                </h2>
              </div>
              <p className="max-w-xl text-base font-light leading-[1.8] text-foreground/58 md:justify-self-end">
                Três formatos para diferentes estágios da operação. Todos mantêm a mesma base de
                clareza, suporte e consistência visual, variando apenas em profundidade, escala e
                nível de personalização.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={stagger}
                className="grid gap-5 lg:grid-cols-3"
              >
                {plans.map((plan) => {
                  const isSelected = selectedPlan.name === plan.name;

                  return (
                    <motion.button
                      key={plan.name}
                      variants={fadeUp}
                      transition={smoothTransition}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.99 }}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedPlan(plan)}
                      className={`group relative flex min-h-[30rem] flex-col rounded-[1.75rem] border p-8 text-left shadow-[var(--shadow-card)] transition-all duration-300 md:p-10 ${
                        isSelected
                          ? "border-gold/35 bg-surface shadow-[var(--shadow-card-hover)]"
                          : "border-border/70 bg-card hover:border-gold/20 hover:bg-surface/70"
                      }`}
                    >
                      <div
                        className={`absolute inset-y-8 left-0 w-px transition-colors duration-300 md:inset-y-10 ${
                          isSelected ? "bg-gold" : "bg-transparent group-hover:bg-gold/35"
                        }`}
                      />

                      <p className="mb-5 text-[10px] font-light uppercase tracking-[0.26em] text-gold/90">
                        {plan.audience}
                      </p>
                      <h3 className="mb-6 text-3xl font-light tracking-tight text-foreground">
                        {plan.name}
                      </h3>
                      <p className="mb-10 text-sm font-light leading-7 text-foreground/58">
                        {plan.summary}
                      </p>

                      <ul className="mt-auto space-y-4 border-t border-border/60 pt-7">
                        {plan.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.45} />
                            <span className="text-sm font-light leading-relaxed text-foreground/62">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.button>
                  );
                })}
              </motion.div>

              <div className="flex flex-col gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedPlan.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="max-w-2xl text-sm font-light leading-7 text-foreground/58"
                  >
                    Seleção atual: <span className="text-foreground">{selectedPlan.name}</span>.{" "}
                    {selectedPlan.outcome}
                  </motion.p>
                </AnimatePresence>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex w-fit items-center gap-3 rounded-full border border-border/70 bg-card px-6 py-3 text-sm font-light text-foreground shadow-[var(--shadow-card)] transition-all hover:border-gold/35 hover:text-gold"
                >
                  Encaminhar proposta
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-deep py-32 text-white md:py-48">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.74 0.1 78 / 0.18), transparent 70%)",
          }}
        />
        <div className="container relative mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={smoothTransition}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-10 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold/60" />
              <span className="text-[11px] font-light uppercase tracking-[0.3em] text-gold">
                Comece hoje
              </span>
              <div className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="mb-10 text-[clamp(2.25rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-tight">
              A próxima geração da
              <br />
              <span className="font-extralight italic text-gold-soft">gestão corporativa.</span>
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-lg font-light leading-relaxed text-white/60">
              Agende uma demonstração privada e descubra como o Ordixs eleva o padrão operacional da
              sua empresa.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy-deep transition-all hover:bg-gold"
              >
                Agendar demonstração
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </motion.button>
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 text-sm font-light text-white/80 transition-colors hover:text-gold"
              >
                Falar com consultor
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-navy-deep text-white/50">
        <div className="container mx-auto px-8 py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <a href="#" aria-label="Ordixs" className="shrink-0">
              <img src={logoImage} alt="Ordixs" className="h-8 w-auto opacity-95" />
            </a>
            <div className="flex items-center gap-10 text-xs font-light uppercase tracking-wider">
              <a href="#" className="transition-colors hover:text-gold">
                Privacidade
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                Termos
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                Contato
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[11px] font-light uppercase tracking-wider text-white/30 md:flex-row">
            <span>© {new Date().getFullYear()} Ordixs</span>
            <span>Plataforma corporativa premium</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
