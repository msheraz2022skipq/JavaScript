/*
Try this in console on any webpage (example.com)
*/

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})



//capture data
//Try this on example.com
function handleClicks() {
        switch(h1.innerText) {
            case arr[0]:
                h1.innerText = arr[1]
                break
            case arr[1]:
                h1.innerText = arr[2]
                break
            case arr[2]:
                h1.innerText = arr[3]
                break
            default:
                h1.innerText = arr[0]
        }
    }
    h1.addEventListener('click', handleClicks);