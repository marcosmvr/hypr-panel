import { exec } from 'child_process'

export function execCommand(command: string, callback: (error: Error | null, stdout?: string, stderr?: string) => void) {
  exec(command, (error, stdout, stderr) => {
    callback(error, stdout, stderr)
  })
}
