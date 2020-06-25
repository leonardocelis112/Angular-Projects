import { ExercisePlan } from './../workout-runner/model';
import { CoreModule } from './core.module';
import { Injectable } from '@angular/core';

export class WorkoutLogEntry {
  constructor(
    public startedOn: Date,
    public completed: boolean = false,
    public exercisesDone: number = 0,
    public lastExercise?: string,
    public endedOn?: Date
  ) {}
}

@Injectable({
  providedIn: CoreModule,
})
export class WorkoutHistoryTrackerService {
  private maxHistoryItems = 20;
  private currentWorkoutLog: WorkoutLogEntry = null;
  private workoutHistory: Array<WorkoutLogEntry> = [];
  private workoutTracked: boolean;
  constructor() {}

  getTracking(): boolean {
    return this.workoutTracked;
  }

  getHistory(): Array<WorkoutLogEntry> {
    return this.workoutHistory;
  }

  startTracking() {
    this.workoutTracked = true;
    this.currentWorkoutLog = new WorkoutLogEntry(new Date());
    if (this.workoutHistory.length <= this.maxHistoryItems) {
      this.workoutHistory.push(this.currentWorkoutLog);
    }
  }

  exerciseComplete(exercise: ExercisePlan) {
    this.currentWorkoutLog.lastExercise = exercise.exercise.title;
    ++this.currentWorkoutLog.exercisesDone;
  }

  endTracking(completed: boolean) {
    this.currentWorkoutLog.completed = completed;
    this.currentWorkoutLog.endedOn = new Date();
    this.currentWorkoutLog = null;
    this.workoutTracked = false;
  }
}
