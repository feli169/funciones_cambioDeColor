document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'purple'
    } else if (event.key === 's') {
        color = 'chartreuse'
    }else if (event.key === 'd') {
        color = 'firebrick'
    }    
    })


    const box1 =document.getElementById('caja1')
    box1.addEventListener('click', () =>{
        box1.style.backgroundColor = color;
    });

    const box2 =document.getElementById('caja2')
    box2.addEventListener('click', () =>{
        box2.style.backgroundColor = color;
    });

    const box3 =document.getElementById('caja3')
    box3.addEventListener('click', () =>{
        box3.style.backgroundColor = color;
    });

    const box4 =document.getElementById('caja4')
    box4.addEventListener('click', () =>{
        box4.style.backgroundColor = color;
    });