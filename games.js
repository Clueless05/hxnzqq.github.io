document.addEventListener('DOMContentLoaded', () => {
    const components = document.querySelectorAll('.pc-component');

    components.forEach(component => {
        component.addEventListener('mouseenter', () => {
            component.classList.add('hovered');
        });

        component.addEventListener('mouseleave', () => {
            component.classList.remove('hovered');
        });
    });
});
