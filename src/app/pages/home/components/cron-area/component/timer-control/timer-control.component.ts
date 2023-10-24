import { Component, OnInit } from '@angular/core';
import { TimerTypeService } from 'src/app/services/timer-type.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
    selector: 'app-timer-control',
    templateUrl: './timer-control.component.html',
    styleUrls: ['./timer-control.component.sass']
})
export class TimerControlComponent implements OnInit {

    constructor(private readonly timerService: TimerService, private readonly timerTypeService: TimerTypeService) {

    }
    ngOnInit(): void {
        this.timerService.getTimerStatus().subscribe((valor) => {
            this.status = valor;
        });
    }

    status = false;

    skipTimer() {
        this.timerTypeService.nextTimerType();
    }
    stopStartTimer() {
        this.timerService.setTimerStatus(!this.status)

    }
    resetTimer() {
        this.timerService.reiniciar();
    }
}
