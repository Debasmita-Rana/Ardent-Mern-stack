function login(email,password) {
    if (email==="a@gmail.com" && password==="1234"){
        return "login done";
    }else{
        return "login fail";
    }
}
module.exports = login;
