import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamdata : any[] = []

  constructor(private ad : AdminService) {
    this.ad.showteam().subscribe(data => {this.teamdata.push(...data)})
    console.log(this.teamdata);
  }

  ngOnInit(): void {
  }

}
