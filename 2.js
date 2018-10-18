

const readline = require('readline-sync');

 class articulocientifico {

    constructor(titulo,autores,numpaginas,anyo,menciones){
        this.titulo = titulo;
        this.autores = autores;
        this.numpaginas = numpaginas;
        this.anyo= anyo;
        this.menciones = menciones;
    }
}

class revista extends articulocientifico{
    constructor(titulo,autores,numpaginas,anyo,menciones,titulorevista,editorial,factorimpacto){
        super(titulo,autores,numpaginas,anyo,menciones);
        this.titulorevista = titulorevista;
        this.editorial = editorial;
        this.factorimpacto = factorimpacto;
    }
}

class conferencia extends articulocientifico{
    constructor(titulo,autores,numpaginas,anyo,menciones,nombreconf,lugar){
        super(titulo,autores,numpaginas,anyo,menciones);
        this.nombreconf = nombreconf;
        this.lugar = lugar;
    }
}

class patentescientificas{
    constructor(titulo, autor, anyopublicacion, anyovencimiento){
        this.titulo = titulo;
        this.autor = autor;
        this.anyopublicacion = anyopublicacion;
        this.anyovencimiento = anyovencimiento;
    }
}
let lista = [];
let salir = false;
while(!salir){
    console.log('Bienvenidos al sistema de gestiÃƒÂ³n del concesionario');
    console.log('1) Dar de alta una articulo cientifico');
    console.log('2) Dar de baja un articulo');
    console.log('3) Buscar un articulo y mostrar informaciÃƒÂ³n');
    console.log('4) Modificar un coche');
    console.log('5) Dar de alta una patente');
    console.log('6) Dar de baja una patente');
    console.log('-1) Salir del sistema');
    let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
    if(opcion===1){
        //Dar de alta un articulo cientifico
        let titulo=readline.question('Por favor introduce una matricula: ');
        let autores=readline.question('Introduce una marca: ');
        let numpaginas=readline.question('Introduce un modelo: ');
        let anyo=readline.question('Introduce un color: ');
        let menciones = readline.questionFloat('Introduce el num. de km: ');

        console.log('1)Dar de alta articulo de revista');
        console.log('2)Dar de alta articulo de conferencia');
        let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');

        if(opcion === 1) {
            let editorial = readline.question('porfavor introduzca la editorial de la revista');
            let factorimpacto = readline.question('porfavor introduzca la editorial de la revista');
            let newrevista = new revista();
            lista.push(newrevista);
            console.log(lista);
        }else if(opcion === 2){
            let nombreconf = readline.question('porfavor introduzca la editorial de la revista');
            let lugar = readline.question('porfavor introduzca la editorial de la revista');
            let newconferencia = new conferencia();
            lista.push(newconferencia);
            console.log(conferencia);
        }
    } else if(opcion===2){
        //Dar de baja un articulo
        console.log('1)Dar de baja articulo de revista');
        console.log('2)Dar de baja   9 articulo de conferencia');
        let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
        if(opcion===1) {
        let titulo = readline.question('Por favor introduce un titulo:');
        let encontrado = false;
        for(let i=0;i<lista.length;i++){
            let coche = lista[i];
            if(lista.titulo===titulo){
                lista.splice(i,1);
                encontrado = true;
                break;
            }
        }
        if(encontrado){
            console.log('articulo encontrado y borrado del sistema');+
            console.log(listaCoches);
        } else {
            console.log('articuloe no encontrado en el sistema');
        }
        }else if{opcion === 2){
             //Dar de baja una conferencia
        let titulo = readline.question('Por favor introduce un titulo:');
        let encontrado = false;
        for(let i=0;i<lista.length;i++){
            let coche = lista[i];
            if(lista.titulo===titulo){
                lista.splice(i,1);
                encontrado = true;
                break;
            }
        }
    }

        if(encontrado){
            console.log('articulo encontrado y borrado del sistema');+
            console.log(lista);
        } else {
            console.log('articulo no encontrado en el sistema');
        }
    }
    } else if(opcion===3){
        //Buscar un articulo
        let titulo = readline.question('Por favor introduce un titulo: ');
        for(let articulocientifico of lista){
            if(articulocientifico.titulo===titulo){
                console.log(articulocientifico);
                break;
            }
        }

    } else if(opcion===4){
        //ModificaciÃ³n
        let matricula = readline.question('Por favor introduzca un titulo: ');
        let articulo_encontrado = undefined;
        for(let i=0;i<lista.length;i++){
            let articulocientifico = lista[i];
            if(articulocientifico.titulo === titulo){
                articulo_encontrado = articulocientifico;
                break;
            }
        }
        if(articulo_encontrado){
            //articulo encontrado
            let newtitulo = readline.questionInt('Introduce el nuevo titulo (Actual: ' + articulo_encontrado.titulo + ' )');
            cocheEncontrado.km = newKm;
            console.log('Valor modificado');
        } else {
            //Coche no ha sido encontrado
            console.log('articulo encontrado');
        }
    } else if(opcion===-1){
        salir=true;
    }

}
