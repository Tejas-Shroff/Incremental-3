import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute , Router} from '@angular/router';
import { Iplayer } from '../model/iplayer';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  playerdata : Iplayer = {
    Id: 0,
    Name: '',
    Age: 0,
    Category: '',
    BiddingPrice: 0,
    TeamId: 0
  }



  constructor(private ad : AdminService ,private ar : ActivatedRoute ,private r : Router) {} 
    
  saveData(pl : Iplayer) : void {
    this.playerdata = pl
    this.ad.addPlayer(this.playerdata).subscribe(
      () =>{
      alert("Record  Succesfully")
      this.r.navigate(['/showPlayers'])
    })
  }

  ngOnInit(): void {
  }

}
