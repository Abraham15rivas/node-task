const colors = require('colors')
const argv = require('./config/yargs').argv
const tarea = require('./tareas/tareas')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let task = tarea.create(argv.descripcion)
        console.log(task);
        break

    case 'listar':
        let tasks = tarea.getList()

        for (let task of tasks) {
            console.log('-----------------'.green);
            console.log(`Tarea: ${task.description}`);
            console.log('Status', task.complete);
            console.log('-----------------'.green);
        }

        break

    case 'actualizar':

        let update = tarea.updateTask(argv.descripcion, argv.completado)
        console.log(update);
        break

    case 'borrar':

        let deleteT = tarea.deleteTask(argv.descripcion)
        console.log(deleteT);
        break

    default:
        console.log("Comando no reconocido");
        break
}