import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ // consigo injetar essa classe em outros components, realizar uma injeção de dependencia
    providedIn: 'root' // Disponivel nos modulos, e nos providers
})
export class DataService { //classe
    constructor(private http: HttpClient){ } //dependencia do http client

    getProducts(){
        return this.http.get<any[]>('http://localhost:3000/v1/products'); //retorna um array de qualquer tipo
    }
}