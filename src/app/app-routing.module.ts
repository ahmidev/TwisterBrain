import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './final/final.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ParameterComponent } from './parameter/parameter.component';
import { PlayerSettingsComponent } from './player-settings/player-settings.component';
import {PlayerComponent} from './player/player.component';
import { ReglesComponent } from './regles/regles.component';
import { WheelComponent } from './wheel/wheel.component';

const routes: Routes = [
{path : '',component: HomeComponent},
{path : 'home',component: HomeComponent},
// <a [routerLink]="['/home']">HOME</a>
{path : 'player',component: PlayerComponent},
// <a [routerLink]="['/player']">PLAYER</a>
{path : 'player-settings',component: PlayerSettingsComponent}, //!!! faire l'import component
// <a [routerLink]="['/player-settings']">Player-Settings</a>
{path : 'regles',component: ReglesComponent},
// <a [routerLink]="['/regles']">REGLES</a>
{path : 'parameter',component: ParameterComponent},
// <a [routerLink]="['/parameter']">Parameter</a>
{path : 'game',component: GameComponent},
// <a [routerLink]="['/game']">GAME</a>
{path : 'final',component: FinalComponent},
// <a [routerLink]="['/final']">FINAL</a>
{path : 'wheel',component: WheelComponent},
// <a [routerLink]="['/wheel']">WHEEL</a>
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
