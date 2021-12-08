
    var login_username=["FName@proj.ca","juan"];
    var login_password=["pass123","juan"];

function validate(){ 
	var username = document.getElementById("user").value;
    var password = document.getElementById("psswrd").value;
	
	if (( login_username.includes(username)) && (login_password.includes(password)))
	{ window.open("./menu/menu.html")
	} else	{    
	    alert("FName@proj.ca & pass123");
        window.open("./index.html")
	}
}

