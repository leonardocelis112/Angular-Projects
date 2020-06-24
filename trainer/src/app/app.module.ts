import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { ExerciseDescriptionComponent } from './workout-runner/exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './workout-runner/exercise-description/video-player/video-player.component';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, StartComponent, FinishComponent],
  imports: [BrowserModule, WorkoutRunnerModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
