import {Module} from '@nestjs/common';
import {Auth0Service} from './auth0.service';
import {Auth0Controller} from './auth0.controller';

@Module({
    providers: [Auth0Service],
    exports: [Auth0Service],
    controllers: [Auth0Controller]
})
export class Auth0Module {
}
