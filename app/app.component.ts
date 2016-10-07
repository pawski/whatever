import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
//import {Observable} from 'rxjs/Rx';
import { DataSinkComponent } from "./data-sink.component";

@Component({
    selector: 'my-app',
    template: `<div>
        <h1>Latest version</h1>
        <h3>{{version}}</h3>
        <h2>Today</h2>
        <data-sink></data-sink>
    </div>
    `,
    directives: [DataSinkComponent]
})

export class AppComponent {
    version = '799';

    public foods;
    public books;
    public movies;

    constructor(private http: Http) { }

    ngOnInit() {
        this.getFoods();
    }

    getFoods() {
        this.http.get('http://localhost:9091/app_dev.php')
            .map((res:Response) => res.json())
            .subscribe(
                data => { this.foods = data},
                err => console.error(err),
                () => console.log('done')
            );
    }
}
