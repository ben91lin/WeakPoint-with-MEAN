const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const{ insertOne, find, update, deleteOne } = require(`${__dirname}/CRUD.js`)

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/app'
const dbName = 'weakpoint'
var pool

const app = express()

/**
 * Create connection pool and start server.
 */
 MongoClient.connect(
    uri,
    async function(err, client) {
        if (err) {
            throw err
        }
    
        pool = await client.db(dbName)
        console.log('[Attention] MongoDB is connected.')
    
        // Start express server after connect MongoDB.
        app.listen(
            process.env.PORT || 8080,
            function() {
                console.log(`[Attention] Server start listen port ${process.env.PORT || 8080}`)
            }
        )
    }
)

/**
 * Middleware
 * 
 * express.json() is same of bodyParser.json().
 * In express.js line 78, exports.json = bodyParser.json
 */
app.use(express.json())

/**
 * API
 */
app.post(
    '/api/slide/',
    function(req, res) {
        req.body = {
            title: 'test-title',
            content: '<p>test-content</p>',
            seq: 1,
            'last-editor': 'ben91lin'
        }
        res.status(201)
        insertOne(pool, 'slide', req.body, res.json.bind(res))
    }
)

app.get(
    '/api/slide/:_id',
    function(req, res) {
        console.log(req.params)
        find(pool, 'slide', {_id: new ObjectId(req.params._id)}, res.json.bind(res))
    }
)

app.patch(
    '/api/slide/:_id',
    function(req, res) {
        update(pool, 'slide', {_id: new ObjectId(req.params._id)}, res.json.bind(res))
    }
)

app.delete(
    '/api/slide/:_id',
    function(req, res) {
        deleteOne(pool, 'slide', {_id: new ObjectId(req.params._id)}, res.json.bind(res))
    }
)

app.get(
    '/api/status',
    function(req,res) {
        res.status(200).json({'server status': 'running'})
    }
)

app.use(
    function(req, res) {
        res.status(404).type('text/plain').send('404 not found.')
    }
)

