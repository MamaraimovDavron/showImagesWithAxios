// axios
//   .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
//   .then((response) => {
//     console.log(response.data.map((obj) => obj.url));
//   });

// axios
//   .post("https://jsonplaceholder.typicode.com/photos", {
//     albumId: 1,
//     title: "Toshkent City",
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// axios
//   .put("https://jsonplaceholder.typicode.com/photos/10", {
//     albumId: 1,
//     title: "Toshkent City",
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// axios
//   .delete("https://jsonplaceholder.typicode.com/photos/10")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const row = document.querySelector(".row");

const getPhotos = async (number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_limit=${number}`
  );

  console.log(response);
  return response.data;
};

const setPhotos = async (number) => {
  const photos = await getPhotos(number);
  //   console.log(photos);

  row.innerHTML = "";
  photos.map((photo) => {
    console.log(photo);
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 mb-4";
    col.innerHTML = `
        <div class="shadow rounded">
            <img
              src="${photo.thumbnailUrl}"
              class="w-100"
              alt=""
            />
          </div>
    `;
    row.appendChild(col);
  });
};

// setPhotos();

const showPhotos = () => {
  const number = +document.querySelector("input").value;
  console.log(number);

  setPhotos(number);
};
