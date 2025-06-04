import { exec } from 'child_process';
export function execCommand(command, callback) {
    exec(command, (error, stdout, stderr) => {
        callback(error, stdout, stderr);
    });
}
