mongoimport employees.json -d company -c employees --jsonArray --drop
mongoimport sales.json -d shop -c sales --jsonArray --drop
mongoimport inventory.json -d test -c inventory --jsonArray --drop
mongoimport tv-shows.json -d tv -c movies --jsonArray --drop
mongoimport users.json -d company -c users --jsonArray --drop
mongoimport persons.json -d contactData -c persons --jsonArray --drop