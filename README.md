# Pet API

## Tools/Libraries Used

 - express
 - convert-excel-to-json
 - fs
 - mongoose 
 - express-fileupload
 
 
 Express is providing a framework to develop/build RestAPI using Node.js,
Similarly convert-excel-to-json is helping us to parse the input Excel File stream by stream.
fs {file-system} module is used to help us interact with the File architecture inside. Mongoose on the next is an ODM providing a connection between Node.js & MongoDB. Lastly, express-fileupload is a middleware enabling us to handle uploading of file & further actions like accessing there metadata & saving them.
 
  
## Approach Taken
-> As an excel file is coming as an input, it will be received as a POST request on API.
-> Now parsing will be done of the file after taking it from the body of Request.
-> After that as a Mongo Schema is defined already, the read data object will be passed after creating a new Instance of the table.
-> Next, to see data , our API will take a GET request & show data in DB either by any specific URL parameter or the whole data in DB.
-> For updating the value, a PATCH request will be accepted by our API with the new/updated data in request body.
-> Deletion will be done in basis of a passed URL argument.
-> Major safety concern & Error Handling are handled.


## To Run on Localhost

 1. Clone the repo in any directory
 2. Inside the cloned directory write **npm install**.
 3. Now next after all the packages gets downloaded , write **npm start**.
 4. To monitor the API's , run:- **localhost:8080/pet/api** in a browser.
 5. Check in your directory an **"excel_uploads"** directory will get created.
 6. Your API is now up & running.
