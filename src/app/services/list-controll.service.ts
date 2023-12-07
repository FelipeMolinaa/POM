import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ListControllService {
    storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    setGoal(value: goalsItem) {
        var goals = this.getGoals();
        this.storage.setItem('goals', JSON.stringify([value, ...goals]));
    }

    getGoals() {
        const goals = this.storage.getItem('goals');
        if (goals) {
            return JSON.parse(goals) as goalsItem[];
        }
        return []
    }

    deleteGoal(name: string) {
        const goals = this.getGoals();
        this.storage.setItem('goals', JSON.stringify(goals.filter(goal => goal.name !== name)));
    }

    deleteAllGoals() {
        this.storage.setItem('goals', JSON.stringify([]));
    }

    updateGoal(value: goalsItem) {
        this.storage.setItem('goals', JSON.stringify(this.getGoals().map(goal => goal.name === value.name ? value : goal)))
    }
}

export interface goalsItem {
    name: string;
    completed: boolean;
    completedActs: number;
    totalActs: number;
}