mongoimport employees.json -d company -c employees --jsonArray --drop
mongoimport sales.json -d shop -c sales --jsonArray --drop
mongoimport inventory.json -d test -c inventory --jsonArray --drop
