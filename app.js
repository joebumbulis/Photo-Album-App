console.log(jQuery);
//first page- albums
//when user clicks on an album pic
//remove CSS  class selected to album page, pg1 page
// add CSS class .selected to page2,
// remove  CSS selector class to correlating 'album container'- display none

var $albums = $('.album-pic-container');
var $page = $('.page');
var $pageTwo = $('.photos-page')
var $sidebarBtn = $('.sidebar-btn');
var $albumCtn = $('.album-container');
var $pageThree = $('.pic-page');
var $backBtn = $('.back-btn')

console.log($backBtn);


$albums.on('click', function(e){
  // $pageOne.removeClass('')
  // console.log(e);
  $page.removeClass('selected');
  $pageTwo.addClass('selected');
  var containerID = $(e.target).closest('.album-pic-container').attr('id');
  // console.log(e.target);
  // console.log(containerID);
  // console.log($('.'+ containerID));
  $('.'+ containerID).addClass('selected');
});

$sidebarBtn.on('click', function(e){
  // console.log( this );
  // console.log(e);
  $albumCtn.removeClass('selected');
  var btn = $(e.target).attr('id');
  // console.log(btn);
  $('.' + btn).addClass('selected');
});

$albumCtn.on('click', function (e){
  $pageTwo.removeClass('selected');
  $pageThree.addClass('selected');

})

$backBtn.on('click', function(e){
  $pageThree.removeClass('selected');
  $pageTwo.addClass('selected');
})


//second page - pictures of open albums
//when user clicks li btn of one of the album names-
//add class selector for all)- display none
//remove class selector for clicked on album -
//
//when user clicks on a picture
//add class to pictures album page - display none
//remove class to picture individual page to correlating picture- display none




//page three: picture page
//when user clicks back btn
//remove class selector to pictures page of open albums - display none
//add class selector to picture individual page
