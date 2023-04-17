let emoji = document.querySelector(".container");
let eyes = document.querySelector(".span");
let mouth = document.querySelector(".mouth");
console.log(document);
isActive = false;
emoji.addEventListener("click", () => {
    if (isActive === false) {
        isActive = true;
        eyes.classList.add("span1");
        console.log("e work")
        emoji.style.transform='rotate(360deg)'
        emoji.style.transition='1s ease'
        emoji.style.transform='translateY(100px)'
        mouth.style.borderRadius="50%"
        mouth.style.background="black"
      }else{
          isActive=false
          emoji.style.transform='translateY(100)'
          console.log("eno work")
          eyes.classList.remove("span1")
          emoji.style.transform='rotate(0)'
          mouth.style.borderRadius="20%"
          mouth.style.background="transparent"
}

});
