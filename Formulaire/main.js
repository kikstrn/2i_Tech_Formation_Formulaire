//inscription

// Permet de bloqué le bouton connexion
let button = document.getElementById('connexion')

// Récupération des inputs
let inputs = document.querySelectorAll('input')

// Récupération des inputs
    let motdepasse = $('#Password');
    let confirmmotdepasse = $('#Password2');
    let pseudo = $("#pseudo");
    let email = $("#email");

// Récupération du formulaire
let form = document.querySelector('#formulaire_inscription')

form.addEventListener('input', () => {
    if (pseudo[0].value.length > 0 &&  motdepasse[0].value.length > 0 && confirmmotdepasse[0].value.length > 0 && email[0].value.length > 0 && motdepasse[0].value == confirmmotdepasse[0].value){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', 'disabled');
    }
})

const $ = (element) => {
    return document.querySelector(element);
}

// Vérification des champs 
$('#connexion').on("click",function (){    

    if (motdepasse[0].value != confirmmotdepasse[0].value){
        document.getElementById("msgErrorMdp").innerText="Mot de passe incorrect";
        $("#Password").toggleClass("border-danger");
        $("#Password2").toggleClass("border-danger");
    }

    if (pseudo[0].value == ""){
        document.getElementById("msgName").innerText="(Veuillez remplir ce champs)";
        $("#pseudo").toggleClass("border-danger");
    }

    if ( verifMail()) {
        document.getElementById("msgnMailInscription").innerText="(Veuillez remplir un email correct)";
        $("#email").toggleClass("border-danger");
    }


// Vérification du mail
    function verifMail(){
        let mail = $('#email');
        var myRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{​​​​2,}​​​​)$/i;
        if(!myRegex.test(mail)){
            return false;
        } else {
            return true;
        }
    }

});