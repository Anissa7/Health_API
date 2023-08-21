$(document).ready(function() {
    const statsTable = $("#stats-table");
    const countryInput = $("#country-input");
    const searchButton = $("#search-button");
   
    
    // Function to populate the table with data
    function populateTable(countryData) {
        statsTable.find("tbody").empty();
        
        const newRow = $("<tr>").html(`
            <td>${countryData.country}</td>
            <td>${countryData.cases.total}</td>
            <td>${countryData.deaths.total}</td>
        `);
        statsTable.append(newRow);
    }

    // Function to fetch and display data for a specific country
    function searchCountryData(countryName) {
        const settings = {
            async: true,
            crossDomain: true,
            url: `https://covid-193.p.rapidapi.com/statistics?country=${countryName}`,
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "696cc32825mshf220551f0404d51p1201eajsn651d61b40bf0",
                "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function(response) {
            if (response.response) {
                populateTable(response.response[0]);
            } else {
                alert("Please enter a valid country name.");
            }
        });
    }

    searchButton.on("click", function() {
        const userInput = countryInput.val().trim();
        if (userInput !== "") {
            searchCountryData(userInput);
        } else {
            alert("Please enter a valid country name.");
        }
    });

    // Fetch data from the second API
    const secondSettings = {
        async: true,
        crossDomain: true,
        url: "https://covid-193.p.rapidapi.com/statistics",
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "696cc32825mshf220551f0404d51p1201eajsn651d61b40bf0",
            "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
        }
    };

    $.ajax(secondSettings).done(function(response) {
        console.log(response);
    });
  
     //fetch data for the third API
     const thirdSettings = {
     async: true,
     crossDomain: true,
     url: "https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02",
     method: "GET",
     headers: {
         "X-RapidAPI-Key": "696cc32825mshf220551f0404d51p1201eajsn651d61b40bf0",
         "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
     }
 };

 $.ajax(secondSettings).done(function(response) {
     console.log(response);
 });


    searchButton.on("click", function() {
    const userInput = countryInput.val().trim();
    if (userInput !== "") {
        searchCountryData(userInput);
    }else {
        alert("Please enter a valid country name.");
    }
});

});
