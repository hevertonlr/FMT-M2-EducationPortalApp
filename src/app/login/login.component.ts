import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  forgotPassword = () => Swal.fire('Sucesso!','Processo de recuperação de senha enviado para o e-mail cadastrado','success');
  
    
  
  onSubmit = () => {
    if (!this.loginForm.valid) {
      Swal.fire('Atenção!','Preencha todos os campos!','warning');
      return;
    }
    this.router.navigate(['/home']);
  };
}
