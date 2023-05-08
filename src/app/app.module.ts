import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ComponentLogoAPComponent } from './Component/Logo-ap/component-logo-ap.component';
import { BannerComponent } from './Component/banner/banner.component';
import { BioComponent } from './Component/bio/bio.component';
import { EducacionComponent } from './Component/educacion/educacion.component';
import { HSSkillsComponent } from './Component/hsskills/hsskills.component';
import { ProyectosComponent } from './Component/proyectos/proyectos.component';
import { ExperienciaComponent } from './Component/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule,} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';

import { EditExperienciaComponent } from './Component/experiencia/Edit/edit-experiencia.component';
import { NewExperienciaComponent } from './Component/experiencia/New/new-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentLogoAPComponent,
    BannerComponent,
    BioComponent,
    EducacionComponent,
    HSSkillsComponent,
    ProyectosComponent,
    ExperienciaComponent,
    LoginComponent,
    HomeComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
    }),
    HttpClientModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
