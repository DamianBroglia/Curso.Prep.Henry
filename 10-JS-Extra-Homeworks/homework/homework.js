// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (let clave in objeto) {
    array.push([objeto[clave]]);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var abece = {
    a: 0, b: 0, c: 0, d: 0, e: 0,
    f: 0, g: 0, h: 0, i: 0, j: 0,
    k: 0, l: 0, m: 0, n: 0, o: 0,
    p: 0, q: 0, r: 0, s: 0, t: 0,
    v: 0, w: 0, x: 0, y: 0, z: 0
  };
  var contadorLetras = {};
  for (let i = 0; i < string.lenght; i++) {
    for (let letra in abece) {
      if (letra === string[i]) {
        abece[letra] = abece[letra] + 1;
        contadorLetras[letra] = abece[letra];
      }
    }
    /*for (let letra in abece) {
      if (abece[letra] > 0) {
        contadorLetras[letra] = abece[letra];
      }
    }*/
  }
  return contadorLetras;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";
  for (let i = 0; i < s.lenght; i++) {
    if (s[i] === s[i].toUpperCase) {
      mayus = mayus + s.charAt(s[i]);
    } else {
      minus = minus + s.charAt(s[i]);
    }
  }
  return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var textoInv = "";
  for (let i = 0; i < str.lenght; i++) {
    if (str[i] === " ") {
      for (let j = i - 1; j > 0 || str[j] === " "; j--) {
       textoInv = textoInv + str.charAt(str[j]);
      }
      textoInv = textoInv + " ";
    }
  }
  return textoInv;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  /*let suma = 0;
  let j = numero.lenght - 1; 
  for (let i = 0; i < numero.lenght / 2; i++){
    if (numero[i] === numero[j]){
      j--;
      suma++;
    }
  }
  if (suma === numero.lenght / 2){
    return "Es capicua";
  }else{
    return "No es capicua";
  }*/
  var numInv = 0;
  var j = numero.lenght - 1;
  for (let i = 0; i < numero.lenght; i++) {
    numInv[i] = numero[j - i];
    if (numInv === numero) {
      return "Es capicua";
    } else {
      return "No es capicua";
    }
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
var nuevaCadena = ""; 
  for (let i = 0; i < cadena.lenght; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
     nuevaCadena = nuevaCadena + cadena.charAt(cadena[i]);
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let newArray = [];
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] < arr[i + 1]) {
      newArray.unshift(arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArray = [];
  for (let i = 0; i < arreglo1.lenght; i++) {
    for (let j = 0; j < arreglo2.lenght; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        newArray.push(arreglo1[i]);
      }
    }
  }
  return newArray;
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

