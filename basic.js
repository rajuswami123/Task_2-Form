    
    
    function validate() {
        let name = document.forms["frm"]["name"].value;
        let age = document.forms["frm"]["number"].value;
        let date = document.forms["frm"]["date"].value;
        
            if (name == "") {
                alert("Please enter your name.");
                return false;
            }
            if (isNaN(number) || number>999999999 && number<10000000000) {
                alert("Please enter a valid NUmber.");
                return false;
            }
            if (date == "") {
                alert("Please enter a date.");
                return false;
            }
            return true;
        }
