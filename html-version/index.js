document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const button = e.target.closest('BUTTON');
        if (!button) return;

        const link = button.closest('a');

        if (link) {
            e.preventDefault();
            const sound = new Audio('./click.mp3');
            sound.volume = 0.5;
            sound.play().catch(e => console.error(e));
            setTimeout(() => {
                globalThis.location.href = link.href;
            }, 200);
        } else {
            const sound = new Audio('./click.mp3');
            sound.volume = 0.5;
            sound.play().catch(e => console.error(e));
        }
    });
});