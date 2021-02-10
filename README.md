# MAROC REGIONS & VILLES API 

> Requirement 

- NodeJS
- Express
- cors (optional) `to disable cors origin errors ` if you dont need it remove it from the code in server.js file 

> How To Setup the API 

1- Go to the main folder 
2- Run the command 

```bash
npm install express cors
```

> How To Start the API

Run the command 

```bash
node server.js
``` 

> How To use the API 

http://localhost:8080/api/regions ===> Regions
http://localhost:8080/api/villes ===> Villes
http://localhost:8080/api/villes/{regionID} ===> Villes of Region with the id regionID