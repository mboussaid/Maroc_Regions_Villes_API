# MAROC REGIONS & VILLES API 

# DEMO 
[https://calm-fjord-14795.herokuapp.com/api/](https://calm-fjord-14795.herokuapp.com/api/)

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

<table>
<tr>
	<th>URL </th>
	<th>Response</th>
	<th>Demo</th>
</tr>
<tr>
	<td>http://localhost:8080/api/regions</td>
	<td>array of regions</td>
	<td>https://calm-fjord-14795.herokuapp.com/api/regions</td>
	</tr>
	<tr>
	<td>http://localhost:8080/api/villes </td>
	<td>array of villes</td>
		<td>https://calm-fjord-14795.herokuapp.com/api/villes</td>
	</tr>
		<tr>
	<td>http://localhost:8080/api/villes/{regionID}</td>
	<td>array of  Villes that have the same  regionID</td>
	<td>https://calm-fjord-14795.herokuapp.com/api/6</td>
	</tr>
	</table>
