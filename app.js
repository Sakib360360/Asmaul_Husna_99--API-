
let i = 0
    function next(){
        i += 1
        fetch(`http://api.aladhan.com/asmaAlHusna/${i}`)
            .then(res => res.json())
            .then(data => display(data))
    }
    const display = (names) => {
        const nameId = document.getElementById('nameId')
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="d-flex mx-auto div-f">
            <h1 class="h1">${names.data[0].name}</h1>
            <h2 class="h2">${names.data[0].en.meaning}</h2>
            </div>
            `
            console.log(names.data[0].en.meaning)
        nameId.appendChild(div)
        
        
    }





