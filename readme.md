### About
NodeJS API + Express + PostgreSQL

It is necessary to develop a primitive API on NodeJS + Express + Mongo / Postgre / MySQL
(base to choose from).
There should be several endpoints:
1. Download the CSV file. The file must be parsed and stored in the database
2. Get a collection of users in json format
3. Download the CSV file. It is necessary to serialize a collection of users from the database
to a CSV file and send it.
CSV file structure:
The first line is UserName, FirstName, LastName, Age
The remaining lines (example) - TheBlade, Boris, Yurinov, 47
... and so on
### Usage
1) Install dependencies `npm i`
2) Edit \*.env file `DATABASE_URL=postgres://[user[:password]@][host][:port][/dbname]`
3) Launch `npm run start`

| Method  | Link | Description |
| ------------- | ------------- |------------- |
| GET | <http://localhost:3000/users/json>  | get json collection from db |
| GET | <http://localhost:3000/users/csv>  | serialize collection to a file |
| POST | <http://localhost:3000/users/csv>  | Upload binary file(csv),  parse & save collection to db |
