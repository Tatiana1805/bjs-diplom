"use strict"
class UserForm {
    constructor(){

    }
    loginFormCallback (data = {login, password}){//функция, которая будет выполняться при попытке авторизации
        if(!data.login && !data.password){
            alert ('Введите правильный логин и пароль')
    } 
    return this.loginFormCallback;
}
    registerFormCallback (){ // функция, которая будет выполняться при попытке регистрации
        if(!!login || !!password){
        return this.registerFormCallback
        }
        else {
        alert ('Введите логин и пароль')
}
}
}
class ApiConnector {
    constructor(){}
    login({login, password}, callback)
    register({login, password}, callback)
}
