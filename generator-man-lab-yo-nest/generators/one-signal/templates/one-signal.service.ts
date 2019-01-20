import { HttpService, Injectable } from '@nestjs/common';
import { PrincipalOneSignalService } from '@manticore-labs/nest';

@Injectable()
export class OneSignalService extends PrincipalOneSignalService {
    constructor(private readonly _httpService: HttpService) {
        super(_httpService, 'API_KEY_LLENAR_DE_ENVIRONMENT');
    }
}
