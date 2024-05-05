document.addEventListener("DOMContentLoaded", () => {
    // Use the event object if needed

    const fetchRandomSpell = async (): Promise<string> => {
      try {
        const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells/random');
        const randomSpell = await res.json();
        return randomSpell.spell;
      } catch (error) {
        console.error('Versuchs nochmal!:', error);
        return 'Versuchs nochmal!';
      }
    };
     const displayRandomSpell = async (): Promise<void> => {
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
