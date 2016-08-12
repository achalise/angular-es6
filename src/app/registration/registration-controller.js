'use strict';

class RegistrationController {
	registrationService;
	state;
	/*@ngInject*/
	constructor($log, $state, RegistrationService) {
		this.registrationService = RegistrationService;
		this.state = $state;
		$log.debug('Registration controller initialised');		
	}

	onSave() {
		this.registrationService.save({firstName: this.firstName, lastName: this.lastName, email: this.email});
		this.state.go('registration.confirmation');
	}
}
export default RegistrationController;