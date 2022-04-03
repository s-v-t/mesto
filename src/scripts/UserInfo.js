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
        return userDate;
    }

    setUserInfo(newName, newAbout){
        this.userName.textContent = newName;
        this.userAbout.textContent = newAbout;
    }
}