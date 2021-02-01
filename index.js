// DOM Queries
let categorySubmit = document.querySelector(".product-category");
let productInfo = document.querySelector(".product-information");
let productButton = document.querySelector(".product-information-button");
let loading1 = document.querySelector(".loader1");
let loading2 = document.querySelector(".loader2");
let termsconditions = document.querySelector(".terms");
let files = document.querySelector(".fily");
let imageReceiveText = document.getElementById("imagesReceived");

// FileReaderJS.setupInput(document.getElementById('file-input', {
//     readAsDefault: "DataURL",
//     on: {
//       load: function(e, file) {
//         var img = new Image();
//         img.onload = function() {
//           document.body.appendChild(img);
//         };
//         img.src = e.target.result;
//       }
//     }
// }));

files.addEventListener("click", e => {
    console.log("hihi");
    delayForImages();
})

// Category "Save" Button
categorySubmit.addEventListener("click", e => {
    e.preventDefault();
    loading1.classList.remove("hidden");
    delayForInfo();
});

productButton.addEventListener("click", e => {
    e.preventDefault();
    loading2.classList.remove("hidden");
    delayForTerms();
})

const delay = ms => new Promise(res => setTimeout(res, ms));

const delayForImages = async () => {
    await delay(2000);
    imageReceiveText.classList.remove("hidden");
}

// delay
const delayForInfo = async () => {
    await delay(5000);
    productInfo.classList.remove("hidden");
    loading1.classList.add("hidden");
    console.log("Waited 5s");
  };

  const delayForTerms = async () => {
    await delay(3000);
    termsconditions.classList.remove("hidden");
    loading2.classList.add("hidden");
    console.log("Waited 5s");
  };