import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { TimerType, TimerTypeService } from 'src/app/services/timer-type.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.sass']
})
export class ToggleButtonComponent implements OnInit {

    timersTypes: any;

    constructor(
        private readonly timerService: TimerService,
        private readonly timerTypeService: TimerTypeService,
        private readonly audioService: AudioService) {
    }

    ngOnInit(): void {
        this.timerTypeService.getTimerValue().subscribe((valor) => {
            this.activatedType = valor
        })

        this.timersTypes = this.timerTypeService.getTimerTypes();
    }

    activatedType: TimerType = {
        name: "work",
        timerValue: 25 * 60
    }

    toggleButton(button: TimerType): void {
        this.activatedType = button
        this.timerTypeService.setTimerType(this.activatedType)
        this.audioService.playClick();
    }

    isActivated(button: string): boolean {
        return this.activatedType.name === button
    }
}
