document.addEventListener('DOMContentLoaded', (event) => {
    const component = document.getElementById('courseSelector');
    const checkboxes = component.querySelectorAll('input[type="checkbox"]');

    const electiveComponent = document.getElementById('electiveSelector');
    const electiveCheckboxes = electiveComponent.querySelectorAll('input[type="checkbox"]');

    component.addEventListener('mouseenter', () => {
        component.classList.add('expanded');
    });

    component.addEventListener('mouseleave', () => {
        component.classList.remove('expanded');
    });

    electiveComponent.addEventListener('mouseenter', () => {
        electiveComponent.classList.add('expanded');
    });

    electiveComponent.addEventListener('mouseleave', () => {
        electiveComponent.classList.remove('expanded');
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCourses = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.id);
            console.log('Checked courses:', checkedCourses);
            checkedCourses.push("Software Engineering")
            updateHighlighting(checkedCourses);
            updateElectives(checkedCourses);
        });
    });

    function updateElectives(checkedCourses) {
        const electiveConditions = {
            'Nat Sci Elec 1': ['MATH100/MATH109', 'MATH110'],
            'Nat Sci Elec 2': ['MATH100/MATH109', 'PHYS110'],
            'Nat Sci Elec 3': ['MATH101', 'PHYS110'],
            'Comp Studies Elec 1': ['CSC111', 'ENGR110'],
            'Comp Studies Elec 2': ['CSC111', 'ENGR120'],
            'Tech Elec 1': ['ECE255', 'CSC230'],
            'Tech Elec 2': ['ECE255', 'ECE260'],
            'Tech Elec 3': ['SENG265', 'STAT260'],
            'Tech Elec 4': ['SENG265', 'ECE260'],
            'Tech Elec 5': ['CSC230', 'ECE260']
        };

        electiveCheckboxes.forEach(checkbox => {
            const id = checkbox.id;
            const conditions = electiveConditions[id];
            if (conditions.every(course => checkedCourses.includes(course))) {
                checkbox.parentElement.classList.remove('disabled');
                checkbox.parentElement.classList.add('enabled');
                checkbox.disabled = false;
            } else {
                checkbox.parentElement.classList.remove('enabled');
                checkbox.parentElement.classList.add('disabled');
                checkbox.disabled = true;
            }
        });
    }

    function updateHighlighting(checkedCourses) {
        node.classed('selected', d => checkedCourses.includes(d.id));
        link.classed('highlighted', d => checkedCourses.includes(d.source.id) && checkedCourses.includes(d.target.id));
    }
});
