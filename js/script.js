// what we do section (index page)

if(document.querySelector( '#service')){
let service = document.querySelector( '#service');
  
mouseEnter = function mouseEnter() {
   
  service.innerHTML = `<small class="card-title p-5 m-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates debitis est ullam magni expedita<small>`;
  service.style.backgroundColor = '#007bff';
  service.style.color = '#ffffff';
}
 
mouseLeave = function mouseLeave() {
  service.innerHTML = ` <h5 class="card-title p-5 m-4 text-center">
    <i class="fas fa-desktop mt-2 mb-2 text-primary"></i> 
    <br/>Website Design</h5> `;
    service.style.backgroundColor = '#ffffff';
    service.style.color = '#000000';

 }

service.addEventListener( 'mouseenter', mouseEnter );
service.addEventListener( 'mouseleave', mouseLeave );
}
if(document.querySelector( '#service2')){
let service2 = document.querySelector( '#service2');

mouseEnter1 = function mouseEnter() {
  
  service2.innerHTML = `<small class="card-title p-5 m-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates debitis est ullam magni expedita<small>`;
  service2.style.backgroundColor = '#007bff';
  service2.style.color = '#ffffff';
}
 
mouseLeave1 = function mouseLeave() {
  service2.innerHTML = ` <h5 class="card-title p-5 m-4 text-center">
    <i class="fab fa-uikit mt-2 mb-2 text-primary"></i> 
    <br/>UI/UX Design</h5> `;
    service2.style.backgroundColor = '#ffffff';
    service2.style.color = '#000000';

 }
 
 service2.addEventListener( 'mouseenter', mouseEnter1 );
service2.addEventListener( 'mouseleave', mouseLeave1 );

}
if(document.querySelector( '#service3')){
  let service3 = document.querySelector( '#service3');
  
  mouseEnter3 = function mouseEnter() {
    service3.innerHTML = `<small class="card-title p-5 m-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates debitis est ullam magni expedita<small>`;
    service3.style.backgroundColor = '#007bff';
    service3.style.color = '#ffffff';
  }
   
  mouseLeave3 = function mouseLeave() {
    service3.innerHTML = ` <h5 class="card-title p-5 m-4 text-center">
      <i class="fas fa-mobile mt-2 mb-2 text-primary"></i> 
      <br/>Web Apps</h5> `;
      service3.style.backgroundColor = '#ffffff';
      service3.style.color = '#000000';
  
   }
   
   service3.addEventListener( 'mouseenter', mouseEnter3 );
   service3.addEventListener( 'mouseleave', mouseLeave3 );
  
  }
  
  if(document.querySelector( '#service4')){
    let service4 = document.querySelector( '#service4');
      
     mouseEnter4 = function mouseEnter() {
      service4.innerHTML = `<small class="card-title p-5 m-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates debitis est ullam magni expedita<small>`;
      service4.style.backgroundColor = '#007bff';
      service4.style.color = '#ffffff';
    }
     
    mouseLeave4 = function mouseLeave() {
      service4.innerHTML = ` <h5 class="card-title p-5 m-4 text-center">
        <i class="fas fa-video mt-2 mb-2 text-primary"></i> 
        <br/>Video Editing</h5> `;
        service4.style.backgroundColor = '#ffffff';
        service4.style.color = '#000000';
    
     }
    
     
    
    service4.addEventListener( 'mouseenter', mouseEnter4 );
    service4.addEventListener( 'mouseleave', mouseLeave4 );
    }
    if(document.querySelector( '#service5')){
    let service5 = document.querySelector( '#service5');
    
    mouseEnter5 = function mouseEnter() {
      service5.innerHTML = `<small class="card-title p-5 m-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates debitis est ullam magni expedita<small>`;
      service5.style.backgroundColor = '#007bff';
      service5.style.color = '#ffffff';
    }
     
    mouseLeave5 = function mouseLeave() {
      service5.innerHTML = ` <h5 class="card-title p-5 m-4 text-center">
        <i class="fas fa-fill mt-2 mb-2 text-primary"></i> 
        <br/>Graphic Design</h5> `;
        service5.style.backgroundColor = '#ffffff';
        service5.style.color = '#000000';
    
     }
     
     service5.addEventListener( 'mouseenter', mouseEnter5 );
    service5.addEventListener( 'mouseleave', mouseLeave5 );
    
    }
    if(document.querySelector( '#service6')){
      let service6 = document.querySelector( '#service6');
      
      mouseEnter6 = function mouseEnter() {
        service6.innerHTML = `<small class="card-title p-5 m-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates debitis est ullam magni expedita<small>`;
        service6.style.backgroundColor = '#007bff';
        service6.style.color = '#ffffff';
      }
       
      mouseLeave6 = function mouseLeave() {
        service6.innerHTML = ` <h5 class="card-title p-5 m-4 text-center">
          <i class="fas fa-comment mt-2 mb-2 text-primary"></i> 
          <br/>Social Media</h5> `;
          service6.style.backgroundColor = '#ffffff';
         service6.style.color = '#000000';
      
       }
       
       service6.addEventListener( 'mouseenter', mouseEnter6 );
      service6.addEventListener( 'mouseleave', mouseLeave6 );
      
      }  
 
