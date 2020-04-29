/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgCountdownerComponent {
    constructor() {
        this.timerExpired = new EventEmitter(true);
        this.timerStarted = new EventEmitter(true);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTimer();
    }
    /**
     * @return {?}
     */
    initTimer() {
        /** @type {?} */
        const start = new Date(this.start).getTime();
        /** @type {?} */
        const currentdate = new Date();
        /** @type {?} */
        const currentTimeStamp = currentdate.getTime();
        if (currentTimeStamp > start || isNaN(start)) {
            // check if timer has started
            this.startTimer();
        }
        else {
            this.countTimer = 'The timer has not started';
        }
    }
    /**
     * @return {?}
     */
    startTimer() {
        this.countDownDate = new Date(this.end).getTime(); // end date formatted
        this.setInterval = setInterval(() => this.runTimer(), 1000);
    }
    /**
     * @return {?}
     */
    runTimer() {
        /** @type {?} */
        const now = new Date().getTime();
        /** @type {?} */
        const interval = this.countDownDate - now;
        /** @type {?} */
        const seconds = Math.floor((interval % (1000 * 60)) / 1000);
        /** @type {?} */
        const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
        /** @type {?} */
        const hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        /** @type {?} */
        const days = Math.floor(interval / (1000 * 60 * 60 * 24)); // calculating days
        this.countTimer = this.prependZero(days) + ':' + this.prependZero(hours) + ':' + this.prependZero(minutes) + ':' + this.prependZero(seconds);
        // Emitting timer-end event
        if (interval < 0) {
            clearInterval(this.setInterval);
            this.timerExpired.emit({ 'started': this.start, 'ended': this.end });
            if (this.expiryMessage === '') {
                this.countTimer = 'Timer has expired';
            }
            else {
                this.countTimer = this.expiryMessage;
            }
        }
    }
    /**
     * @param {?} digit
     * @return {?}
     */
    prependZero(digit) {
        if (digit < 10) {
            digit = digit.toString();
            /** @type {?} */
            const formattedNumber = '0' + digit;
            return formattedNumber;
        }
        return digit;
    }
}
NgCountdownerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ng-countdowner',
                template: "<p class=\"countdown-timer\" *ngIf=\"countDownTimerVisible !== false\">{{countTimer}}</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgCountdownerComponent.ctorParameters = () => [];
