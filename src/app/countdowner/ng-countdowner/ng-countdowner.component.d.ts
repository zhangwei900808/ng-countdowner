import { OnInit, EventEmitter } from '@angular/core';
export declare class NgCountdownerComponent implements OnInit {
    end: any;
    start: any;
    timerExpired: EventEmitter<{}>;
    timerStarted: EventEmitter<{}>;
    countDownTimerVisible: boolean;
    expiryMessage: string;
    countDownDate: any;
    countTimer: any;
    setInterval: any;
    constructor();
    ngOnInit(): void;
    initTimer(): void;
    startTimer(): void;
    runTimer(): void;
    prependZero(digit: any): any;
}
