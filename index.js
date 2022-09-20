function addingEventListener() {
const input = document.getElementById('button');
    input.addEventListener('click', function() {
      alert('I was clicked a while ago!');
    });}
    console.log('alert')
    var input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked just a while ago!');
}

input.addEventListener('click', clickAlert)
