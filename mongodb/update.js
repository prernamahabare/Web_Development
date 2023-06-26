//Update in db
//This qurey will perform updation change only one item
//  where name is yash and set the no attribute to 100. 
db.items.updateOne({name:"yash"},{$set: {no:100}})

//This qurey will perform updation to many items where name is yash and change the no attribute to 100 and dept to me. 
db.items.updateMany({name:"yash"},{$set: {no:100, dept="me"}})

