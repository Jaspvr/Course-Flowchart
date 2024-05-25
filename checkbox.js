document.addEventListener('DOMContentLoaded', (event) => {
    const component = document.getElementById('courseSelector');
    const checkboxes = component.querySelectorAll('input[type="checkbox"]');

    component.addEventListener('mouseenter', () => {
        component.classList.add('expanded');
    });

    component.addEventListener('mouseleave', () => {
        component.classList.remove('expanded');
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCourses = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.id);
            console.log('Checked courses:', checkedCourses);
            // need to add code to highlights
        });
    });
});