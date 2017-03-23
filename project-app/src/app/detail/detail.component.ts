import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Item }                     from './../item.model';
import { LocalStorageService }      from './../localstorage.service';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.css' ]
})

export class DetailComponent implements OnInit {
	private selectedData: Item;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private storageService: LocalStorageService) {
    }

    ngOnInit(): void {
        // const id = +this.route.snapshot.params["id"];

        // this.storageService.getCurrentData(id)
        //     .then((selectedData) => { this.selectedData = selectedData; });
    }

    goBack(): void {
        this.location.back();
    }

    // save(): void {
    //     this.storageService.update(this.data)
    //     .then(() => this.goBack());
    // }

}