// index page (services show more)

$(document).ready(function(){
  $("#show").click(function(){
    $("#div1").fadeIn("");
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
    $("#div4").fadeIn(3000);
    $("#show").fadeOut();
  });
});
 
// Team images show name and designation

 $(document).ready(function(){
  $("#profile1").on({
    mouseenter: function () {
         $("#name1").fadeIn();
         $("#p1").fadeIn();
         
         
    },
    mouseleave: function () {
      $("#profile1").fadeIn();
      $("#name1").fadeOut();
      $("#p1").fadeOut();
    }
});
});


$(document).ready(function(){
  $("#profile2").on({
    mouseenter: function () {
         $("#name2").fadeIn();
         $("#p2").fadeIn();
         
         
    },
    mouseleave: function () {
      $("#profile2").fadeIn();
      $("#name2").fadeOut();
      $("#p2").fadeOut();
    }
});
});


$(document).ready(function(){
  $("#profile3").on({
    mouseenter: function () {
         $("#name3").fadeIn();
         $("#p3").fadeIn();
         
         
    },
    mouseleave: function () {
      $("#profile3").fadeIn();
      $("#name3").fadeOut();
      $("#p3").fadeOut();
    }
});
});

$(document).ready(function () {
  $("#profile4").on({
    mouseenter: function () {
         $("#name4").fadeIn();
         $("#p4").fadeIn();
         
         
    },
    mouseleave: function () {
      $("#profile4").fadeIn();
      $("#name4").fadeOut();
      $("#p4").fadeOut();
    }
});
});

// counter section (about page)

$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  },{
    duration: 4000,
    easing: 'swing',
    step : function(now){
      $(this).text(Math.ceil(now));
    }
  });

});


// contact form 

$(document).ready(function () {
  $("#formData").submit(function(e){
     e.preventDefault(); 
     var formData = {
      'name'              : $('#name').val(),
      'email'             : $('#email').val(),
      'subject'           : $('#subject').val(),
      'phone'             : $('#phone').val(),
      'message'           : $('#message').val()
    };
     $.ajax({
      type: "POST",
      url:"https://5fe78142010a670017803a77.mockapi.io/users",
      data: formData,
      success : function () {
        $(`#alertmessage`).append(`Thanks for contacting us ! We will be in touch with you shortly`).css("backgroundColor", "#FFECF2");
      },
      error: function (jqXhr, textStatus, errorMessage) {
        $(`#alertmessage`).append('Error: ' + errorMessage).css("backgroundColor", "#FFECF2");

      }
     });
  });
  });

  // submit query from modal

  $(document).ready(function (){
    $("#mybutton").click(function () {
        var modaldata = {
               'name'              : $('#mymodal #name').val(),
               'email'             : $('#mymodal #email').val(),
               'subject'           : $('#mymodal #subject').val(),
               'phone'             : $('#mymodal #phone').val(),
               'message'           : $('#mymodal #message').val()
             };
             $.ajax({
                  type: "POST",
                  url:"https://5fe78142010a670017803a77.mockapi.io/users",
                  data: modaldata,
                  success : function () {
                    alert(`Thanks for contacting us! We will be in touch with you shortly`);
                   
                  },
                  error: function (jqXhr, textStatus, errorMessage) {
                    alert('Error: ' + errorMessage);
                  }
                 });
         
    });
    });

   