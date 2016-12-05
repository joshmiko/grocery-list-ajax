$(document).ready(function() {

  $("form").on("submit", function(event) {
    event.preventDefault();
    var groceryItem = $('#grocery_name').val();

    if (groceryItem) {
      addGrocery(groceryItem);
    } else {
        alert("Stop! Put in a name please.");
      }
  });
});

var addGrocery = function(item) {
  var request = $.ajax ({
    method: "POST",
    url: "/groceries",
    data: { name: item }
  });

  request.done(function() {
    $("#grocery-list").append("<li>" + item + "</li>");
    $('#grocery_name').val('');
  });
}
