# ☕ Coffee Delivery

> Aplicação web para descoberta e pedido de cafés especiais com entrega rápida — do catálogo à confirmação em três etapas simples.

<div align="center">
  <img alt="coffee-delivery-banner" title="coffee-delivery" src="https://user-images.githubusercontent.com/71772559/178171983-f724d1a7-deb4-4d13-aa92-09e1cac4ec36.png" />
</div>

---

## 🚀 Visão Geral

O **Coffee Delivery** é uma plataforma de e-commerce de cafés que guia o usuário por um fluxo de compra completo: navegação pelo catálogo, montagem do carrinho, preenchimento do endereço, escolha do método de pagamento e confirmação do pedido.

O projeto foi desenvolvido como desafio prático do programa **Ignite** da [Rocketseat](https://rocketseat.com.br/), com foco em aprofundar conceitos avançados do ecossistema React — como Context API, imutabilidade de estado, validação de formulários e roteamento entre páginas.

**Público-alvo:** Amantes de café que buscam uma experiência de pedido rápida e intuitiva.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia |
|--------|-----------|
| **Framework** | React 18 |
| **Linguagem** | TypeScript 4.9 |
| **Build Tool** | Vite 4 |
| **Estilização** | Styled Components 5 |
| **Roteamento** | React Router DOM 6 |
| **Formulários** | React Hook Form 7 |
| **Validação** | Zod 3 |
| **Estado imutável** | Immer 9 |
| **Ícones** | Phosphor React |
| **Utilitários CSS** | Polished |
| **Persistência** | LocalStorage (nativo) |
| **Linting** | ESLint + Rocketseat Config |

---

## 🎯 Principais Funcionalidades

- **Catálogo de cafés** — 14 tipos de café com imagem, tags de categoria, descrição e preço
- **Carrinho de compras** — adicionar, remover e ajustar quantidade de cada item com seletor `+/-`
- **Persistência de sessão** — o carrinho é salvo em `localStorage` e mantido entre recarregamentos
- **Formulário de endereço** — campos de CEP, logradouro, número, complemento, bairro, cidade e UF
- **Métodos de pagamento** — seleção entre Cartão de Crédito, Cartão de Débito e Dinheiro
- **Validação em tempo real** — todos os campos validados via Zod com mensagens de erro inline
- **Resumo do pedido** — exibição dos itens, subtotal, taxa de entrega e total antes de confirmar
- **Tela de confirmação** — detalhes do pedido concluído com endereço, tempo estimado e forma de pagamento
- **Tema consistente** — paleta de cores e tipografia centralizadas com suporte a Baloo 2 e Roboto

---

## 🏗️ Arquitetura

A aplicação é uma **SPA (Single Page Application)** 100% client-side, sem backend.

O fluxo principal é:

```
Home → Checkout → Success
```

O estado global do carrinho é gerenciado pela **Context API** (`CartContext`) com atualizações imutáveis via **Immer**. Todos os componentes que precisam ler ou modificar o carrinho consomem esse contexto pelo hook `useCart()`.

Os dados dos produtos (14 cafés) são estáticos, declarados em `src/data/coffees.ts`. Não há integração com API ou banco de dados externo.

Ao confirmar o pedido na tela de Checkout, os dados do formulário são enviados para a tela de Success via **React Router** (`useLocation` state), sem necessidade de persistência no servidor.

---

## 📂 Estrutura do Projeto

```
Coffee-Delivery/
├── public/
│   └── coffees/            # Imagens dos 14 tipos de café
├── src/
│   ├── @types/             # Declarações de tipos globais (styled-components theme)
│   ├── assets/             # Imagens e SVGs da interface (logo, hero, moto)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── infoWithIcon/
│   │   ├── quantityInput/
│   │   └── Typograph.ts    # Componentes tipográficos (TitleText, RegularText)
│   ├── contexts/
│   │   └── CartContext.tsx # Estado global do carrinho
│   ├── data/
│   │   └── coffees.ts      # Catálogo estático de produtos
│   ├── hooks/
│   │   └── useCart.ts      # Hook de acesso ao CartContext
│   ├── layouts/
│   │   └── DefaultLayout/  # Layout base com Header persistente
│   ├── pages/
│   │   ├── Home/           # Catálogo + apresentação
│   │   ├── Checkout/       # Endereço, pagamento e resumo do carrinho
│   │   └── Success/        # Confirmação do pedido
│   ├── routes/
│   │   └── Router.tsx      # Definição das rotas da aplicação
│   ├── styles/
│   │   ├── global.ts       # Reset e estilos globais
│   │   └── themes/
│   │       └── default.ts  # Tokens de cor e tipografia
│   └── utils/
│       └── formatMoney.ts  # Formatação de moeda (pt-BR)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- NPM 8+ (incluso no Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/JulioAmaral007/Coffee-Delivery.git

# Entre na pasta do projeto
cd Coffee-Delivery

# Instale as dependências
npm install
```

### Execução

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build de Produção

```bash
# Compila TypeScript e gera os arquivos otimizados
npm run build

# Visualiza a build localmente
npm run preview
```

---

## 📦 Catálogo de Produtos

A aplicação conta com **14 tipos de café**, organizados por categorias:

| Categoria | Exemplos |
|-----------|---------|
| **Tradicional** | Expresso, Americano, Cremoso, Gelado |
| **Com Leite** | Café com Leite, Latte, Capuccino, Macchiato, Mocaccino |
| **Especial** | Chocolate Quente, Havaiano, Árabe, Cubano |
| **Alcoólico** | Irlandês |

---

## 🎨 Design

O layout foi desenvolvido a partir do protótipo disponível no Figma:

<a href="https://www.figma.com/file/BooxfyEUUwqll4S1vTcGm8/Coffee-Delivery-(Copy)" target="_blank">
  <img src="https://user-images.githubusercontent.com/71772559/178192253-4fe4757c-de57-4878-a38c-a483c25670b1.png" alt="Layout no Figma" />
</a>

**Fontes:** Baloo 2 (títulos) e Roboto (corpo de texto)

**Paleta principal:** Amarelo (`#DBAC2C`) e Roxo (`#8047F8`) como cores de destaque sobre base neutra clara.

---

## 📈 Melhorias Futuras

- Integração com API de CEP para preenchimento automático do endereço
- Sistema de autenticação e histórico de pedidos por usuário
- Filtro e busca de cafés por categoria ou nome
- Suporte a múltiplos endereços salvos
- Backend com banco de dados para persistência real dos pedidos
- Animações de transição entre as etapas do fluxo

---

## 👨‍💻 Desenvolvedor

**Desenvolvido por:**

- **Júlio Cézar** — [GitHub @JulioAmaral007](https://github.com/JulioAmaral007)

---

## 📚 Contexto

Projeto desenvolvido como **desafio do módulo avançado** do programa **Ignite** (trilha React) da [Rocketseat](https://rocketseat.com.br/). O objetivo foi praticar conceitos como Context API, Immer, React Hook Form, Zod e React Router DOM em uma aplicação de e-commerce completa e funcional.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](.github/LICENSE) para mais detalhes.

---

<div align="center">
  Feito com ♥ por <a href="https://github.com/JulioAmaral007">Júlio Cézar</a>
</div>
