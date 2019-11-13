const fs = require('fs');

let listarArchivo = (base, limite) => {


    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Verifique valores ingresados');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += ` ${base} x ${i} = ${base*i} \n`

        }

        resolve(`Tabla de multiplicar entre ${base} - ${limite} : \n ${data}`);


    })


}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`${base}  es un valor inválido`);
            return;
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`Tabla tabla-${base}-al-${limite}.txt creada satisfactoriamente`);
            }

        })


    })

}

module.exports = {
    crearArchivo,
    listarArchivo
}