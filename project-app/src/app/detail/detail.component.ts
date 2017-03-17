import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ItemService }              from './../item.service';
import { Item }                     from './../item.model';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
	item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
        ) {}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.itemService.getItem(+params['id']))
        .subscribe(item => this.item = item);
    }

    goBack(): void {
        this.location.back();
    }

    // save(): void {
    //     this.itemService.update(this.item)
    //     .then(() => this.goBack());
    // }

}
