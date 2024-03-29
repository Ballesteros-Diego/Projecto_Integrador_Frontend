import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hsskills',
  templateUrl: './hsskills.component.html',
  styleUrls: ['./hsskills.component.css']
})
export class HSSkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}