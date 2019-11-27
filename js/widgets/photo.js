let photoInputEl = findInputElement();
let photosContainerEl = findPhotoContainer();
let imgURLs = [];
bindEnterClick(photoInputEl, photosContainerEl, imgURLs);
restorePhotos(photosContainerEl, imgURLs);
deletePhotoStorage(photosContainerEl);


function findInputElement() {
    return document.querySelector('.js-new-photo');
}

function findPhotoContainer () {
    return document.querySelector('.js-photos');
}

function addPhotoToContByURL (photosContainerEl, photoURL) {
    //Create li with image by this  URL
    let li = document.createElement('li');
    li.innerHTML = `<img src='${photoURL}' />`;
    //attach created Li to UL
    photosContainerEl.append(li);
}

function bindEnterClick (photoInputEl, photosContainerEl, imgURLs) {
    photoInputEl.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
            // get URL
            let src = photoInputEl.value;
            
            addPhotoToContByURL (photosContainerEl, src)

            //push new URL to array
            imgURLs.push(src);

            //serialize and save this array to local storage as string
            localStorage.setItem('gallery', JSON.stringify(imgURLs))
        }
    }) ;
}

function restorePhotos (photosContainerEl, imgURLs) {
    let photosString = localStorage.getItem('gallery');
    if (!!photosString) {
        let photos = JSON.parse(photosString);
        photos.forEach(element => {
            imgURLs.push(element);
            addPhotoToContByURL (photosContainerEl, element);
        });
    }
}

function deletePhotoStorage(photosContainerEl) {
    let buttonDelete = document.querySelector('.clear-photo');
    buttonDelete.addEventListener('click', () => {
        localStorage.removeItem('gallery');
        photosContainerEl.innerHTML = '';

    })
}