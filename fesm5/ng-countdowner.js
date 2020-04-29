import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgCountdownerComponent = /** @class */ (function () {
    function NgCountdownerComponent() {
        this.timerExpired = new EventEmitter(true);
        this.timerStarted = new EventEmitter(true);
    }
    /**
     * @return {?}
     */
    NgCountdownerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initTimer();
    };
    /**
     * @return {?}
     */
    NgCountdownerComponent.prototype.initTimer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var start = new Date(this.start).getTime();
        /** @type {?} */
        var currentdate = new Date();
        /** @type {?} */
        var currentTimeStamp = currentdate.getTime();
        if (currentTimeStamp > start || isNaN(start)) {
            // check if timer has started
            this.startTimer();
        }
        else {
            this.countTimer = 'The timer has not started';
        }
    };
    /**
     * @return {?}
     */
    NgCountdownerComponent.prototype.startTimer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.countDownDate = new Date(this.end).getTime(); // end date formatted
        this.setInterval = setInterval(function () { return _this.runTimer(); }, 1000);
    };
    /**
     * @return {?}
     */
    NgCountdownerComponent.prototype.runTimer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var now = new Date().getTime();
        /** @type {?} */
        var interval = this.countDownDate - now;
        /** @type {?} */
        var seconds = Math.floor((interval % (1000 * 60)) / 1000);
        /** @type {?} */
        var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
        /** @type {?} */
        var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        /** @type {?} */
        var days = Math.floor(interval / (1000 * 60 * 60 * 24)); // calculating days
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
    };
    /**
     * @param {?} digit
     * @return {?}
     */
    NgCountdownerComponent.prototype.prependZero = /**
     * @param {?} digit
     * @return {?}
     */
    function (digit) {
        if (digit < 10) {
            digit = digit.toString();
            /** @type {?} */
            var formattedNumber = '0' + digit;
            return formattedNumber;
        }
        return digit;
    };
    NgCountdownerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ng-countdowner',
                    template: "<p class=\"countdown-timer\" *ngIf=\"countDownTimerVisible !== false\">{{countTimer}}</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgCountdownerComponent.ctorParameters = function () { return []; };
    NgCountdownerComponent.propDecorators = {
        end: [{ type: Input }],
        start: [{ type: Input }],
        timerExpired: [{ type: Output }],
        timerStarted: [{ type: Output }],
        countDownTimerVisible: [{ type: Input }],
        expiryMessage: [{ type: Input }]
    };
    return NgCountdownerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CountdownerModule = /** @class */ (function () {
    function CountdownerModule() {
    }
    CountdownerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        NgCountdownerComponent
                    ],
                    exports: [
                        NgCountdownerComponent
                    ]
                },] }
    ];
    return CountdownerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CountdownerModule, NgCountdownerComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY291bnRkb3duZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWNvdW50ZG93bmVyL3NyYy9hcHAvY291bnRkb3duZXIvbmctY291bnRkb3duZXIvbmctY291bnRkb3duZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1jb3VudGRvd25lci9zcmMvYXBwL2NvdW50ZG93bmVyL2NvdW50ZG93bmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmctY291bnRkb3duZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctY291bnRkb3duZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1jb3VudGRvd25lci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdDb3VudGRvd25lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVuZDogYW55OyAvLyBlbmQgZGF0ZSBvZiBjb3VudGRvd25cbiAgQElucHV0KCkgc3RhcnQ6IGFueTsgLy8gc3RhcnQgZGF0ZSBvZiBjb3VudGRvd25cbiAgQE91dHB1dCgpIHRpbWVyRXhwaXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7IC8vIGVtaXQgdGltZXIgZXhwaXJ5XG4gIEBPdXRwdXQoKSB0aW1lclN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBASW5wdXQoKSBjb3VudERvd25UaW1lclZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4cGlyeU1lc3NhZ2U6IHN0cmluZztcbiAgY291bnREb3duRGF0ZTogYW55O1xuICBjb3VudFRpbWVyOiBhbnk7XG4gIHNldEludGVydmFsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuaW5pdFRpbWVyKCk7XG4gIH1cblxuICBpbml0VGltZXIoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0KS5nZXRUaW1lKCk7XG4gICAgY29uc3QgY3VycmVudGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lU3RhbXAgPSBjdXJyZW50ZGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoY3VycmVudFRpbWVTdGFtcCA+IHN0YXJ0IHx8IGlzTmFOKHN0YXJ0KSkgeyAvLyBjaGVjayBpZiB0aW1lciBoYXMgc3RhcnRlZFxuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291bnRUaW1lciA9ICdUaGUgdGltZXIgaGFzIG5vdCBzdGFydGVkJztcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZW5kKS5nZXRUaW1lKCk7IC8vIGVuZCBkYXRlIGZvcm1hdHRlZFxuICAgIHRoaXMuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1blRpbWVyKCksIDEwMDApO1xuICB9XG5cbiAgcnVuVGltZXIoKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8vIEdldHRpbmcgY3VycmVudCB0aW1lc3RhbXBcbiAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdzsgLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIGN1cnJlbnQgdGltZXN0YW1wIGFuZCBlbmQgdGltZXN0YW1wXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGludGVydmFsICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7IC8vIGNhbGN1bGF0aW5nIHNlY29uZHNcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoaW50ZXJ2YWwgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTsgLy8gY2FsY3VsYXRpbmcgbWludXRlc1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoaW50ZXJ2YWwgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7IC8vIGNhbGN1bGF0aW5nIGhvdXJzXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpOyAvLyBjYWxjdWxhdGluZyBkYXlzXG4gICAgdGhpcy5jb3VudFRpbWVyID0gdGhpcy5wcmVwZW5kWmVybyhkYXlzKSArICc6JyArIHRoaXMucHJlcGVuZFplcm8oaG91cnMpICsgJzonICsgdGhpcy5wcmVwZW5kWmVybyhtaW51dGVzKSArICc6JyArIHRoaXMucHJlcGVuZFplcm8oc2Vjb25kcyk7XG4vLyBFbWl0dGluZyB0aW1lci1lbmQgZXZlbnRcbiAgICBpZiAoaW50ZXJ2YWwgPCAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWwpO1xuICAgICAgdGhpcy50aW1lckV4cGlyZWQuZW1pdCh7J3N0YXJ0ZWQnOiB0aGlzLnN0YXJ0LCAnZW5kZWQnOiB0aGlzLmVuZH0pO1xuICAgICAgaWYgKHRoaXMuZXhwaXJ5TWVzc2FnZSA9PT0gJycpe1xuICAgICAgICB0aGlzLmNvdW50VGltZXIgPSAnVGltZXIgaGFzIGV4cGlyZWQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb3VudFRpbWVyID0gdGhpcy5leHBpcnlNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcHJlcGVuZFplcm8oZGlnaXQpIHtcblxuICAgIGlmIChkaWdpdCA8IDEwKSB7XG4gICAgICBkaWdpdCA9IGRpZ2l0LnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSAnMCcgKyBkaWdpdDtcbiAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXI7XG4gICAgfVxuICAgIHJldHVybiBkaWdpdDtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdDb3VudGRvd25lckNvbXBvbmVudCB9IGZyb20gJy4vbmctY291bnRkb3duZXIvbmctY291bnRkb3duZXIuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdDb3VudGRvd25lckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmdDb3VudGRvd25lckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZG93bmVyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQWtCRTs0QkFSeUIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDOzRCQUN0QixJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUM7S0FROUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFFRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDbEI7Ozs7SUFFRCwwQ0FBUzs7O0lBQVQ7O1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztRQUMvQixJQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUvQyxJQUFJLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBQzVDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FB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