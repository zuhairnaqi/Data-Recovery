function table_Search(){  

    var searchTerm = $(".search_input_box").val();
    var listItem = $('table.table_search_input tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
    
  $('table.table_search_input tbody tr').not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $("table.table_search_input tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('table.table_search_input tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
		  
    
  }
