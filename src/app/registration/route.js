'use strict';

import controller from './registration-controller';
import templateUrl from './registration.html';
import stepOneUrl from './step-one.html';
import registrationConfirmationUrl from './registration-confirmation.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('registration', {
      url: '/registration',
      templateUrl,
      controller,
      controllerAs: 'vm'
    })
    .state('registration.one', {
      url: '/details',
      templateUrl: stepOneUrl
    })    
    .state('registration.confirmation', {
      url: '/confirmation',
      templateUrl: registrationConfirmationUrl
    })
}

export default routeConfig;