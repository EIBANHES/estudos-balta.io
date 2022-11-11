import { enableProdMode } from '@angular/core'; //para trabalhar no modo de produção, importação externa
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //modulo principal -> root module, importação interna
import { environment } from './environments/environment'; //variaveis de ambiente importação interna

if (environment.production) { //se o ambiente for producao, ele habilita o modo de prod, senao mod de desen
  enableProdMode();
}

platformBrowserDynamic() //faz o carregamento de uma plataforma
.bootstrapModule(AppModule) //inicia a aplicação carregando um modulo, é o root module
  .catch(err => console.error(err));
