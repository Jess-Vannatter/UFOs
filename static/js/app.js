// Import the data from data.js
const tableData = data
// Reference the HTML Table using d3
var tbody = d3.select("tbody")

// Build table with UFO Data
function buildTable(data) {
    //First, clear out any existing data
    tbody.html("");

    // Next loop through each object in the data and append a row and cells for each value in the row.
    data.forEach((datarow) => {
        // Append a row to the table body.
        let row = tbody.append("tr");

        //Loop through each in the datarow and add each vbalue as a table cell (td).
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });

}