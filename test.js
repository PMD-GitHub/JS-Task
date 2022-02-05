const triggers 		= document.getElementsByClassName('trigger');
const triggerArray 	= Array.from(triggers).entries();
const modals 		= document.getElementsByClassName('modal');
const otherButtons 	= document.getElementsByClassName('btn');

for (let [index, trigger] of triggerArray) 
{
  const toggleModal = () => 
  {
    modals[index].classList.toggle('show-modal');
  }

  trigger.addEventListener("click", toggleModal);

<!--  Making the eventListener addition dynamic in case buttons are added -->
  otherButtons[2*index].addEventListener("click", toggleModal);
  otherButtons[(2*index)+1].addEventListener("click", toggleModal);
}

function change(value, btnID)
{
	var listTest 		= document.getElementById(btnID);	
	const textNode 		= document.createTextNode(value);

	listTest.replaceChild(textNode, listTest.childNodes[0]);
}