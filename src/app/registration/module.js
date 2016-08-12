'use strict';

import route from './route';
import RegistrationService from './registration-service';

const registrationModule = angular.module('registration-module', [
  'ui.router'
]);

registrationModule.service('RegistrationService', RegistrationService);
console.log('Route name: ', route.name);
registrationModule
    .config(route);

export default registrationModule;
