// 1

// const textRef = document.querySelector(".text");
// const buttonRef = document.querySelector(".button");
// buttonRef.textContent = textRef.textContent;
// console.log(buttonRef);
// console.log(textRef);





// 2

// const titleRef = document.querySelector(".title");
// const imgRef = document.querySelector(".img");
// imgRef.src = "https://static.vecteezy.com/system/resources/thumbnails/024/173/699/small_2x/a-scene-in-which-the-entire-sky-is-reflected-in-the-water-ai-generative-photo.jpg";
// console.log(titleRef);
// console.log(imgRef);



// 3

// const linkRef = document.querySelector(".link");
// const photoRef = document.querySelector(".photo");
// linkRef.href = "https://www.instagram.com/";
// photoRef.alt = "photos";
// console.log(linkRef);
// console.log(photoRef);


// 4
// Створити розмітку зі списком елементів.За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
const listRef = document.querySelector(".list");
const firstItemRef = listRef.firstElementChild;

firstItemRef.textContent = "Hi";
console.log(listRef);