let stars = findAllStars();

bindClickListener(stars);
restorePreviousValue(stars);
deleteRatingStorage(stars);

function findAllStars() {
    let stars = document.querySelectorAll(".js-stars img");
    return stars;
}

function bindClickListener(stars) {
    stars.forEach(star => {
        star.addEventListener("click", e => {
            let activeStars = document.querySelectorAll(".js-stars img.active");
            activeStars.forEach(a => {
                a.classList.remove("active");
            });
            let clickedStar = e.currentTarget;
            let clickedStarIndex = 0;
            for (let i = 0; i < stars.length; i++) {
                var star = stars[i];
                star.classList.add("active");
                if (star === clickedStar) {
                    clickedStarIndex = i;

                    break;
                }
            }
            localStorage.setItem("rating-item", clickedStarIndex);
        });
    });
}

function restorePreviousValue(stars) {
    var savedValue = localStorage.getItem("rating-item");
    if (savedValue) {
        for (let i = 0; i <= savedValue; i++) {
            stars[i].classList.add("active");
        }
    }
}
function deleteRatingStorage(stars) {
    let buttonDelete = document.querySelector('.clear-rating');
    buttonDelete.addEventListener('click', () => {
        localStorage.removeItem('rating-item');
        stars.forEach(a => {
            a.classList.remove("active");
        });
    })
}
