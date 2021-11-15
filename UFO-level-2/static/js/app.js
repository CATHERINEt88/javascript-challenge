// from data.js
var tableData = data;
var tbody = d3.select("tbody");


//Refactor the code : read all the data, append and display the mainpage
data.forEach((alldata)=>
{
    var row = tbody.append("tr");
    Object.entries(alldata).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
    });
});

    //Select the input element
    var text = d3.select("#datetime");
    //Get the value property of the input element
    var inputValue = text.property("value");
    // console.log(inputValue);

    //LEVEL2 - add on more references
    var city = d3.select("#city");
    var cityinput = city.property("value");

    var state = d3.select("#state");
    var stateinput = state.property("value");

    var country = d3.select("#country");
    var countryinput = country.property("value");
    
    var shape = d3.select("#shape");
    var shapeinput = shape.property("value");

    //iterate through the object to check the matching key and value
    var filterdate = tableData.filter(data => data.datetime=== inputValue);
    // console.log(filterdata);
    var filtercity = tableData.filter(data => data.city === cityinput);
    var filterstate = tableData.filter(data => data.state === stateinput);
    var filtercountry = tableData.filter(data => data.country === countryinput);
    var filtershape = tableData.filter(data => data.shape === shapeinput);


//create event handler for the form inputs

d3.selectAll("#filter-btn").on("click", filterdata);
d3.selectAll(".form-control").on("change", filterdata);



//create a custom function to return the rows that is the same as input date
function filterdata()
{
    //
    d3.event.preventDefault();

    //use the inputs to filter the data

    if (filterobject.length === 0 )
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

//store the inputs into a variable

//on click the filter button, execute the function to filter the data
    // inside the function, append the key and value into an empty object
    //use that object to filter the data, then display the results 



