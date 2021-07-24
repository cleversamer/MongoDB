// This code will be used in "Section 8 - Working with Indexes - Part 2"
// Don't worry about it.

conn = new Mongo();
db = conn.getDB("credit");

for (let i = 1; i <= 1000000; i++) {
    db.ratings.insertOne({
        "person_id": i,
        "score": Math.random() * 100,
        "age": Math.floor(Math.random() * 70) + 18 
    })
}