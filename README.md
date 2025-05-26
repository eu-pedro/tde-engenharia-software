# TDE de Engenharia de Software

Este projeto foi desenvolvido como parte de uma atividade acadêmica, utilizando **HTML, CSS e JavaScript Vanilla** com o auxílio do **Vite** para um ambiente de desenvolvimento moderno e otimizado.

---

## Integrantes

* Pedro Henrique
* Carlos Geovane
* Luis Gustavo
* Gian Carlos
* Adrysson Rhuan

---

## Descrição da Atividade e Requisitos Atendidos

O objetivo principal deste trabalho foi criar uma aplicação web básica e, em seguida, configurar um fluxo robusto de **Integração Contínua (CI)** e **Deploy Contínuo (CD)** utilizando **GitHub Actions** e **Vercel**, conforme os requisitos da disciplina:

### ✅ Requisitos Obrigatórios

* **Projeto com `README.md` explicando a atividade:** Este próprio arquivo detalha a atividade e a estrutura do projeto.
* **Código fonte simples:** A aplicação consiste em um projeto web básico em HTML/CSS/JS puro.
* **Estrutura de branches (`main`, `dev`) bem definidas:** O fluxo de trabalho segue as branches `main` (para produção) e `dev` (para desenvolvimento e novas funcionalidades).
* **Arquivo `.github/workflows/ci.yml` funcional:** Um pipeline de CI/CD está configurado no arquivo `ci.yml`, executando as seguintes etapas automaticamente a cada `push` ou `pull request` para a branch `main`:
    1.  **Instalação de Dependências:** `pnpm install --frozen-lockfile` garante que todas as dependências do projeto sejam instaladas de forma consistente.
    2.  **Execução de Validação/Testes:** `pnpm run test` executa os testes unitários configurados com Vitest, garantindo a integridade e funcionalidade do código.
    3.  **Build da Aplicação:** `pnpm run build` compila o projeto para uma versão otimizada pronta para deploy.
* **Build/validação automática ao fazer push ou pull request para a `main`:** Conforme descrito acima, o workflow de CI/CD é acionado automaticamente em pushes e pull requests para a `main`, garantindo que o código seja sempre validado e construído.

### 🚀 Critérios Extras (Bônus)

* **Deploy automático configurado:** O projeto possui **Deploy Contínuo (CD)** configurado na plataforma **Vercel**. A cada `push` na branch `main`, a Vercel é automaticamente acionada para criar um novo build e publicar a versão mais recente da aplicação.

---

## Deploy da Aplicação

A versão mais recente da aplicação está automaticamente publicada e pode ser acessada através do seguinte link:

**[https://tde-engenharia-software.vercel.app/](https://tde-engenharia-software.vercel.app/)**

---

## Como Executar o Projeto Localmente

Para clonar o repositório e rodar o projeto em sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DA_PASTA_DO_PROJETO>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Para rodar em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Acesse o endereço fornecido no terminal (geralmente `http://localhost:5173/`).

4.  **Para rodar os testes:**
    ```bash
    npm run test
    ```