import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Hero }                 from './hero';
import { HeroService }          from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: './../view/heroes.component.html',
    styleUrls: [ './../../assets/css/bootstrap.min.css','./../view/css/heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
    // heroes: Hero[];
    // selectedHero: Hero;

    currentItem: string;
    newTodo: string;
    newMessage: string;
    todos: any;

    // constructor(
    //     private router: Router,
    //     private heroService: HeroService) { }

    constructor(){
        this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    // getHeroes(): void {
    //     this.heroService
    //         .getHeroes()
    //         .then(heroes => this.heroes = heroes);
    // }

    // add(name: string): void {
    //     name = name.trim();
    //     if (!name) { return; }
    //     this.heroService.create(name)
    //         .then(hero =>{
    //             this.heroes.push(hero);
    //             this.selectedHero = null;
    //         });
    // }

    // addTodo() {
    //     this.todos.push({
    //         newTodo: this.newTodo,
    //         done: false
    //     });
    //     this.newTodo = '';
    //     localStorage.setItem('currentItem', JSON.stringify(this.todos));
    // }

    deleteTodo(index) {
        this.todos.splice(index, 1);

        // oldTodos = $scope.todos;
        // $scope.todos = [];

        // angular.forEach(oldTodos, function(todo){
        //     if (!todo.done)
        //         $scope.todos.push(todo);
        //     console.log('Removido do local storage com sucesso!');
        // });

        localStorage.setItem('currentItem', JSON.stringify(this.todos));
    }

    // delete(hero: Hero): void {
    //     this.heroService
    //         .delete(hero.id)
    //         .then(() => {
    //             this.heroes = this.heroes.filter(h => h !== hero);
    //             if (this.selectedHero === hero) { this.selectedHero = null; }
    //         });
    // }

    ngOnInit(): void {
        // this.getHeroes();
    }

    // onSelect(hero: Hero): void {
    //     this.selectedHero = hero;
    // }

    // gotoDetail(): void {
    //     this.router.navigate(['/detail', this.selectedHero.id]);
    // }

}