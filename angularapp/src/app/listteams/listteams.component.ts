import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Iteam } from '../model/iteam';

@Component({
  selector: 'app-listteams',
  templateUrl:'./listteams.component.html',
  styleUrls: ['./listteams.component.css']
})
export class ListteamsComponent implements OnInit {

  teamsdata : Iteam [] =[]

  constructor(private ts : TeamService ,private ar : ActivatedRoute ,private r : Router) {

    this.ts.getAllTeams().subscribe(data => {this.teamsdata.push(...data)})

    console.log(this.teamsdata);

   }



  ngOnInit(): void {
  }

}
