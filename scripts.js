let hamberbur= document.querySelector('.hamburger');
let navlinks = document.getElementById('nav_links');
let links= document.querySelectorAll('.links');


hamberbur.addEventListener('click',()=>{


navlinks.classList.toggle('hide');
navlinks.classList.toggle('lines-rotate');

});
 
for(let i=0; i<links.length; i++)
{
    links[i].addEventListener('click',()=>{
        navlinks.classList.toggle('hide');

    });
}