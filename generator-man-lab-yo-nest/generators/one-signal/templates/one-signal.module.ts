import {Module} from '@nestjs/common';
import {OneSignalService} from './one-signal.service';
import {OneSignalController} from './one-signal.controller';

@Module({
    providers: [OneSignalService],
    exports: [OneSignalService],
    controllers: [OneSignalController]
})
export class OneSignalModule {
}
