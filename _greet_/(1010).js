    const btn = document.querySelector('#btn')
   const stop = document.querySelector('#stop')
 const format = document.querySelector('#format')
const text = document.querySelector('#text')
const progress = document.querySelector('#progress')
const getItem = document.querySelector('.getItem')


let interval
let inter 

format.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        clearInterval(interval)
        get()
    }
})


function get() {
    
function rand() {
    
        text.textContent = 'loading is complete' 
        let ger = ['my', 'fy', 'gy', 'da', 'fe', 'ju', 'ko', 'bi', 'so', 
        'we', 'ka', 'li', 'me', 'ny', 'ho', 'pa', 'qe', 'ry', 'sy', 'to', 'hu', 
        'va', 'wo', 'xe', 'zy', 'ze']
        let col = Math.floor(Math.random() * ger.length)
        let cob = Math.floor(Math.random() * ger.length)
        let con = Math.floor(Math.random() * ger.length)
        let one = ger[col]
        let two = ger[cob]
        let tree = ger[con]
        const low = format.value.toLowerCase()
        let cucumber = (`${one}${two}${tree}.${low}`);
        

        const p = document.createElement('p')
        p.className = 'name'
        p.textContent = cucumber
        getItem.appendChild(p)


        clearInterval(inter)
}    

    let i = 0 
    text.textContent = `${i}%`

    stop.onclick = function() {

        if (i < 100) {
            
        clearInterval(interval)
        i = 0
        progress.value = i
        text.textContent = `${i}%`
        } else {
            alert('download already done')
            return
        }
    }

    if (format.value == 'DOC') {
        interval = setInterval(function() {
            i++
        progress.value = i
        text.textContent = `${i}%`
        if (i == 100) {
            setTimeout(function() {
                clearInterval(interval)
        rand()
            }, 10)
        }
        },50)
    } else if(format.value == 'DOTX'){
        interval = setInterval(function() {
            i++
        progress.value = i
        text.textContent = `${i}%`
        if (i == 100) {
            setTimeout(function() {
                clearInterval(interval)
                rand()
            }, 10)
        }
        },100)
    }else if(format.value == 'PDF'){
    interval = setInterval(function() {
        i++
    progress.value = i
    text.textContent = `${i}%`
    if (i == 100) {
        setTimeout(function() {
            clearInterval(interval)
            rand()
        }, 10)
    }
    },150)
}else if(format.value == 'RTF'){
    interval = setInterval(function() {
        i++
    progress.value = i
    text.textContent = `${i}%`
    if (i == 100) {
        setTimeout(function() {
            clearInterval(interval)
            rand()
        }, 10)
    }
    },200)
}else if(format.value == 'TXT'){
    interval = setInterval(function() {
        i++
    progress.value = i
    text.textContent = `${i}%`
    if (i == 100) {
        setTimeout(function() {
            clearInterval(interval)
            rand()
        }, 10)
    }
    },100)
}else if (format.value == '') {
    alert('Enter format name')
}else{
    alert('Unsupported format')
    }
}


btn.onclick = function() {
    clearInterval(interval)
    get()
}






