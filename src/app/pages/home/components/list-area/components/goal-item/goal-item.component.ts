import { Component, Input } from '@angular/core';
import { ListControllService, goalsItem } from 'src/app/services/list-controll.service';

@Component({
    selector: 'app-goal-item',
    templateUrl: './goal-item.component.html',
    styleUrls: ['./goal-item.component.sass']
})
export class GoalItemComponent {
    @Input() item!: goalsItem

    constructor(private readonly listControllService: ListControllService) {

    }

    setCompleted(item: goalsItem) {
        item.completed = !item.completed
        this.listControllService.updateGoal(this.item)
    }
}
