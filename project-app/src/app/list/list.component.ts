import { Component, OnInit }					          from '@angular/core';
import { Router }                               from '@angular/router';

import { Item }                                 from './../item.model';
import { FirebaseService }   					          from './../../environments/firebase.service';
import { LocalStorageService }                  from './../localstorage.service';

import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Component({
    moduleId: module.id,
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css', './../../assets/css/bootstrap.min.css' ]
})

export class ListComponent implements OnInit {
/*    INICIO FIREBASE    */
	// myList: FirebaseListObservable<any[]>;

 //    constructor(private af: AngularFire) {
 //        this.myList = af.database.list('heroes/')
 //    }
/*    FIM FIREBASE    */

    private objects: any;

    selectedData: Item;

    constructor(private router: Router,
                private storageService: LocalStorageService){
    }

    deleteTodo(index) {
        this.objects.splice(index, 1);
        // this.storageService.deleteLocalStorage(index);
    }

    ngOnInit(): void {
        this.objects = this.storageService.getLocalStorage();
    }

    onSelect(item: Item): void {
        this.selectedData = item;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedData.id]);
    }

}
