import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Iteam } from '../model/iteam';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {

  teamdata : Iteam = {
    TeamId : 0,
    TeamName : ''
  }

  constructor(private ad : AdminService ,private ar : ActivatedRoute , private r : Router) { }
  saveData(tl : Iteam) : void {
    this.ad.addTeams(this.teamdata).subscribe(
      () => {
        alert("Record Added Successfully")
        this.r.navigate(['/showTeam'])
      }
    )
  }

  ngOnInit(): void {
  }

}
