import {Connection, EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent} from 'typeorm';
import {EmpresaEntity} from './<%= nombreSubscriberMinuscula %>.entity';
import {Injectable} from '@nestjs/common';
import {InjectConnection} from '@nestjs/typeorm';
// import {EventEmitter} from 'events';
// import {fromEvent} from 'rxjs';


@Injectable()
export class <%= nombreSubscriber %>Subscriber implements EntitySubscriberInterface<<%= nombreSubscriber %>Entity> {

    // beforeInsertEvent = new EventEmitter();
    // beforeInsertEvent$ = fromEvent(this.beforeInsertEvent, 'data');

    constructor(
        @InjectConnection() readonly connection: Connection,
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return <%= nombreSubscriber %>Entity;
    }

   /*


   async beforeInsert(event: InsertEvent<EmpresaEntity>) {

        this.beforeInsertEvent$.subscribe(
            (a) => {
                console.log('a', a)
            }
        );

        this.beforeInsertEvent.emit('data', {
            datos: 'datos'
        });

        console.log(await this._empresaService.find());

        console.log(`BEFORE POST INSERTED: `, event.entity);
    }

    beforeUpdate(event: UpdateEvent<any>) {
        console.log(`BEFORE ENTITY UPDATED: `, event.entity);
    }

    beforeRemove(event: RemoveEvent<any>) {
        console.log(`BEFORE ENTITY WITH ID ${event.entityId} REMOVED: `, event.entity);
    }

    afterInsert(event: InsertEvent<any>) {
        console.log(`AFTER ENTITY INSERTED: `, event.entity);
    }

    afterUpdate(event: UpdateEvent<any>) {
        console.log(`AFTER ENTITY UPDATED: `, event.entity);
    }


    afterRemove(event: RemoveEvent<any>) {
        console.log(`AFTER ENTITY WITH ID ${event.entityId} REMOVED: `, event.entity);
    }

    afterLoad(entity: any) {
        console.log(`AFTER ENTITY LOADED: `, entity);
    }


   * */

}
