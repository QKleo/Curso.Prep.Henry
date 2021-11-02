// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    
  matriz=[]
  for(let key in objeto){
    matriz.push([key,objeto[key]]);

    }
    return matriz;


}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

   let objeto={};
    
   string.replace(/\S/g,function(p){objeto[p]=(isNaN(objeto[p])? 1:objeto[p]+1);});

    return objeto;
   


}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas=''
  var minusculas=''
  var cadena=''
  for (i=0;i<s.length;i++){
    cadena=s.charAt(i);
    if (cadena.toUpperCase() === cadena){
      mayusculas=mayusculas+cadena;
      cadena=''}
    else{
         minusculas=minusculas+cadena; 
         cadena='' }
    }
   return mayusculas+minusculas; 
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  

  function invertirPalabra(palabra){
  var cadena='';
  for(i=palabra.length-1 ;i>=0; i--){
    cadena=cadena+palabra.charAt(i);
  }
  return cadena;}
  
  nuevaPalabra=[];
  palabra=str.split(' ');
  for(k=0;k<palabra.length;k++){
   // invertida=invertirPalabra(palabra[i]);
    nuevaPalabra.push(invertirPalabra(palabra[k]));
  }
  var cadenita=nuevaPalabra[0]
  for (z=1;z<nuevaPalabra.length;z++){cadenita=cadenita +' '+nuevaPalabra[z] }
  return cadenita
  }
 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  function invertirPalabra(palabra){
    var cadena='';
    for(i=palabra.length-1 ;i>=0; i--){
      cadena=cadena+palabra.charAt(i);
    }
    return cadena;}
  let numeroS=numero.toString();

  if (numeroS === invertirPalabra(numeroS)){ return 'Es capicua';}else{return 'No es capicua';} ;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena=''
  for(i=0; i<cadena.length ; i++){
    letra=cadena.charAt(i);
    if (letra!=='a' && letra!=='b'&& letra!=='c'){
    nuevaCadena=nuevaCadena+letra;}}

    return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  k=0
  var objeto={}
  for(i=0;i<arr.length;i++){
      
      objeto[arr[i]]=arr[i].length

  }
  lista=[]
 
  while(lista.length<arr.length){
      k++
      for (i=0;i<arr.length;i++){
           if(objeto[arr[i]]===k){
              
          lista.push(arr[i])}}
      }
    
 
  
    return lista;


}


 
  
    
  
  
    

  



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  nuevo=[]
  for (i=0;i<arreglo1.length;i++){
    for(k=0;k<arreglo2.length;k++){
      if (arreglo1[i]===arreglo2[k]){
        nuevo.push(arreglo2[k]);}}}
      
    return nuevo
      
      }
    
  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

