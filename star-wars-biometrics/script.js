const result=document.getElementById('textA');
const people=document.getElementById('character');

async function getApi(value)
{
    let api_url='https://www.swapi.tech/api/People'; 
    let response = await fetch(api_url);
    let data = await response.json();
    console.log(data);
    //David: I want to apply Filter here instead of foreach
    // but i dont know how to use
    data.results.forEach(element => {
        if(element.name==value)
        api_url=element.url;
    });
    response=await fetch(api_url);
    data=await response.json();
    let output="Height: "+data.result.properties.height + "\n" + "Mass: "+data.result.properties.mass +
    "\n" + "Gender: " + data.result.properties.gender +"\n"+"Hair Color: "+data.result.properties.hair_color;
    result.value=output;
    
}

// eventListener for button
document.querySelector('#show').addEventListener('click',e=>{
    let input =people.value;
getApi(input.trim())
.then(response=>{
    console.log('Fantastic');
})
.catch(error=>{
    console.log('Error!');
    console.console.error(error);
});
});