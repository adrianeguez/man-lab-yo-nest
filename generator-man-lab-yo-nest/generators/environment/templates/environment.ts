/* tslint:disable */
<% if(dev){ %>
const redis = require('redis');
const client = redis.createClient(30621);
<% } %>


export const CONFIG_ENVIRONMENT: any = {
    production: false,
    dbConnections: {
        crearDatosPrueba: true,
        mysql: {
            type: 'mysql',
            host: '<%= hostMysql %>',
            port: <%= puertoMysql %>,
            username: '<%= usernameMysql %>',
            password: '<%= passwordMysql %>',
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
            <% if(dev){ %>
            client: client,
            host: 'localhost',
            port: <%= puertoRedis %>,
            <% } else {%>
            port: <%= puertoRedis %>,
            password: '<%= passwordRedis %>',
            host: '<%= hostRedis %>',
            db: 0,
            <% }%>
        },
        redisStoreOptions: {
            <% if(dev){ %>
            client: client,
            host: 'localhost',
            port: <%= puertoRedis %>,
            <% } else {%>
            port: <%= puertoRedis %>,
            password: '<%= passwordRedis %>',
            host: '<%= hostRedis %>',
            db: 0,
            <% }%>
            // pass: 'mMQp5wvRxqwTKiDoE7PuT1D3r46l1TI5',
            //db: 0, // Database index to use. Defaults to Redis's default (0).
            // socket: '', // Password for Redis authentication
            // prefix: '', // Key prefix defaulting to "sess:"
            // logErrors: false,
        },
        mongodb: {
            name: 'conexion_mongo',
            type: 'mongodb',
            useNewUrlParser: true,
            url: `<%= urlMongo %>`,
            // MONGO_INITDB_ROOT_USERNAME = adrianeguez
            // MONGO_INITDB_ROOT_PASSWORD = 12345678
            // MONGO_INITDB_DATABASE = test
        },
    },
    puertoLevanta: <%= puertoLevanta %>,
    urls: {
        protocolo: '<%= protocolo %>',
        ip: '<%= ip %>',
        puertoEscucha: <%= puertoEscucha %>,
        segmento: '<%= segmento %>',
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
        CUENTA: '<%= auth0Cuenta %>',
        CLIENT_ID: '<%= auth0ClientId %>',
        SECRET: '<%= auth0Secret %>',
    },
    auth0PasswordLogin: {
        client_id: '<%= auth0ClientIdPassword %>',
        client_secret:
            '<%= auth0SecretPassword %>',
    },
    crearDatosPrueba: true,
    seguridad: false,
    uploadFile: {
        path: '/../../../uploads/',
    },
};
