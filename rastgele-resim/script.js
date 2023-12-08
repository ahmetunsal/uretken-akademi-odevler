

async function getImages() {
  const ACCESS_KEY = "MgyQMZ_rtl71Jp-dMlJpfR4C6NEzvCQJbUYzOAb_BVY"
  const url = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=21`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const imageGrid = document.getElementById('uretken-akademi');

    //console.log(data)

    data.forEach((photo, index) => {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image');

      const image = document.createElement('img');
      image.src = photo.urls.regular;
      image.alt = photo.alt_description;

      const like = document.createElement('div'); // like sistemi (yakinda)
      const overlay = document.createElement('div');
      like.classList.add("like") // like sistemi (yakinda)
      overlay.classList.add('overlay');
      overlay.textContent = photo.alt_description;

      imageContainer.appendChild(image);
      imageContainer.appendChild(overlay);
      imageGrid.appendChild(imageContainer);
    });
  } catch (error) {
    console.error(error);
  }
}


getImages();

