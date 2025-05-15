import { exec } from 'child_process'
import { Box, render, Text, useInput } from 'ink'
import React, { useState } from 'react'

const App = () => {
  const [mensagem, setMensagem] = useState(
    'Pressione T para trocar o tema | B para brilho',
  )

  useInput(input => {
    if (input === 't') {
      setMensagem('Trocando o tema...')
      exec('echo Tema trocado!', () => {
        setMensagem('Tema trocado!')
      })
    }

    if (input === 'b') {
      setMensagem('Alterando o brilho...')
      exec('echo Brilho alterado!', () => {
        setMensagem('Brilho alterado!')
      })
    }

    if (input === 'q') {
      process.exit()
    }
  })

  return (
    <Box flexDirection="column" padding={1}>
      <Text color="green"> Painel de Controle Hyprland </Text>
      <Text>{mensagem}</Text>
      <Text color="grey">[T] Tema | [B] Brilho | [Q] Sair</Text>
    </Box>
  )
}

render(<App />)
