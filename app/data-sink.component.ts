import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'data-sink',
    template: '<p>Output: {{ getData }}</p>',
})

export class DataSinkComponent {
    private getData : string;

    ngOnInit() {
        this.getData = '123 get DAta';
        //this.getFoods();
    }

     //constructor(private http: Http) { }

     getFoods() {

     }

}
