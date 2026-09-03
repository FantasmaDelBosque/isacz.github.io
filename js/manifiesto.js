const manifesto = [
    `Es urgente construir nuevas narrativas!! para sostener mejor la vida y construir nuevos escenarios.`,
  
    `Estamos inmersos en estos entornos digitales en los cuales estamos cada vez más analizadas, cada vez más vulnerables, cada vez más insatisfechas y parece que estamos sometidos a la mercantilización y a la dataficación, y parece que vivir fuera de esto es imposible.`,
  
    `Me niego a depender de la aprobación de un algoritmo o de unos cuantos likes o de cuánto alcance puedo obtener para sentirme que soy suficiente.`,
  
    `Quiero vivir, disfrutar de la experiencia, pero no hablo de una experiencia preordenada, dirigida y diseñada para un perfil específico en el que se supone entro yo.`,
  
    `Me niego a seguir un camino que no es el que quiero andar. No puede ser que vendamos nuestros sueños para ganar unos cuantos pesos mientras grandes corporaciones extraen más y más los recursos que nos pertenecen a todes.`,
  
    `Defiendo las conexiones digitales en las cuales se puede conectar con personas afines, con la posibilidad de tejer red y facilitar la organización en colectivo.`,
  
    `Defiendo el uso de las nuevas herramientas que la época nos ofrece. Estoy convencida de que las herramientas no hacen al artista y tener miedo no es ninguna posibilidad.`,

    `Defiendo las tecnologías que nos permiten seguir expandiendo la realidad.  Cómo el textil, que muestra ventanas cuando los hilos atraviesan la tela, cada puntada forma una conexión, como la vida misma.`,

    `Es irónico porque mientras los hilos unen, también perforan, abren espacio  para que el camino exista.`,

    'O cómo las tecnologías computacionales/digitales que abren posibilidades, transforman prácticas  y rompen paradigmas.',

    `Lo que cambia es la época, la complejidad y el tipo de relación que establecemos con cada herramienta y la creatividad no surge de consumir más sino de conectar mejor.`,

    `Soy una errante  y me niego a definirme a través de un algoritmo.`,

    `Soy una exploradora y pongo las herramientas al servicio de mi imaginación.`,

    `Soy creadora, paso de la aguja al pixel, de la tela a la pantalla, de la exposición solar a la edición digital.`,

    'Uso el arte y las tecnologías para unir, transformar, registrar y reconstruir.',

    `Isa Cz`
  ];
  
  
  const typingElement = document.getElementById("typing");
  const cursor = document.getElementById("cursor");
  const videoLink = document.getElementById("videoLink");
  
  
  const impactWords = [
    document.getElementById("word1"),
    document.getElementById("word2"),
    document.getElementById("word3"),
    document.getElementById("word4")
  ];
  
  
  let paragraphIndex = 0;
  let characterIndex = 0;
  
  
  /* velocidad base */
  const speed = 28;
  
  
  /* pausa entre párrafos */
  const paragraphPause = 650;
  
  
  
  function typeManifesto() {
  
    if (paragraphIndex >= manifesto.length) {
  
      finishTyping();
      return;
  
    }
  
  
    const paragraph = manifesto[paragraphIndex];
  
  
    if (characterIndex < paragraph.length) {
  
      const character = paragraph.charAt(characterIndex);
  
      typingElement.textContent += character;
  
      characterIndex++;
  
  
      /*
        pequeñas variaciones de velocidad
        para que no parezca una máquina perfecta
      */
  
      let delay = speed + Math.random() * 22;
  
  
      /* pausa después de signos */
  
      if (
        character === "." ||
        character === "!" ||
        character === "?"
      ) {
        delay += 240;
      }
  
  
      if (character === ",") {
        delay += 80;
      }
  
  
      setTimeout(typeManifesto, delay);
  
    } else {
  
      /* terminamos un párrafo */
  
      typingElement.textContent += "\n\n";
  
  
      showImpactWord(paragraphIndex);
  
  
      paragraphIndex++;
      characterIndex = 0;
  
  
      setTimeout(typeManifesto, paragraphPause);
  
    }
  
  }
  
  
  
  /* mostrar palabras grandes
     conforme avanza el manifiesto */
  
  function showImpactWord(index) {
  
    const appearances = {
      0: 0, // narrativas
      2: 1, // algoritmo
      3: 2, // experiencia
      5: 3  // red
    };
  
  
    if (appearances[index] !== undefined) {
  
      impactWords[
        appearances[index]
      ].classList.add("visible");
  
    }
  
  }
  
  
  
  function finishTyping() {
  
    cursor.style.display = "none";
  
    videoLink.classList.add("visible");
  
  }
  
  
  
  /* accesibilidad:
     si alguien tiene reducidas las animaciones,
     mostramos todo inmediatamente */
  
  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  
  
  if (reduceMotion) {
  
    typingElement.textContent =
      manifesto.join("\n\n");
  
    cursor.style.display = "none";
  
    impactWords.forEach(word => {
      word.classList.add("visible");
    });
  
    videoLink.classList.add("visible");
  
  } else {
  
    /* pequeña pausa al entrar */
  
    setTimeout(typeManifesto, 900);
  
  }