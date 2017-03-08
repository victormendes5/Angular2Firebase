import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FirebaseService }      from './controller/firebase.service';
import { firebaseConfig }       from './../environments/firebase.config';
import { AngularFireModule }    from 'angularfire2/index';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './controller/app.component';
import { InMemoryDataService }  from './model/in-memory-data.service';
import { DashboardComponent }   from './controller/dashboard.component';
import { ListComponent }        from './controller/list.component';
import { HeroesComponent }      from './controller/heroes.component';
import { HeroDetailComponent }  from './controller/hero-detail.component';
import { HeroService }          from './controller/hero.service';
import { HeroSearchComponent }  from './controller/hero-search.component';
import { AddComponent }         from './controller/add.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [ 
        AppComponent,
        DashboardComponent,
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
