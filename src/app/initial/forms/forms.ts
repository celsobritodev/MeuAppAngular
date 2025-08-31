import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {

  frm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.frm = this.fb.group (
      {
        'nome': ['',[Validators.required]],
        'endereco': ['',[Validators.maxLength(300)]],
        'email': ['',[Validators.required,Validators.email]]

      }
    )

  }

  salvar(){
    console.log(this.frm.value);
    console.log(this.frm.valid);
  }



}
