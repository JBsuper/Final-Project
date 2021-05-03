window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function addComment(text, name){
	$('#container').prepend(`
		<div class = "commentBox">
			<div class = "profileIcon"></div>
			<div class="commentBody">
				<div class = "commentHeader">
					<p class = "name">${name}</p>
					<div><span class = "edit">Edit</span><span class = "delete">Delete</span></div>
				</div>
				<div class = "commentDiv">
					<p class = "comment">${text}<p>
				</div>
				<div class = "editDiv hidden">
					<form class = "commentFormEdit">
					  	<input type="text" class="commentInputEdit" placeholder = "Comment">
					  	<span class="commentSubmitEdit">Submit</span>
					</form>
				</div>
			</div>
		</div>
	`);
}

addComment('Hard to argue with that&#129300;', "TheMan");
addComment('Why would I change your mind? Its the fastest growing industry out there...', "Guest1234");
addComment('Preach!', "EnoughSaid");
addComment('&#128176;', "asdf");

$('#container').on('click','.delete',function(){
	$(this).parents()[3].remove();
});

$('#container').on('click','.edit',function(){
	let editDiv = $($($($(this).parents()[3]).children()[1]).children()[2]);
	editDiv.toggleClass("hidden");
});

$('#container').on('click','.commentSubmitEdit',function(){
	let inputText = $($($(this).parents()[0]).children()[0]);
	let commentText = $($($(this).parents()[2]).children()[1]);
	commentText.html(`<p class = "comment"> ${inputText.val()} </p>`);
	inputText.val("");
	$($(this).parents()[1]).toggleClass("hidden");
});

$(".commentSubmit").on('click', function(){
	let name = $("#nameInput");
	let text = $("#commentInput");
	if($(name).val() !== ""){
		addComment(text.val(), name.val());
		name.attr("placeholder","Display Name");
		name.css("border","1px solid black");
		name.val("");
		text.val('');
	}else{
		name.attr("placeholder","Please input a name");
		name.css("border","1px solid red");
	}
});