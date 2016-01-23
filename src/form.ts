import {bootstrap} from 'angular2/platform/browser';
import {FormApp} from './app/form-app';
import {LocationStrategy,
        HashLocationStrategy,
        ROUTER_PROVIDERS} from 'angular2/router';
import {provide}           from 'angular2/core';
import {FormService} from './app/form-service';

bootstrap(FormApp, [
  FormService,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
