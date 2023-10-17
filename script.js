$( document ).ready(function() {
    if(localStorage.phonebook){
        var phonebook = JSON.parse(localStorage.phonebook);
    }else{
        var phonebook = [];
    }

    $('#add').click(function(){
        addContact();
    });

    function addContact(){
        var first = prompt("First name: ");
        var last = prompt("Last Name");
        var num = prompt("Number: ");

        var contact = {
            firstName: first,
            lastName: last,
            number: num
        };

        console.log('before push', phonebook);
        phonebook.push(contact);
        console.log('after the push', phonebook);
        localStorage.phonebook = JSON.stringify(phonebook);
    }

    $("#retrieve").click(function(){
        var first = prompt("First Name:");
        var last = prompt("Last Name:");
        if(contactExists(first, last)){
            retrieveContact(first, last);
        }else{
            var yesNo = prompt("That name is not in your contact list, would you like to add them?")
            if(yesNo.toLowerCase() == "yes"){
                addContact(first, last);
            }
        }
    });

    function contactExists(first, last){
       var contactList = JSON.parse(localStorage.contactList);
        for(var i = 0; i <contactList.length; i++){
            if(contactList[i].firstName == first && contactList[i].lastName == last){
                return true;
            }
        }
        return false;
    }
    
    function retrieveContact(first, last){
        var contactList = JSON.parse(localStorage.contactList);
        for(var i = 0; i < contactList.length; i++){
            if(contactList[i].firstName == first && contactList[i].lastName == last){
                $("#contact-reveal").append(contactList[i].firstName + " " + contactList[i].lastName + ":" + contactList[i].number);
    
            }
        }
    }

    function printContacts()
    {
            var phoneReveal = $('#contact-reveal')
            phoneReveal.innerHTML = '';

            if (phonebook){
                
            }
    }
});