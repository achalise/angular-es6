'use strict';

class RegistrationService {
	log;
	/*@ngInject*/	
	constructor($log) {
		this.log = $log;
		this.init();
	}
	init() {
		this.log.debug('RegistrationService initialised.');
	}
	save(data) {
		this.log.debug('Saved registration details ', data);
	}
}

export default RegistrationService;