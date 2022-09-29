// Click on button at HTML:
function newItem(){

  let inputValue = $('#input').val();
  let li = $('<li></li>');
  li.append(inputValue);

  // A) Check if the input box is empty or not:
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
    $('#input').val('');
  }

  // B) Added double click functionality to each created <li>
  // for making a strike (_____) line on item in the <li>.
  li.on('dblclick', function(event) {
		li.toggleClass("strike");
	});

  // C) Added a button shape of X (as a text) with click ability to each created <li>
  let crossOutButton = $('<crossOutButton></crossOutButton>').append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on('click', function(event){
    li.addClass('delete')
  });

  // D) Using jQuery .sortable() function for <ol id="list"></ol> in HTML
  // to sortable all items inside -> $('#list') by drag and drop.
   $('#list').sortable();
   $('#list').sordidDragon()
}
