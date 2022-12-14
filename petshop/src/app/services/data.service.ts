import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.models';
import { Security } from '../utils/security.util';

@Injectable({ // consigo injetar essa classe em outros components, realizar uma injeção de dependencia
    providedIn: 'root' // Disponivel nos modulos, e nos providers
})
export class DataService { //classe
    public url = 'http://localhost:3000/v1'
    constructor(private http: HttpClient){ } //dependencia do http client

    //compondo os cabeçalhos da aplicação
    public composeHeaders(){
        const token = Security.getToken(); //retorna o token de login da aplicação
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);   //Cabeçalho  -> Authorization, valor -> bearer, token
        return headers;
    }

    getProducts(){
        return this.http.get<Product[]>(`${this.url}/products`); //retorna um array de tipo Product
    }

    authenticate(data){
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken(){
        return this.http.post(`${this.url}/accounts/refresh-token`, null, { headers: this.composeHeaders()});  //{ headers: this.composeHeaders()}  -> compoe a requisição
    }

    create(data){
        return this.http.post(`${this.url}/accounts/`, data);
    }

    resetPassword(data){
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }

    getProfile(){
        return this.http.get(`${this.url}/accounts`, {headers: this.composeHeaders()  }); 
    }

    updateProfile(data){
        return this.http.put(`${this.url}/accounts`, data, {headers: this.composeHeaders()  });
    }
}