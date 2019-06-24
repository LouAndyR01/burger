$(function() {

    // add new burger //
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // send the POST request //
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
           
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // send the PUT request //
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".badburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // delete request sent //
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})