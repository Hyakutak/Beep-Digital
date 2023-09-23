# Beep Digital

Quero começar expressando minha gratidão pela oportunidade que me foi concedida. Também gostaria de compartilhar um pouco sobre a tecnologia que escolhi para este projeto.

Optei por utilizar o framework Next.js para desenvolver a página inicial deste e-commerce em React. Essa escolha foi motivada pela necessidade de oferecer a melhor experiência possível aos usuários.

O Next.js se destaca ao ultrapassar as limitações do modelo de Aplicação de Página Única (SPA), onde a geração da página ocorre no lado do cliente. Esse método às vezes dificulta a indexação eficaz pelo mecanismo de busca do Google. Ao abraçar o Next.js, adotei o modelo de Geração de Site Estático (SSG). Essa abordagem não só simula um servidor para gerar os arquivos antes de entregá-los ao cliente, mas também cria páginas estáticas armazenadas em cache.

Ao aproveitar as funcionalidades de simulação de servidor que essa tecnologia proporciona, tomei a decisão de integrar a API da Stripe. Essa integração viabiliza o acesso aos produtos registrados em minha conta. É importante mencionar que configurei o arquivo .env.local com minhas chaves e tokens para autenticação, garantindo a segurança do processo.

## 👨‍💻 Como utilizar

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/package/npm)

**Siga os passos abaixo**

```bash
# Clone the repository
$ git clone 
# Go into the directory
$ cd beep-digital
# Install the dependencies
$ yarn or npm install
# Run the development server
$ yarn dev or npm run dev