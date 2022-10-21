import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss']
})
export class CriarCursoComponent implements OnInit {

cursos: string[] = [];

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

}
