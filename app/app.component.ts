import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
        <h1>Latest version</h1>
        <h3>{{version}}</h3>
        <h2>Today</h2>
        <data-sink></data-sink>
    </div>
    `
})

export class AppComponent {
    version = '799';
}
