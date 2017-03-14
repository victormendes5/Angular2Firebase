import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

@Injectable()
export class AppService {
    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    // newTodo: string;
    // todos: any;
    // todoObj: any;

    constructor(private http: Http) {
        // this.todoObj = localStorage.getItem('currentUser');
    }

    // getHeroes(): Promise<Hero[]> {
    //     return this.http.get(this.heroesUrl)
    //         .toPromise()
    //         .then(response => response.json().data as Hero[])
    //         .catch(this.handleError);
    // }

    // getHero(id: number): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json().data as Hero)
    //         .catch(this.handleError);
    // }

    // create(name: string): Promise<Hero> {
    //     return this.http
    //         .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json().data)
    //         .catch(this.handleError);
    // }

    // update(hero: Hero): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), {headers: this.headers})
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }

    // delete(id: number): Promise<void> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.delete(url, {headers: this.headers})
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }

    // private handleError(error: any): Promise<any> {
    //     console.log('An error occured', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}