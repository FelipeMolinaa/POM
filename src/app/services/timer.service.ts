import { Injectable } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { AudioService } from './audio.service';

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    private timerSubject = new Subject<number>();
    private timerStatusSubject = new Subject<boolean>();
    private timerObservable = interval(1000);
    private status = false;
    private contador = 25 * 60;
    private defaultTimer: number = 25 * 60;

    constructor(private readonly audioService: AudioService) {
        this.iniciarContador();
    }

    private iniciarContador() {
        this.timerObservable
            .subscribe(() => {
                if (this.contador == 0) {
                    this.audioService.playClockOver()
                }
                else if (this.status && this.contador > 0) {
                    this.contador--;
                    this.timerSubject.next(this.contador);
                }
            });
    }

    getTimerValue() {
        return this.timerSubject;
    }

    getTimerStatus() {
        return this.timerStatusSubject;
    }

    setTimerStatus(status: boolean) {
        this.status = status;
        this.timerStatusSubject.next(this.status);
    }

    reiniciar() {
        this.contador = this.defaultTimer;
        this.timerSubject.next(this.contador);
        this.setTimerStatus(false);
    }

    setDefaultTimer(number: number) {
        this.defaultTimer = number;
        this.contador = number;
        this.timerSubject.next(number);
        this.setTimerStatus(false);
    }
}
