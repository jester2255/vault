// POST
//=====================================
$("#addItem").on("click", function() {
	var addItem = {
		name: $("#newItemName").val().trim(),
		description: $("#newItemDescribe").val().trim(),
		lent_out: false,
		category_id: $("#selectCategory").val()
	}
    // ajax post
    $.post("/addItem", addItem, function(data) {
        console.log(data + "item posted!");
    });
});

$("#addCategory").on("click", function() {
	var addCategory = {
		name: $("#newCategoryName").val().trim()
	}
    // ajax post
    $.post("/addCategory", addItem, function(data) {
        console.log(data + "category posted!");
    });
});

$("#lendItem").on("click", function() {
	var lendItem = {
		due_date: $("#dueDate").val().trim(),
		type: "LEND",
		item_condition: $("#itemCondition").val().trim(),
		lendee: $("#newLendee").val().trim()
	}
    // ajax post
    $.post("/lendItem", addItem, function(data) {
        console.log(data + "lend posted!");
    });
});

var returnItem = {

}
// GET
//=====================================

// UPDATE
//=====================================
$("#lendItem").on("click", function() {
	
})
//=====================================
//=====================================
//=====================================


