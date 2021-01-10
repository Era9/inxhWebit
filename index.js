function validateForm(){
    var username = document.getElementById("username").value;
    

    if(username === "" || password === "" ){
        alert("Te gjitha te dhenat duhet te mbushen!");
        return false;
    }
    // let regex = /^[a-z]{4}[0-9]{9}$/gi;
    // if(!isbn.match(regex)){
    //     alert("ISBN duhet ti permbaj 4 shkronja dhe 9 numra");
    //     return false;
    // }
    // let emailRegex = /^[a-z0-9+_.-]+@(.+)$/gi
    // if(!autori.match(emailRegex)){
    //     alert("Autori duhet te jete email");
    //     return false;
    // }
    return true;
}