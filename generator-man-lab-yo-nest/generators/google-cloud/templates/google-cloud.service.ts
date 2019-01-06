import {Injectable} from '@nestjs/common';
import {GoogleCloudStorageService} from '@manticore-labs';
import {MENSAJES_GOOGLE_CLOUD} from './google-cloud-mensajes/mensajes-google-cloud';

@Injectable()
export class GoogleCloudService extends GoogleCloudStorageService {
    constructor() {
        super('AQUI_CAMBIAR_NOMBRE_BUCKET',
            MENSAJES_GOOGLE_CLOUD,
            true)
    }
}
