import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerdata : any[] = []

  constructor(private ad : AdminService) { 

    this.ad.showPLayer().subscribe(data => { this.playerdata.push(...data)})
    console.log(this.playerdata);
  }

  ngOnInit(): void {
  }

}
