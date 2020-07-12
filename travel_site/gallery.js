
const imageGal = [{ id: 'one', site: 'https://www.lonelyplanet.com/usa/southwest/nevada', filename: 'picture of the road', url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
{ id:'two', site: 'https://www.ricksteves.com/europe/greece', filename: 'beautiful picture of greece', url:'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
{ id:'three', site: 'https://www.lonelyplanet.com/asia', filename:'swingset', url:'https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
{ id:'four',site: 'https://www.tourradar.com/d/europe',  filename:'ocean', url:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
{ id:'five',site: 'https://www.intrepidtravel.com/adventures/more-than-a-desert-a-trip-into-sahara/', filename:'gondola', url: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
{id:'six', site: 'https://www.gadventures.com/destinations/south-america/peru/', filename: ' something', url:'https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
// {id: 'seven', site: ' ', filename:'somth', url:'https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
]

const gallery = document.querySelector ('.wrapper');

let ImageTemp= '';


imageGal.forEach(function(image){
    
    ImageTemp += `<a href=${image.site}><img src = ${image.url} alt=${image.filename}>Click here to find more details!</a>` 
 
})

gallery.innerHTML = ImageTemp

const toggle =document.querySelector('button')
const menu = document.querySelector('nav ul')

toggle.addEventListener('click', function(){
  menu.classList.toggle('visible')
})




