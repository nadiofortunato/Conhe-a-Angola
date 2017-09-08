var $$ = Dom7;
// var data = null;
var that = this;

var nadio = [];
$.ajax({
  url:'http://unitel.omdesignz.com/api/appInfo',
  datatype:'json',
  success:function(response){
    nadio = response;
  },
  async: false
});

console.log(nadio);


// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    template7Pages: true,
    template7Data:{
      // 'page:categoryLeste':{
      //   'test': nadio
      // },

        'provinces': nadio

    },



    // Enable Material theme
    material: true
});


// Expose Internal DOM library
var $$ = Dom7;

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

//  main view
var mainView = myApp.addView('.view-main', {
});

// myApp.onPageInit('cart', function (page) {
//       $$('.delete').on('click', function(){
//         myApp.swipeoutDelete($$('li.swipeout.product1'));
//       });
//       $$('.delete2').on('click', function(){
//         myApp.swipeoutDelete($$('li.swipeout.product2'));
//       });
//       $$('.delete3').on('click', function(){
//         myApp.swipeoutDelete($$('li.swipeout.product3'));
//       });
// });
