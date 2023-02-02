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

function handleClick() {

    // Grab the datetime value from the filter.
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;
    
    // Check to see if the date was eneterd and filter the data using that date.
    if (date) {
        //Apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter.
        filteredData = filteredDatae.filter(row => row.datetime === date);
    };

    //Rebuild the table using the filtered data - @NOTE If no date was entered, then filterData will just be the original tableData.
    buildTable(filteredData);

}

//Attach an event to listen for the form button.
d3.selectAll ("#filter-btn").on("click", handleClick);

//Build the table when the page loads.
buildTable(tableData);
