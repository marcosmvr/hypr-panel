import { exec } from 'child_process';
export function limparCache(callback) {
    exec('sudo sync && sudo sysctl -w vm.drop_caches=3', (error, stdout, stderr) => {
        if (error) {
            callback(error, stderr);
            return;
        }
        callback(null, 'Cache da memória RAM limpo com sucesso');
    });
}
