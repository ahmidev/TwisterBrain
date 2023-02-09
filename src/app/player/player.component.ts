import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/player-model';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export  class PlayerComponent implements OnInit{
  @Input() player!:Player;
  players: Player[]=[];
  constructor(private servicePlayer : PlayersService){}
  @Input() btnDelet:boolean =true;
  ngOnInit(): void {
    this.servicePlayer.playerList.subscribe(list=>{
      this.players =list
    })
    
  }

  removePlayer(i:number){
    this.servicePlayer.removePlayer(i);
  }
 
  

}
