import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ParameterComponent } from './parameter/parameter.component';
import { FinalComponent } from './final/final.component';
import { WheelComponent } from './wheel/wheel.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    GameComponent,
    ParameterComponent,
    FinalComponent,
    WheelComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
