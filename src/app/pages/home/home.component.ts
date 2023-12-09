import { Component } from '@angular/core';
import { ListControllService } from 'src/app/services/list-controll.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent {

    constructor(
        private readonly listControllService: ListControllService
    ) { }

    clearCompletedGoals() {
        this.listControllService.deleteAllCompletedGoals();
    }
}
