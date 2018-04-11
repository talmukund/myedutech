import { spawn } from 'child_process';

export function createBuild(){
    const arg =[];
    arg.push('run');
    arg.push('package');
    arg.push('-win');

    const ls = spawn('npm.cmd', arg);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
}