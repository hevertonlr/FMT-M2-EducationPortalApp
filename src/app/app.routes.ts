import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data:{name: 'Login'}
  },
  {
    path: 'home',
    component: HomeComponent,
    data:{name: 'Home'}
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent,
    data:{name: 'Disciplinas'}
  },
  {
    path: 'alunos',
    component: AlunosComponent,
    data:{name: 'Alunos'}
  },
  {
    path: 'cadastro-aluno',
    component: CadastroAlunoComponent,
    data:{name: 'Cadastro de Alunos'}
  },
  
  
];
