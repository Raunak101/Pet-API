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
 
  

## To Run on Localhost

 1. Clone the repo in any directory
 2. Inside the cloned directory write **npm install**.
 3. Now next after all the packages gets downloaded , write **npm start**.
 4. To monitor the API's , run:- **localhost:8080/pet/api** in a browser.
 5. Check in your directory an **"excel_uploads"** directory will get created.
 6. Your API is now up & running.
