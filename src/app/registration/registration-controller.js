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

    onNext() {
		this.state.go('registration.confirmation');
    }

	onSave() {
		this.registrationService.save({firstName: this.firstName, lastName: this.lastName, email: this.email});
		this.state.go('registration.success');
	}

	onEdit() {
		this.state.go('registration.one');
	}
}
export default RegistrationController;