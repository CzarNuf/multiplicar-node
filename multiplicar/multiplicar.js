// Requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = async(base, limite) => {

    console.log('====================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('====================='.green);

    if (!Number(base)) {
        throw new Error(`La base ${base} no es un número.`);
    }

    if (!Number(limite)) {
        throw new Error(`El límite ${limite} no es un número.`);
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un número.`);
        }

        if (!Number(limite)) {
            reject(`El límite ${limite} no es un número.`);
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        const fileName = `tabla-${base}-al-${limite}.txt`

        fs.writeFile(`tablas/${ fileName }`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(fileName);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}