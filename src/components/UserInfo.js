export class UserInfo{
    constructor (userNameSelector, userAboutSelector){
        this.userName = document.querySelector(userNameSelector);
        this.userAbout = document.querySelector(userAboutSelector);
    }

    getUserInfo(){
        const userDate = {
            name: this.userName.textContent,
            about: this.userAbout.textContent
        }
        console.log('возвращаю');
        console.log(userDate);
        return userDate;
    }

    setUserInfo(inputsValue){
        this.userName.textContent = inputsValue.name;
        this.userAbout.textContent = inputsValue.job;
    }
}