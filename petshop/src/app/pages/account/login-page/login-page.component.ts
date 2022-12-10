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
  constructor(
    private service: DataService,
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
  }
     //Variavel global, session storage, local storage
     submit(){ //armazenamento do token
      this
        .service
        .authenticate(this.form.value)
        .subscribe(
          (data: any) =>{
          localStorage.setItem('petshop.token', data.token)
      },
      (err)=>{
        console.log(err);
      }
      );
     }


}
