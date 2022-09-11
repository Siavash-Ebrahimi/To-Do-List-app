
function newItem(){
  // Click on button at HTML:
  let inputValue = $('#input').val();
  let li = $('<li></li>');
  li.append(inputValue);

  // Check if the input box is empty or not:
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
  //
  li.on('dblclick', function(event) {
		li.toggleClass("strike");
	});
  // 3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', function(event){
    li.addClass('delete')
  });
  
   $('#list').sortable();
}
