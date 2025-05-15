# Painel de Controle Hyprland

## Descrição

Este projeto é um painel de controle simples e interativo para terminal, desenvolvido em Node.js com React Ink, que permite executar comandos úteis para gerenciar seu sistema Linux de forma rápida e prática.

Ele foi criado para facilitar a execução de tarefas comuns diretamente do terminal, sem a necessidade de abrir múltiplos terminais ou lembrar comandos complexos.

---

## Funcionalidades

- **Limpar cache da memória RAM:** Libera cache da memória para melhorar o desempenho do sistema.
- **Listar processos:** Exibe a lista completa de processos ativos no sistema.
- **Ativar Virtual Microfone:** Carrega módulos do PulseAudio para criar um microfone virtual, útil para streaming, gravações e roteamento de áudio.
- **Sair:** Fecha o painel de controle.

---

## Motivação

Como usuário do Hyprland e entusiasta do Linux, percebi que algumas operações frequentes, como limpeza de cache e gerenciamento rápido de processos, poderiam ser automatizadas para facilitar o dia a dia. Além disso, integrar o controle do virtual mic em um único painel ajuda a economizar tempo e evitar erros ao digitar comandos longos.

Por isso, criei este painel minimalista que oferece essas funções em uma interface simples e acessível via terminal.

---

## Tecnologias Utilizadas

- **Node.js:** Plataforma para execução do JavaScript no servidor/terminal.
- **React Ink:** Biblioteca React para criar interfaces interativas no terminal.
- **Child Process (`exec`):** Para executar comandos shell diretamente do Node.js.
- **PulseAudio:** Sistema de som usado para criar o microfone virtual (via comandos `pactl`).

---

## Como usar

1. Clone este repositório:

   ```bash
   git clone https://github.com/marcosmvr/hypr-panel.git
   cd hypr-panel
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o painel:

   ```bash
   node index.tsx
   ```

4. No painel, pressione as teclas correspondentes para executar as ações:

   - `L` — Limpar cache da memória RAM (pode pedir senha sudo)
   - `P` — Listar processos ativos
   - `A` — Ativar virtual mic
   - `Q` — Sair do programa

---

## Importante

- O comando para limpar cache pode solicitar permissão de sudo. Recomenda-se rodar o painel com sudo para evitar travar a execução.
- O comando de ativação do virtual mic depende do PulseAudio estar instalado e configurado corretamente.
- A listagem de processos pode gerar uma saída longa, que será exibida diretamente no terminal.

---

## Estrutura do Código

- `index.tsx` — Arquivo principal com o componente React Ink que gerencia a interface e captura inputs do usuário.
- Comandos shell são executados via `child_process.exec` e o resultado exibido em tempo real no painel.

---

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções ou novas funcionalidades.

---

## Licença

Este projeto está sob a licença MIT — veja o arquivo LICENSE para mais detalhes.

---
