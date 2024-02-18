function setInnerText(id, value){
    document.getElementById(id).innerText = value

}
function appendChildAndSet(id, value){
    const set = document.getElementById(id);
    set.appendChild(value)
}