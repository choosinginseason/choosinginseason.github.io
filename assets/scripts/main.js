// var h = $("header-img").height();
// // document.getElementsByClassName("clip").style.top = h * 0.28;
// document.getElementById("pls").style.top = h * 0.28;




//
//Setting current pg/active button to orange
//

 /**
function activeButton (buttonID) {
   document.getElementById(buttonID).classList.add('active-button');
}
 */


//
//For fruit/veggie button, have height expand & rm hidden
//

/** opens/closes produce tips */ 
function toggleProduceTips(produceId) {
   hideProduceTips(produceId);

   let parent = document.getElementById(produceId);
   let child = parent.children[1];
   
   parent.classList.toggle('cover');
   child.classList.toggle('hidden');
   
}

/** closes all expanded produce tips when a different one is clicked */ 
function hideProduceTips(produceId) {
   var produceElements = document.querySelectorAll('.produce');

   for (var i = 0; i < produceElements.length; i++) {
      var currElement = produceElements[i];
      if ((currElement.classList.contains('cover') === false) && (currElement.id !== produceId)) { //if a produce item (besides the one the user is currently openeing) is open, close it
         currElement.classList.add('cover');
         currElement.children[1].classList.add('hidden');
         //new
         if (currElement.children[0].className === "q-n-a") {
            currElement.children[0].children[1].classList.toggle('off');
            currElement.children[0].children[2].classList.toggle('off');
         }
      }
   }
}

//
//For q&a, toggle accordion icon
//

/** toggles +/- */
function toggleAccordion(produceId) {
   // switchOtherIcons(produceId);
   let plus = document.getElementById(produceId).children[0].children[1];
   let minus = document.getElementById(produceId).children[0].children[2];
   
   
   plus.classList.toggle('off');
   minus.classList.toggle('off');
}

/** switches all other - --> + when diff a is revealed */ 
// function switchOtherIcons(produceId) {
//    var produceElements = document.querySelectorAll('.produce');

//    for (var i = 0; i < produceElements.length; i++) {
//       var currElement = produceElements[i];
//       if ((currElement.children[0].children[2].classList.contains('off') === false) && (currElement.children[0].parentElement.id !== produceId)) { 
//          toggleAccordion(produceId);
//       }
//    }
// }
