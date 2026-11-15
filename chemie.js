document.addEventListener ("DOMContentLoaded", () => {

/*const speicherName = "kompletterSeitenStand";
const aktionsSpeicher = "letzteAktion";

// 1. Gespeicherten HTML-Zustand beim Laden wiederherstellen
const gespeichertesHTML = sessionStorage.getItem(speicherName);
if (gespeichertesHTML) {
  document.body.innerHTML = gespeichertesHTML;
}

// NEU: Eingaben von Nutzern direkt ins HTML übertragen, damit sie mitgespeichert werden
document.body.addEventListener("input", (event) => {
  const ziel = event.target;
  
  if (ziel.tagName === "INPUT") {
    if (ziel.type === "checkbox" || ziel.type === "radio") {
      // Für Checkboxen und Radio-Buttons
      if (ziel.checked) {
        ziel.setAttribute("checked", "checked");
      } else {
        ziel.removeAttribute("checked");
      }
    } else {
      // Für normale Text-, Zahlen- oder Passwortfelder
      ziel.setAttribute("value", ziel.value);
    }
  } else if (ziel.tagName === "TEXTAREA") {
    // Für mehrzeilige Textfelder
    ziel.innerHTML = ziel.value;
  }
});

// NEU: Auswahl bei Dropdown-Menüs (<select>) merken
document.body.addEventListener("change", (event) => {
  const ziel = event.target;
  if (ziel.tagName === "SELECT") {
    Array.from(ziel.options).forEach((option) => {
      if (option.selected) {
        option.setAttribute("selected", "selected");
      } else {
        option.removeAttribute("selected");
      }
    });
  }
});

// 2. Automatisch jede Änderung im Body überwachen und speichern
const waechter = new MutationObserver(() => {
  sessionStorage.setItem(speicherName, document.body.innerHTML);
});

waechter.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true
});

// 3. Hilfsfunktion: Merkt sich deine letzte Aktion
function aktionMerken(funktionsName, parameter = null) {
  const daten = { name: funktionsName, param: parameter };
  sessionStorage.setItem(aktionsSpeicher, JSON.stringify(daten));
}

// 4. Beim Laden prüfen: Gab es eine letzte Aktion? Wenn ja, nochmal ausführen!
window.addEventListener("load", () => {
  const gespeicherteAktion = sessionStorage.getItem(aktionsSpeicher);
  
  if (gespeicherteAktion) {
    const aktion = JSON.parse(gespeicherteAktion);
    if (typeof window[aktion.name] === "function") {
      setTimeout(() => {
        window[aktion.name](aktion.param);
      }, 50);
    }
  }
});*/

const startBtn = document.getElementById("start-btn");
const rulesBtn = document.getElementById("rules-btn");
const settingsBtn = document.getElementById("settings-btn");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const rulesScreen = document.getElementById("rules-screen");
const settingsScreen = document.getElementById("settings-screen");

const backBtn = document.querySelectorAll(".back-btn");

//const quadrat = document.getElementById("quadrat");
//const zielzone = document.getElementById("ziel-zone");

const roomWalls = document.getElementById("room-walls");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

const introScenes = document.getElementById("intro-scenes");
const naritivBtn = document.getElementById("naritiv-btn");

const storyBtn = document.getElementById("story-btn");
const roomContainer = document.getElementById("room-container")
const introContainer = document.getElementById("intro-container");

const westWallTwo = document.getElementById("west-wall-two");
const westWall = document.getElementById("west-wall");
const southWallTwo = document.getElementById("south-wall-two");
const southWall =  document.getElementById("south-wall");
const eastWall = document.getElementById("east-wall");
const eastWallTwo =  document.getElementById("east-wall-two");
const eastWallThree = document.getElementById("east-wall-three");



startBtn.addEventListener ("click", function(){
	startScreen.classList.add ("hidden");
	gameScreen.classList.remove ("hidden");
	speakerElementOne.textContent = storylineOne[currentLine].name;
        typeLineOne();
	
});

rulesBtn.addEventListener ("click", function(){
	startScreen.classList.add ("hidden");
	rulesScreen.classList.remove ("hidden");
});

settingsBtn.addEventListener ("click", function(){
	startScreen.classList.add ("hidden");
	settingsScreen.classList.remove ("hidden");
});


backBtn.forEach ((einButton) => {
	einButton.addEventListener ("click", function(){
		startScreen.classList.add ("hidden");
		gameScreen.classList.add("hidden");
		rulesScreen.classList.add("hidden");
		settingsScreen.classList.add("hidden");
		startScreen.classList.remove("hidden");
	})
})

/*let istAktiv=false;
let startX, startY;
let hatGewonnen = false;

quadrat.addEventListener("mousedown", (e) => {
	if (hatGewonnen) return;
	istAktiv=true;
	startX = e.clientX - quadrat.offsetLeft;
	startY = e.clientY - quadrat.offsetTop;
})

window.addEventListener("mousemove", (e) => {
	if (!istAktiv) return;

	let neueX = e.clientX - startX;
	let neueY = e.clientY - startY;
	

	quadrat.style.left = neueX + "px";
	quadrat.style.top = neueY + "px";

	pruefeZielzone();
})

window.addEventListener("mouseup", () => {
	istAktiv = false;
})

function pruefeZielzone() {
	const qBox = quadrat.getBoundingClientRect();
	const zBox = zielzone.getBoundingClientRect();
	const lerrraumX = (zBox.width - qBox.width) / 2;
	const lerrraumY = (zBox.height - qBox.height) / 2;
const beruehrtZiel = (
		qBox.right <= zBox.right &&
		qBox.left >= zBox.left &&
		qBox.bottom <= zBox.bottom &&
		qBox.top >= zBox.top
	);
	if (beruehrtZiel && !hatGewonnen){hatGewonnen=true; istAktiv=false;
		quadrat.style.left = zBox.left + lerrraumX + "px";
		quadrat.style.top = zBox.top + lerrraumY + "px";
	setTimeout(() => {
		alert("Geschaft");
	}, 50)
	}
}
*/
let currentWallIndex = 0;
const totalWalls = 4;

function updateRoomView(){const offset = currentWallIndex * -25;
	roomWalls.style.transform = `translateX(${offset}%)`;
}

rightBtn.addEventListener("click", () => {
	currentWallIndex = (currentWallIndex + 1) % totalWalls;
	updateRoomView();
});

leftBtn.addEventListener("click", () => {
	currentWallIndex = (currentWallIndex - 1 + totalWalls) % totalWalls;
	updateRoomView();
});

let isAnimating = false;

function turnRight() {if (isAnimating) return; isAnimating = true;}

roomWalls.style.transition = "transform 0.5s ease-in-out";
roomWalls.style.transform = "translateX(-25%)";
roomWalls.addEventListener("transitionend", function onRightEnd(){
	roomWalls.removeEventListener("transitionend", onRightEnd);
	const firstWall = roomWalls.firstElementChild;
	roomWalls.appendChild(firstWall);
	roomWalls.style.transition = "none";
	roomWalls.style.transform = "translateX(0%)";
	isAnimating = false;
});

function turnLeft() {if (isAnimating) return; isAnimating = true;}

const lastWall = roomWalls.lastElementChild;
roomWalls.prepend(lastWall);
roomWalls.style.transition = "none";
roomWalls.style.transform = "translateX(-25%)";
roomWalls.offsetHeight;

	roomWalls.style.transition = "transform 0.5s ease-in-out";
	roomWalls.style.transform = "translateX(0%)";
	roomWalls.addEventListener("transitionend", function onLeftEnd(){
	roomWalls.removeEventListener("transitionend", onLeftEnd);

	isAnimating = false;
});
 
let currentIntroIndex = 0;
const totalIntroScenes = 5;
let clickCount = 0;

function updateIntro(){const swipe = currentIntroIndex * -20;
    introScenes.style.transform = `translateX(${swipe}%)`;
}
/*
naritivBtn.addEventListener ("click", () => {
	clickCount++;
    /currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();/
	if(clickCount == 1){currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();}
	if(clickCount == 2){envelopeClosed.classList.remove("hidden-prop");}
	if(clickCount == 3){envelopeOpen.classList.remove("hidden-prop"); envelopeClosed.classList.add("hidden-prop");}
	if(clickCount == 4){envelopeOpen.classList.add("hidden-prop"); letter.classList.remove("hidden-prop");}
	if(clickCount == 5){letter.classList.add("hidden-prop"); currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();}
	if(clickCount == 6){currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();}
	if(clickCount == 7){currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();}
	if (clickCount === 7){
	naritivBtn.classList.add("btn-hidden");
	storyBtn.classList.remove("btn-hidden");
}
})


storyBtn.addEventListener ("click", () => {
	roomContainer.classList.remove("room-hidden");
	introContainer.classList.add("room-hidden");
})*/

const finalCode = document.getElementById("final-code");
const shelfA = document.getElementById("shelf-A");
const shelfB = document.getElementById("shelf-B");
const book = document.getElementById("book");
const dataSheet = document.getElementById("data-sheet");
const maze = document.getElementById("maze");
const solubility = document.getElementById("solubility");
const yesNo = document.getElementById("yes-no");
const isomere = document.getElementById("isomere");
const power = document.getElementById("power");
const computer = document.getElementById("computer");

const finalCodeWall = document.getElementById("final-code-wall");
const shelfAWall = document.getElementById("shelf-A-wall");
const shelfBWall = document.getElementById("shelf-B-wall");
const bookWall = document.getElementById("book-wall");
const dataSheetWall = document.getElementById("data-sheet-wall");
const mazeWall = document.getElementById("maze-wall");
const solubilityWall = document.getElementById("solubility-wall");
const yesNoWall = document.getElementById("yes-no-wall");
const isomereWall = document.getElementById("isomere-wall");
const powerWall = document.getElementById("power-wall");
const computerWall = document.getElementById("computer-wall");

const northDownBtn = document.getElementById("north-down-btn");
const eastDownBtn = document.getElementById("east-down-btn");
const southDownBtn = document.getElementById("south-down-btn");
const westDownBtn = document.getElementById("west-down-btn");

northDownBtn.addEventListener("click", () =>{
	finalCodeWall.classList.add("quiz-hidden");
	bookWall.classList.add("quiz-hidden");
	shelfAWall.classList.add("quiz-hidden");
	shelfBWall.classList.add("quiz-hidden");
	rightBtn.classList.remove("hide-side-btn");
	leftBtn.classList.remove("hide-side-btn");
	finalCode.classList.remove("hide-quiz-btn");
	shelfA.classList.remove("hide-quiz-btn");
	shelfB.classList.remove("hide-quiz-btn");
	book.classList.remove("hide-quiz-btn");
	northDownBtn.classList.add("hide-north-down-btn");
})

finalCode.addEventListener ("click", () => {
	finalCodeWall.classList.remove("quiz-hidden");
	northDownBtn.classList.remove("hide-north-down-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
	finalCode.classList.add("hide-quiz-btn");
	shelfA.classList.add("hide-quiz-btn");
	shelfB.classList.add("hide-quiz-btn");
	book.classList.add("hide-quiz-btn");
})

book.addEventListener ("click", () => {
	bookWall.classList.remove("quiz-hidden");
	northDownBtn.classList.remove("hide-north-down-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
	finalCode.classList.add("hide-quiz-btn");
	shelfA.classList.add("hide-quiz-btn");
	shelfB.classList.add("hide-quiz-btn");
	book.classList.add("hide-quiz-btn");
})

shelfA.addEventListener ("click", () => {
	shelfAWall.classList.remove("quiz-hidden");
	northDownBtn.classList.remove("hide-north-down-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
	finalCode.classList.add("hide-quiz-btn");
	shelfA.classList.add("hide-quiz-btn");
	shelfB.classList.add("hide-quiz-btn");
	book.classList.add("hide-quiz-btn");
})

shelfB.addEventListener ("click", () => {
	shelfBWall.classList.remove("quiz-hidden");
	northDownBtn.classList.remove("hide-north-down-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
	finalCode.classList.add("hide-quiz-btn");
	shelfA.classList.add("hide-quiz-btn");
	shelfB.classList.add("hide-quiz-btn");
	book.classList.add("hide-quiz-btn");
})

eastDownBtn.addEventListener("click", () => {
	dataSheetWall.classList.add("quiz-hidden");
	mazeWall.classList.add("quiz-hidden");
	solubilityWall.classList.add("quiz-hidden");
	rightBtn.classList.remove("hide-side-btn");
	leftBtn.classList.remove("hide-side-btn");
	dataSheet.classList.remove("hide-quiz-btn");
	maze.classList.remove("hide-quiz-btn");
	solubility.classList.remove("hide-quiz-btn");
	eastDownBtn.classList.add("hide-east-down-btn");
})

dataSheet.addEventListener("click", () => {
	eastDownBtn.classList.remove("hide-east-down-btn");
	dataSheetWall.classList.remove("quiz-hidden");
	dataSheet.classList.add("hide-quiz-btn");
	solubility.classList.add("hide-quiz-btn");
	maze.classList.add("hide-quiz-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
})

maze.addEventListener("click", () => {
	eastDownBtn.classList.remove("hide-east-down-btn");
	mazeWall.classList.remove("quiz-hidden");
	dataSheet.classList.add("hide-quiz-btn");
	solubility.classList.add("hide-quiz-btn");
	maze.classList.add("hide-quiz-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
})

solubility.addEventListener("click", () => {
	eastDownBtn.classList.remove("hide-east-down-btn");
	solubilityWall.classList.remove("quiz-hidden");
	dataSheet.classList.add("hide-quiz-btn");
	solubility.classList.add("hide-quiz-btn");
	maze.classList.add("hide-quiz-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
})

southDownBtn.addEventListener("click", () => {
	yesNoWall.classList.add("quiz-hidden");
	isomereWall.classList.add("quiz-hidden");
	rightBtn.classList.remove("hide-side-btn");
	leftBtn.classList.remove("hide-side-btn");
	yesNo.classList.remove("hide-quiz-btn");
	isomere.classList.remove("hide-quiz-btn");
	southDownBtn.classList.add("hide-south-down-btn");
})

yesNo.addEventListener("click", () => {
	southDownBtn.classList.remove("hide-south-down-btn");
	yesNoWall.classList.remove("quiz-hidden");
	yesNo.classList.add("hide-quiz-btn");
	isomere.classList.add("hide-quiz-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
})

isomere.addEventListener("click", () => {
	southDownBtn.classList.remove("hide-south-down-btn");
	isomereWall.classList.remove("quiz-hidden");
	yesNo.classList.add("hide-quiz-btn");
	isomere.classList.add("hide-quiz-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
})

westDownBtn.addEventListener("click", () => {
	powerWall.classList.add("quiz-hidden");
	computerWall.classList.add("quiz-hidden");
	rightBtn.classList.remove("hide-side-btn");
	leftBtn.classList.remove("hide-side-btn");
	power.classList.remove("hide-quiz-btn");
	computer.classList.remove("hide-quiz-btn");
	westDownBtn.classList.add("hide-west-down-btn");
})

power.addEventListener("click", () => {
	westDownBtn.classList.remove("hide-west-down-btn");
	powerWall.classList.remove("quiz-hidden");
	power.classList.add("hide-quiz-btn");
	computer.classList.add("hide-quiz-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
})

computer.addEventListener("click", () => {
	westDownBtn.classList.remove("hide-west-down-btn");
	computerWall.classList.remove("quiz-hidden");
	power.classList.add("hide-quiz-btn");
	computer.classList.add("hide-quiz-btn");
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
})



const textElementOne = document.getElementById("dialogue-text-one");
const textElementTwo = document.getElementById("dialogue-text-two");
const textElementThree = document.getElementById("dialogue-text-three");
const textElementFour = document.getElementById("dialogue-text-four");
const textElementFive = document.getElementById("dialogue-text-five");
const textElementSix = document.getElementById("dialogue-text-six");
const speakerElementOne = document.getElementById("speaker-one");
const speakerElementTwo = document.getElementById("speaker-two");
const speakerElementThree = document.getElementById("speaker-three");
const speakerElementFour = document.getElementById("speaker-four");
const speakerElementFive = document.getElementById("speaker-five");
const speakerElementSix = document.getElementById("speaker-six");
const dialogeScreenOne = document.getElementById("dialoge-screen-one");
const dialogeScreenTwo = document.getElementById("dialoge-screen-two");
const dialogeScreenThree = document.getElementById("dialoge-screen-three");
const dialogeScreenFour = document.getElementById("dialoge-screen-four");
const dialogeScreenFive = document.getElementById("dialoge-screen-five");
const dialogeScreenSix = document.getElementById("dialoge-screen-six");

const storylineOne = [
        { name: "Erzähler", text: "Man sagt ja immer:Aller Anfang ist schwer! Aber als Chemistudent hast du das Konzept von schwer auf ein völlig neues Level gehoben. Eigentlich gäbe es in diesem Studium so unglaublich viel zu lernen. Periodensysteme, Stöchiometrie, die Tatsache, dass man an Unbekanntem lieber NICHT riecht (siehe Vorfall Chantal).... theoretisch." },
        { name: "Erzähler", text: "Praktisch sieht deine akademische Laufbahn allerdings so aus, dass dein Gehirn beim Wort Molekül automatisch auf Bildschirmschoner-Modus schaltet. Hast du aus deinen bisherigen Fehlern gelernt? Aus den geschmolzenen Reagenzgläsern? Aus dem Vorfall im Erstsemester-Praktikum, als du versehentlich die Augenbrauen deines Sitznachbarn weggesprengt hast?" },
        { name: "Erzähler", text: "Absolut nicht! Dein Motto lautet weiterhin: Wird schon schiefgehen. Und das tut es meistens auch. Umso sehr überrascht es dich was du in deinem Zimmer im Studentenheim findest." },
    ];

    let currentLine = 0;
    let index = 0;
    let isTyping = false;
    let typingTimer = null;
    const speed = 15; 

  
    function typeLineOne() {
        const currentStoryDataOne = storylineOne[currentLine];
        
        if (index < currentStoryDataOne.text.length) {
            isTyping = true;
            textElementOne.textContent += currentStoryDataOne.text.charAt(index);
            index++;
            typingTimer = setTimeout(typeLineOne, speed);} 
			else {
				isTyping = false;
         }
    }


    function handleNextOne() {
        
        if (isTyping) {
            clearTimeout(typingTimer);
            textElementOne.textContent = storylineOne[currentLine].text;
            isTyping = false;
            index = storylineOne[currentLine].text.length;}
        else {
            currentLine++;
            if (currentLine < storylineOne.length) {
                textElementOne.textContent = "";
                index = 0;
                speakerElementOne.textContent = storylineOne[currentLine].name;
                typeLineOne();} 
				else {
					currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();
					currentLine = 0;
					index = 0;
					isTyping = false;
					typingTimer = null;
					speakerElementTwo.textContent = storylineTwo[currentLine].name;
        typeLineTwo();
            }
        }
    }

    dialogeScreenOne.addEventListener("click", handleNextOne);



const storylineTwo = [
        { name: "Sie", text: "Boah... Ich hasse organische Chemie. Ich hasse anorganische Chemie. Ich hasse eigentlich alles was mit Atomen zu tun hat. Warum bin ich nicht einfach Influencer geworden?!" },
        { name: "Erzähler", text: "In diesem Moment des puren, existenziellen Schmerzes fällt dein Blick auf den Boden direkt vor der Zimmertür. Dort liegt ein analoges Artefakt aus einer längst vergessenen Zeit: Ein Brief. Ganz recht, echtes Papier. Ohne Touch-Funktion." },
        { name: "Erzähler", text: "Dein Name ist in einer Handschrift, die verdächtig nach einem viktorianischen Serienmörder aussieht, hinterlegt. Du hast keine Ahnung, wie der da hinkommt (vermutlich hat ihn jemand unter der Tür durchgeschoben, während du kurz um dein Leben geweint hast), geschweige denn wer ihn gesendet hat." },
			{ name: "Sie", text: "Wer schreibt heutzutage denn noch Briefe?" },
			{ name: "Erzähler", text: "Du reißt den Umschlag auf - mit der Eleganz eines hungrigen Waschbären - und überfliegst die Zeilen: Wir haben Ihre einzigartigen Talente beobachtet und laden Sie hiermit zu einem extra exklusiven Praktikum ein." },
			{ name: "Sie", text: "Beobachtet? Talente? Welche? Kaffee kochen und Fristen verpeilen? Ich habe mich doch nirgends beworben... Und von diesem Ort habe ich noch nie im Leben gehört..." },
			{ name: "Erzähler", text: "Klingt es eher nach geheimen Koordinaten für ein Schurkenversteck?" },
			{ name: "Erzähler", text: "Absolut. Aber hey, beschwer dich nicht! Ein Praktikum kann dir sicher nicht schaden. Besonders mit deinem aktuellen Notenspiegel mit dem du nicht mal als professioneller Daumendrücker eine Chance hättest." },
    ];

currentLine = 0;
index = 0;
isTyping = false;
typingTimer = null;

    function typeLineTwo() {
        const currentStoryDataTwo = storylineTwo[currentLine];
        
        if (index < currentStoryDataTwo.text.length) {
            isTyping = true;
            textElementTwo.textContent += currentStoryDataTwo.text.charAt(index);
            index++;
            typingTimer = setTimeout(typeLineTwo, speed);} 
			else {
            isTyping = false;
        }
    }


    function handleNextTwo() {
        
        if (isTyping) {
            clearTimeout(typingTimer);
            textElementTwo.textContent = storylineTwo[currentLine].text;
            isTyping = false;
            index = storylineTwo[currentLine].text.length;}
        else {
            currentLine++;

            if (currentLine < storylineTwo.length) {
                textElementTwo.textContent = "";
                index = 0;
                speakerElementTwo.textContent = storylineTwo[currentLine].name;
                typeLineTwo();} 
				else {
					currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();
					currentLine = 0;
					index = 0;
					isTyping = false;
					typingTimer = null;
					speakerElementThree.textContent = storylineThree[currentLine].name;
        typeLineThree();					
            }
        }
    }

    dialogeScreenTwo.addEventListener("click", handleNextTwo);



const storylineThree = [
        { name: "Erzähler", text: "Du gehst. Und gehst. Und gehst noch mehr..." },
        { name: "Erzähler", text: "Kannst du mal schneller gehen?! Hättest du nicht ein Taxi nehmen können? Ich habe auch noch was zu tun!" },
    ];

currentLine = 0;
index = 0;
isTyping = false;
typingTimer = null;

    function typeLineThree() {
        const currentStoryDataThree = storylineThree[currentLine];
        
        if (index < currentStoryDataThree.text.length) {
            isTyping = true;
            textElementThree.textContent += currentStoryDataThree.text.charAt(index);
            index++;
            typingTimer = setTimeout(typeLineThree, speed);} 
			else {
            isTyping = false;
        }
    }


    function handleNextThree() {
        
        if (isTyping) {
            clearTimeout(typingTimer);
            textElementThree.textContent = storylineThree[currentLine].text;
            isTyping = false;
            index = storylineThree[currentLine].text.length;}
        else {
            currentLine++;

            if (currentLine < storylineThree.length) {
                textElementThree.textContent = "";
                index = 0;
                speakerElementThree.textContent = storylineThree[currentLine].name;
                typeLineThree();} 
				else {
					currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();
					currentLine = 0;
					index = 0;
					isTyping = false;
					typingTimer = null;
					speakerElementFour.textContent = storylineFour[currentLine].name;
        typeLineFour();					
            }
        }
    }

    dialogeScreenThree.addEventListener("click", handleNextThree);


const storylineFour = [
        { name: "Erzähler", text: "So! Endlich angekommen! Was für ein wunderschöner Ort! Wenn man auf postapokalyptische Geisterstädte steht, in denen selbst die Ratten das Weite suchen." },
        { name: "Erzähler", text: "Die Ortschaft ist so unfassbar verlassen, dass dir eigentlich sofort sämtliche Alarmglocken schrillen müssten. Jede normale Person würde jetzt panisch den Rückwärtsgang einlegen. Aber DU? Neeeiiinn." },
			{ name: "Erzähler", text: "Eine....Person? In voller Montur - inklusive einer kompletten, blickdichten Gesichtsmaske - begrüßt dich. Garnicht creepy. Ein absolut alltäglicher Anblick!" },
			{ name: "Sie", text: "Äh.... Hallo? Ich bin wegen des Praktikums hier... Nette Maske?" },
			{ name: "Erzähler", text: "Er sagt gar nichts.... Nein wirklich. Kein Wort! Vielleicht solltest du umkehren...." },
			{ name: "Sie", text: "Ach, der war bestimmt nur gerade mitten in einem super wichtigen, hochkomplizierten Experiment! Ganz normale Arbeitssicherheit. Kein Grund zur Sorge." },
			{ name: "Erzähler", text: "... Wie du willst. Die mysteriöse Person dreht sich wortlos um und führt dich in das Gebäude." },
    ];

currentLine = 0;
index = 0;
isTyping = false;
typingTimer = null;

    function typeLineFour() {
        const currentStoryDataFour = storylineFour[currentLine];
        
        if (index < currentStoryDataFour.text.length) {
            isTyping = true;
            textElementFour.textContent += currentStoryDataFour.text.charAt(index);
            index++;
            typingTimer = setTimeout(typeLineFour, speed);} 
			else {
            isTyping = false;
        }
    }


    function handleNextFour() {
        
        if (isTyping) {
            clearTimeout(typingTimer);
            textElementFour.textContent = storylineFour[currentLine].text;
            isTyping = false;
            index = storylineFour[currentLine].text.length;}
        else {
            currentLine++;

            if (currentLine < storylineFour.length) {
                textElementFour.textContent = "";
                index = 0;
                speakerElementFour.textContent = storylineFour[currentLine].name;
                typeLineFour();} 
				else {
					currentIntroIndex = (currentIntroIndex + 1) % totalIntroScenes;
    updateIntro();
					currentLine = 0;
					index = 0;
					isTyping = false;
					typingTimer = null;
					speakerElementFive.textContent = storylineFive[currentLine].name;
        typeLineFive();	
            }
        }
    }

    dialogeScreenFour.addEventListener("click", handleNextFour);



const storylineFive = [
        { name: "Erzähler", text: "Flackernde Lichter, sterile Wände, ein riesiger Behälter der eine unbekannte Gestalt hält." },
        { name: "Erzähler", text: "Alles ganz normal!" },
    ];

currentLine = 0;
index = 0;
isTyping = false;
typingTimer = null;

    function typeLineFive() {
        const currentStoryDataFive = storylineFive[currentLine];
        
        if (index < currentStoryDataFive.text.length) {
            isTyping = true;
            textElementFive.textContent += currentStoryDataFive.text.charAt(index);
            index++;
            typingTimer = setTimeout(typeLineFive, speed);} 
			else {
            isTyping = false;
        }
    }


    function handleNextFive() {
        
        if (isTyping) {
            clearTimeout(typingTimer);
            textElementFive.textContent = storylineFive[currentLine].text;
            isTyping = false;
            index = storylineFive[currentLine].text.length;}
        else {
            currentLine++;

            if (currentLine < storylineFive.length) {
                textElementFive.textContent = "";
                index = 0;
                speakerElementFive.textContent = storylineFive[currentLine].name;
                typeLineFive();} 
				else {
					roomContainer.classList.remove("room-hidden");
					introContainer.classList.add("room-hidden");
					currentLine = 0;
					index = 0;
					isTyping = false;
					typingTimer = null;
					speakerElementSix.textContent = storylineSix[currentLine].name;
        typeLineSix();
	rightBtn.classList.add("hide-side-btn");
	leftBtn.classList.add("hide-side-btn");
	finalCode.classList.add("hide-quiz-btn");
	shelfA.classList.add("hide-quiz-btn");
	shelfB.classList.add("hide-quiz-btn");
	book.classList.add("hide-quiz-btn");
            }
        }
    }

    dialogeScreenFive.addEventListener("click", handleNextFive);



const storylineSix = [
        { name: "Erzähler", text: "Die Person führt dich in einen seltsamen Raum. Du schaust dich um und dann-" },
			{ name: "Erzähler", text: "KLICK und du wurdest eingesperrt" },
			{ name: "Sie", text: "Hey! Lassen Sie mich sofort raus!" },
			{ name: "Erzähler", text: "Wow... was für eine Überraschung. Herzlichen Glückwunsch, du Genie! Du bist offiziell gefangen. Das Praktikum hat nicht einmal angefangen und deine Überlebenschancen sind bereits drastisch gesunken! Hätte man sich auch nicht denken können. Nein. Gar nicht." },
			{ name: "Erzähler", text: "Sparen wir uns das Geschrei. Die Situation ist denkbar einfach: Nutze dein (hoffentlich vorhandenes) Chemie Wissen, kombiniere die Elemente im Raum, knacke die Codes und finde den Weg hier raus. Dein Schicksal liegt jetzt in deiner Hand." },
			{ name: "Erzähler", text: "Oh. Was ich jetzt mache? Mach dir keine Sorgen dafür! Du schaffst das schon. Viel Glück! :)" },
    ];

currentLine = 0;
index = 0;
isTyping = false;
typingTimer = null;

    function typeLineSix() {
        const currentStoryDataSix = storylineSix[currentLine];
        
        if (index < currentStoryDataSix.text.length) {
            isTyping = true;
            textElementSix.textContent += currentStoryDataSix.text.charAt(index);
            index++;
            typingTimer = setTimeout(typeLineSix, speed);} 
			else {
            isTyping = false;
        }
    }


    function handleNextSix() {
        
        if (isTyping) {
            clearTimeout(typingTimer);
            textElementSix.textContent = storylineSix[currentLine].text;
            isTyping = false;
            index = storylineSix[currentLine].text.length;}
        else {
            currentLine++;

            if (currentLine < storylineSix.length) {
                textElementSix.textContent = "";
                index = 0;
                speakerElementSix.textContent = storylineSix[currentLine].name;
                typeLineSix();} 
				else {
						dialogeScreenSix.classList.add("hide-dialoge");
							rightBtn.classList.remove("hide-side-btn");
	leftBtn.classList.remove("hide-side-btn");
	finalCode.classList.remove("hide-quiz-btn");
	shelfA.classList.remove("hide-quiz-btn");
	shelfB.classList.remove("hide-quiz-btn");
	book.classList.remove("hide-quiz-btn");
            }
        }
    }

    dialogeScreenSix.addEventListener("click", handleNextSix);




const levers = document.querySelectorAll('.vertical-lever');
const powerSignal = document.getElementById('power-signal');
const POWERCODE = [2, 0, 0, 5];
let powerOn = false;
const computerOn = document.getElementById("computer-on");
const computerOff = document.getElementById("computer-off");


levers.forEach(lever => {
	lever.addEventListener('change', (e) => {
    	const closestWholeNumber = Math.round(parseFloat(e.target.value));
    	e.target.value = closestWholeNumber;
    	checkPuzzle();
  })
})


function checkPuzzle() {
	const currentPositions = Array.from(levers).map(l => parseInt(l.value));
	const matchesSolution = currentPositions.every((value, index) => value === POWERCODE[index]);

	if (matchesSolution) {
		powerSignal.textContent = "POWER ON";
		powerOn = true;
		if (powerOn){
			computerOn.classList.remove("hide-open-quiz");
			computerOff.classList.add("hide-open-quiz");
			westWall.classList.add("hidden");
			westWallTwo.classList.remove("hidden");}
		else {
			computerOn.classList.add("hide-open-quiz");
			computerOff.classList.remove("hide-open-quiz");
			westWall.classList.remove("hidden");
			westWallTwo.classList.add("hidden");}
	}
	else {
    	powerSignal.textContent = "POWER OFF";
        computerOn.classList.add("hide-open-quiz");
        computerOff.classList.remove("hide-open-quiz");
        westWall.classList.remove("hidden");
        westWallTwo.classList.add("hidden");
    }	
}

const molekülStart = document.getElementById ("molekül-quiz-start");
const startMolekülBtn = document.getElementById ("start-molekül-btn");
const molekülQuiz = document.getElementById ("molekül-quiz");
const molekülOne = document.getElementById ("molekül-one");
const mNameOne = document.getElementById ("mname-one");
const mSubmitOne = document.getElementById ("msubmit-one");
const molekülTwo = document.getElementById ("molekül-two");
const mNameTwo = document.getElementById ("mname-two");
const mSubmitTwo = document.getElementById ("msubmit-two");
const molekülThree = document.getElementById ("molekül-three");
const mNameThree = document.getElementById ("mname-three");
const mSubmitThree = document.getElementById ("msubmit-three");
const mprogressOne = document.getElementById ("mprogress-one");
const mprogressTwo = document.getElementById ("mprogress-two");
const mprogressThree = document.getElementById ("mprogress-three");
const mEnd = document.getElementById("m-end");

const guyCabinClosed = document.getElementById ("guy-cabin-closed");
const guyCabinOpen = document.getElementById ("guy-cabin-open");


startMolekülBtn.addEventListener("click", () => {
	molekülStart.classList.add("molekül-quiz-hidden");
	molekülQuiz.classList.remove("molekül-quiz-hidden");
})

mSubmitOne.addEventListener("click", () => {
	if(mNameOne.value == "4-Ethyl-2,2,5-trimethylheptan"){
		molekülOne.classList.add("molekül-hidden");
		mNameOne.classList.add("minput-hidden");
		mSubmitOne.classList.add("msubmit-hidden");
		mprogressOne.classList.add("hide-mprogress");
		molekülTwo.classList.remove("molekül-hidden");
		mNameTwo.classList.remove("minput-hidden");
		mSubmitTwo.classList.remove("msubmit-hidden");
		mprogressTwo.classList.remove("hide-mprogress");
	}
	else{
		mNameOne.value = "";
	}
})

mSubmitTwo.addEventListener("click", () => {
	if(mNameTwo.value == "1,2-Dichlorhexa-1,4-dien"){
		molekülTwo.classList.add("molekül-hidden");
		mNameTwo.classList.add("minput-hidden");
		mSubmitTwo.classList.add("msubmit-hidden");
		mprogressTwo.classList.add("hide-mprogress");
		molekülThree.classList.remove("molekül-hidden");
		mNameThree.classList.remove("minput-hidden");
		mSubmitThree.classList.remove("msubmit-hidden");
		mprogressThree.classList.remove("hide-mprogress");
	}
	else{
		molekülOne.classList.remove("molekül-hidden");
		mNameOne.classList.remove("minput-hidden");
		mSubmitOne.classList.remove("msubmit-hidden");
		mprogressOne.classList.remove("hide-mprogress");
		molekülTwo.classList.add("molekül-hidden");
		mNameTwo.classList.add("minput-hidden");
		mSubmitTwo.classList.add("msubmit-hidden");
		mprogressTwo.classList.add("hide-mprogress");
		mNameOne.value = "";
		mNameTwo.value = "";
	}
})

mSubmitThree.addEventListener("click", () => {
	if(mNameThree.value == "5-Ethyl-3,6-dimethylheptan-2,4-diol"){
		molekülThree.classList.add("molekül-hidden");
		mNameThree.classList.add("minput-hidden");
		mSubmitThree.classList.add("msubmit-hidden");
		mprogressThree.classList.add("hide-mprogress");
        mEnd.classList.remove("hidden");
		guyCabinClosed.classList.add("hide-open-quiz");
		guyCabinOpen.classList.remove("hide-open-quiz");
		southWall.classList.add("hidden");
		southWallTwo.classList.remove("hidden");
	}
	else{
		molekülOne.classList.remove("molekül-hidden");
		mNameOne.classList.remove("minput-hidden");
		mSubmitOne.classList.remove("msubmit-hidden");
		mprogressOne.classList.remove("hide-mprogress");
		molekülThree.classList.add("molekül-hidden");
		mNameThree.classList.add("minput-hidden");
		mSubmitThree.classList.add("msubmit-hidden");
		mprogressThree.classList.add("hide-mprogress");
		mNameOne.value = "";
		mNameTwo.value = "";
		mNameThree.value = "";
	}
})

const gcBtnYesOne = document.getElementById("gc-button-yes-one");
const gcBtnNoOne = document.getElementById("gc-button-no-one");
const gcBtnYesTwo = document.getElementById("gc-button-yes-two");
const gcBtnNoTwo = document.getElementById("gc-button-no-two");
const gcBtnYesThree = document.getElementById("gc-button-yes-three");
const gcBtnNoThree = document.getElementById("gc-button-no-three");
const gcBtnYesFour = document.getElementById("gc-button-yes-four");
const gcBtnNoFour = document.getElementById("gc-button-no-four");
const gcBtnYesFive = document.getElementById("gc-button-yes-five");
const gcBtnNoFive = document.getElementById("gc-button-no-five");
const gcQuestionOne = document.getElementById("gc-question-one");
const gcQuestionTwo = document.getElementById("gc-question-two");
const gcQuestionThree = document.getElementById("gc-question-three");
const gcQuestionFour = document.getElementById("gc-question-four");
const gcQuestionFive = document.getElementById("gc-question-five");
const Subject11A = document.getElementById("Subject-11-A");

const mazeOpen = document.getElementById("maze-open");
const mazeClosed = document.getElementById("maze-closed");


gcBtnNoOne.addEventListener("click", () => {
	gcQuestionOne.classList.add("hide-gc-questions");
	gcQuestionTwo.classList.remove("hide-gc-questions");
})

gcBtnYesTwo.addEventListener("click", () => {
	gcQuestionTwo.classList.add("hide-gc-questions");
	gcQuestionThree.classList.remove("hide-gc-questions");
})
gcBtnNoTwo.addEventListener("click", () => {
	gcQuestionTwo.classList.add("hide-gc-questions");
	gcQuestionOne.classList.remove("hide-gc-questions");
})

gcBtnYesThree.addEventListener("click", () => {
	gcQuestionThree.classList.add("hide-gc-questions");
	gcQuestionFour.classList.remove("hide-gc-questions");
})
gcBtnNoThree.addEventListener("click", () => {
	gcQuestionThree.classList.add("hide-gc-questions");
	gcQuestionOne.classList.remove("hide-gc-questions");
})

gcBtnNoFour.addEventListener("click", () => {
	gcQuestionFour.classList.add("hide-gc-questions");
	gcQuestionFive.classList.remove("hide-gc-questions");
})
gcBtnYesFour.addEventListener("click", () => {
	gcQuestionFour.classList.add("hide-gc-questions");
	gcQuestionOne.classList.remove("hide-gc-questions");
})

gcBtnYesFive.addEventListener("click", () => {
	gcQuestionFive.classList.add("hide-gc-questions");
    Subject11A.classList.remove("hidden");
	mazeClosed.classList.add("hide-open-quiz");
	mazeOpen.classList.remove("hide-open-quiz");
	eastWall.classList.add("hidden");
	eastWallTwo.classList.remove("hidden");
})
gcBtnNoFive.addEventListener("click", () => {
	gcQuestionFive.classList.add("hide-gc-questions");
    gcQuestionOne.classList.remove("hide-gc-questions");
})

const mazeGuy = document.getElementById("maze-guy");

const mazeOne = document.getElementById("maze-one");
const mazeTwo = document.getElementById("maze-two");
const mazeThree = document.getElementById("maze-three");
const mazeFour = document.getElementById("maze-four");
const mazeFive = document.getElementById("maze-five");
const mazeSix = document.getElementById("maze-six");
const mazeSeven = document.getElementById("maze-seven");
const mazeEight = document.getElementById("maze-eight");
const mazeNine = document.getElementById("maze-nine");
const mazeTen = document.getElementById("maze-ten");

const mazeOneOne = document.getElementById("maze-one-one");
const mazeOneTwo = document.getElementById("maze-one-two");
const mazeOneThree = document.getElementById("maze-one-three");
const mazeOneFour = document.getElementById("maze-one-four");

const mazeTwoOne = document.getElementById("maze-two-one");
const mazeTwoTwo = document.getElementById("maze-two-two");
const mazeTwoThree = document.getElementById("maze-two-three");
const mazeTwoFour = document.getElementById("maze-two-four");

const mazeThreeOne = document.getElementById("maze-three-one");
const mazeThreeTwo = document.getElementById("maze-three-two");
const mazeThreeThree = document.getElementById("maze-three-three");
const mazeThreeFour = document.getElementById("maze-three-four");

const mazeFourOne = document.getElementById("maze-four-one");
const mazeFourTwo = document.getElementById("maze-four-two");
const mazeFourThree = document.getElementById("maze-four-three");
const mazeFourFour = document.getElementById("maze-four-four");

const mazeFiveOne = document.getElementById("maze-five-one");
const mazeFiveTwo = document.getElementById("maze-five-two");
const mazeFiveThree = document.getElementById("maze-five-three");
const mazeFiveFour = document.getElementById("maze-five-four");

const mazeSixOne = document.getElementById("maze-six-one");
const mazeSixTwo = document.getElementById("maze-six-two");
const mazeSixThree = document.getElementById("maze-six-three");
const mazeSixFour = document.getElementById("maze-six-four");

const mazeSevenOne = document.getElementById("maze-seven-one");
const mazeSevenTwo = document.getElementById("maze-seven-two");
const mazeSevenThree = document.getElementById("maze-seven-three");
const mazeSevenFour = document.getElementById("maze-seven-four");

const mazeEightOne = document.getElementById("maze-eight-one");
const mazeEightTwo = document.getElementById("maze-eight-two");
const mazeEightThree = document.getElementById("maze-eight-three");
const mazeEightFour = document.getElementById("maze-eight-four");

const mazeNineOne = document.getElementById("maze-nine-one");
const mazeNineTwo = document.getElementById("maze-nine-two");
const mazeNineThree = document.getElementById("maze-nine-three");
const mazeNineFour = document.getElementById("maze-nine-four");

const mazeTenOne = document.getElementById("maze-ten-one");
const mazeTenTwo = document.getElementById("maze-ten-two");
const mazeTenThree = document.getElementById("maze-ten-three");
const mazeTenFour = document.getElementById("maze-ten-four");

const wallOpen = document.getElementById("wall-open");
const wallClosed = document.getElementById("wall-closed");

let gesamtX = 0;
let gesamtY = 0;

mazeOneThree.addEventListener("click", function() {
    gesamtY += -390;
    mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

    mazeGuy.addEventListener("transitionend", function(){
        gesamtX += -750;
        mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

        mazeGuy.addEventListener("transitionend", function(){
            gesamtY += -650;
            mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

            mazeGuy.addEventListener("transitionend", function(){
                gesamtX += 1150;
                mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

                mazeGuy.addEventListener("transitionend", function(){
                    gesamtY += -620;
                    mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;
                }, {once:true})
            }, {once:true})
        }, {once:true})
    }, {once:true})

    mazeOne.classList.add("hidden");
    setTimeout(() => {
        mazeTwo.classList.remove("hidden");
    }, 3000)
})


mazeTwoTwo.addEventListener("click", function() {
    gesamtX += 380;
    mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

    mazeGuy.addEventListener("transitionend", function(){
        gesamtY += -290;
        mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

        mazeGuy.addEventListener("transitionend", function(){
            gesamtX += -760;
            mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;
            
            mazeGuy.addEventListener("transitionend", function(){
                gesamtY += 300;
                mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;
            }, {once:true})
        }, {once:true})
    }, {once:true})

    mazeTwo.classList.add("hidden");
    setTimeout(() => {
        mazeThree.classList.remove("hidden");
    }, 2000)
})

mazeTwoOne.addEventListener("click", () => {
    mazeTwo.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeTwoThree.addEventListener("click", () => {
    mazeTwo.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeTwoFour.addEventListener("click", () => {
    mazeTwo.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})

mazeThreeThree.addEventListener("click", function() {
    gesamtX += -450;
    mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

    mazeGuy.addEventListener("transitionend", function(){
        gesamtY += -900;
        mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

        mazeGuy.addEventListener("transitionend", function(){
            gesamtX += 780;
            mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

            mazeGuy.addEventListener("transitionend", function(){
                gesamtY += 330;
                mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

                mazeGuy.addEventListener("transitionend", function(){
                    gesamtX += 780;
                    mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;
                }, {once:true})
            }, {once:true})
        }, {once:true})
    }, {once:true})

    
    mazeThree.classList.add("hidden");
    setTimeout(() => {
        mazeFour.classList.remove("hidden");
    }, 3000)
})

mazeThreeOne.addEventListener("click", () => {
    mazeThree.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeThreeTwo.addEventListener("click", () => {
    mazeThree.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeThreeFour.addEventListener("click", () => {
    mazeThree.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})

mazeFourOne.addEventListener("click", function() {
    gesamtY += -600;
    mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

    mazeGuy.addEventListener("transitionend", function(){
        gesamtX += 420;
        mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

        mazeGuy.addEventListener("transitionend", function(){
        gesamtY += -300;
            mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

            mazeGuy.addEventListener("transitionend", function(){
                gesamtX += -790;
                mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

                mazeGuy.addEventListener("transitionend", function(){
                    gesamtY += 270;
                    mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

                    mazeGuy.addEventListener("transitionend", function(){
                        gesamtX += -370;
                        mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

                        mazeGuy.addEventListener("transitionend", function(){
                            gesamtY += -270;
                            mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

                            mazeGuy.addEventListener("transitionend", function(){
                                gesamtX += -380;
                                mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;
                            }, {once:true})
                        }, {once:true})
                    }, {once:true})
                }, {once:true})
            }, {once:true})
        }, {once:true})
    }, {once:true})

    mazeFour.classList.add("hidden");
    setTimeout(() => {
        mazeFive.classList.remove("hidden");
    }, 4000)
})

mazeFourTwo.addEventListener("click", () => {
    mazeFour.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeFourThree.addEventListener("click", () => {
    mazeFour.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeFourFour.addEventListener("click", () => {
    mazeFour.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})

mazeFiveTwo.addEventListener("click", function() {
    gesamtY += -300;
    mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

    mazeGuy.addEventListener("transitionend", function(){
        gesamtX += 710;
        mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

        mazeGuy.addEventListener("transitionend", function(){
            gesamtY += -560;
            mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;

            mazeGuy.addEventListener("transitionend", function(){
                gesamtX += -2550;
                mazeGuy.style.transform = `translateX(${gesamtX}%) translateY(${gesamtY}%)`;

                mazeGuy.addEventListener("transitionend", function(){
                    gesamtY += -400;
                    mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;
                }, {once:true})
            }, {once:true})
        }, {once:true})
    }, {once:true})

    mazeFive.classList.add("hidden");
	eastWallTwo.classList.add("hidden");
	eastWallThree.classList.remove("hidden");
	wallClosed.classList.add("hide-open-quiz");
	wallOpen.classList.remove("hide-open-quiz");
})
mazeFiveOne.addEventListener("click", () => {
    mazeFour.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeFiveThree.addEventListener("click", () => {
    mazeFour.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})
mazeFiveFour.addEventListener("click", () => {
    mazeFour.classList.add("hidden");
    mazeOne.classList.remove("hidden");
    mazeGuy.style.transform = "translate(0px, 0px)";
    mazeGuy.style.left = "60%";
    mazeGuy.style.top = "68%";
    gesamtX = 0;
    gesamtY = 0;
})


/*mazeSixFour.addEventListener("click", function() {
    

    

    mazeSix.classList.add("hidden");
    setTimeout(() => {
        mazeSeven.classList.remove("hidden");
    }, 1000)
})

mazeSevenFour.addEventListener("click", function() {
    

    

    mazeSeven.classList.add("hidden");
    setTimeout(() => {
        mazeEight.classList.remove("hidden");
    }, 1000)
})

mazeEightTwo.addEventListener("click", function() {
    

    

    mazeEight.classList.add("hidden");
    setTimeout(() => {
        mazeNine.classList.remove("hidden");
    }, 3500)
})

mazeNineOne.addEventListener("click", function() {
    

    

    mazeNine.classList.add("hidden");
    setTimeout(() => {
        mazeTen.classList.remove("hidden");
    }, 1000)
})

mazeTenThree.addEventListener("click", function() {
    

    mazeGuy.addEventListener("transitionend", function(){
        gesamtY += -400;
        mazeGuy.style.transform =`translateX(${gesamtX}%) translateY(${gesamtY}%)`;
    }, {once:true})

    
})
*/

const quadrate = document.querySelectorAll(".quadrat");
const zielzonen = document.querySelectorAll(".ziel-zone");
const mols = document.querySelectorAll(".mols");
const wallContainer = document.querySelectorAll(".wall-container");
const cabinClosed = document.getElementById("cabin-closed");
const cabinOpen = document.getElementById("cabin-open");

const isomeres = document.querySelectorAll(".isomeres");
const isomereFive = document.getElementById("isomere-five");
const siedetemperaturen = document.querySelectorAll(".siedetemperatur");

const shelfBClosed = document.getElementById("shelf-B-closed");
const shelfBOpen = document.getElementById("shelf-B-open");

let istAktiv = false; 
let startX, startY; 
let aktivesQuadrat = null; 


function startDrag(e) {
    const quadrat = e.currentTarget;
    if (quadrat.classList.contains("geloest")) return;
    
    istAktiv = true;
    aktivesQuadrat = quadrat;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    startX = clientX - quadrat.offsetLeft; 
    startY = clientY - quadrat.offsetTop; 
}

function drag(e) {
    if (!istAktiv || !aktivesQuadrat) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    let neueX = clientX - startX; 
    let neueY = clientY - startY; 
    
    aktivesQuadrat.style.left = neueX + "px"; 
    aktivesQuadrat.style.top = neueY + "px"; 
    
    pruefeZielzonen(aktivesQuadrat); 
}

function stopDrag() {
    istAktiv = false; 
    aktivesQuadrat = null; 
}

quadrate.forEach(quadrat => {
    quadrat.addEventListener("mousedown", startDrag);
    quadrat.addEventListener("touchstart", startDrag, { passive: false });
});

window.addEventListener("mousemove", drag);
window.addEventListener("mouseup", stopDrag);

window.addEventListener("touchmove", (e) => {
    if (istAktiv) e.preventDefault(); 
    drag(e);
}, { passive: false });

window.addEventListener("touchend", stopDrag);


function pruefeZielzonen(quadrat) { 
    const qBox = quadrat.getBoundingClientRect(); 

    zielzonen.forEach((zielzone) => {
        const zBox = zielzone.getBoundingClientRect(); 
        
        const beruehrtZiel = ( 
            qBox.right <= zBox.right && 
            qBox.left >= zBox.left && 
            qBox.bottom <= zBox.bottom && 
            qBox.top >= zBox.top 
        ); 
        
        if (beruehrtZiel) {
            const aktuelleX = parseFloat(quadrat.style.left) || 0;
            const aktuelleY = parseFloat(quadrat.style.top) || 0;
            const lerrraumX = (zBox.width - qBox.width) / 2;
            const lerrraumY = (zBox.height - qBox.height) / 2;
            
            quadrat.style.left = (aktuelleX + (zBox.left - qBox.left) + lerrraumX) + "px"; 
            quadrat.style.top = (aktuelleY + (zBox.top - qBox.top) + lerrraumY) + "px"; 
            
            quadrat.setAttribute("data-in", zielzone.getAttribute("data-match"));
            
            const wallDone = Array.from(mols).every(m => m.getAttribute("data-match") == m.getAttribute("data-in"));
            if(wallDone){
                cabinClosed.classList.add("hide-open-quiz");
                cabinOpen.classList.remove("hide-open-quiz");
                quadrat.setAttribute("data-in", quadrat.getAttribute("data-match"));
                mols.forEach((mol) => {
                    mol.style.borderColor = "green";
                });
            }
            const cabinDone = Array.from(isomeres).every(i => i.getAttribute("data-match") == i.getAttribute("data-in"));
            if(cabinDone){
                isomereFive.textContent = "4220"
                quadrat.setAttribute("data-in", quadrat.getAttribute("data-match"));
                isomeres.forEach((iso) => {
                    iso.style.borderColor = "green";
                });
            }
            const shelfDone = Array.from(siedetemperaturen).every(s => s.getAttribute("data-match") == s.getAttribute("data-in"));
            if(shelfDone){
                shelfBClosed.classList.add("hide-open-quiz");
                shelfBOpen.classList.remove("hide-open-quiz");
                quadrat.setAttribute("data-in", quadrat.getAttribute("data-match"));
                siedetemperaturen.forEach((sied)=>{
                    sied.style.borderColor = "green";
                });
            }      
            
        } 
    });
}

const isoInfoBtn = document.getElementById("iso-info-btn");
const isoInfo = document.getElementById("iso-info");
const isoBackBtn = document.getElementById("iso-back-btn");

isoInfoBtn.addEventListener("click", () => {
    isoInfo.classList.remove("hidden");
    isoBackBtn.classList.remove("hidden");
})

isoBackBtn.addEventListener("click", () => {
    isoBackBtn.classList.add("hidden");
    isoInfo.classList.add("hidden");
})

const glasOneBtn = document.getElementById("glas-one-btn");
const glasTwoBtn = document.getElementById("glas-two-btn");
const glasThreeBtn = document.getElementById("glas-three-btn");
const glasBwBtn = document.getElementById("glas-bw-btn");
const sBackBtn = document.getElementById("s-back-btn");
const glasInfoOne = document.getElementById("glas-info-one");
const glasInfoTwo = document.getElementById("glas-info-two");
const glasInfoThree = document.getElementById("glas-info-three");
const glasInfoBw = document.getElementById("glas-info-bw");

glasOneBtn.addEventListener("click", () => {
    glasInfoOne.classList.remove("hidden");
    sBackBtn.classList.remove("hidden");
})

glasTwoBtn.addEventListener("click", () => {
    glasInfoTwo.classList.remove("hidden");
    sBackBtn.classList.remove("hidden");
})

glasThreeBtn.addEventListener("click", () => {
    glasInfoThree.classList.remove("hidden");
    sBackBtn.classList.remove("hidden");
})

glasBwBtn.addEventListener("click", () => {
    glasInfoBw.classList.remove("hidden");
    sBackBtn.classList.remove("hidden");
})

sBackBtn.addEventListener("click", () => {
    sBackBtn.classList.add("hidden");
    glasInfoOne.classList.add("hidden");
    glasInfoTwo.classList.add("hidden");
    glasInfoThree.classList.add("hidden");
    glasInfoBw.classList.add("hidden");
})


const shelfBtnOne = document.getElementById("btn-1-shelf");
const shelfBtnTwo = document.getElementById("btn-2-shelf");
const shelfBtnThree = document.getElementById("btn-3-shelf");
const shelfBtnFour = document.getElementById("btn-4-shelf");
const shelfBtnFive = document.getElementById("btn-5-shelf");
const shelfBtnSix = document.getElementById("btn-6-shelf");
const shelfBtnSeven = document.getElementById("btn-7-shelf");
const shelfBtnEight = document.getElementById("btn-8-shelf");
const shelfBtnNine = document.getElementById("btn-9-shelf");
const shelfBtnZero = document.getElementById("btn-0-shelf");
const shelfBtnYes = document.getElementById("btn-check-shelf");
const shelfBtnNo = document.getElementById("btn-X-shelf");
const shelfDisplayScreen = document.getElementById("display-screen-shelf");

const shelfAClosed = document.getElementById("shelf-A-closed");
const shelfAOpen = document.getElementById("shelf-A-open");

shelfBtnOne.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "1";
})

shelfBtnTwo.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "2";
})

shelfBtnThree.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "3";
})

shelfBtnFour.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "4";
})

shelfBtnFive.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "5";
})

shelfBtnSix.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "6";
})

shelfBtnSeven.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "7";
})

shelfBtnEight.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "8";
})

shelfBtnNine.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "9";
})

shelfBtnZero.addEventListener("click", () => {
    shelfDisplayScreen.textContent += "0";
})

shelfBtnNo.addEventListener("click", () => {
    shelfDisplayScreen.textContent = "";
})

shelfBtnYes.addEventListener("click", () => {
    if(shelfDisplayScreen.textContent == "4220"){
        shelfAClosed.classList.add("hide-open-quiz");
        shelfAOpen.classList.remove("hide-open-quiz");
    }
})

const rgOneOne = document.getElementById("rg-one-one");
const rgOneTwo = document.getElementById("rg-one-two");
const rgOneThree = document.getElementById("rg-one-three");
const rgOneFour = document.getElementById("rg-one-four");

const rgTwoOne = document.getElementById("rg-two-one");
const rgTwoTwo = document.getElementById("rg-two-two");
const rgTwoThree = document.getElementById("rg-two-three");

const rgThreeOne = document.getElementById("rg-three-one");
const rgThreeTwo = document.getElementById("rg-three-two");
const rgThreeThree = document.getElementById("rg-three-three");
const rgThreeFour = document.getElementById("rg-three-four");

const rgProgressOne = document.getElementById("rg-progress-one");
const rgProgressTwo = document.getElementById("rg-progress-two");
const rgProgressThree = document.getElementById("rg-progress-three");

const rgSubmitOne = document.getElementById("rg-submit-one");
const rgSubmitTwo = document.getElementById("rg-submit-two");
const rgSubmitThree = document.getElementById("rg-submit-three");


let rgProgress = 0;

rgSubmitOne.addEventListener("click", () => {
    const checkshelfOne = rgOneOne.value == "-" && rgOneTwo.value == "11" && rgOneThree.value == "7" && rgOneFour.value  == "8";
    if (checkshelfOne){rgProgressOne.style.backgroundColor = "green";
        rgProgress++;
    }
    if(rgProgress == 3){
    rgOneFour.style.color = "red";
    rgTwoThree.style.color = "red";
    rgThreeTwo.style.color = "red";
}
})


rgSubmitTwo.addEventListener("click", () => {
    const checkshelfTwo = rgTwoOne.value == "-" && rgTwoTwo.value == "2" && rgTwoThree.value == "2";
    if (checkshelfTwo){rgProgressTwo.style.backgroundColor = "green";
        rgProgress++;
    }
    if(rgProgress == 3){
    rgOneFour.style.color = "red";
    rgTwoThree.style.color = "red";
    rgThreeTwo.style.color = "red";
}
})

rgSubmitThree.addEventListener("click", () => {
    const checkshelfThree = rgThreeOne.value == "2" && rgThreeTwo.value == "25" && rgThreeThree.value == "16" && rgThreeFour.value == "16";
    if (checkshelfThree){rgProgressThree.style.backgroundColor = "green";
        rgProgress++;
    }
    if(rgProgress == 3){
    rgOneFour.style.color = "red";
    rgTwoThree.style.color = "red";
    rgThreeTwo.style.color = "red";
}
})

const rgInfoBtn = document.getElementById("rg-info-btn");
const rgInfo = document.getElementById("rg-info");
const rgBackBtn = document.getElementById("rg-back-btn");

rgInfoBtn.addEventListener("click", () => {
    rgInfo.classList.remove("hidden");
    rgBackBtn.classList.remove("hidden");
})

rgBackBtn.addEventListener("click", () => {
    rgBackBtn.classList.add("hidden");
    rgInfo.classList.add("hidden");
})



const fcDisplayScreen = document.getElementById("display-screen-fc");
const fcBtnOne = document.getElementById("btn-1-fc");
const fcBtnTwo = document.getElementById("btn-2-fc");
const fcBtnThree = document.getElementById("btn-3-fc");
const fcBtnFour = document.getElementById("btn-4-fc");
const fcBtnFive = document.getElementById("btn-5-fc");
const fcBtnSix = document.getElementById("btn-6-fc");
const fcBtnSeven = document.getElementById("btn-7-fc");
const fcBtnEight = document.getElementById("btn-8-fc");
const fcBtnNine = document.getElementById("btn-9-fc");
const fcBtnZero = document.getElementById("btn-0-fc");
const fcBtnYes = document.getElementById("btn-check-fc");
const fcBtnNo = document.getElementById("btn-X-fc");
const endScene = document.getElementById("end-scene");

fcBtnOne.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "1";
})

fcBtnTwo.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "2";
})

fcBtnThree.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "3";
})

fcBtnFour.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "4";
})

fcBtnFive.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "5";
})

fcBtnSix.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "6";
})

fcBtnSeven.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "7";
})

fcBtnEight.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "8";
})

fcBtnNine.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "9";
})

fcBtnZero.addEventListener("click", () =>{
    fcDisplayScreen.textContent += "0";
})

fcBtnNo.addEventListener("click", () =>{
    fcDisplayScreen.textContent = "";
})

fcBtnYes.addEventListener("click", () =>{
    if (fcDisplayScreen.textContent == "8225"){
        roomContainer.classList.add("hidden");
        endScene.classList.remove("hidden");
        console.log("hi");
    }
})

})