import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'not-found',
    template: 
    `
        <div class="alert alert-danger">
            Page Not Found
        </div>
    `
})
export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}