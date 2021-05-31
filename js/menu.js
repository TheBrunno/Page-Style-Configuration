const items = document.querySelectorAll('nav ul li a')
let clicked;

function click(element){
    while(true){
        if(clicked == undefined){ // if the element is not clicked
            element.style.backgroundColor = '#0000003a'
            element.style.fontWeight = 500
            clicked = element
            break
        }else{ // if it is clicked, clears the markup
            clicked.style.backgroundColor = 'inherit'
            clicked.style.fontWeight = 'normal'
            clicked = undefined
        }        
    }
}
document.addEventListener('click', function(local){
    if(local.path[0].localName == 'a'){ // if the local where it was clicked is an 'a'
        for(e in items){
            if(items[e].innerText == local.path[0].innerText){ // if the text inside that 'a' is the same as in the html
                click(items[e])
            }
        }
    }
})