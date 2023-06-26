//insert items in database
  use prerna 

  db.items.insertOne({ name: "prerna", no: 200})

 db.items.insertOne({ name: "prerna", no: 8, dept: "computer", clg: "govt poly mumbai"})

//insert more than one items in database

// no spcified structure of db we can insert different fields in row

 db.items.insertMany([{ name: "yash", no:1, dept:"co", clg:"govt"},{name:"sneha", no:14,}])