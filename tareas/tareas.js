const fs = require('fs');

let lista = []

let saveDb = () => {

    let data = JSON.stringify(lista)

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(`error al registrar`)
    });
}

let loadDb = () => {
    try {

        lista = require('../db/data.json')

    } catch (error) {

        lista = []

    }
}

let create = (description) => {

    loadDb()

    let toDo = {
        description,
        complete: false
    }

    lista.push(toDo)
    saveDb()
    return toDo
}

let getList = () => {

    loadDb()
    return lista

}

let updateTask = (description, complete = true) => {

    loadDb()
    let index = lista.findIndex(task => task.description === description)

    if (index >= 0) {
        lista[index].complete = complete
        saveDb()
        return true
    } else {
        return false
    }

}

let deleteTask = (description) => {

    loadDb()
    let newList = lista.filter(task => task.description !== description)

    if (newList.length === lista.length) {
        return false
    } else {
        lista = newList
        saveDb()
        return true
    }

}

module.exports = {
    create,
    getList,
    updateTask,
    deleteTask
}