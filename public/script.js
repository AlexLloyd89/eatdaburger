// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");

        var hasBeenEaten = {
            eat: eaten
        };

        // Send the PUT request.
        $.ajax("/" + id, {
            type: "PUT",
            data: hasBeenEaten
        }).then(function () {
            console.log("Was this burger eaten", eaten);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName")
                .val()
                .trim(),
        };

        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("ordered a new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});