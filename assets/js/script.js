const textToType1 = "Main Heading";
const textToType2 = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi labore blanditiis dolores voluptas aut eligendi exercitationem perferendis autem distinctio dolorum magni a quae, facilis excepturi debitis, corrupti suscipit odio. Recusandae temporibus nobis quod sunt distinctio! Temporibus architecto amet saepe nostrum ullam dolor nihil soluta magni natus modi nam quasi alias vero ipsa iusto ea, adipisci iure libero quae numquam, illum animi assumenda voluptas tempora. Numquam impedit voluptatum ipsam ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi labore blanditiis dolores voluptas aut eligendi exercitationem perferendis autem distinctio dolorum magni a quae, facilis excepturi debitis, corrupti suscipit odio. Recusandae temporibus nobis quod sunt distinctio! Temporibus architecto amet saepe nostrum ullam dolor nihil soluta magni natus modi nam quasi alias vero ipsa iusto ea, adipisci iure libero quae numquam, illum animi assumenda voluptas tempora. Numquam impedit voluptatum ipsam ducimus.";

const typedTextElement1 = document.getElementById('typed-text-1');
const typedTextElement2 = document.getElementById('typed-text-2');
const containerDiv = document.getElementById("content");
const resetBtn = document.getElementById("resetBtn");

  function restart(){
    function typeWriter(element, text, index, speed) {
      if (index < text.length) {
        element.innerHTML += text[index];
        index++;
        setTimeout(() => typeWriter(element, text, index, speed), speed);
      }
    }
  
    typeWriter(typedTextElement2, textToType2, 0, 5);
    setTimeout(() => {
      typeWriter(typedTextElement1, textToType1, 0, 50);
    }, 1000);
  }

  function restartTypeEffect() {
    typedTextElement1.innerHTML = "";
    typedTextElement2.innerHTML = "";
    restart();
  }
  
  resetBtn.addEventListener("click", restartTypeEffect);
  restart();

  function setTheme(theme) {
    document.documentElement.style.setProperty("--primary-color", theme);
    localStorage.setItem("movie-theme", theme);
  }
  setTheme(localStorage.getItem("movie-theme") || chathams_blue);
