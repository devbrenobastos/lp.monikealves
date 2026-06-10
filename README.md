# Landing Page — Monike Alves

Este projeto foi construído utilizando React 18, Vite, TypeScript e Tailwind CSS v3 para estilo visual, focado em alta qualidade editorial e alinhamento de grid de acordo com o design brief.

## Como rodar o projeto

1. Certifique-se de que possui o [Node.js](https://nodejs.org/) instalado.
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```
4. Para gerar a build de produção:
   ```bash
   npm run build
   ```

## Configurações e Customização

- **Endpoints de envio de formulários**: O formulário de aplicação envia um POST para o endpoint configurado na variável de ambiente `VITE_FORM_ENDPOINT` em um arquivo `.env`. Se nenhuma URL for definida, ele fará fallback automaticamente para um link do WhatsApp com os dados pré-preenchidos.
- **Substituição de Imagens**: 
  - Retrato editorial do Hero: substitua o placeholder em [Hero.tsx](file:///c:/Users/breno/OneDrive/Desktop/Sites/03. Site MonikeAlves/src/sections/Hero.tsx).
  - Retrato split editorial do Sobre: substitua o placeholder em [QuemSouEu.tsx](file:///c:/Users/breno/OneDrive/Desktop/Sites/03. Site MonikeAlves/src/sections/QuemSouEu.tsx).
  - Vídeo de depoimento: substitua o placeholder/thumbnail em [Resultados.tsx](file:///c:/Users/breno/OneDrive/Desktop/Sites/03. Site MonikeAlves/src/sections/Resultados.tsx).

## Lista de pendências a [CONFIRMAR] com a Monike

Durante a implementação, conforme solicitado na especificação, todos os pontos da copy que dependiam de aprovação da cliente foram marcados no código com comentários `{/* CONFIRMAR */}` e mantidos os valores originais:
1. **Prova social do Hero** (quantidade de Dras. atendidas e faturamento gerado).
2. **Resultados e Casos de Sucesso** (Faturamento do Caso 1, 2 e 3).
3. **Seção Quem Sou Eu** (inserir 1-2 frases de cunho pessoal/história da Monike).
4. **Perguntas frequentes (FAQ)** (especificação exata de escopo, tempo de resultado e planos).
