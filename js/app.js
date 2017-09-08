$(document).ready(function(){
  //event Listeners
  document.addEventListener('deviceready',onDeviceReady, false);
});


function onDeviceReady() {
  console.log('device is now bruno ready');

getProvince();



}

function getProvince() {

  var provinces = [];

//   $.ajax({
//   url:'http://unitel.omdesignz.com/api/provinces',
//   datatype:'json',
//   success:function(response){
//     console.log(response.data[0].name);
//     // $.each(response.data, function(key, value){
//     //   console.log(value.name);
//     //   var provinces = value.name;
//     //
//     //   html =   '<li>'+
//     //             '<div class="item-inner">'+
//     //                 '<div class="item-title" id="myProvincesList">'++'</div>'+
//     //                 '</div>'+
//     //     '</li>'
//     //
//     //
//     //   $('#myProvinces').html(html);
//     //   //  console.log(provinces);
//     // });
//     html =    '<li>'+response.data[1].name+ '</li>';
//
//         console.log(html);
//         $('#myProvinces').html(html);
//   }
// });
}
