import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListControllService } from 'src/app/services/list-controll.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'app-add-update-goal-item',
    templateUrl: './add-update-goal-item.component.html',
    styleUrls: ['./add-update-goal-item.component.sass']
})
export class AddUpdateGoalItemComponent {

    @Input() isCreatingGoal = false
    @Input() id = ""
    @Input() completedActs = 0
    @Input() totalActs = 1
    @Input() name = ""

    @Output() cancelEditEvent = new EventEmitter();

    constructor(private readonly listControllService: ListControllService,
    ) { }
    onCreateOrEditGoalClickHandle() {
        if (this.name == "" || typeof this.completedActs != "number" || typeof this.totalActs != "number") {
            alert("Revise os campos e envie novamente");
            return
        }
        if (this.isCreatingGoal) {
            this.listControllService.setGoal({
                id: uuidv4(),
                completed: false,
                completedActs: this.completedActs,
                name: this.name,
                totalActs: this.totalActs
            });
        }
        else {
            this.listControllService.updateGoal({
                id: this.id,
                completed: false,
                completedActs: this.completedActs,
                name: this.name,
                totalActs: this.totalActs
            })
        }
        this.id = ""
        this.name = ""
        this.completedActs = 0
        this.totalActs = 1
    }

    deleteGoal() {
        this.listControllService.deleteGoal(this.id)
    }

    cancelEdit() {
        this.cancelEditEvent.emit();
    }
}
