import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TimerService } from './timer.service';

@Injectable({
    providedIn: 'root'
})
export class TimerTypeService {

    timerTypes = {
        work: {
            name: "work",
            timerValue: 25 * 60
        },
        break: {
            name: "break",
            timerValue: 5 * 60
        },
        longBreak: {
            name: "longBreak",
            timerValue: 15 * 60
        }
    }

    private timerTypeSubject = new Subject<TimerType>();
    timerType: TimerType = this.timerTypes.work;
    repeticao: number = 0;

    constructor(private readonly timerService: TimerService) { }

    getTimerValue() {
        return this.timerTypeSubject;
    }

    getTimerTypes() {
        return this.timerTypes;
    }

    setTimerType(timerType: TimerType) {
        this.timerType = timerType;
        this.timerTypeSubject.next(this.timerType);
        this.timerService.setDefaultTimer(timerType.timerValue);
    }

    nextTimerType() {
        if (this.timerType == this.timerTypes.work) {
            if (this.repeticao == 3) {
                this.timerType = this.timerTypes.longBreak;
                this.repeticao = 0
            } else {
                this.repeticao += 1;
                this.timerType = this.timerTypes.break;
            }
        } else if (this.timerType == this.timerTypes.break) {
            this.timerType = this.timerTypes.work;
        }
        else if (this.timerType == this.timerTypes.longBreak) {
            this.timerType = this.timerTypes.work;
        }
        this.timerTypeSubject.next(this.timerType);
        this.timerService.setDefaultTimer(this.timerType.timerValue);
    }
}

export interface TimerType {
    name: string;
    timerValue: number;
}