import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ParameterComponent } from './parameter/parameter.component';
import { FinalComponent } from './final/final.component';
import { WheelComponent } from './wheel/wheel.component';

import { QuestionComponent } from './question/question.component';
import { PlayerSettingsComponent } from './player-settings/player-settings.component';
import { ReglesComponent } from './regles/regles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeColorDirective } from './change-color.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    PlayerComponent,
    GameComponent,
    ParameterComponent,
    FinalComponent,
    WheelComponent,
    PlayerSettingsComponent,
    
    ReglesComponent,
    QuestionComponent,
    ChangeColorDirective
  ],
   


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
