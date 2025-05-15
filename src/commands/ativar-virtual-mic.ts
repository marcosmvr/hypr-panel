import { exec } from 'child_process'

export function ativarVirtualMic(callback: (error: Error | null, output?: string) => void) {
  const cmd = `pactl load-module module-null-sink \
    sink_name=audiorelay-virtual-mic-sink \
    sink_properties=device.description=Virtual-Mic-Sink && pactl load-module module-remap-source \
    master=audiorelay-virtual-mic-sink.monitor \
    source_name=audiorelay-virtual-mic-sink \
    source_properties=device.description=Virtual-Mic`
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      callback(error, stderr)
      return
    }
    callback(null, 'Virtual mic ativado!')
  })
}
