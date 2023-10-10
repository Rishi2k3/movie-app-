let api= "http://www.omdbapi.com/?apikey=48c283bf&t=";

const description = document.getElementById('desc')
const released = document.getElementById('released');
const genre= document.getElementById('genre');
const language= document.getElementById('language');
const actors= document.getElementById('actors');
const director= document.getElementById('director');
const awards= document.getElementById('awards');
const collection= document.getElementById('collection');
const ratings= document.getElementById('ratings');
const writer= document.getElementById('writer');
const title= document.getElementById('title');
const image=document.getElementById('poster');

let container=document.getElementById('container')
container.style.display='none';

function searchmovie()
{
    let name = document.getElementById('movie-name');
    console.log(name);
    let query = api + name.value;
    
    fetch(query).then((data)=>
    {
        container.style.display='flex';
        return data.json();
    }).then((data)=>
    {

        title.innerText= data.Title;
        released.innerText=data.Released;
        genre.innerText=data.Genre;
        language.innerText=data.Language;
        actors.innerText=data.Actors;
        director.innerText=data.Director;
        awards.innerText=data.Awards;
        collection.innerText=data.BoxOffice;
        ratings.innerText=data.imdbRating;
        writer.innerText=data.Writer;
        image.src= data.Poster;
        description.innerText=data.Plot;
        
        


    })
};