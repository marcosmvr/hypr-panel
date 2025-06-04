import { exec } from 'child_process';
export function listarProcessos(callback) {
    exec('ps aux', (error, stdout, stderr) => {
        if (error) {
            callback(error, stderr);
            return;
        }
        callback(null, stdout);
    });
}
