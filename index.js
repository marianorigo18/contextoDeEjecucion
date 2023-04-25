const objet = {
    message: "hello world",
    getMessage(){
        const message = "Hola mundo"
        return this.message
    }
}
console.log(objet.getMessage());// Hello world

//this es el contexto de ejecucion

//quien crea el contexto de ejecucion?
//En este caso es objet
//quien es el dueño del contexto de ejecucion?
//this

//Esto pasa por que el contexto de ejecucion
//viene creado por el objeto "objet" y el metodo
//del objeto es message como propiedad no como
//variable. 

//El contexto de ejecucion es dueño de this.