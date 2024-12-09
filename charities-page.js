const URL="https://partners.every.org/v0.2/nonprofit/maps?apiKey=myPublicApiKey";

/*fetch(URL)
    .then(Response => {
        if (!Response.ok) {
            throw new Error('Network response was not ok');
        }
        return Response.json();
    })

    .then(data => {
        console.log('data recived:', data);
    })
    .catch(error => {
        console.error('there was a problem with the fetch operation:', error);
    });

*/
/*
    const main = document.querySelector('.main');
    const ul= eleMaker('ul','',main);
    const btnPrev = eleMaker('button','Previous',main);
    const btn = eleMaker('button','Get Data',main);
    const btnNext = eleMaker('button','Next',main);
    let counter = 0;
    updateButtons();


    btnPrev.addEventListener('click',()=>{
        if(counter > 0) counter = counter -1;
    })
    btnNext.addEventListener('click',()=>{
         counter = counter + 1;
    })
    btn.addEventListener('click',getDataVal);


    function getOutput(){
        fetch(URL)
        .then(Response => Response.json())
        .then(data =>{
            updateButtons();
            console.log(data[counter]);
        })
    }





    function updateButtons(){
        if(counter <= 0){
            btnPrev.disabled= true;
        }else{
            btnPrev.disabled= false;
        }
    }

    function getDataVal(){
        fetch(URL)
        .then(Response=>Response.json())
        .then(data =>{
            updateButtons();
            addtoPage(data);
        })
    }


    function addtoPage(data){
        ul.innerHTML ='';
        console.log(data);
        data.forEach(item =>{
            /*const temp = eleMaker('li',item.tagName,ul);*/
            const li = document.createElement('li');
            li.textContent = item.tagName;
            const temp = ul.appendChild(li);
            console.log(temp);
        })
    }

    function eleMaker(tagType,txt,parent){
        const temp = document.createElement(tagType);
        temp.textContent = txt;
        return parent.appendChild(temp);
    }