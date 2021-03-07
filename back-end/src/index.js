const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const { insertOne, find, updateOne, deleteOne, deleteMany } = require(`${__dirname}/CRUD.js`)

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
// for slide
app.post(
    '/api/slide/',
    function(req, res) {
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
        req.body = {
            'last-editor': 'yy'
        }
        updateOne(pool, 'slide', {_id: new ObjectId(req.params._id)}, req.body, res.json.bind(res))
    }
)

app.delete(
    '/api/slide/:_id',
    function(req, res) {
        deleteOne(pool, 'slide', {_id: new ObjectId(req.params._id)}, res.json.bind(res))
    }
)

app.get(
    '/api/slides/:presentation_id',
    function(req, res) {
        find(pool, 'slide', {presentation_id: new ObjectId(req.params.presentation_id)}, res.json.bind(res))
    }
)

app.delete(
    '/api/slides/:presentation_id',
    function(req, res) {
        deleteMany(pool, 'slide', {presentation_id: new ObjectId(req.params.presentation_id)}, res.json.bind(res))
    }
)

// for presentation
app.post(
    '/api/presentation/',
    function(req, res) {
        res.status(201)
        insertOne(pool, 'presentation', req.body, res.json.bind(res))
    }
)

app.get(
    '/api/presentation/?:_id',
    function(req, res) {
        const query =  req.params._id ? {_id: new ObjectId(req.params._id)} : {}
        res.status(201)
        find(pool, 'presentation', query, res.json.bind(res))
    }
)

app.delete(
    '/api/presentation/:_id',
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