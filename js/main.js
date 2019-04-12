/* Date Picker*/
window.onload = datepickers;
function datepickers() {
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = days[new Date().getDay()];
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"];
var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
document.getElementById("date").innerHTML = ( day + ' ' + monthNames[monthIndex] + ' ' + year) ;
document.getElementById("today").innerHTML = ( today ) ;
// Best Practice
document.getElementById("tostring").innerHTML = new Date().toDateString();
// method to get day latter
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = days[new Date().getDay()];
}



$('.selected_catch div a').click( function() {
    $('div a').removeClass('selected');
    $(this).addClass('selected');
});


  
  
  
  
/*Close Popup All for Cencel Button*/

function close_button_popup(close_box_id){
    
    $(close_box_id).css('display','none');
    $("#overlay").css("display","none"); 
    
}
/*Close Popup All for Cencel Button*/  
  




/*Setting Box Toggle Class Add*/
function setting_box_show() {    
        $(".setting_box").toggleClass("show_setting_box");
    
      var box = document.getElementsByClassName('setting_box show_setting_box');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
       
        }
    });
}

/*Setting Box Toggle Class Add*/


    $(".checkbox_container.setting_checkmark input[type=checkbox]").on("change", function(e) {
            
                var id = $(this).parent().index()+1,
            col = $("#main_arrival_tab_table thead tr th:nth-child("+id+"), #main_arrival_tab_table tbody tr td:nth-child("+id+")");
    
        $(this).is(":checked") ? col.show() : col.hide();
 

       
    }).prop("checked", true).change();





/*PDF generator*/
function genPDF(id) {
    var doc = new jsPDF();
    // You can use html:
    doc.autoTable({
        html: '#' + id
    });
    doc.save('table.pdf');
}

/*End PDF generator*/


/*Print Pdf Previewer*/

pdf_previewer = function(id)
{
	var pdf = new jsPDF('p', 'pt', 'a4'); 
        pdf.autoTable({
        html: '#' + id,
    });
	

		
	var iframe = document.getElementById('pdf_preview_box');
	iframe.setAttribute('style',' height:100%; width:100%;');
	
	iframe.src = pdf.output('datauristring');
    
    $("#print").click(function(){
     
    var divToPrint = document.getElementById(id);
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
    });
}
/*End Print Pdf Previewer*/


/*Print Popup*/

function print_previewer_popup(id) {

    $(".print_previewer_open").click(function () {
        $("#print_previewer_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');


    });
    var box = document.getElementById('print_previewer_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });
    
    pdf_previewer(id);

}

/* Close Print Previewer Popup*/
function close_print_previewer_popup(){
        $(".close_print_previewer_popup").click(function () {
        $("#print_previewer_popup").css('display', 'none');
        $("#overlay").css('display', 'none');
        $("body").css('overflow', 'visible');


    });

}


/*Transaction Details*/

function transaction_popup() {

    $(".transaction_popup_open").click(function () {
        $("#transaction_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');


    });
    var box = document.getElementById('transaction_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });


}

function transaction_popup_close() {
    $(".transaction_popup_close").click(function () {
        $("#transaction_popup").css('display', 'none');
        $("#overlay").css('display', 'none');
        $("body").css('overflow', 'visible');
    });
}

/*End Transaction Details*/




/*Start of Input Transaction Details*/

function input_transaction_popup() {

    $(".input_transaction_popup_open").click(function () {
        $("#input_transaction_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');


    });
    var box = document.getElementById('input_transaction_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });


}

function input_transaction_popup_close() {
    $(".input_transaction_popup_close").click(function () {
        $("#input_transaction_popup").css('display', 'none');
        $("#overlay").css('display', 'none');
        $("body").css('overflow', 'visible');
    });
}

/*End of Input Transaction Details*/


/*Start of Bill Transaction Details*/

function bill_transaction_popup() {

    $(".bill_transaction_popup_open").click(function () {
        $("#bill_transaction_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');


    });
    var box = document.getElementById('bill_transaction_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });


}

function bill_transaction_popup_close() {
    $(".bill_transaction_popup_close").click(function () {
        $("#bill_transaction_popup").css('display', 'none');
        $("#overlay").css('display', 'none');
        $("body").css('overflow', 'visible');
    });
}

/*End of Bill Transaction Details*/


/*Start of Purchases Transaction Details*/

function purchase_transaction_popup() {

    $(".purchase_transaction_popup_open").click(function () {
        $("#purchase_transaction_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');


    });
    var box = document.getElementById('purchase_transaction_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });


}

function purchase_transaction_popup_close() {
    $(".purchase_transaction_popup_close").click(function () {
        $("#purchase_transaction_popup").css('display', 'none');
        $("#overlay").css('display', 'none');
        $("body").css('overflow', 'visible');
    });
}

/*End of Purchases Transaction Details*/



/*Audit Log Popup*/
function audit_log_popup() {
    $(".audit_log_open").click(function () {
        $("#audit_log_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');


    });
    var box = document.getElementById('audit_log_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });


}

/*End Audit Log Popup*/


/*Account popup Open*/
function accout_popup_open() {
    $('#accout_popup_open').click(function () {
        $("#account_details").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');
        $("#search_popup").css('display', 'none');


    });
    var box = document.getElementById('account_details');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });

}



/*End Account popup Open*/
function new_account_open() {
    $('.new_account_open').click(function () {
        $("#popup_new_account").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');

    });
    var box = document.getElementById('popup_new_account');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });

}


function input_popup_open() {
    $('.input_popup_open').click(function () {
        $("#input_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');

    });
    var box = document.getElementById('input_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });

}



function bill_popup_open() {
    $('.bill_popup_open').click(function () {
        $("#bill_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');

    });
    var box = document.getElementById('bill_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });

}




function output_popup_open() {
    $('.output_popup_open').click(function () {
        $("#output_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');

    });
    var box = document.getElementById('output_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });


}


/*Search function*/
function serch_popup_open() {
    $('.serch_popup_open').click(function () {
        $("#search_popup").css('display', 'block');
        $("#overlay").css('display', 'block');
        $("body").css('overflow', 'hidden');


    });
    var box = document.getElementById('search_popup');
    var box1 = document.getElementById('overlay');

    window.addEventListener('mouseup', function (Event) {
        if (Event.target != box && Event.target.parentNode != box && Event.target.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode != box && Event.target.parentNode.parentNode.parentNode.parentNode != box && Event.target === box1) {

            box.style.display = "none";
            box1.style.display = "none";
            $("body").css('overflow', 'visible');
        }
    });



}

function search_close_btns() {
    $('.search_close_btn').click(function () {
        $("#search_popup").css('display', 'none');
        $("#overlay").css('display', 'none');
        $("body").css('overflow', 'visible');
    });
}
/*End Search function*/




/*Report Balance Sheet Frame*/
$(".balance_sheet_report_box").hide();
$('a[href="#balance_sheet_open"]').click(function(){
    $(".balance_sheet_report_box").show();
    $("#report_main_tab").hide();
});
/*End Report Balance Sheet Frame*/

/*Back to Report List*/
$('a[href="#back_to_report_list"]').click(function(){
    $(".balance_sheet_report_box").hide();
    $("#report_main_tab").show();
});
/*Back to Report List*/




/*Start upload with thumbnail*/
$(document).ready(function() {

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('.view-img img').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#upload").change(function() {
    readURL(this);
  });

  $('.uploadbtn').on('click', function() {
    $('#upload').trigger('click');
    
  });
});