// "use strict"
// class UserForm {
//     constructor(){

//     }
//     loginFormCallback (data = {login, password}){//функция, которая будет выполняться при попытке авторизации
//         if(!data.login && !data.password){
//             alert ('Введите правильный логин и пароль')
//     } 
//     return this.loginFormCallback;
// }
//     registerFormCallback (){ // функция, которая будет выполняться при попытке регистрации
//         if(!!login || !!password){
//         return this.registerFormCallback
//         }
//         else {
//         alert ('Введите логин и пароль')
// }
// }
// }
// class ApiConnector {
//     constructor(){}
//     login({login, password}, callback)
//     register({login, password}, callback)
// }
"use strict"

const userForm = new UserForm();
// Авторизация
userForm.loginFormCallback = (data = {login: null, password: null}) => {
  ApiConnector.login(data, (response)=>{
    if (response.success) {
      location.reload();
    } else {
      alert(response.data);
    }
  })
}
// Регистрация
userForm.registerFormCallback = (data = {login: null, password: null}) => {
  ApiConnector.register(data, (response)=>{
    if (response.success) {
      location.reload();
    } else {
      alert(response.data);
    }
  })
}