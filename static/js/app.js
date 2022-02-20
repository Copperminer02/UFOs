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

// Create D3 code
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data using the date
    if (date) {
       // Apply `filter` to the table data to only keep the rows where the 'datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
   // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

// Build Final Table
buildTable(tableData);