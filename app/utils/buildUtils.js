import { exec } from 'child_process';
export function createBuild() {
    const ls = exec('npm run package-win --cwd "c:\\users\\mkary\\edu-tech-desktop" --prefix "c:\\users\\mkary\\edu-tech-desktop"')

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