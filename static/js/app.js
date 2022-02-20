// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build table from data
function buildTable(data){
    // Clear out any existing data
    tbody.html("");

    // Loop through each object in teh data
    // and append a row and cells for each value in the row
    data.forEach((dataRow)=>{
        // Append the row to the table body
        let row = tbody.append("tr");
        // Loop through dataRow and add value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
