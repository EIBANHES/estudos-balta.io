import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' //disponivel para todos os modulos
})
export class DataService {
    constructor(private http: HttpClient){}

    getProducts(){
        return this.http.get<any[]>('http://localhost:3000/v1/products');
    }
}