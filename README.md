# ExamParser

Simple exam tester with administration module.
Based on MEAN app structure.

## First run:
1. Download and install Node from  https://nodejs.org/en/ (my vesrison: v6.11.3)
2. Install angular:
npm install @angular/cli -g
3. Install Express
npm install express body-parser --save
4. Install MongoDB from https://www.mongodb.com/  
This may be tricky and it is advised to follow instructions from this page: https://docs.mongodb.com/manual/administration/install-community/
Don't forget to set up new destination folder while running this in cmd in instalation directory:

mongod.exe --dbpath C:\MongoDataBase\data\db (example of the path)<br />
mongo.exe <br />
use exams (or change this name of a database in server/routes/api.js file) 

5. Run 'npm install' in projeckt folder (it is possible that this command covers 2. and 3. but it has to be tested)
6. Run 'ng build' in project folder
7. Run 'node server' in projeckt folder (in seperated cmd window)

## Extra

For more control over database I recomend using https://robomongo.org/