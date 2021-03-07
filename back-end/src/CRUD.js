/**
 * @param {object} db 
 * @param {string} collection 
 * @param {object} query 
 * @param {object} data
 * @param {function} cb 
 */
function find(db, collection, query, cb) {
    db.collection(collection).find(query).toArray(
        function(err, datas) {
            if (err) throw err

            console.log(`[Read] Found ${datas.length} records from ${collection}`)
            console.log(datas)
            cb(datas)
        }
    )
}

function updateOne(db, collection, query, data, cb) {
    db.collection(collection).updateOne(
        query,
        {
            '$set': data
        },
        function(err, result) {
            if (err) throw err

            console.log(`[Update] ${collection} ${query} to ${data}`)
            cb(result)
        }
    )
}

function deleteOne(db, collection, query, cb) {
    db.collection(collection).deleteOne(
        query,
        function(err, result) {
            if (err) throw err

            console.log(`[DELETE] ${result.result.n} data from ${collection}`)
            cb(result)
        }
    )
}

function insertOne(db, collection, data, cb) {
    db.collection(collection).insertOne(
        data,
        function(err, result) {
            if (err) throw err

            console.log(`[Insert] 1 data into ${collection}`)
            cb(result)
        }
    )
}

function deleteMany(db, collection, query, cb) {
    db.collection(collection).deleteMany(
        query,
        function(err, result) {
            if (err) throw err

            console.log(`[DELETE] ${result.result.n} data from ${collection}`)
            cb(result)
        }
    )
}

module.exports = { insertOne, find, updateOne, deleteOne, deleteMany }