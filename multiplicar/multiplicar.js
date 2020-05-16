// Requires
const fs = require('fs');
const colors = require('colors')

let listTable = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`${base} no es numero`)
            return
        }

        let data = ''
        console.log("===========================".green);
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        resolve(data)

    })

}

let generateFile = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = ''
        if (!Number(base)) {
            reject(`${base} no es numero`)
            return
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    })
}

module.exports = {
    generateFile,
    listTable
}