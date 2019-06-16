import {Controller} from '@nestjs/common';
import {Auth0Service} from './auth0.service';
import {PrincipalAuth0Controller} from '@manticore-labs/nest';
import {politicasAuth0} from './auth0-politicas/auth0.politicas';
import {MENSAJES_AUTH0} from './auth0-mensajes/mensajes-auth0';

@Controller('auth0')
export class Auth0Controller extends PrincipalAuth0Controller {
    constructor(private readonly _authService: Auth0Service) {
        super(politicasAuth0,
            _authService,
            MENSAJES_AUTH0,
            true,
            0,
            30,
            undefined);
        this.contexto = this;
    }
}
