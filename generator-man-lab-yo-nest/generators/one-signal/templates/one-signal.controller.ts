import {Controller} from '@nestjs/common';
import {OneSignalService} from './one-signal.service';
import {PrincipalOneSignalController} from '@manticore-labs/nest';
import {politicasOneSignal} from './one-signal-politicas/one-signal.politicas';

@Controller('one-signal')
export class OneSignalController extends PrincipalOneSignalController {
    constructor(private readonly _oneSignalService: OneSignalService) {
        super(politicasOneSignal,
            _oneSignalService,
            true,
            undefined);
        this.contexto = this;
    }
}
