import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AudioService {

    constructor() { }

    playClick() {
        let audio = new Audio();
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        audio.src = `../../../assets/sounds/click${randomNumber}.wav`;
        audio.load();
        audio.play();
    }

    playClockOver() {
        let audio = new Audio();
        audio.src = "../../../assets/sounds/ClockOver.wav";
        audio.load();
        audio.play();
    }
}
