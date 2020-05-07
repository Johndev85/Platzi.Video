const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.DbPassword)
const DB_NAME = config.dbName

const MONGO_URI= `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, {  useNewUrlParser: true })
        this.dbName = DB_NAME
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err)
                    }

                    console.log('Connected succesfully to mongo')
                    resolve(this.client.db(this.dbName))
                })
            })
        }

        return MongoLib.connection
    }

    getAll(colletion, query) {
        return this.connect().then(db => {
            return db.colletion(colletion).find(query).toArray()
        })
    }

    get(colletion, id) {
        return this.connect().then(db => {
            return db.colletion(colletion).findOne({ _id: ObjectId(id)})

        })
    }

    create(colletion, data) {
        return this.connect().then(db => {
            return db.colletion(colletion).insertOne(data)
        }).then(result => result.insertedId)


    }

    update(colletion, id, data) {
        return this.connect().then(db => {
            return db.colletion(colletion).updateOne({ _id: ObjectId(id)}, { $set: data }, { upsert: true})
        }).then(result => result.updsertedId || id)


    }

    delete(colletion, id) {
        return this.connect().then(db => {
            return db.colletion(colletion).deleteOne({ _id: ObjectId(id)})

        }).then(() => id)
    }
}

module.exports = MongoLib;