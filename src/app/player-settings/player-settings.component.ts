import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from "../models/player-model";
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent implements OnInit {
  players!: Player[];
  avatar = '';
  public form: FormGroup = new FormGroup({
    avatar: new FormControl("",Validators.required),
    pseudo: new FormControl("",[Validators.required, Validators.minLength(2)]),
   
  });

  constructor(private playersService: PlayersService) {console.log(this.form) }


  ngOnInit() {
    this.players=this.playersService.getAllPlayers()
  }

  addPlayers(pseudo:HTMLInputElement, avatar:HTMLSelectElement){
    this.playersService.addPlayer(pseudo.value,avatar.value)
    console.log(this.playersService.players)
  }
  
  submit() {
    console.log(this.form);
  }
}
