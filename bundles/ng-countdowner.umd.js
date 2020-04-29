(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-countdowner', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ng-countdowner'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgCountdownerComponent = (function () {
        function NgCountdownerComponent() {
            this.timerExpired = new core.EventEmitter(true);
            this.timerStarted = new core.EventEmitter(true);
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
            { type: core.Component, args: [{
                        selector: 'app-ng-countdowner',
                        template: "<p class=\"countdown-timer\" *ngIf=\"countDownTimerVisible !== false\">{{countTimer}}</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgCountdownerComponent.ctorParameters = function () { return []; };
        NgCountdownerComponent.propDecorators = {
            end: [{ type: core.Input }],
            start: [{ type: core.Input }],
            timerExpired: [{ type: core.Output }],
            timerStarted: [{ type: core.Output }],
            countDownTimerVisible: [{ type: core.Input }],
            expiryMessage: [{ type: core.Input }]
        };
        return NgCountdownerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CountdownerModule = (function () {
        function CountdownerModule() {
        }
        CountdownerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.CountdownerModule = CountdownerModule;
    exports.ɵa = NgCountdownerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY291bnRkb3duZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1jb3VudGRvd25lci9zcmMvYXBwL2NvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY291bnRkb3duZXIvc3JjL2FwcC9jb3VudGRvd25lci9jb3VudGRvd25lci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW5nLWNvdW50ZG93bmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nLWNvdW50ZG93bmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctY291bnRkb3duZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nQ291bnRkb3duZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBlbmQ6IGFueTsgLy8gZW5kIGRhdGUgb2YgY291bnRkb3duXG4gIEBJbnB1dCgpIHN0YXJ0OiBhbnk7IC8vIHN0YXJ0IGRhdGUgb2YgY291bnRkb3duXG4gIEBPdXRwdXQoKSB0aW1lckV4cGlyZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpOyAvLyBlbWl0IHRpbWVyIGV4cGlyeVxuICBAT3V0cHV0KCkgdGltZXJTdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgQElucHV0KCkgY291bnREb3duVGltZXJWaXNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBleHBpcnlNZXNzYWdlOiBzdHJpbmc7XG4gIGNvdW50RG93bkRhdGU6IGFueTtcbiAgY291bnRUaW1lcjogYW55O1xuICBzZXRJbnRlcnZhbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmluaXRUaW1lcigpO1xuICB9XG5cbiAgaW5pdFRpbWVyKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodGhpcy5zdGFydCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50VGltZVN0YW1wID0gY3VycmVudGRhdGUuZ2V0VGltZSgpO1xuXG4gICAgaWYgKGN1cnJlbnRUaW1lU3RhbXAgPiBzdGFydCB8fCBpc05hTihzdGFydCkpIHsgLy8gY2hlY2sgaWYgdGltZXIgaGFzIHN0YXJ0ZWRcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvdW50VGltZXIgPSAnVGhlIHRpbWVyIGhhcyBub3Qgc3RhcnRlZCc7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRUaW1lcigpIHtcbiAgICB0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSh0aGlzLmVuZCkuZ2V0VGltZSgpOyAvLyBlbmQgZGF0ZSBmb3JtYXR0ZWRcbiAgICB0aGlzLnNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5ydW5UaW1lcigpLCAxMDAwKTtcbiAgfVxuXG4gIHJ1blRpbWVyKCkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpOyAvLyBHZXR0aW5nIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLmNvdW50RG93bkRhdGUgLSBub3c7IC8vIERpZmZlcmVuY2UgYmV0d2VlbiBjdXJyZW50IHRpbWVzdGFtcCBhbmQgZW5kIHRpbWVzdGFtcFxuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChpbnRlcnZhbCAlICgxMDAwICogNjApKSAvIDEwMDApOyAvLyBjYWxjdWxhdGluZyBzZWNvbmRzXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGludGVydmFsICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7IC8vIGNhbGN1bGF0aW5nIG1pbnV0ZXNcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGludGVydmFsICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpOyAvLyBjYWxjdWxhdGluZyBob3Vyc1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGludGVydmFsIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTsgLy8gY2FsY3VsYXRpbmcgZGF5c1xuICAgIHRoaXMuY291bnRUaW1lciA9IHRoaXMucHJlcGVuZFplcm8oZGF5cykgKyAnOicgKyB0aGlzLnByZXBlbmRaZXJvKGhvdXJzKSArICc6JyArIHRoaXMucHJlcGVuZFplcm8obWludXRlcykgKyAnOicgKyB0aGlzLnByZXBlbmRaZXJvKHNlY29uZHMpO1xuLy8gRW1pdHRpbmcgdGltZXItZW5kIGV2ZW50XG4gICAgaWYgKGludGVydmFsIDwgMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNldEludGVydmFsKTtcbiAgICAgIHRoaXMudGltZXJFeHBpcmVkLmVtaXQoeydzdGFydGVkJzogdGhpcy5zdGFydCwgJ2VuZGVkJzogdGhpcy5lbmR9KTtcbiAgICAgIGlmICh0aGlzLmV4cGlyeU1lc3NhZ2UgPT09ICcnKXtcbiAgICAgICAgdGhpcy5jb3VudFRpbWVyID0gJ1RpbWVyIGhhcyBleHBpcmVkJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY291bnRUaW1lciA9IHRoaXMuZXhwaXJ5TWVzc2FnZTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHByZXBlbmRaZXJvKGRpZ2l0KSB7XG5cbiAgICBpZiAoZGlnaXQgPCAxMCkge1xuICAgICAgZGlnaXQgPSBkaWdpdC50b1N0cmluZygpO1xuICAgICAgY29uc3QgZm9ybWF0dGVkTnVtYmVyID0gJzAnICsgZGlnaXQ7XG4gICAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gZGlnaXQ7XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nQ291bnRkb3duZXJDb21wb25lbnQgfSBmcm9tICcuL25nLWNvdW50ZG93bmVyL25nLWNvdW50ZG93bmVyLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nQ291bnRkb3duZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nQ291bnRkb3duZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGRvd25lck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFrQkU7Z0NBUnlCLElBQUlBLGlCQUFZLENBQUMsSUFBSSxDQUFDO2dDQUN0QixJQUFJQSxpQkFBWSxDQUFDLElBQUksQ0FBQztTQVE5Qzs7OztRQUVELHlDQUFROzs7WUFBUjtnQkFFRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7Ozs7UUFFRCwwQ0FBUzs7O1lBQVQ7O2dCQUNFLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Z0JBQzdDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7O2dCQUMvQixJQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFL0MsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLDJCQUEyQixDQUFDO2lCQUMvQzthQUNGOzs7O1FBRUQsMkNBQVU7OztZQUFWO2dCQUFBLGlCQUdDO2dCQUZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBRSxHQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0Q7Ozs7UUFFRCx5Q0FBUTs7O1lBQVI7O2dCQUNFLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7O2dCQUNqQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQzs7Z0JBQzFDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDOztnQkFDNUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztnQkFDeEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQUNoRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7O2dCQUU3SSxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7b0JBQ2hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRSxFQUFDO3dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7cUJBQ3RDO2lCQUVGO2FBQ0Y7Ozs7O1FBRUQsNENBQVc7Ozs7WUFBWCxVQUFZLEtBQUs7Z0JBRWYsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO29CQUNkLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O29CQUN6QixJQUFNLGVBQWUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNwQyxPQUFPLGVBQWUsQ0FBQztpQkFDeEI7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFFZDs7b0JBdkVGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsdUdBQThDOztxQkFFL0M7Ozs7OzBCQUVFQyxVQUFLOzRCQUNMQSxVQUFLO21DQUNMQyxXQUFNO21DQUNOQSxXQUFNOzRDQUNORCxVQUFLO29DQUNMQSxVQUFLOztxQ0FiUjs7Ozs7OztBQ0FBOzs7O29CQUdDRSxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osc0JBQXNCO3lCQUN2Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1Asc0JBQXNCO3lCQUN2QjtxQkFDRjs7Z0NBYkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==