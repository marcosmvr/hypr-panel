import React, { useState } from 'react'
import { Box, Text, useInput } from 'ink'
import { limparCache } from '../commands/limpar-cache.js'
import { listarProcessos } from '../commands/listar-processos.js'
import { ativarVirtualMic } from '../commands/ativar-virtual-mic.js'

const App = () => {
  const [mensagem, setMensagem] = useState(
    'Pressione L para limpar cache da memória RAM | P para listar processos | A para ativar virtual mic | Q para sair',
  )

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
      <Text color="green">Painel de Controle Hyprland</Text>
      <Text>{mensagem}</Text>
      <Text color="grey">
        [L] Limpar cache RAM | [P] Listar processos | [A] Ativar virtual mic |
        [Q] Sair
      </Text>
    </Box>
  )
}

export default App
