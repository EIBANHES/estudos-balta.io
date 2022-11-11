import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; //roda pelo browser

import { AppComponent } from './app.component'; //root component, componente raiz

//meta data
@NgModule({ //decorador
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule//importando os forms reactivos
  ],
  providers: [], 
  bootstrap: [AppComponent]
})

export class AppModule { } //toda vez que utilizamos o export é criada uma classe publica
