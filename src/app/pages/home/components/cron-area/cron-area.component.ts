import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
    selector: 'app-cron-area',
    templateUrl: './cron-area.component.html',
    styleUrls: ['./cron-area.component.sass']
})
export class CronAreaComponent implements OnInit {

    timer = 1500;

    constructor(private readonly timerService: TimerService) {

    }

    ngOnInit(): void {
        this.timerService.getTimerValue().subscribe((valor) => {
            this.timer = valor;
        })
    }
}
