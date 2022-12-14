import { User } from "../models/user.model";

export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user);  //convert para string

        localStorage.setItem('petshopuser', btoa(data)); //btoa  -> encriptação do user para o salvamento no localStorage
        localStorage.setItem('petshoptoken', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('petshopuser', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('petshoptoken', token);
    }

    public static getUser(): User { //retorna usuario
        const data = localStorage.getItem('petshopuser');
        if (data) {
            return JSON.parse(atob(data));// tirando a encriptação e mandando um valor
        } else {
            return null; //nao encontrou um usuario
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('petshoptoken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('petshopuser');
        localStorage.removeItem('petshoptoken');
    }
}