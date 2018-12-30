import {Controller} from '@nestjs/common';
import {Auth0Service} from './auth0.service';
import {PrincipalAuth0Controller} from '@manticore-labs/nest';

@Controller('auth0')
export class Auth0Controller extends PrincipalAuth0Controller {
    constructor(private readonly _authService: Auth0Service) {
        super(_authService)
    }
}