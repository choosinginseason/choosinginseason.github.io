//
//display page after loaded
//

/*
https://stackoverflow.com/questions/9550760/hide-page-until-everything-is-loaded-advanced
*/

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

/** closes all expanded produce tips when a different one is clicked */ 
function hideProduceTips(produceId) {
   var produceElements = document.querySelectorAll('.produce');

   for (var i = 0; i < produceElements.length; i++) {
      var currElement = produceElements[i];
      if ((currElement.classList.contains('cover') === false) && (currElement.id !== produceId)) { //if a produce item (besides the one the user is currently openeing) is open 
         currElement.classList.add('cover');
         currElement.children[1].classList.add('hidden');
      }
   }
}

/** opens/closes produce tips */ 
function toggleProduceTips(produceId) {
   hideProduceTips(produceId);

   let parent = document.getElementById(produceId);
   let child = parent.children[1];
   
   parent.classList.toggle('cover');
   child.classList.toggle('hidden');
}

