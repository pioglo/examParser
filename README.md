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
This may be tricky and it is advised to follow instruction from this page: https://docs.mongodb.com/manual/administration/install-community/
Don't forget to set up new destination folder while running this in cmd:

mongod.exe --dbpath C:\MongoDataBase\data\db
mongo.exe
use exams (or change this name of a database in api.js file)

5. run 'npm install' in projeckt folder
6. run 'ng build' in project folder
7. run 'node server' in projeckt folder


For more control over database I recomend using https://robomongo.org/