export class LoginModel {
    username: string;
    password: string;
    constructor(un: string, pwd: string) {
        this.username = un;
        this.password = pwd;
    }
}
