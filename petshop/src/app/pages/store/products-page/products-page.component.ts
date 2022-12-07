import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit { // implements OnInit -> Obriga o component ser construido antes

  //utilização do async
  public products$: Observable<any[]>; //variavel

  constructor(private data: DataService) { } //itens de variaveis ou coisas que nao exigem mto processamento sao setadas no constructor, pq pode travar o component

  ngOnInit() {
    this.products$ =  this.data.getProducts();
  }

}
