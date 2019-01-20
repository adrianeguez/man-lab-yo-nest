import {Injectable} from '@nestjs/common';
import {PrincipalAuth0Service} from '@manticore-labs/nest';

@Injectable()
export class Auth0Service extends PrincipalAuth0Service {
    constructor() {
        super(AUTH0_CONFIG);
    }
}
