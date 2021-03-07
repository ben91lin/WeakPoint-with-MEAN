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

function update(db, collection, query, data, cb) {
    db.collection(collection).update(
        query,
        data,
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

// function updateSlide(db, query, data, cb) {
//     db.collection('slide').insertOne(
//         query,
//         function(err, result) {
//             assert.strictEqual(err, null)
//             assert.strictEqual(3, result.n)
//             assert.strictEqual(3, result.ops.length)
//             console.log('[Insert] 1 data into slide collection')
//             cb(result)
//         }
//     )
// }

module.exports = { insertOne, find, update, deleteOne }