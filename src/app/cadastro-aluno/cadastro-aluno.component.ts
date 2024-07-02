import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit {
  alunoForm: FormGroup;
  alunoEdit: any;
  cursos: string[] = ['Curso A', 'Curso B', 'Curso C'];
  constructor(private fb:FormBuilder,private router: Router){
  this.alunoForm = this.fb.group({
    nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      curso: ['', Validators.required]
  })
  }

  ngOnInit() {
    const state = history.state;
    if (state?.aluno) {
      this.alunoEdit = state?.aluno;
      this.alunoForm.patchValue(this.alunoEdit);
    }
  }

  onSubmit = () => {
    console.log('Dados Aluno: ',this.alunoForm.value);
    if (!this.alunoForm.valid) {
      Swal.fire('Atenção!','Preencha todos os campos!','warning');
      return;
    }
    this.router.navigate(['/alunos']);
  }
}
