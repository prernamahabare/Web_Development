
// Searching for data in mongo db
use prerna

// search in db
// This qurey will return all objects in db
db.items.find()

// This query will return all the objects with no equal to 8
//Give parameters in the find query are known as filter object
db.items.find({no: 8})

// This query will return all the objects with name equal to prerna

db.items.find({name: "prerna"})

//This query will return all the objects with no is greater than or equal to 5
db.items.find({no:{$gte: 5}})

//This query will return all the objects with no is greater than  5
db.items.find({no:{$gt: 5}})

//And oprator   ----- return qurey if both filter objects are true
//This query will return all the objects with name prerna and no is greater than 7
db.items.find({name: "prerna", no: {$gt:7}})

//This query will return all the objects with name prerna and no is less than  5
db.items.find({name: "prerna", no: {$lt:100}})

//OR operator  ----- return qurey if only one filter objects is true
//This query will return all the objects with name prerna or no is greater than  8
db.items.find({$or: [{name: "prerna"}, {no: {$gt:8}}]})

//This query will return all the objects with name prerna or no is less than  8
db.items.find({$or: [{name: "prerna"}, {no: {$lt:8}}]})

//In filter we can use 2nd parameter called projection.

//This query will return all the objects with no is greater than 8 and this will return only no and all values became false
db.items.find({no: {$gt:8}}, {no:1})

//This query will return all the objects with no is greater than 8 and this will return only no and name and all values became false
db.items.find({no: {$gt:8}}, {rating:1},  {name:1})
