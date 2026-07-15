# DevClub Institutional Landing (Fictício)

Landing page institucional fictícia criada para desafio técnico de contratação full-stack, com foco em animações suaves, visual dark elegante e arquitetura componentizada.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- tsParticles
- React CountUp

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new).
3. Importe o repositório.
4. Mantenha as configurações padrão do Next.js.
5. Clique em **Deploy**.

## Estrutura principal

- `app/layout.tsx`: layout global, fontes e cursor customizado.
- `app/page.tsx`: composição da landing com todas as seções.
- `app/globals.css`: tema dark, utilitários de glassmorphism, scrollbar e animações CSS.
- `components/`: seções e componentes reutilizáveis (modais, reveal, botão ripple, header, etc).
- `DESIGN_CHOICES.md`: racional detalhado de design e animação.

## Observações

- Todo conteúdo e dados são fictícios (logos, depoimentos, empresas e perfis).
- O projeto foi pensado para causar impacto visual sem perder legibilidade e conforto.
