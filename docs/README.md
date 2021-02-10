# MAROC REGIONS & VILLES API 

> Requirement 

- NodeJS
- Express
- cors (optional) `to disable cors origin errors ` if you dont need it remove it from the code in server.js file 

> How To Setup the API 

- Go to the main folder 

- Run the command 

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
</tr>
<tr>
	<td>http://localhost:8080/api/regions</td>
	<td>array of regions</td>
	</tr>
	<tr>
	<td>http://localhost:8080/api/villes </td>
	<td>array of villes</td>
	</tr>
		<tr>
	<td>http://localhost:8080/api/villes/{regionID}</td>
	<td>array of  Villes that have the same  regionID</td>
	</tr>
	</table>
