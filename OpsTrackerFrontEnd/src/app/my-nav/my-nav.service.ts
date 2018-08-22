import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class Toolbarservice {
    isOpen = false;
    @Output() change: EventEmitter<boolean> = new EventEmitter();
}

