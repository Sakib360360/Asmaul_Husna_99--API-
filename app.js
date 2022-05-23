
const totalLearning = document.getElementById('totalLearning')
let i = 0
    function next(){
        i += 1
        if(i <=99){
        fetch(`http://api.aladhan.com/asmaAlHusna/${i}`)
            .then(res => res.json())
            .then(data => display(data))
            console.log(i)
            
            totalLearning.innerText = `Learning:${i}`
        }else{
            alert('Alhamdulillah!!! You have learnt all the 99 names of Allah...')
        }
    }
    const display = (names) => {
        const nameId = document.getElementById('nameId')
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="d-flex mx-auto div-f">
            <h3 class="h1">${names.data[0].name}</h3>
            <h3>${names.data[0].transliteration}</h3>
            <h3 class="h2">${names.data[0].en.meaning}</h3>
            </div>
            `
            console.log(names.data[0])
        nameId.appendChild(div)
        
        
    }





