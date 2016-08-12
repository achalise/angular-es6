'use strict';

import RegistrationController from './registration-controller';
import template from './registration.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('registration', {
      url: '/registration',
      templateUrl: template,
      controller: RegistrationController,
      controllerAs: 'vm'
    });
}

export default routeConfig;