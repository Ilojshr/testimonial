const testimonials = [{
    name1 : "~Iloj",
    imgsrc : "sliderimage.jpeg",
    quote : "I had a great time with this company, I am very honored to work here."
},
{
    name1 : "~Gitanjali",
    imgsrc : "gitanjali.png",                 //defining an array with difference ojects and their properties
    quote : "I had a great time with this company, I am very honored to work here."
},
{
    name1 : "~Giloj",
    imgsrc : "giloj1.png",
    quote : "I had a great time with this company, I am very honored to work here."
},
// {
//     name1 : "notfound",
//     imgsrc : "noimage",
//     quote : "notestimonial"
// }
]

const imgiloj = document.querySelector("img");
const paragraph = document.querySelector(".para");                   //selecting elements from html and assigning them to a vaiable
const sign = document.querySelector(".signature");

let startIndex = 0;             //defining a variable which denotes the index's starting point


testslide(); //calling the function

function testslide(){
    const {name1, imgsrc, quote} = testimonials[startIndex];     //destructuring the object
    imgiloj.src = imgsrc;      // declaring the source of the image from the object
    paragraph.innerText = quote;   // declaring the para content
    sign.innerText = name1;     // declaring the signature content
    startIndex++;  // appending the array
    if (startIndex === testimonials.length) {
        startIndex = 0;         // this conditions states that if the start index variable reaches the full length of the array then the index will be set to 0
      }
      setTimeout(() => {
        testslide();
      }, 5000);         // setting the timer of the testslide function
}




