import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skills: SkillService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skills.save(skill).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló en agregar habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
