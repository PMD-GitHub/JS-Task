const triggers 		= document.getElementsByClassName('trigger');
const triggerArray 	= Array.from(triggers).entries();
const modals 		= document.getElementsByClassName('modal');
const closeButtons 	= document.getElementsByClassName('btn-close');

for (let [index, trigger] of triggerArray) 
{
  const toggleModal = () => 
  {
    modals[index].classList.toggle('show-modal');
  }
  
  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);
}

function change(value, btnID)
{
	var listTest = document.getElementById(btnID);	
	const textNode = document.createTextNode(value);

	console.log(btnID);
	console.log(value);

	listTest.replaceChild(textNode, listTest.childNodes[0]);
}