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
    $.post("/addCategory", addCategory, function(data) {
        console.log(data + "category posted!");
    });
});

// GET
//=====================================

// UPDATE
//=====================================
$("#lendItem").on("click", function() {
	$.ajax({
		url: "/lent_out",
		type: "PUT",
		data:{lent_out: true},
		success: function(result) {
			console.log(result);
			var lendItem = {
				due_date: $("#dueDate").val().trim(),
				type: "LEND",
				item_condition: $("#itemCondition").val().trim(),
				lendee: $("#newLendee").val().trim()
			}
		    // ajax post
		    $.post("/lendItem", lendItem, function(data) {
		        console.log(data + "lend posted!");
		    });
		}
	})
})

$("#returnItem").on("click", function() {
	$.ajax({
		url: "/return",
		type: "PUT",
		data:{lent_out: false},
		success: function(result) {
			console.log(result);
		}
	})


})
//=====================================
//=====================================
//=====================================