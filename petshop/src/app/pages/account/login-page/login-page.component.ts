import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  constructor(
    private service: DataService,  //injeção de dependencia
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      username: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('petshop.token'); //tenta pegar o token

    if (token) { //se conseguir pegar o token no localStorage
      this.busy = true;
      this
        .service
        .refreshToken() //pega o metodo do service e passa um valor -> data
        .subscribe( //streamming de dados, no post n tem problema de demora
          (data: any) => {
            localStorage.setItem('petshop.token', data.token) //token armazenado quando logar 
            this.busy = false;
          },
          (err) => {
            localStorage.clear(); //limpa as informações do localStorage
            this.busy = false;
          }
        );
    }
  }
  //Variavel global -> Cada recarregando teria que logar dnv na aplicação
  //session storage -> Se o  usuário fechar a aba ele perde o token
  //local storage  -> Pode reiniciar a maquina e  tudo que o token nao vai ser perdido

  submit() { //armazenamento do token
    this.busy = true;
    this
      .service
      .authenticate(this.form.value) //pega o metodo do service e passa um valor -> data
      .subscribe( //streamming de dados, no post n tem problema de demora
        (data: any) => {
          localStorage.setItem('petshop.token', data.token) //token armazenado quando logar 
          this.busy = false;
        },
        (err) => {
          console.log(err);
          this.busy = true;
        }
      );
  }


}
