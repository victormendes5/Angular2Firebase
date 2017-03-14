import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FirebaseService }      from './controller/firebase.service';
import { firebaseConfig }       from './../environments/firebase.config';
import { AngularFireModule }    from 'angularfire2/index';

import { AppRoutingModule }     from './app.routes';
import { AppComponent }         from './app.component';
import { ListComponent }        from './list/list.component';
import { HeroesComponent }      from './controller/heroes.component';
import { HeroDetailComponent }  from './controller/hero-detail.component';
import { HeroService }          from './controller/hero.service';
import { HeroSearchComponent }  from './controller/hero-search.component';
import { AddComponent }         from './add/add.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [ 
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        ListComponent,
        AddComponent
    ],
    providers: [ 
        HeroService,
        FirebaseService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
