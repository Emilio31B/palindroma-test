export class Distinguida{
    constructor(){};
    esDistinguida(palabra : string, inicio : number, fin : number, flag : number) : boolean {
        if(palabra.length == 2) return false;
        let palabraVolteada : string = "";
        let palabraCorrecta = "";
        for(let i = inicio; i>= fin; i--){
            //caso d-palindroma
            if(flag == 2){
                palabraCorrecta += palabra[palabra.length - i -2];
            }else if(flag == 1){
                palabraCorrecta += palabra[palabra.length - i];
            }else{
                palabraCorrecta += palabra[palabra.length - i -1];
            }
            palabraVolteada += palabra[i]
        };
        return palabraVolteada == palabraCorrecta;
    } 
    distinguida(palabra : string): number[]{
        let arrRespuesta = [0,0,0];

        if(this.esDistinguida(palabra, palabra.length-1,0,0)){
            arrRespuesta[0] = 1;
        };
        if(this.esDistinguida(palabra, palabra.length-1,1,1)){
            arrRespuesta[1] = 1;
        };
        if(this.esDistinguida(palabra, palabra.length-2,0,2)){
            arrRespuesta[2] = 1;
        };
  

        return arrRespuesta;
    }
}

let main = () => {
    let palabra = "reconocer";
    let dis = new Distinguida;
    
    console.log(dis.distinguida(palabra));
};

main();