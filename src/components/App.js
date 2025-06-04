import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import figlet from 'figlet';
import chalk from 'chalk';
import { limparCache } from '../commands/limpar-cache.js';
import { listarProcessos } from '../commands/listar-processos.js';
import { ativarVirtualMic } from '../commands/ativar-virtual-mic.js';
const renderBigText = (text, colorHex) => {
    const asciiArt = figlet.textSync(text, { font: 'Standard' });
    return chalk.hex(colorHex)(asciiArt);
};
const App = () => {
    const [mensagem, setMensagem] = useState('Pressione L para limpar cache da memória RAM | P para listar processos | A para ativar virtual mic | Q para sair');
    const [titulo] = useState('Hyprland Panel');
    useInput(input => {
        switch (input.toLowerCase()) {
            case 'l':
                setMensagem('Limpando cache da memória RAM...');
                limparCache((error, output) => {
                    if (error)
                        setMensagem(`Erro: ${error.message}`);
                    else
                        setMensagem(output || '');
                });
                break;
            case 'p':
                setMensagem('Listando processos...');
                listarProcessos((error, output) => {
                    if (error)
                        setMensagem(`Erro: ${error.message}`);
                    else
                        setMensagem(output || 'Nenhum processo listado.');
                });
                break;
            case 'a':
                setMensagem('Ativando virtual mic...');
                ativarVirtualMic((error, output) => {
                    if (error)
                        setMensagem(`Erro: ${error.message}`);
                    else
                        setMensagem(output || '');
                });
                break;
            case 'q':
                process.exit();
        }
    });
    return (React.createElement(Box, { flexDirection: "column", padding: 1 },
        React.createElement(Text, null, renderBigText(titulo, '#7B68EE')),
        React.createElement(Box, { marginTop: 1, marginBottom: 1 },
            React.createElement(Text, { color: "#00BFFF", bold: true }, mensagem)),
        React.createElement(Box, null,
            React.createElement(Text, { color: "#9370DB", italic: true }, "[L] Limpar cache RAM | [P] Listar processos | [A] Ativar virtual mic | [Q] Sair")),
        React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: "#555", dimColor: true }, "Feito por Marcos"))));
};
export default App;
