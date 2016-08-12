'use strict';

class RegistrationController {
	registrationService;
	/*@ngInject*/
	constructor($log, RegistrationService) {
		this.registrationService = RegistrationService;
		$log.debug('Registration controller initialised');		
	}

	onSave(data) {
		this.registrationService.save(data);
	}
}
export default RegistrationController;