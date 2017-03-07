import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './controller/app.component';
import { InMemoryDataService }  from './model/in-memory-data.service';
import { DashboardComponent }   from './controller/dashboard.component';
import { HeroesComponent }      from './controller/heroes.component';
import { HeroDetailComponent }  from './controller/hero-detail.component';
import { HeroService }          from './controller/hero.service';
import { HeroSearchComponent }  from './controller/hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
