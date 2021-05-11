
const srcConfig = {
  type: 'mongodb',
  url: 'mongodb+srv://dbadmin:J9lTyOyp4LDOTECf@cluster0.whylm.mongodb.net/webservices?retryWrites=true&w=majority',
  synchronize: true,
  logging: false,
  useUnifiedTopology: true,
  entities: [
    'src/entities/**/*.ts'
  ],
  migrations: [
    'src/migrations/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/entities'
  }
}

const distConfig = {
  type: 'mongodb',
  url: 'mongodb+srv://dbadmin:J9lTyOyp4LDOTECf@cluster0.whylm.mongodb.net/webservices?retryWrites=true&w=majority',
  synchronize: true,
  logging: false,
  useUnifiedTopology: true,
  entities: [
    'dist/entities/**/*.js'
  ],
  cli: {
    entitiesDir: 'dist/entities'
  }
}

module.exports = process.env.TS_NODE_DEV ? srcConfig : distConfig
