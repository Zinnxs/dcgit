# DESIGN_CHOICES

## Conceito
A página foi desenhada para causar o “UAU” imediato sem agressividade: estética dark suave com pontos vibrantes controlados, bastante profundidade visual, glassmorphism e microinterações em praticamente todos os elementos.

## Paleta e atmosfera
- Fundo principal: `#0B0E14` com gradientes radiais suaves.
- Roxo acinzentado: `#8B5CF6` para glow e identidade.
- Ciano suave: `#06B6D4` para destaque e feedback interativo.
- Dourado pastel: `#F59E0B` para CTAs e pontos de conversão.

A intenção foi equilibrar energia e conforto visual, evitando neon duro e contraste cansativo.

## Tipografia e hierarquia
- Fonte global: **Inter**, para leitura limpa e aparência moderna.
- Títulos com `font-bold` e `tracking-tight` para impacto.
- Corpo com tons `slate-300` para legibilidade em dark mode.

## Sistema de componentes
A arquitetura foi separada por seções (`HeroSection`, `AboutSection`, `FormationsSection`, etc.) e blocos reutilizáveis:
- `Reveal`: padrão unificado de animação de entrada no scroll.
- `RippleButton`: CTA reutilizável com ripple e scale.
- `GlassModal`: modal padrão com spring, ESC e clique externo.

Isso reduz duplicação e facilita manutenção/evolução.

## Animações e microinterações
- **Scroll reveal** com Framer Motion em todas as seções.
- **Paralaxe** no hero usando `useScroll` + `useTransform`.
- **Partículas interativas** com `@tsparticles/react` no hero.
- **Header responsivo ao scroll** com blur e sombra.
- **Progress bar** global no topo conforme scroll.
- **Cards** com hover vertical, rotação leve e sombra colorida.
- **Botões** com ripple no clique e pulso suave em CTAs principais.
- **Depoimentos** em trilho horizontal com snap + drag + setas.
- **Switch Antes/Depois** com transição `AnimatePresence`.
- **Cards de tutores** com flip 3D + modal de perfil.
- **Contadores animados** com `react-countup` ao entrar na viewport.

## Decisões de UX
- Conteúdo distribuído em blocos curtos para escaneabilidade.
- Navegação superior clara com links centrais e CTAs à direita.
- Ações importantes repetidas estrategicamente (hero + CTA final).
- Padrão visual consistente (rounded-2xl/3xl, bordas finas, vidro).

## Performance e pragmatismo
- Efeitos visuais com boa relação impacto/custo (Framer + partículas leves).
- Reuso de componentes para reduzir complexidade.
- Conteúdo fictício estruturado em `components/data.ts`, facilitando edição.
