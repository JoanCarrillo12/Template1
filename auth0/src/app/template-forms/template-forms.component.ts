import { Component } from '@angular/core';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repeatPass: ""
  };

  constructor(){}
  submit(){
    console.log("Datos de inicio de sesión");
    console.log(this.register.name);
    console.log(this.register.email);
    console.log(this.register.password);
    console.log(this.register.repeatPass);
    
    if(this.register.password !== this.register.repeatPass){
      console.log("Hay que introducir las dos contraseñas iguales para validarlo");
      return;
    }
  }
}