/* 
   site.js
   */

$(document).ready(function() {

    "use strict";

    var resultList = $("#resultList");	
    resultList.text("Please make a search");

    var toggleButton = $("#toggleBtn");

    toggleButton.on("click",function(){
        resultList.toggle(500);

        if(toggleButton.text() == "Hide") {
            toggleButton.text("Show") ;
        } else{
            toggleButton.text("Hide");
        }

    });

    /*Network API Calls */

    //IE broswer will require to make the cross domain value to true 
    jQuery.support.cors = true;

    function gitHubSearch(phrase, starts, language) {

        var gitHubSearch = "https://api.github.com/search/repositories?q=" + phrase + ":" + language + "&sort=starts";

        $.get(gitHubSearch)
        .success(function(r) {
            if (r.items.length === 0) {
                resultList.text("No Results Found");
            } else {
                displayResults(r.items);
            }
        })
        .fail(function(err) {
            resultList.text("API Call Failed");
        })
        .done(function() {
            console.log("API Call completed");
        });
    }

    function displayResults(results) {
        resultList.empty();
        $.each(results, function(i, item) {

          var newResult = $("<div class='result'>" +
            "<div class='title'>" + item.name + "</div>" +
            "<div>Language: " + item.language + "</div>" +
            "<div>Owner: " + item.owner.login + "</div>" +
            "</div>");

          newResult.hover(function() {
            // make it darker
            $(this).css("background-color", "lightgray");
          }, function() {
            // reverse
            $(this).css("background-color", "transparent");
          });

          resultList.append(newResult);

        });
      }

    $('input[type=submit]').click(function(evt) {
        evt.preventDefault();
        var searchPhrase = $('input[name=searchPhrase]').val();
        var language = $('select[name=langChoice]').find(":selected").text();
        gitHubSearch(searchPhrase, language);
    });
	
});

