const root = document.documentElement;
const button = document.querySelector('#button')
let colorMain = document.querySelector('#mainColor').value = '#6adec9'
let colorTitle = document.querySelector('#titleColor').value = '#5f1516'

function adjustContrast(variable, color){
    numb = color.replace('#', '').split('')
    let value;
    let rgb=[parseInt(numb[1]+numb[2], 16), parseInt(numb[3]+numb[4], 16), parseInt(numb[5]+numb[6], 16)];
    (((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000) > 128) ? value='#000': value='#fff'
    root.style.setProperty(variable, value)
}
function checkNumber(value){
    let numbers = [1,2,3,4,5,6,7,8,9,0]
    let equal = false
    for(n of value){
        equal = false
        for(number of numbers){
            if(number == n){
                equal = true
                break
            }
        }
        if(equal == false){
            return false
        }
    }return true
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
        variable == 'mainColor' ? adjustContrast('--colorText', value) : value = value
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