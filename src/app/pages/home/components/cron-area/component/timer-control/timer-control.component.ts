import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { TimerTypeService } from 'src/app/services/timer-type.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
    selector: 'app-timer-control',
    templateUrl: './timer-control.component.html',
    styleUrls: ['./timer-control.component.sass']
})
export class TimerControlComponent implements OnInit {

    constructor(
        private readonly timerService: TimerService,
        private readonly timerTypeService: TimerTypeService,
        private readonly audioService: AudioService
    ) {

    }
    ngOnInit(): void {
        this.timerService.getTimerStatus().subscribe((valor) => {
            this.status = valor;
        });
    }

    status = false;

    skipTimer() {
        this.timerTypeService.nextTimerType();
        this.audioService.playClick();
    }
    stopStartTimer() {
        this.timerService.setTimerStatus(!this.status)
        this.audioService.playClick();
    }
    resetTimer() {
        this.timerService.reiniciar();
        this.audioService.playClick();
    }
}
