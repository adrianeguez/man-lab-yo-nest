import {Injectable} from '@nestjs/common';
import {AUTH0_CONFIG} from './config';
import {PrincipalAuth0Service} from '@manticore-labs/nest'

@Injectable()
export class Auth0Service extends PrincipalAuth0Service {
    constructor() {
        super(AUTH0_CONFIG)
    }
}
