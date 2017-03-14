import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css', './../assets/css/bootstrap.min.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
	title = 'Lista de Tarefas';
}
