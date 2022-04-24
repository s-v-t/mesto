export class UserInfo{
    constructor (userNameSelector, userAboutSelector, avatarImgSelector){
        this.userName = document.querySelector(userNameSelector);
        this.userAbout = document.querySelector(userAboutSelector);
        this.userAvatar = document.querySelector(avatarImgSelector);
    }

    getUserInfo(){
        const userDate = {
            name: this.userName.textContent,
            about: this.userAbout.textContent
        }
        return userDate;
    }

    setUserInfo(inputsValue){
        this.userName.textContent = inputsValue.name;
        this.userAbout.textContent = inputsValue.about;
    }

    setAvatar(inputsValue){
        this.userAvatar.src = inputsValue.avatar;
    }
}