document.addEventListener("DOMContentLoaded", () => {
   
    const fetchRandomSpell = async (): Promise<string> => {
      try {
        const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells/random'); //URL API Zaubersprüche
        const randomSpell = await res.json();
        return randomSpell.spell;
      } catch (error) {
        console.error('Versuchs nochmal!:', error);
        return 'Versuchs nochmal!';
      }
    };
  
    const displayRandomSpell = async (): Promise<void> => {// Abruf zufällig ausgewählte Zauberspruch
      const randomSpell = await fetchRandomSpell();
      const spellDisplay = document.getElementById('spell-display');
      if (spellDisplay) {
        spellDisplay.textContent = randomSpell;
      }
    };
  
    const fetchButton = document.getElementById('fetch-button');
    if (fetchButton) {
      fetchButton.addEventListener('click', displayRandomSpell);
    }
  //Funktion benötigt für die Flug Animation
    const vogel = document.querySelector('.vogel');
    let position = -100;
    const fliegen = (): void => {
      position += 5; // Postion plus 5 von Harry(vogel)
      if (vogel) {
      }
      if (position > window.innerWidth) {
        position = -100;
      }
      requestAnimationFrame(fliegen);
    };
    if (vogel) {
      fliegen();
    }
  });
