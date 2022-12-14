import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Security } from '../utils/security.util';

@Injectable({ // consigo injetar essa classe em outros components, realizar uma injeção de dependencia
    providedIn: 'root' // Disponivel nos modulos, e nos providers
})
export class AuthService implements CanActivate { //classe
    constructor(private router: Router) { }

    canActivate() {
        const token = Security.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}
