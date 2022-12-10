import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.models';

@Injectable({ // consigo injetar essa classe em outros components, realizar uma injeção de dependencia
    providedIn: 'root' // Disponivel nos modulos, e nos providers
})
export class DataService { //classe
    public url = 'http://localhost:3000/v1'
    constructor(private http: HttpClient){ } //dependencia do http client

    getProducts(){
        return this.http.get<Product[]>(`${this.url}/products`); //retorna um array de qualquer tipo
    }

    authenticate(data){
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }
}