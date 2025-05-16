import React, { useState } from 'react'
import { Box, Text, useInput } from 'ink'
import figlet from 'figlet'
import chalk from 'chalk'
import { limparCache } from '../commands/limpar-cache.js'
import { listarProcessos } from '../commands/listar-processos.js'
import { ativarVirtualMic } from '../commands/ativar-virtual-mic.js'

const renderBigText = (text: string, colorHex: string) => {
  const asciiArt = figlet.textSync(text, { font: 'Standard' })
  return chalk.hex(colorHex)(asciiArt)
}

const App = () => {
  const [mensagem, setMensagem] = useState(
    'Pressione L para limpar cache da memória RAM | P para listar processos | A para ativar virtual mic | Q para sair',
  )
  const [titulo] = useState('Hyprland Panel')

  useInput(input => {
    switch (input.toLowerCase()) {
      case 'l':
        setMensagem('Limpando cache da memória RAM...')
        limparCache((error, output) => {
          if (error) setMensagem(`Erro: ${error.message}`)
          else setMensagem(output || '')
        })
        break
      case 'p':
        setMensagem('Listando processos...')
        listarProcessos((error, output) => {
          if (error) setMensagem(`Erro: ${error.message}`)
          else setMensagem(output || 'Nenhum processo listado.')
        })
        break
      case 'a':
        setMensagem('Ativando virtual mic...')
        ativarVirtualMic((error, output) => {
          if (error) setMensagem(`Erro: ${error.message}`)
          else setMensagem(output || '')
        })
        break
      case 'q':
        process.exit()
    }
  })

  return (
    <Box flexDirection="column" padding={1}>
      <Text>{renderBigText(titulo, '#7B68EE')}</Text>

      <Box marginTop={1} marginBottom={1}>
        <Text color="#00BFFF" bold>
          {mensagem}
        </Text>
      </Box>

      <Box>
        <Text color="#9370DB" italic>
          [L] Limpar cache RAM | [P] Listar processos | [A] Ativar virtual mic |
          [Q] Sair
        </Text>
      </Box>

      <Box marginTop={1}>
        <Text color="#555" dimColor>
          Feito por Marcos
        </Text>
      </Box>
    </Box>
  )
}

export default App
