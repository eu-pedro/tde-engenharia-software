# TDE de Engenharia

Este é um projeto simples desenvolvido como parte de uma atividade acadêmica, utilizando HTML, CSS e JavaScript Vanilla com o auxílio do Vite.

## Integrantes

* Pedro Henrique
* Carlos Geovane
* Luis Gustavo
* Gian Carlos
* Adrysson Rhuan

## Descrição da Atividade

O objetivo principal deste trabalho foi criar uma aplicação web básica e, em seguida, configurar um fluxo de integração contínua utilizando **GitHub Actions**.

O fluxo de trabalho configurado é responsável por:

1.  **Instalar as dependências** do projeto automaticamente sempre que houver um push ou pull request para a branch principal.
2.  **Executar os testes automatizados** (configurados com Vitest) para garantir a integridade do código.

## Como Executar

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