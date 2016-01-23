import {Component} from 'angular2/core';
import {RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';
import {FormEdit} from './form-edit';
import {FormPreview} from './form-preview';

@Component({
  selector: 'form-app',
  directives: [RouterOutlet, RouterLink, FormEdit],
  template: `
    <h1>NG2 Forms</h1>
    <nav>
      <a [routerLink]="['FormEdit']">Edit</a>
      <a [routerLink]="['FormPreview']">Preview</a>
    </nav>
    <hr/>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: '/edit', name: 'FormEdit', component: FormEdit, useAsDefault: true},
  {path: '/preview', name: 'FormPreview', component: FormPreview}
])
export class FormApp {

}
