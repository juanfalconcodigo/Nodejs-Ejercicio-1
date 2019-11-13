const { argv } = require('./config/yargs');
const colors = require('colors/safe');
let { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite).then((resp) => {
            console.log(colors.green(resp));
        }).catch((err) => {
            console.log(colors.red(err));
        })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((data) => {
            console.log(colors.green(data))
        }).catch(err => {
            console.log(colors.red(err));
        })
        break;
    default:
        console.log('Comando no encontrado  :(');

}


/* console.log(argv.base);
console.log(argv.limite);
 */







/* let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
crearArchivo(base).then((data) => {
    console.log(data)
}).catch(err => {
    console.log(err);
}) */