import { exec } from 'child_process'

export function listarProcessos(
  callback: (error: Error | null, output?: string) => void,
) {
  exec('ps aux', (error, stdout, stderr) => {
    if (error) {
      callback(error, stderr)
      return
    }
    callback(null, stdout)
  })
}
