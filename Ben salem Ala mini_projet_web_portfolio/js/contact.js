let form = document.getElementsByName('form')[0];
let name = document.getElementById("name");
let subject = document.getElementById("subject");




function inputValidation(){
    if(name.value.length<3){
        document.getElementById("name").innerHTML= "first name must have at least 3 characters";
    }else if(!name.value.match(letters)){
        document.getElementById("name").innerHTML= "first name must be composed of only letters";
    }

    if(subject.value.length<20){
        document.getElementById("subject").innerHTML= "i do not accept more then 100 characters";
        alert('Vous avez cliqué sur le bouton "Transfer" !');
    }
}