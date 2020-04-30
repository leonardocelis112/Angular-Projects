import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WorkoutRunnerModule } from "./workout-runner/workout-runner.module";
import { ExerciseDescriptionComponent } from "./workout-runner/exercise-description/exercise-description.component";
import { VideoPlayerComponent } from "./workout-runner/exercise-description/video-player/video-player.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WorkoutRunnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
