import {rm} from 'fs/promises';
import gulp from 'gulp';
import {exec} from 'child_process';

// Task to clean old compiled files
gulp.task("clean", async function () {
    await rm("wwwroot/scripts", {recursive: true, force: true});
});

// Task to compile TypeScript files using `npx tsc`
gulp.task("scripts", function (done) {
    exec("npx tsc", (err, stdout, stderr) => {
        if (err) {
            console.error(`TypeScript compilation error:\n${stderr}`);
            done(err);
            return;
        }
        console.log(stdout);
        done();
    });
});

// Default task: clean → compile TypeScript
gulp.task("default", gulp.series("clean", "scripts"));
