import { WebSocketGateway } from "@nestjs/websockets";
import { PrincipalGateway } from 'man-lab-nest';
import { <%= nombreGateway %>Service } from "./<%= nombreGatewayMinuscula %>.service";
import { <%= nombreGateway %>CreateDto } from "./<%= nombreGatewayMinuscula %>-create-dto/<%= nombreGatewayMinuscula %>-create-dto";
import { <%= nombreGateway %>UpdateDto } from "./<%= nombreGatewayMinuscula %>-update-dto/<%= nombreGatewayMinuscula %>-update-dto";

@WebSocketGateway(<%= puerto? puerto:3001 %>, { namespace: '/<%= nombreGatewayMinuscula %>' })
export class <%= nombreGateway %>Gateway extends PrincipalGateway {
    constructor(private readonly _<%= nombreGatewayPrivado %>Service: <%= nombreGateway %>Service) {
        super(
            '<%= ip? ip:'http://localhost' %>:<%= puerto? puerto:3001 %>',
            '/<%= nombreGatewayMinuscula %>',
            '<%= secreto? secreto:'secreto' %>',
            { // funciones gateway
                afterInit:undefined, 
                handleConnection:undefined, 
                handleDisconnect:undefined
            }, 
            { // funciones broadcast
                createOne: {
                    broadcast: true,
                    funcionJoin:undefined
                },
                deleteOne: {
                    broadcast: true,
                    funcionJoin:undefined
                },
                updateOne: {
                    broadcast: true,
                    funcionJoin:undefined
                }
            },
            { // Funciones seguridad
                createOne:[],
                updateOne:[],
                findOne:[],
                deleteOne:[],
                findAll:[]
            }, 
            _<%= nombreGatewayPrivado %>Service, // servicio
            {  // Dto
                CreateDto: <%= nombreGateway %>CreateDto,
                UpdateDto: <%= nombreGateway %>UpdateDto
            },
            0, // take
            30, // skip
            { // mensaje
                encontrarUno: 'Id <%= nombreGateway %> erroneo',
                crearUno: '<%= nombreGateway %> inválida',
                actualizarUno: 'Error actualizando <%= nombreGateway %>',
                eliminarUno: 'Error al eliminar una <%= nombreGateway %>'
            },
            undefined)
        this.contexto = this;
    }

}