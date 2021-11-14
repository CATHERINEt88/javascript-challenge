// from data.js
var tableData = data;
var tbody = d3.select("tbody");


//Refactor the code example
data.forEach((alldata)=>
{
    var row = tbody.append("tr");
    Object.entries(alldata).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
    });
});

//grab references to the input element and the output div
var button = d3.select("#filter-btn");
var form = d3.select("form");

//Create event handler
//complete the event handler function for the input
// text.on("change",checkdate);

button.on("click",checkdate);
form.on("submit", checkdate);


//create a custom function to return the rows that is the same as input date
function checkdate()
{
    //prevent the page from refreshing
    d3.event.preventDefault();

    console.log("filter button clicked");

    //Select the input element
    var text = d3.select("#datetime");
    
    //Get the value property of the input element
    var inputValue = text.property("value");
    console.log(inputValue);

    //iterate through the object to check the matching key and value
    var filterdata = tableData.filter(data => data.datetime=== inputValue);
    console.log(filterdata);

    //Clear out the current content in the table
    tbody.html("");

    //if there's no matching results
    if (filterdata.length === 0)
    {
        tbody.text(`There's no ufo sighting on this data ${inputValue}`);
    }
    
    //for the matching results
    else{
        filterdata.forEach((alldata) => {
            var row = tbody.append("tr");
        Object.entries(alldata).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
        });
        });
    };
};

// checkdate();


   //DISPLAY the filtered date data, if there's a match, add them to the table
   
   

  

   //then adding the values to the table



//Get a reference to the table body
// Object.entries(tableData).forEach(([key,value])=> console.log(key,value));


//console log the whole array of js objects
// console.log(tableData);
//Step 1: Loop through the data and console log each object
// data.forEach(function(alldata){
//     console.log(alldata);

//Step 2: Use d3 to append one table row `tr` for each data object
// will adding the text into the cells later, appending TR elements first.
    // var row = tbody.append("tr");

    // //step 3 : Use object.entries to console log each data object value
    // Object.entries(alldata).forEach(function([key,value])
    // {
    //     console.log(key,value);
    //     //step 4 : Use D3 to append 1 cell per data value 
    //     var cell = row.append("td");

    //     //step 5 : Use d3 to update each cell's value text with the DATA object value
    //     cell.text(value);
    // });


// });
