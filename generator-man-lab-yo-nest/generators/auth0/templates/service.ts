import {Injectable} from '@nestjs/common';
import {PrincipalAuth0Service} from '@manticore-labs/nest';
// import {DatosUsuarioService} from "../submodulos-roles-backend/datos-usuario/datos-usuario.service";
// import {DatosUsuarioCreateDto} from "../submodulos-roles-backend/datos-usuario/datos-usuario-create-dto/datos-usuario-create-dto";

@Injectable()
export class Auth0Service extends PrincipalAuth0Service {
    constructor() {
        super(AUTH0_CONFIG);
    }
    
    /*  NO SE OLVIDE QUE SI VA A USAR LOS DATOS USUSARIO DEBE DE AUMENTAR ESTO
    constructor(private readonly _datoService: DatosUsuarioService) {
        super(CONFIG_ENVIRONMENT.auth0, _datoService, DatosUsuarioCreateDto);
    }
    */
}
