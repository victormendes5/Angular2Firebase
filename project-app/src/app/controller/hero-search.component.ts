import { Component, OnInit }     from '@angular/core';
import { Router }                from '@angular/router';

import { Observable }            from 'rxjs/Observable';
import { Subject }               from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { HeroSearchService }      from './hero-search.service';
import { Hero }                   from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './../view/hero-search.component.html',
    styleUrls: [ './../view/css/hero-search.component.css' ],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {}

    // Push a search term into the obervable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}