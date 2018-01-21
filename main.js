
function drawPyramid(height,symbol) {
    let pyramid = document.getElementById('pyramid');
    pyramid.innerHTML ='';
    let count = height-1;
    let space = "<i>&nbsp;</i>";
    let block = "<div id='block'>"+symbol+"</div>";
    for(let i=2;i<height+2;i++){
        pyramid.innerHTML+="<div>"+space.repeat(count--)+block.repeat(i)+"</div>"+"<h6>";
    }
}

function updateSelect() {
    let options = document.getElementById('choose-symbols');
    let symbol = options.options[options.selectedIndex].value;
    return symbol;
}

function updateOutput() {
    let height = document.getElementById('height');
    let range = document.getElementById('range-input');
    height.value = '\xa0\xa0'+range.value;
    return range.value;
}
