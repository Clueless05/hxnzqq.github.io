/*   
 /$$                   /$$                        ©
| $$                  | $$                        
| $$$$$$$  /$$   /$$ /$$$$$$    /$$$$$$   /$$$$$$ 
| $$__  $$| $$  | $$|_  $$_/   /$$__  $$ /$$__  $$
| $$  \ $$| $$  | $$  | $$    | $$  \__/| $$  \ $$
| $$  | $$| $$  | $$  | $$ /$$| $$      | $$  | $$
| $$  | $$|  $$$$$$$  |  $$$$/| $$      |  $$$$$$/
|__/  |__/ \____  $$   \___/  |__/       \______/ 
           /$$  | $$                              
          |  $$$$$$/                              
           \______/                               
What are you doing here? Don't copy my work! Any attempt to make a copy is considered theft.*/
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
