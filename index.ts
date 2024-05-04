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
