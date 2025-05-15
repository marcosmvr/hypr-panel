import { exec } from 'child_process'
import { Box, render, Text, useInput } from 'ink'
import React, { useState } from 'react'

const App = () => {
  const [mensagem, setMensagem] = useState(
    'Pressione L para limpar cache da memória RAM | P para listar processos | A para ativar virtual mic | Q para sair',
  )

  useInput(input => {
    if (input.toLowerCase() === 'l') {
      setMensagem('Limpando cache da memória RAM...')
      exec(
        'sudo sync && sudo sysctl -w vm.drop_caches=3',
        (error, stdout, stderr) => {
          if (error) {
            setMensagem(`Erro ao limpar cache: ${stderr || error.message}`)
            return
          }
          setMensagem('Cache da memória RAM limpo com sucesso')
        },
      )
    }

    if (input.toLowerCase() === 'p') {
      setMensagem('Listando processos...')
      exec('ps aux', (error, stdout, stderr) => {
        if (error) {
          setMensagem(`Erro ao listar processos: ${stderr || error.message}`)
          return
        }
        setMensagem(stdout || 'Nenhum processo listado.')
      })
    }

    if (input.toLowerCase() === 'a') {
      setMensagem('Ativando virtual mic...')
      exec(
        'pactl load-module module-null-sink \
	      sink_name=audiorelay-virtual-mic-sink \
	sink_properties=device.description=Virtual-Mic-Sink && pactl load-module module-remap-source \
	master=audiorelay-virtual-mic-sink.monitor \
	source_name=audiorelay-virtual-mic-sink \
	source_properties=device.description=Virtual-Mic',
        (error, stdout, stderr) => {
          if (error) {
            setMensagem(
              `Erro ao ativar virtual mic: ${stderr || error.message}`,
            )
            return
          }
          setMensagem('Virtual mic ativado!')
        },
      )
    }

    if (input.toLowerCase() === 'q') {
      process.exit()
    }
  })

  return (
    <Box flexDirection="column" padding={1}>
      <Text color="green"> Painel de Controle Hyprland </Text>
      <Text>{mensagem}</Text>
      <Text color="grey">
        [L] Limpar cache RAM | [P] Listar processos | [A] Ativar virtual mic |
        [Q] Sair
      </Text>
    </Box>
  )
}

render(<App />)
