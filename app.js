

//crear una funcion para gaurdar los nombres ingresados
function FriendList(name) {
    const newLi = document.createElement("li");
    newLi.textContent = name;
    const lista = document.querySelector('.name-list');
    lista.appendChild(newLi);
}

let friends = [];
function agregarAmigo() {
    //tomar el valor del input
    //Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
    let inputName = document.querySelector(".input-name").value;
    if (inputName === "") {
        alert("Por favor, inserte un nombre");
    } else {
        //Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        //tomar el valor
        friends.push(inputName);

        console.log(inputName);

        //mostrarlo en el elemento li
        FriendList(inputName);

    }
    cleanName();

}

function cleanName() {
    let valueBox = document.querySelector(".input-name");
    valueBox.value = "";
}

function Actualizar() {
    // Obtener el elemento de la lista (el ul)
    const lista = document.querySelector('.name-list');

    // Limpiar la lista existente
    lista.innerHTML = "";
    friends=[];
    
}



function sortearAmigo() {
    //Antes de sortear, comprobar si el array amigos no está vacío.
    if (friends.length === 0) {
        alert("Debes agregar amigos a la lista");
    }else{
     
      // Usar Math.random() y Math.floor() para seleccionar un índice aleatorio
     let indiceAleatorio = Math.floor(Math.random() * friends.length);
     //Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
     let amigoSeleccionado = friends[indiceAleatorio];
     console.log(amigoSeleccionado);

     //Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
      let resultFriend= document.querySelector(".result-list");
      resultFriend.innerHTML=amigoSeleccionado;
      document.querySelector(".button-reset").disabled = false;
     
     //limpiar lista de nombres
      Actualizar(); // Esto limpia la lista de nombres

    }
    
}

//Boton para reiniciar 
function reset(){
    let resultClean= document.querySelector(".result-list");
    resultClean.innerHTML="";
    
}
