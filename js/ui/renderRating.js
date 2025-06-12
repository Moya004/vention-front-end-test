export function renderStars(rating) {
    const starsContainer = document.createElement("div")
    starsContainer.className = "star-rating"

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
        if (i <= rating) {
            star.classList.add("full")
        }else {
            star.classList.add("empty")
        }
        
        starsContainer.appendChild(star)
    }

    return starsContainer
}