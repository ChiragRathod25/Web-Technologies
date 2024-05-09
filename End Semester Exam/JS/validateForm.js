function validateMyForm(form){
    if(form.firstname.value==""){
        alert('Please enter firstname');
        form.firstname.focus();
        return false;
    }
    if(form.lastname.value==""){
        alert('Please enter lastname');
        form.lastname.focus();
        return false;
    }
    if(form.email.value==""){
        alert('Please enter email');
        form.email.focus();
        return false;
    }   
}
