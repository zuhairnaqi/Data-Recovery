filterSelection_9('all');

function filterSelection_9(c) {
  
  var x, i;
   $("#bank_main_table_1 tbody tr").addClass(" filterDiv_9 ");
  x = document.getElementsByClassName(" filterDiv_9 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}


filterSelection_10('all');

function filterSelection_10(c) {
  
  var x, i;
   $("#bank_main_table tbody tr").addClass(" filterDiv_10 ");
  x = document.getElementsByClassName(" filterDiv_10 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}


filterSelection_8('all');

function filterSelection_8(c) {
  
  var x, i;
   $("#main_arrival_tab_table tbody tr").addClass(" filterDiv_8 ");
  x = document.getElementsByClassName(" filterDiv_8 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}

filterSelection_7('all');

function filterSelection_7(c) {
  
  var x, i;
   $("#ranking_table_search tbody tr").addClass(" filterDiv_7 ");
  x = document.getElementsByClassName(" filterDiv_7 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}

filterSelection_6('all');

function filterSelection_6(c) {
  
  var x, i;
   $("#bank_main_table_2 tbody tr").addClass(" filterDiv_6 ");
  x = document.getElementsByClassName(" filterDiv_6 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}

filterSelection_5('all');

function filterSelection_5(c) {
  
  var x, i;
   $("#difference_entries_main_table tbody tr").addClass(" filterDiv_5 ");
  x = document.getElementsByClassName(" filterDiv_5 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}


filterSelection_4('all');

function filterSelection_4(c) {
  
  var x, i;
   $("#expenses_main_table tbody tr").addClass(" filterDiv_4 ");
  x = document.getElementsByClassName(" filterDiv_4 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}

filterSelection_3('all');

function filterSelection_3(c) {
  
  var x, i;
   $("#inventory_main_table tbody tr").addClass(" filterDiv_3 ");
  x = document.getElementsByClassName(" filterDiv_3 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }

}

filterSelection_2('all');

function filterSelection_2(c) {
  
  var x, i;
   $("#arrival_entires_table tbody tr").addClass(" filterDiv_2 ");
  x = document.getElementsByClassName(" filterDiv_2 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }
}

filterSelection_1('all');
function filterSelection_1(c) {
  
  var x, i;
   $("#supplier_main_table tbody tr").addClass(" filterDiv_1 ");
  x = document.getElementsByClassName(" filterDiv_1 ");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }
}

filterSelection('all');
function filterSelection(c) {
  
  var x, i;
   $("#buyer_main_table tbody tr").addClass("filterDiv");
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows" );
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

