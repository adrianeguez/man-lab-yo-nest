var Generator = require('yeoman-generator');

const TEMPLATES = {
    POLITICAS: 'one-signal.politicas.ts',
    CREATE_NOTIFICATION: 'create-notification.politicas.ts',
    CANCEL_NOTIFICATION: 'cancel-notification.politicas.ts',
    VIEW_DEVICES: 'view-devices.politicas.ts',
    VIEW_DEVICE: 'view-device.politicas.ts',
    VIEW_NOTIFICATIONS: 'view-notifications.politicas.ts',
    VIEW_NOTIFICATION: 'view-notification.politicas.ts',
    CONTROLADOR: 'one-signal.controller.ts',
    MODULO: 'one-signal.module.ts',
    SERVICIO: 'one-signal.service.ts'
};


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
    }

    prompting() {
    }

    configuring() {
    }

    default() {

    }

    writing() {

        const templatePoliticas = this.templatePath(TEMPLATES.POLITICAS);
        const destinoPoliticas = this.destinationPath(`one-signal-politicas/${TEMPLATES.POLITICAS}`);
        this.fs.copyTpl(
            templatePoliticas,
            destinoPoliticas
        );

        const templateCreateNotification = this.templatePath(TEMPLATES.CREATE_NOTIFICATION);
        const destinoCreateNotification = this.destinationPath(`one-signal-politicas/${TEMPLATES.CREATE_NOTIFICATION}`);
        this.fs.copyTpl(
            templateCreateNotification,
            destinoCreateNotification
        );

        const templateCancelNotification = this.templatePath(TEMPLATES.CANCEL_NOTIFICATION);
        const destinoCancelNotification = this.destinationPath(`one-signal-politicas/${TEMPLATES.CANCEL_NOTIFICATION}`);
        this.fs.copyTpl(
            templateCancelNotification,
            destinoCancelNotification
        );

        const templateViewDevices = this.templatePath(TEMPLATES.VIEW_DEVICES);
        const destinoViewDevices = this.destinationPath(`one-signal-politicas/${TEMPLATES.VIEW_DEVICES}`);
        this.fs.copyTpl(
            templateViewDevices,
            destinoViewDevices
        );


        const templateViewDevice = this.templatePath(TEMPLATES.VIEW_DEVICE);
        const destinoViewDevice = this.destinationPath(`one-signal-politicas/${TEMPLATES.VIEW_DEVICE}`);
        this.fs.copyTpl(
            templateViewDevice,
            destinoViewDevice
        );


        const templateViewNotifications = this.templatePath(TEMPLATES.VIEW_NOTIFICATIONS);
        const destinoViewNotifications = this.destinationPath(`one-signal-politicas/${TEMPLATES.VIEW_NOTIFICATIONS}`);
        this.fs.copyTpl(
            templateViewNotifications,
            destinoViewNotifications
        );

        const templateViewNotification = this.templatePath(TEMPLATES.VIEW_NOTIFICATION);
        const destinoViewNotification = this.destinationPath(`one-signal-politicas/${TEMPLATES.VIEW_NOTIFICATION}`);
        this.fs.copyTpl(
            templateViewNotification,
            destinoViewNotification
        );


        const templateControlador = this.templatePath(TEMPLATES.CONTROLADOR);
        const destinoControlador = this.destinationPath(`${TEMPLATES.CONTROLADOR}`);
        this.fs.copyTpl(
            templateControlador,
            destinoControlador
        );

        const templateModule = this.templatePath(TEMPLATES.MODULO);
        const destinoModule = this.destinationPath(`${TEMPLATES.MODULO}`);
        this.fs.copyTpl(
            templateModule,
            destinoModule
        );

        const templateServicio = this.templatePath(TEMPLATES.SERVICIO);
        const destinoServicio = this.destinationPath(`${TEMPLATES.SERVICIO}`);
        this.fs.copyTpl(
            templateServicio,
            destinoServicio
        );

    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        this.log(`Modulo OneSignal creado :)`)
    }

};

