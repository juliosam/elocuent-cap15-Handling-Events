const ex1 = "Exercise 1"
const ex2 = "Exercise 2"
const ex3 = "Exercise 3"
const br = " \n "

console.log(ex1);
const globo = document.querySelector('.ballon');
const flate = (e) =>{  
  let currentSize
  if(e.key==='ArrowUp'){
    e.preventDefault()
    const style = window.getComputedStyle(globo, null).getPropertyValue('font-size'); 
    currentSize = parseFloat(style);
    if(currentSize < 130){
      globo.style.fontSize = (currentSize*1.1) + 'px';
      console.log('inflate');
    }
    else{
      globo.innerHTML= '💥';
      window.removeEventListener('keydown', flate);
      console.log('kabom');
    }}
  if(e.key==='ArrowDown'){
    e.preventDefault();
    const style = window.getComputedStyle(globo, null).getPropertyValue('font-size'); 
    const currentSize = parseFloat(style);
    globo.style.fontSize = (currentSize*0.9) + 'px';
    console.log('deflate');
  }
}
window.addEventListener('keydown', flate);

////--------------------Ejercicio 2---------------

const trailer = (e) => {
  console.log(e.screenY, e.screenX);
  let dot = document.createElement('div');
  document.body.appendChild(dot);
  dot.classList.add('trail');
  dot.style.top = (e.screenY) + 'px';
  dot.style.left = (e.screenX) + 'px';
}
document.addEventListener('mousemove', trailer);

/////------------------Ejercicio 3-----------------

function asTabs(node) {
  let tabs = Array.from(node.children).map(node => {
    let button = document.createElement("button");
    button.textContent = node.getAttribute("data-tabname");
    let tab = {node, button};
    button.addEventListener("click", () => selectTab(tab));
    return tab;
  });
  let tabList = document.createElement("div");
  for (let {button} of tabs) tabList.appendChild(button);
  node.insertBefore(tabList, node.firstChild);

  function selectTab(selectedTab) {
    for (let tab of tabs) {
      let selected = tab == selectedTab;
      tab.node.style.display = selected ? "" : "none";
      tab.button.style.color = selected ? "red" : "";
    }
  }
  selectTab(tabs[0]);
}
asTabs(document.querySelector("tab-panel"));

