/*
  Jace P. Gold
  10/29/2019
  FIND Seniors Assignment for 10/30/2019
  DevPoint Labs
*/

$(document).ready( function() {
  // Save our HTML Image tag
  var theImg = $('#the-image');
  // Caption element
  var caption = $('#caption');
  // The path to the new image
  var newImg = '';

  // When <a id="dog">Dog</a> is clicked, run this function
  $('#dog').on('click', function(e) {
    // e.preventDefault() will prevent the A tag from
    // attempting to change pages. We will go over this at a later date.
    e.preventDefault();

    // Set the newImg source
    newImg = 'images/dog.jpg';
    // Select the Img tag, and change the attributes
    $(theImg).attr({
      'src': newImg,
      'alt': 'Adorable Puppy Dog',
    });
    $(caption).text('Adorable Puppy Dog');
  });

  // Duplicate the above function for each Image we want to display
  $('#ferret').on('click', function(e) {
    e.preventDefault();
    newImg = 'images/ferret.jpg';
    $(theImg).attr({
      'src': newImg,
      'alt': 'Mysterious Ferret',
    });
    $(caption).text('Mysterious Ferret');
  });

  $('#chewbacca').on('click', function(e) {
    e.preventDefault();
    newImg = 'images/chewy.jpg';
    $(theImg).attr({
      'src': newImg,
      'alt': 'Chewy Chewbacca Rockin\' out',
    });
    $(caption).text('Chewy Chewbacca Rockin\' out');
  });

  // Reset the newImg value to be blank for good practice
  newImg = '';
});