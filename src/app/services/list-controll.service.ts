import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListControllService {

    storage: Storage;
    private goalsSubject = new Subject<goalsItem[]>();

    constructor() {
        this.storage = window.localStorage;
    }

    setGoal(value: goalsItem) {
        var goals = this.getGoals();
        this.storage.setItem('goals', JSON.stringify([value, ...goals]));
        this.updateGoalsSubject(this.getGoals());
    }

    getGoals() {
        const goals = this.storage.getItem('goals');
        if (goals) {
            var json = JSON.parse(goals)
            this.updateGoalsSubject(json);
            return json as goalsItem[];
        }
        this.updateGoalsSubject([]);
        return []
    }

    deleteGoal(id: string) {
        const goals = this.getGoals();
        this.storage.setItem('goals', JSON.stringify(goals.filter(goal => goal.id !== id)));
        this.getGoals()
    }

    deleteAllGoals() {
        this.storage.setItem('goals', JSON.stringify([]));
        this.getGoals()
    }

    updateGoal(value: goalsItem) {
        this.storage.setItem('goals', JSON.stringify(this.getGoals().map(goal => goal.id === value.id ? value : goal)))
        this.getGoals()
    }

    deleteAllCompletedGoals() {
        this.storage.setItem('goals', JSON.stringify(this.getGoals().filter(goal => !goal.completed)))
        this.getGoals()
    }

    updateGoalsSubject(goals: goalsItem[]) {
        this.goalsSubject.next(goals);
    }

    getGoalsSubject() {
        return this.goalsSubject
    }
}

export interface goalsItem {
    id: string;
    name: string;
    completed: boolean;
    completedActs: number;
    totalActs: number;
}