export default {
  swagger: '2.0',
  info: {
    description: 'API para Pets',
    version: '1.0.0',
    title: 'Pets API'
  },
  host: 'webservices-pets-api.herokuapp.com',
  basePath: '/api/v1',
  tags: [
    {
      name: 'Add User',
      description: 'Requisição para inserir usuário'
    }
  ],
  schemes: [
    'https'
  ],
  paths: {
    '/user': {
      post: {
        tags: [
          'Usuário'
        ],
        summary: 'Adiciona um usuário',
        operationId: 'addUser',
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
            description: 'Usuário para ser adicionado',
            required: true,
            schema: {
              $ref: '#/definitions/User'
            }
          }
        ],
        responses: {
          201: {
            description: 'OK'
          }
        }
      }
    },
    '/user/login': {
      post: {
        tags: [
          'Usuário'
        ],
        summary: 'Loga um usuário',
        operationId: 'loginUser',
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
            description: 'Usuário para ser logado',
            required: true,
            schema: {
              $ref: '#/definitions/LoginUser'
            }
          }
        ],
        responses: {
          201: {
            description: 'OK'
          },
          401: {
            description: 'Invalid token'
          }
        },
        security: [
          {
            Bearer: []
          }
        ]
      }
    },
    '/pets': {
      get: {
        tags: [
          'Pets'
        ],
        summary: 'Busca pets',
        operationId: 'getPets',
        consumes: [
          'application/json'
        ],
        produces: [
          'application/json'
        ],
        responses: {
          200: {
            description: 'OK'
          }
        },
        security: [
          {
            Bearer: []
          }
        ]
      },
      post: {
        tags: [
          'Pets'
        ],
        summary: 'Adiciona pets',
        operationId: 'addPets',
        consumes: [
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Adiciona um pet',
            required: true,
            schema: {
              $ref: '#/definitions/AddPet'
            }
          }
        ],
        produces: [
          'application/json'
        ],
        responses: {
          200: {
            description: 'OK'
          }
        },
        security: [
          {
            Bearer: []
          }
        ]
      }

    },
    '/bpm': {
      get: {
        tags: [
          'Bpm'
        ],
        summary: 'Busca bpms',
        operationId: 'getBpms',
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
            description: 'Buscar bpms de um pet',
            required: true,
            schema: {
              $ref: '#/definitions/GetBpm'
            }
          }
        ],
        responses: {
          200: {
            description: 'OK'
          }
        },
        security: [
          {
            Bearer: []
          }
        ]
      },
      post: {
        tags: [
          'Bpm'
        ],
        summary: 'Adiciona bpm',
        operationId: 'addBPm',
        consumes: [
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Adiciona um bpm a um pet',
            required: true,
            schema: {
              $ref: '#/definitions/AddBpm'
            }
          }
        ],
        produces: [
          'application/json'
        ],
        responses: {
          200: {
            description: 'OK'
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
    User: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          description: 'Email do usuário'
        },
        password: {
          type: 'string',
          description: 'Senha do usuário'
        },
        username: {
          type: 'string',
          description: 'Usuário chave'
        }
      },
      required: [
        'email',
        'password',
        'username'
      ]
    },
    LoginUser: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          description: 'Email do usuário'
        },
        password: {
          type: 'string',
          description: 'Senha do usuário'
        }
      },
      required: [
        'email',
        'password'
      ]
    },
    AddPet: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Nome do pet'
        }
      },
      required: [
        'name'
      ]
    },
    GetBpm: {
      type: 'object',
      properties: {
        pet: {
          type: 'string',
          description: 'Id do pet'
        }
      },
      required: [
        'pet'
      ]
    },
    AddBpm: {
      type: 'object',
      properties: {
        pet: {
          type: 'string',
          description: 'Id do pet'
        },
        bpm: {
          type: 'number',
          description: 'Bpm do pet'
        }
      },
      required: [
        'pet',
        'bpm'
      ]
    }
  }

}