NgCountdownerComponent.propDecorators = {
    end: [{ type: Input }],
    start: [{ type: Input }],
    timerExpired: [{ type: Output }],
    timerStarted: [{ type: Output }],
    countDownTimerVisible: [{ type: Input }],
    expiryMessage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgCountdownerComponent.prototype.end;
    /** @type {?} */
    NgCountdownerComponent.prototype.start;
    /** @type {?} */
    NgCountdownerComponent.prototype.timerExpired;
    /** @type {?} */
    NgCountdownerComponent.prototype.timerStarted;
    /** @type {?} */
    NgCountdownerComponent.prototype.countDownTimerVisible;
    /** @type {?} */
    NgCountdownerComponent.prototype.expiryMessage;
    /** @type {?} */
    NgCountdownerComponent.prototype.countDownDate;
    /** @type {?} */
    NgCountdownerComponent.prototype.countTimer;
    /** @type {?} */
    NgCountdownerComponent.prototype.setInterval;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY291bnRkb3duZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY291bnRkb3duZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU83RSxNQUFNO0lBV0o7NEJBUnlCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQzs0QkFDdEIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDO0tBUTlDOzs7O0lBRUQsUUFBUTtRQUVOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELFNBQVM7O1FBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUM3QyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztRQUMvQixNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUvQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLDJCQUEyQixDQUFDO1NBQy9DO0tBQ0Y7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdEOzs7O0lBRUQsUUFBUTs7UUFDTixNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQzs7UUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDOztRQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBQ3hFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUNoRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUU3SSxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ25FLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQzthQUN2QztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUN0QztTQUVGO0tBQ0Y7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFFZixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O1lBQ3pCLE1BQU0sZUFBZSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDcEMsTUFBTSxDQUFDLGVBQWUsQ0FBQztTQUN4QjtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FFZDs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix1R0FBOEM7O2FBRS9DOzs7OztrQkFFRSxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsTUFBTTsyQkFDTixNQUFNO29DQUNOLEtBQUs7NEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uZy1jb3VudGRvd25lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1jb3VudGRvd25lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLWNvdW50ZG93bmVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NvdW50ZG93bmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZW5kOiBhbnk7IC8vIGVuZCBkYXRlIG9mIGNvdW50ZG93blxuICBASW5wdXQoKSBzdGFydDogYW55OyAvLyBzdGFydCBkYXRlIG9mIGNvdW50ZG93blxuICBAT3V0cHV0KCkgdGltZXJFeHBpcmVkID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTsgLy8gZW1pdCB0aW1lciBleHBpcnlcbiAgQE91dHB1dCgpIHRpbWVyU3RhcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gIEBJbnB1dCgpIGNvdW50RG93blRpbWVyVmlzaWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZXhwaXJ5TWVzc2FnZTogc3RyaW5nO1xuICBjb3VudERvd25EYXRlOiBhbnk7XG4gIGNvdW50VGltZXI6IGFueTtcbiAgc2V0SW50ZXJ2YWw6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5pbml0VGltZXIoKTtcbiAgfVxuXG4gIGluaXRUaW1lcigpIHtcbiAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHRoaXMuc3RhcnQpLmdldFRpbWUoKTtcbiAgICBjb25zdCBjdXJyZW50ZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWVTdGFtcCA9IGN1cnJlbnRkYXRlLmdldFRpbWUoKTtcblxuICAgIGlmIChjdXJyZW50VGltZVN0YW1wID4gc3RhcnQgfHwgaXNOYU4oc3RhcnQpKSB7IC8vIGNoZWNrIGlmIHRpbWVyIGhhcyBzdGFydGVkXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3VudFRpbWVyID0gJ1RoZSB0aW1lciBoYXMgbm90IHN0YXJ0ZWQnO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgdGhpcy5jb3VudERvd25EYXRlID0gbmV3IERhdGUodGhpcy5lbmQpLmdldFRpbWUoKTsgLy8gZW5kIGRhdGUgZm9ybWF0dGVkXG4gICAgdGhpcy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMucnVuVGltZXIoKSwgMTAwMCk7XG4gIH1cblxuICBydW5UaW1lcigpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgLy8gR2V0dGluZyBjdXJyZW50IHRpbWVzdGFtcFxuICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5jb3VudERvd25EYXRlIC0gbm93OyAvLyBEaWZmZXJlbmNlIGJldHdlZW4gY3VycmVudCB0aW1lc3RhbXAgYW5kIGVuZCB0aW1lc3RhbXBcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoaW50ZXJ2YWwgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTsgLy8gY2FsY3VsYXRpbmcgc2Vjb25kc1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChpbnRlcnZhbCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpOyAvLyBjYWxjdWxhdGluZyBtaW51dGVzXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChpbnRlcnZhbCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTsgLy8gY2FsY3VsYXRpbmcgaG91cnNcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7IC8vIGNhbGN1bGF0aW5nIGRheXNcbiAgICB0aGlzLmNvdW50VGltZXIgPSB0aGlzLnByZXBlbmRaZXJvKGRheXMpICsgJzonICsgdGhpcy5wcmVwZW5kWmVybyhob3VycykgKyAnOicgKyB0aGlzLnByZXBlbmRaZXJvKG1pbnV0ZXMpICsgJzonICsgdGhpcy5wcmVwZW5kWmVybyhzZWNvbmRzKTtcbi8vIEVtaXR0aW5nIHRpbWVyLWVuZCBldmVudFxuICAgIGlmIChpbnRlcnZhbCA8IDApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zZXRJbnRlcnZhbCk7XG4gICAgICB0aGlzLnRpbWVyRXhwaXJlZC5lbWl0KHsnc3RhcnRlZCc6IHRoaXMuc3RhcnQsICdlbmRlZCc6IHRoaXMuZW5kfSk7XG4gICAgICBpZiAodGhpcy5leHBpcnlNZXNzYWdlID09PSAnJyl7XG4gICAgICAgIHRoaXMuY291bnRUaW1lciA9ICdUaW1lciBoYXMgZXhwaXJlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvdW50VGltZXIgPSB0aGlzLmV4cGlyeU1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwcmVwZW5kWmVybyhkaWdpdCkge1xuXG4gICAgaWYgKGRpZ2l0IDwgMTApIHtcbiAgICAgIGRpZ2l0ID0gZGlnaXQudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9ICcwJyArIGRpZ2l0O1xuICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlcjtcbiAgICB9XG4gICAgcmV0dXJuIGRpZ2l0O1xuXG4gIH1cblxufVxuIl19