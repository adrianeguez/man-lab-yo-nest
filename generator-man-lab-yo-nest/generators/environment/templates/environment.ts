/* tslint:disable */
const redis = require('redis');
const client = redis.createClient(30621);

export const CONFIG_ENVIRONMENT: any = {
    production: false,
    dbConnections: {
        crearDatosPrueba: true,
        mysql: {
            type: 'mysql',
            host: 'localhost',
            port: 30611,
            username: 'juego',
            password: '12345678',
            database: 'test',
            synchronize: true,
            retryDelay: 40000,
            retryAttempts: 3,
            connectTimeout: 40000,
            keepConnectionAlive: true,
            dropSchema: true,
            charset: 'utf8mb4',
            timezone: 'local',
            ssl: false,
            // MYSQL_ROOT_PASSWORD = 12345678
            // MYSQL_PASSWORD = 12345678
            // MYSQL_USER = adrian
            // MYSQL_DATABASE = nativescript

            // PARA MYSQL 8 seguir estos pasos:

            // ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '12345678';
            // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';
            // SELECT plugin FROM mysql.user WHERE User = 'root';
        },
        redisConnection: {
            client: client,
            host: 'localhost',
            port: 30621,
        },
        redisStoreOptions: {
            port: 30621,
            // pass: 'mMQp5wvRxqwTKiDoE7PuT1D3r46l1TI5',
            host: 'localhost',
            //db: 0, // Database index to use. Defaults to Redis's default (0).
            // socket: '', // Password for Redis authentication
            // prefix: '', // Key prefix defaulting to "sess:"
            // logErrors: false,
        },
        mongodb: {
            name: 'conexion_mongo',
            type: 'mongodb',
            useNewUrlParser: true,
            url: `mongodb://adrianeguez:12345678@localhost:30513/test?authSource=admin`,
            // MONGO_INITDB_ROOT_USERNAME = adrianeguez
            // MONGO_INITDB_ROOT_PASSWORD = 12345678
            // MONGO_INITDB_DATABASE = test
        },
    },
    puertoLevanta: 8080,
    urls: {
        protocolo: 'http',
        ip: 'localhost',
        puertoEscucha: 8080,
        segmento: '/',
        url() {
            return `${this.protocolo}://${this.ip}:${this.puertoEscucha}${
                this.segmento
            }`;
        },
        callbackUrl() {
            return this.url() + 'callback';
        },
        logoutUrl() {
            return this.url() + '';
        },
        frontEndUrl() {
            return this.url() + 'front-app';
        },
        frontEndUrlDev() {
            return this.url() + 'front-dev';
        },
        frontEndSegmento() {
            return this.url() + 'front-app';
        },
        frontEndSegmentoDev() {
            return this.url() + 'front-dev';
        },
        frontEndSegmentoLogin() {
            return this.url() + 'login';
        },
    },
    expressSession: {
        secret: '$secretro1',
        cookie: {},
        resave: false,
        saveUninitialized: false,
        unset: 'destroy',
    },
    graphqlModule: {
        debug: true,
        playground: {
            'general.betaUpdates': false,
            'editor.cursorShape': 'line',
            'editor.fontSize': 14,
            'editor.fontFamily':
                "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
            'editor.theme': 'dark',
            'editor.reuseHeaders': true,
            'prettier.printWidth': 80,
            'request.credentials': 'omit',
            'tracing.hideTracingResponse': true,
        },
        introspection: true,
    },
    auth0: {
        CUENTA: 'juego-bolsa-test',
        CLIENT_ID: 'Njus3PGOzsvEYsir6B7egaG5MgMAUQ9v',
        SECRET: 'bR9IDO5ODP6VPYHQLyJU0p-zf5M6fUpJHygfnAs3-prox84fGDvIztR0Qb3VnSsG',
    },
    auth0PasswordLogin: {
        client_id: 'NfoEa1wIcd8hav8OeMTpyuEWVpJh5IfJ',
        client_secret:
            'qtU0d-CcmZWIBlHay9Ud7BuJoxBWuLdZRuuKXzB0bAEM6ZbPYP9TWwtvKxBhLASW',
    },
    crearDatosPrueba: true,
    seguridad: false,
    uploadFile: {
        path: '/../../../uploads/',
    },
};
