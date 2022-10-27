const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");

  word.innerHTML = `${text} `;

  word.classList.add("card-subtitle-word");

  word.style.transitionDelay = `${index * 40}ms`; //Tid I mellom per Ord

  return word;
};

//Lager per ord I et <span> tag og setter opacitien til 1 når texten skal vises.


const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = (text) => text.split(" ").map(addWord);

createSubtitle("Heyooo I'm Odin and im just casually writing this about page for a school project that no one else will read probably not even the teacher will read this lmao. Well this is an about me soooo Im a 16 year old IM student at Gand VGS. I work at a convinience store every wednesday I primarily write in English which you have noticed. My wpm is way higher in English as its in the 90/100wpm but lower in Norwegian. ");
