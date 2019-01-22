var database = [
    {
        username: "Ashwin Giri",
        password: "ashwin5607"
    },
    {
        username: "Sanjay Kumar",
        password: "sanjay444"
    },
    {
        username: "Ritesh",
        password: "ritesh123"
    }
]

var newsfeed=[
    {
        username: "abc",
        timeline: "Good Morning"
    },
    {
        username: "xyz",
        timeline: "Hi xyz"
    }
];

function isUserValid(user,pass){
    for(var i=0;i<database.length;i++){
        if(database[i].username==user && database[i].password==pass){
            return true;
        }
    }
    return false;
}

var userNamePrompt=prompt("Enter the username: ");
var passwordPrompt=prompt("Enter the password :")

function signIn(user,pass) {
    
    if(isUserValid(user,pass)){
        console.log(newsfeed);
    }else{
        alert("Enter the correct credentials !");
    }
    
}

signIn(userNamePrompt,passwordPrompt);


