import { Component, OnInit } from '@angular/core';
import { ListControllService, goalsItem } from 'src/app/services/list-controll.service';

@Component({
    selector: 'app-list-area',
    templateUrl: './list-area.component.html',
    styleUrls: ['./list-area.component.sass']
})
export class ListAreaComponent implements OnInit {

    goals: goalsItem[] = [];
    isCreatingGoal: boolean = false;

    constructor(
        private readonly listControllService: ListControllService) { }

    ngOnInit(): void {
        this.listControllService.getGoalsSubject().subscribe((goals) => {
            this.goals = goals
        })
        this.listControllService.getGoals()

    }
}
