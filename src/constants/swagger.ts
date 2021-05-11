export default {
  swagger: '2.0',
  info: {
    description: 'API para Pets',
    version: '1.0.0',
    title: 'Pets API'
  },
  host: 'discador.krotoncloud.com',
  basePath: '/api/v1',
  tags: [
    {
      name: 'Mailing',
      description: 'Requisição para mailing'
    }
  ],
  schemes: [
    'https'
  ],
  paths: {
    '/insertmailing': {
      post: {
        tags: [
          'Mailing'
        ],
        summary: 'Adiciona um mailing no discador',
        operationId: 'addMailing',
        consumes: [
          'application/json'
        ],
        produces: [
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Mailing para ser adicionado ao discador',
            required: true,
            schema: {
              $ref: '#/definitions/Mailing'
            }
          }
        ],
        responses: {
          201: {
            description: 'OK'
          },
          400: {
            description: 'Estrutura do JSON inválida ou campanha inválida'
          },
          401: {
            description: 'Token não existente ou invalido'
          }
        },
        security: [
          {
            Bearer: []
          }
        ]
      }
    }
  },
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  definitions: {
    Mailing: {
      type: 'object',
      properties: {
        codigoDbm: {
          type: 'string',
          description: 'Código DBM da campanha'
        },
        marca: {
          type: 'string',
          description: 'Nome da marca',
          enum: [
            'Anhanguera',
            'Pitagoras',
            'Unic',
            'Fama',
            'Unime',
            'Unopar',
            'Uniderp'
          ]
        },
        documento: {
          type: 'string',
          description: 'Documento do mailing'
        },
        nomeCompleto: {
          type: 'string',
          description: 'Nome completo do mailing'
        },
        telefones: {
          type: 'array',
          description: 'Telefones do mailing (min. 1 max. 4)',
          minItems: 1,
          maxItems: 4,
          items: {
            type: 'object',
            properties: {
              ddd: {
                type: 'number',
                description: 'DDD com 2 digitos'
              },
              numero: {
                type: 'number',
                description: 'Número do telefone'
              }
            },
            required: [
              'ddd',
              'numero'
            ]
          }
        },
        descricao_unidade: {
          type: 'string',
          description: 'Descrição da Unidade'
        },
        curso: {
          type: 'string',
          description: 'Nome do curso'
        },
        modalidade: {
          type: 'string',
          description: 'Modalidade exemplo EAD, Presencial ou Semi-Presencial'
        },
        data_inscricao: {
          type: 'string',
          default: '20201230',
          description: 'Data da inscricação seguindo o formato YYYYMMDD'
        },
        data_prova: {
          type: 'string',
          default: '20201230',
          description: 'Data da prova seguindo o formato YYYYMMDD'
        },
        horario_prova: {
          type: 'string',
          default: '14:00',
          description: 'Horario da prova seguindo o formato HH:mm'
        },
        regional: {
          type: 'string',
          description: 'Nome da regional'
        },
        canal: {
          type: 'string',
          description: 'Nome do canal'
        }
      },
      required: [
        'codigoDbm',
        'marca',
        'documento',
        'nomeCompleto',
        'telefones'
      ]
    }
  }
}
