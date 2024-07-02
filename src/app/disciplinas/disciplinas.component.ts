import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Semestre {
  nome: string;
  materias: string[];
}

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent{
  semestres: Semestre[] = [
    { nome: 'Primeiro semestre', materias: ['B', 'C'] },
    { nome: 'Segundo semestre', materias: ['D', 'J'] },
  ];
  // disciplinas: { [key: string]: Semestre[] } = {
  //   'Curso A': [
  //     { nome: 'Primeiro semestre', materias: ['B', 'C'] },
  //     { nome: 'Segundo semestre', materias: ['D', 'J'] },
  //   ],
  //   'Curso X': [
  //     { nome: 'Primeiro semestre', materias: ['B', 'E'] },
  //     { nome: 'Segundo semestre', materias: ['E', 'F'] },
  //   ],
  // };
}
