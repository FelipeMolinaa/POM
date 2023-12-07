import { Component, OnInit } from '@angular/core';
import { ListControllService } from 'src/app/services/list-controll.service';

@Component({
    selector: 'app-list-area',
    templateUrl: './list-area.component.html',
    styleUrls: ['./list-area.component.sass']
})
export class ListAreaComponent implements OnInit {
    goals = this.listControllService.getGoals();

    constructor(private readonly listControllService: ListControllService) { }

    ngOnInit(): void {

    }
}
