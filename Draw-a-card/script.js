
 function fetchApi()
{
    let url="https://deckofcardsapi.com/api/deck/new/draw/?count=1"
     fetch(url)
     .then(response=>{
        if(response.ok)
        return response.json();
        else
        console.log(response.status);
    })
    .then(data=>{
        data.cards.forEach(element => {
            url=element.image;
        });
        let img=document.createElement('img');
    img.src=url;
    document.getElementById('div1').appendChild(img);
    })
    
   
    
}

// eventListener for button
document.querySelector('#btn').addEventListener('click',e=>{
fetchApi();
});

