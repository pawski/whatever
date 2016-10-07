import { Component } from '@angular/core';

@Component({
    selector: 'data-sink',
    template: '<p>Output: {{ getData }}</p>',
})

export class DataSinkComponent {
    getData : string;
}
