import { ExercisePlan } from './../workout-runner/model';
import { CoreModule } from './core.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: CoreModule,
})
export class WorkoutHistoryTrackerService {
  private maxHistoryItems = 20;
  private currentWorkoutLog: WorkoutLogEntry = null;
  private workoutHistory: Array<WorkoutLogEntry>;
  private workoutTracked: boolean;
  constructor() {}

  getTracking(): boolean {
    return this.workoutTracked;
  }
}

export class WorkoutLogEntry {
  constructor(
    public startedOn: Date,
    public completed: boolean = false,
    public exercisesDone: number = 0,
    public lastExercise?: string,
    public endedOn?: Date
  ) {}
}
