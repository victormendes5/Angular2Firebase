import { Component }                            from '@angular/core';
import { Router }                               from '@angular/router';

import { AngularFire, FirebaseListObservable }  from 'angularfire2';
import { firebaseConfig }                       from './../model/firebase.config';

@Component({
    moduleId: module.id,
    selector: 'my-list',
    templateUrl: './../view/list.component.html',
    styleUrls: [ './../view/css/dashboard.component.css' ]
})

export class ListComponent {
    myHeroes: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.myHeroes = af.database.list('heroes/')
    }
}