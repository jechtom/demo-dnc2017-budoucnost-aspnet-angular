import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    @Input() public currentCount = 0;
    @Output() currentCountChange = new EventEmitter();


    public incrementCounter() {
        this.currentCount++;
        this.currentCountChange.emit(this.currentCount);
    }
}
