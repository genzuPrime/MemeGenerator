const form = document.querySelector('#form');
const memeImg = document.querySelector('#meme-img');

const imgUrl = document.querySelector('#img-url');
const topTextInput = document.querySelector('#top-text');
const bottomTextInput = document.querySelector('#bottom-text');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Creating the container
    const newMeme = document.createElement('div');
    newMeme.classList.add('container');

    // Adding the image
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = imgUrl.value;
    img.width = '300';
    // console.log(imgUrl.value);

    // Top and Bottom Text
    const topTextMeme = document.createElement('div');
    topTextMeme.innerText = topTextInput.value.toUpperCase();
    topTextMeme.classList.add('top');
    
    const bottomTextMeme = document.createElement('div');
    bottomTextMeme.innerText = bottomTextInput.value.toUpperCase();
    bottomTextMeme.classList.add('bottom');

    // Remove Button
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'Delete';
    removeBtn.classList.add('btn');

    // Adding it all together under new div
    newMeme.appendChild(img);
    newMeme.appendChild(topTextMeme);
    newMeme.appendChild(bottomTextMeme);
    newMeme.appendChild(removeBtn);
    memeImg.appendChild(newMeme);

    // Clear form inputs
    imgUrl.value = '';
    topTextInput.value = '';
    bottomTextInput.value = '';
})

memeImg.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})