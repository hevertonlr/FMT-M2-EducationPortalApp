import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Aluno {
  nomeCompleto: string;
  cpf: string;
  email: string;
  celular: string;
  curso: string;
}

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent {
  searchInput: string = '';
  alunos: Aluno[] = [
    {
      nomeCompleto: 'Jão Miserávi da Silva',
      cpf: '123.456.789-00',
      email: 'joao@gmail.com',
      celular: '99999-9999',
      curso: 'Curso A',
    },
    {
      nomeCompleto: 'Maria Chiquinha Jenovéva Siquera',
      cpf: '987.654.321-00',
      email: 'maria@gmail.com',
      celular: '88888-8888',
      curso: 'Curso B',
    },
  ];
  alunosFiltrados: Aluno[] = [...this.alunos]

  constructor(private router: Router){}

  onSearch = () => {
    if(!this.searchInput){
      this.alunosFiltrados = [...this.alunos];
      return;
    }
    let filterWords = this.searchInput.toLocaleLowerCase();
    this.alunosFiltrados = this.alunos.filter(aluno =>
      aluno.nomeCompleto.toLowerCase().includes(filterWords) ||
      aluno.email.toLowerCase().includes(filterWords)
    );
  }
  onEdit(aluno: Aluno): void {
   console.log(aluno);
    this.router.navigate(['/cadastro-aluno'], { state: { aluno } });
  }

  onDelete = (aluno: Aluno) => {
    Swal.fire({
      title: "Confirma a exclusão deste usuário?",
      showCancelButton: true,
      confirmButtonText: "Sim",
    }).then((result) => {
      if (result.isConfirmed) {
        this.alunos = this.alunos.filter(s => s !== aluno);
        this.onSearch();
        Swal.fire("Excluido!", "Usuário excluído com sucesso", "success");
      } 
    });
  }
}
