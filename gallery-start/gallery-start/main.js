const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const picAltText = {
    'pic1.jpg': "2 cones and a blizzard",
    'pic2.jpg': "Cute dog",
    'pic3.jpg': "Cute cat",
    'pic4.jpg': "Winning a race",
    'pic5.jpg': "Bruno Mars and Justin Timberlake"
  }
/* Looping through images */
for (const pic of pics) {
    const newpictures = document.createElement('img');
    newpictures.src = `images/${pic}`;
    newpictures.alt = picAltText[pic];
    thumbBar.appendChild(newpictures);
    newpictures.addEventListener('click', newMain => {
        displayedImage.src = newMain.target.src;
        displayedImage.alt = newMain.target.alt;
      });
}


/* Wiring up the Darken/Lighten button */
    btn.addEventListener('click', () => {
        const lightness = btn.getAttribute('class');
        if (lightness == 'dark'){
            btn.setAttribute("class", 'light');
            btn.textContent = 'Lighten';
            overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        }
        else{
            btn.setAttribute("class", 'dark');
            btn.textContent = 'Darken';
            overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
        }
    });

    