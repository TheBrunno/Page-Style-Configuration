const root = document.documentElement;
const button = document.querySelector('#button')
let colorMain = document.querySelector('#mainColor').value = '#6adec9'
let colorTitle = document.querySelector('#titleColor').value = '#5f1516'

function checkNumber(value){
    let numbers = [1,2,3,4,5,6,7,8,9,0]
    let equal = false
    for(n in value){
        equal = false
        for(number in numbers){
            if(numbers[number] == value[n]){
                equal = true
                break
            }
        }
        if(equal == false){
            return false
        }
    }
    return true
}
function error(msg, local){
    local.value = ''
    alert(msg)
}
function starter(){
    colorMain = document.querySelector('#mainColor')
    colorTitle = document.querySelector('#titleColor')
    let sizeText = document.querySelector('#textSize')
    changeValue(colorMain, 'mainColor', 'color')
    changeValue(colorTitle, 'titleColor', 'color')
    checkNumber(sizeText.value) ? changeValue(sizeText, 'textSizeMain', 'text') : error('Enter only with numbers', sizeText)
}

function changeValue(local, variable, type){
    let value = local.value
    if(type == 'color'){
        root.style.setProperty('--'+variable, value)        
    }else if(type == 'text'){
        if(value !== ''){
            if(value > 35){
                error('Enter values ​​less than 35', local)
            }else{
                root.style.setProperty('--'+variable, value+'px')
            }
        }
    }
}

button.onclick = function(){
    starter()
}
document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        starter()
    }
}, false)