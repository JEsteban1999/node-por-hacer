
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea existente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea existente', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
