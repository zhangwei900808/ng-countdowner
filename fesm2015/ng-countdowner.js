import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NgCountdownerComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 1);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r66 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r66.countTimer);
} }
class NgCountdownerComponent {
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

        if (days) {
          this.countTimer = days + '天' + this.prependZero(hours) + '时' + this.prependZero(minutes) + '分' + this.prependZero(seconds) + '秒 直播开始';
        } else {
          this.countTimer = this.prependZero(hours) + '时' + this.prependZero(minutes) + '分' + this.prependZero(seconds) + '秒 直播开始';
        }

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
NgCountdownerComponent.ɵfac = function NgCountdownerComponent_Factory(t) { return new (t || NgCountdownerComponent)(); };
NgCountdownerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgCountdownerComponent, selectors: [["app-ng-countdowner"]], inputs: { end: "end", start: "start", countDownTimerVisible: "countDownTimerVisible", expiryMessage: "expiryMessage" }, outputs: { timerExpired: "timerExpired", timerStarted: "timerStarted" }, decls: 1, vars: 1, consts: [["class", "countdown-timer", 4, "ngIf"], [1, "countdown-timer"]], template: function NgCountdownerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgCountdownerComponent_p_0_Template, 2, 1, "p", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.countDownTimerVisible !== false);
    } }, directives: [ɵngcc1.NgIf], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgCountdownerComponent, [{
        type: Component,
        args: [{
                selector: 'app-ng-countdowner',
                template: "<p class=\"countdown-timer\" *ngIf=\"countDownTimerVisible !== false\">{{countTimer}}</p>\n",
                styles: [""]
            }]
    }], function () { return []; }, { timerExpired: [{
            type: Output
        }], timerStarted: [{
            type: Output
        }], end: [{
            type: Input
        }], start: [{
            type: Input
        }], countDownTimerVisible: [{
            type: Input
        }], expiryMessage: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CountdownerModule {
}
CountdownerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CountdownerModule });
CountdownerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CountdownerModule_Factory(t) { return new (t || CountdownerModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CountdownerModule, { declarations: function () { return [NgCountdownerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgCountdownerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CountdownerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NgCountdownerComponent
                ],
                exports: [
                    NgCountdownerComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CountdownerModule, NgCountdownerComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY291bnRkb3duZXIuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy1jb3VudGRvd25lci9zcmMvYXBwL2NvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyLmNvbXBvbmVudC50cyIsIm5nOi9uZy1jb3VudGRvd25lci9zcmMvYXBwL2NvdW50ZG93bmVyL2NvdW50ZG93bmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFrQkU7NEJBUnlCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQzs0QkFDdEIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDO0tBUTlDOzs7O0lBRUQsUUFBUTtRQUVOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELFNBQVM7O1FBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUM3QyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztRQUMvQixNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUvQyxJQUFJLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBQzVDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQztTQUMvQztLQUNGOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdEOzs7O0lBRUQsUUFBUTs7UUFDTixNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQzs7UUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7O1FBQzVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDeEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBQ2hGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUU3SSxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRSxFQUFDO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUN0QztTQUVGO0tBQ0Y7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFFZixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDZCxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztZQUN6QixNQUFNLGVBQWUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLE9BQU8sZUFBZSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FFZDs7Ozs7OztDQUVILG1EQXpFQyxBQUtHO1FBTE0sU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2NBQzlCO2tCQUlDLEtBQUs7b0JBQ0wsS0FBSztpQkFMd0MsVUFNN0MsTUFBTTt1QkFKUixJQUtFLE1BQU07b0NBQ04sS0FBSzs0QkFDTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQU07Ozs7OztBQ2JkOzs7OztDQUEyQjtnQ0FHMUIsUUFBUSxTQUFDLGtCQUNSLE9BQU8sRUFBRSxzQkFDUCxZQUFZLGtCQUNiLGtCQUNELFlBQVksRUFBRSxzQkFDWixzQkFBc0Isa0JBQ3ZCLGtCQUNELE9BQU8sRUFBRSxzQkFDUCxzQkFBc0I7aUJBQ3ZCLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7MEJBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmctY291bnRkb3duZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctY291bnRkb3duZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1jb3VudGRvd25lci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdDb3VudGRvd25lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVuZDogYW55OyAvLyBlbmQgZGF0ZSBvZiBjb3VudGRvd25cbiAgQElucHV0KCkgc3RhcnQ6IGFueTsgLy8gc3RhcnQgZGF0ZSBvZiBjb3VudGRvd25cbiAgQE91dHB1dCgpIHRpbWVyRXhwaXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7IC8vIGVtaXQgdGltZXIgZXhwaXJ5XG4gIEBPdXRwdXQoKSB0aW1lclN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBASW5wdXQoKSBjb3VudERvd25UaW1lclZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4cGlyeU1lc3NhZ2U6IHN0cmluZztcbiAgY291bnREb3duRGF0ZTogYW55O1xuICBjb3VudFRpbWVyOiBhbnk7XG4gIHNldEludGVydmFsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuaW5pdFRpbWVyKCk7XG4gIH1cblxuICBpbml0VGltZXIoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0KS5nZXRUaW1lKCk7XG4gICAgY29uc3QgY3VycmVudGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lU3RhbXAgPSBjdXJyZW50ZGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoY3VycmVudFRpbWVTdGFtcCA+IHN0YXJ0IHx8IGlzTmFOKHN0YXJ0KSkgeyAvLyBjaGVjayBpZiB0aW1lciBoYXMgc3RhcnRlZFxuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291bnRUaW1lciA9ICdUaGUgdGltZXIgaGFzIG5vdCBzdGFydGVkJztcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZW5kKS5nZXRUaW1lKCk7IC8vIGVuZCBkYXRlIGZvcm1hdHRlZFxuICAgIHRoaXMuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1blRpbWVyKCksIDEwMDApO1xuICB9XG5cbiAgcnVuVGltZXIoKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8vIEdldHRpbmcgY3VycmVudCB0aW1lc3RhbXBcbiAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdzsgLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIGN1cnJlbnQgdGltZXN0YW1wIGFuZCBlbmQgdGltZXN0YW1wXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGludGVydmFsICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7IC8vIGNhbGN1bGF0aW5nIHNlY29uZHNcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoaW50ZXJ2YWwgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTsgLy8gY2FsY3VsYXRpbmcgbWludXRlc1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoaW50ZXJ2YWwgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7IC8vIGNhbGN1bGF0aW5nIGhvdXJzXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpOyAvLyBjYWxjdWxhdGluZyBkYXlzXG4gICAgdGhpcy5jb3VudFRpbWVyID0gdGhpcy5wcmVwZW5kWmVybyhkYXlzKSArICc6JyArIHRoaXMucHJlcGVuZFplcm8oaG91cnMpICsgJzonICsgdGhpcy5wcmVwZW5kWmVybyhtaW51dGVzKSArICc6JyArIHRoaXMucHJlcGVuZFplcm8oc2Vjb25kcyk7XG4vLyBFbWl0dGluZyB0aW1lci1lbmQgZXZlbnRcbiAgICBpZiAoaW50ZXJ2YWwgPCAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWwpO1xuICAgICAgdGhpcy50aW1lckV4cGlyZWQuZW1pdCh7J3N0YXJ0ZWQnOiB0aGlzLnN0YXJ0LCAnZW5kZWQnOiB0aGlzLmVuZH0pO1xuICAgICAgaWYgKHRoaXMuZXhwaXJ5TWVzc2FnZSA9PT0gJycpe1xuICAgICAgICB0aGlzLmNvdW50VGltZXIgPSAnVGltZXIgaGFzIGV4cGlyZWQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb3VudFRpbWVyID0gdGhpcy5leHBpcnlNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcHJlcGVuZFplcm8oZGlnaXQpIHtcblxuICAgIGlmIChkaWdpdCA8IDEwKSB7XG4gICAgICBkaWdpdCA9IGRpZ2l0LnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSAnMCcgKyBkaWdpdDtcbiAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXI7XG4gICAgfVxuICAgIHJldHVybiBkaWdpdDtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdDb3VudGRvd25lckNvbXBvbmVudCB9IGZyb20gJy4vbmctY291bnRkb3duZXIvbmctY291bnRkb3duZXIuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdDb3VudGRvd25lckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmdDb3VudGRvd25lckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZG93bmVyTW9kdWxlIHsgfVxuIl19
