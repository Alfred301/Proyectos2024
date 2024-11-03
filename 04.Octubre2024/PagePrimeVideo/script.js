
// Función para cargar el archivo JSON con las traducciones
async function fetchTranslations() {
  const response = await fetch("translation.json"); // Asegúrate de que el archivo JSON esté en la misma carpeta
  const data = await response.json();
  return data;
}

// Función para cambiar el idioma
async function changeLanguage(language) {
  const translations = await fetchTranslations();

  document.getElementById("nav__login__barTitle").textContent =
  translations[language]["nav__login__barTitle"];

  document.getElementById("nav__login__barIdenti").textContent =
    translations[language]["nav__login__barIdenti"];

  document.getElementById("sectionText1").textContent =
    translations[language]["sectionText1"];

    document.getElementById("sectionText2").textContent =
    translations[language]["sectionText2"];

    document.getElementById("sectionParrafo1").textContent =
    translations[language]["sectionParrafo1"];

    document.getElementById("UL1-styleOne-1").textContent =
    translations[language]["UL1-styleOne-1"];

    document.getElementById("section__font-UL2-1").textContent =
    translations[language]["section__font-UL2-1"];
    document.getElementById("section__font-UL2-2").textContent =
    translations[language]["section__font-UL2-2"];
    document.getElementById("section__font-UL2-3").textContent =
    translations[language]["section__font-UL2-3"];
    document.getElementById("section__font-UL2-4").textContent =
    translations[language]["section__font-UL2-4"];


    document.getElementById("section-btn1").textContent =
    translations[language]["section-btn1"];
    document.getElementById("section-btn2").textContent =
    translations[language]["section-btn2"];

    
    document.getElementById("section__part4Text1").textContent =
    translations[language]["section__part4Text1"];
    document.getElementById("sectionParrafo2").textContent =
    translations[language]["sectionParrafo2"];
  
  document.getElementById("selected-option").textContent=language.toUpperCase();
}

//Funcion para el pasado del cursor en idiomas
document.getElementById("selected-option").addEventListener("mouseover", () => {
  document.getElementById("nav__LLoption").classList.remove("hidden");
  document.getElementById("nav__LLoption").classList.add("static");
});

document.getElementById("selected-option").addEventListener("mouseout", () => {
  document.getElementById("nav__LLoption").classList.remove("static");
  document.getElementById("nav__LLoption").classList.add("hidden");
});

document.getElementById("nav__LLoption").addEventListener("mouseover", () => {
  document.getElementById("nav__LLoption").classList.remove("hidden");
  document.getElementById("nav__LLoption").classList.add("static");
});

document.getElementById("nav__LLoption").addEventListener("mouseout", () => {
  document.getElementById("nav__LLoption").classList.remove("static");
  document.getElementById("nav__LLoption").classList.add("hidden");
});


//Funcion para el pasado del cursor en login
document.getElementById("navLogin").addEventListener("mouseover", () => {
  document.getElementById("nav__loginbar").classList.remove("hidden");
  document.getElementById("nav__loginbar").classList.add("static");
});


document.getElementById("navLogin").addEventListener("mouseout", () => {
  document.getElementById("nav__loginbar").classList.remove("static");
  document.getElementById("nav__loginbar").classList.add("hidden");
});

document.getElementById("nav__loginbar").addEventListener("mouseover", () => {
  document.getElementById("nav__loginbar").classList.remove("hidden");
  document.getElementById("nav__loginbar").classList.add("static");
});

document.getElementById("nav__loginbar").addEventListener("mouseout", () => {
  document.getElementById("nav__loginbar").classList.remove("static");
  document.getElementById("nav__loginbar").classList.add("hidden");
});



window.addEventListener('scroll', function() {
  const navID = document.getElementById('navID');
  
  // Si el scroll es mayor a 50px, cambia la clase a transparente
  if (window.scrollY > 50) {
    navID.style.background = "rgba(20, 25, 32, 0.8)";
  } else {
    // Si se vuelve a la parte superior, quita la clase transparente
    navID.style.background = "rgb(20, 25, 32)";
  }
});

// ====================================================================
// Nav Inicial
function showSection(sectionId) {
  // Oculta todas las secciones
  var sections = document.querySelectorAll('.option__section');
  sections.forEach(function(section) {
      section.classList.remove('active');
  });
  
  // Muestra la sección seleccionada
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');

  // Valida en el option navbar cual esta activo
  var optionNavH = document.querySelectorAll('.option__navH');
  
  for(let i=0; i<optionNavH.length; i++){
    if(optionNavH[i].textContent === sectionId){
      optionNavH[i].classList.add('color-Blanco');
    }else{
    optionNavH[i].classList.remove('color-Blanco');
    }
  }
}

// Nav Explorar
function showExplorer1(sectionId) {
  var sections = document.querySelectorAll('.option__explorer');
  sections.forEach(function(section) {
      section.classList.remove('active__explorer');
  });
  
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active__explorer');





  //Asignar que uno muestra
  var sections2 = document.querySelectorAll('.option__explorerPlantilla');
  sections2.forEach(function(section) {
    section.classList.remove('active__explorerModerador');
  });

  if(sectionId === "Moradores"){    
    sections2[0].classList.add('active__explorerModerador');
  }
  
  if(sectionId === "Yermenses"){    
    sections2[8].classList.add('active__explorerModerador');
  }



  //Poner color de fondo
  var option__Explorer1H = document.querySelectorAll('.option__Explorer1H');
  for(let i=0; i<option__Explorer1H.length; i++){
    if(option__Explorer1H[i].textContent === sectionId){
      option__Explorer1H[i].classList.add('color-BlancoButton');
    }else{
      option__Explorer1H[i].classList.remove('color-BlancoButton');
    }
  }


}

// Nav Explorar Moderador
function showExplorerModerador(sectionId) {
  var sections = document.querySelectorAll('.option__explorerPlantilla');
  sections.forEach(function(section) {
      section.classList.remove('active__explorerModerador');
  });
  
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active__explorerModerador');
}






// ====================================================================


// Apartado Episodios
const toggles = document.querySelectorAll('.episodesBar');
toggles.forEach(toggle => {
  
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      toggle.style.borderBottomRightRadius ="inherit";
      toggle.style.borderBottomLeftRadius ="inherit";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      toggle.style.borderBottomRightRadius ="0px";
      toggle.style.borderBottomLeftRadius ="0px";
    }
  });
});

// Cambio de color del nav cuando bajamos con el scroll
window.addEventListener("scroll", () => {
  const elemento = document.querySelector(".option__nav");
  const stickyPosition = 50;

  // Obtén la posición del elemento en relación a la pantalla
  const position = elemento.getBoundingClientRect().top;

  if (position <= stickyPosition) {
    elemento.style.backgroundColor = "rgba(20, 25, 32, 0.95)"; // Color cuando alcanza la posición
  } else {
    elemento.style.backgroundColor = ""; // Vuelve al color inicial
  }
});
