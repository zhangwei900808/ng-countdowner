/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export { NgCountdownerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY291bnRkb3duZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY291bnRkb3duZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7SUFrQjNFOzRCQVJ5QixJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUM7NEJBQ3RCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQztLQVE5Qzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUVFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELDBDQUFTOzs7SUFBVDs7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQzdDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7O1FBQy9CLElBQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9DLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLENBQUM7U0FDL0M7S0FDRjs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0Q7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7O1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDakMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7O1FBQzFDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzs7UUFDNUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUN4RSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDaEYsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFN0ksRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUNuRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUM7YUFDdkM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDdEM7U0FFRjtLQUNGOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxLQUFLO1FBRWYsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztZQUN6QixJQUFNLGVBQWUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxlQUFlLENBQUM7U0FDeEI7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBRWQ7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdUdBQThDOztpQkFFL0M7Ozs7O3NCQUVFLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxNQUFNOytCQUNOLE1BQU07d0NBQ04sS0FBSztnQ0FDTCxLQUFLOztpQ0FiUjs7U0FPYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmctY291bnRkb3duZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctY291bnRkb3duZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1jb3VudGRvd25lci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdDb3VudGRvd25lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVuZDogYW55OyAvLyBlbmQgZGF0ZSBvZiBjb3VudGRvd25cbiAgQElucHV0KCkgc3RhcnQ6IGFueTsgLy8gc3RhcnQgZGF0ZSBvZiBjb3VudGRvd25cbiAgQE91dHB1dCgpIHRpbWVyRXhwaXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7IC8vIGVtaXQgdGltZXIgZXhwaXJ5XG4gIEBPdXRwdXQoKSB0aW1lclN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBASW5wdXQoKSBjb3VudERvd25UaW1lclZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4cGlyeU1lc3NhZ2U6IHN0cmluZztcbiAgY291bnREb3duRGF0ZTogYW55O1xuICBjb3VudFRpbWVyOiBhbnk7XG4gIHNldEludGVydmFsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuaW5pdFRpbWVyKCk7XG4gIH1cblxuICBpbml0VGltZXIoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0KS5nZXRUaW1lKCk7XG4gICAgY29uc3QgY3VycmVudGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lU3RhbXAgPSBjdXJyZW50ZGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoY3VycmVudFRpbWVTdGFtcCA+IHN0YXJ0IHx8IGlzTmFOKHN0YXJ0KSkgeyAvLyBjaGVjayBpZiB0aW1lciBoYXMgc3RhcnRlZFxuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291bnRUaW1lciA9ICdUaGUgdGltZXIgaGFzIG5vdCBzdGFydGVkJztcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZW5kKS5nZXRUaW1lKCk7IC8vIGVuZCBkYXRlIGZvcm1hdHRlZFxuICAgIHRoaXMuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1blRpbWVyKCksIDEwMDApO1xuICB9XG5cbiAgcnVuVGltZXIoKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8vIEdldHRpbmcgY3VycmVudCB0aW1lc3RhbXBcbiAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdzsgLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIGN1cnJlbnQgdGltZXN0YW1wIGFuZCBlbmQgdGltZXN0YW1wXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGludGVydmFsICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7IC8vIGNhbGN1bGF0aW5nIHNlY29uZHNcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoaW50ZXJ2YWwgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTsgLy8gY2FsY3VsYXRpbmcgbWludXRlc1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoaW50ZXJ2YWwgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7IC8vIGNhbGN1bGF0aW5nIGhvdXJzXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpOyAvLyBjYWxjdWxhdGluZyBkYXlzXG4gICAgdGhpcy5jb3VudFRpbWVyID0gdGhpcy5wcmVwZW5kWmVybyhkYXlzKSArICc6JyArIHRoaXMucHJlcGVuZFplcm8oaG91cnMpICsgJzonICsgdGhpcy5wcmVwZW5kWmVybyhtaW51dGVzKSArICc6JyArIHRoaXMucHJlcGVuZFplcm8oc2Vjb25kcyk7XG4vLyBFbWl0dGluZyB0aW1lci1lbmQgZXZlbnRcbiAgICBpZiAoaW50ZXJ2YWwgPCAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWwpO1xuICAgICAgdGhpcy50aW1lckV4cGlyZWQuZW1pdCh7J3N0YXJ0ZWQnOiB0aGlzLnN0YXJ0LCAnZW5kZWQnOiB0aGlzLmVuZH0pO1xuICAgICAgaWYgKHRoaXMuZXhwaXJ5TWVzc2FnZSA9PT0gJycpe1xuICAgICAgICB0aGlzLmNvdW50VGltZXIgPSAnVGltZXIgaGFzIGV4cGlyZWQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb3VudFRpbWVyID0gdGhpcy5leHBpcnlNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcHJlcGVuZFplcm8oZGlnaXQpIHtcblxuICAgIGlmIChkaWdpdCA8IDEwKSB7XG4gICAgICBkaWdpdCA9IGRpZ2l0LnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSAnMCcgKyBkaWdpdDtcbiAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXI7XG4gICAgfVxuICAgIHJldHVybiBkaWdpdDtcblxuICB9XG5cbn1cbiJdfQ==