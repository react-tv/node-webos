const { spawn } = require('child_process');

function run(commands, path) {
  if (!commands.length) {
    return false;
  }

  let command = __dirname + '/bin/ares-' + commands[0] + '.js'
  if (commands.length >= 2) {
    commands.shift()
    command += ' ' + commands.join(' ');
  }

  console.log(command, path)
  const subject = spawn('node', [command], {cwd: path});
  return subject;
}

module.exports = run;
