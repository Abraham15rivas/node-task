const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'describe la tarea'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'marca la tarea'
}


const argv = require('yargs')
    .command('crear', 'crea las tarea', { descripcion })
    .command('actualizar', 'actualiza las tareas', { descripcion, completado })
    .command('borrar', 'borrar las tareas', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}