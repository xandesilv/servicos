import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';


import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [LogService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
