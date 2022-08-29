const btnResponsive =  document.querySelector('.responsive-sorter');
const btnJS =  document.querySelector('.js-sorter');
const buttons = document.querySelectorAll('.sorter-item a');
const projects = document.querySelectorAll('.project-item');

// to sort the projects
buttons.forEach(a => {
    a.addEventListener('click', b => {
        b.preventDefault();
        if (a.classList.contains('responsive-sorter')){
            for(let i = 0; i < projects.length; i++){
                projects[i].classList.remove('show');
                projects[i].classList.add('show');
            }
        }
        else if (a.classList.contains('js-sorter')){
            for(let i = 0; i < projects.length; i++){
                projects[i].classList.remove('show');
                if (projects[i].classList.contains('js')){
                    projects[i].classList.add('show');
                };
            };
        };

    });
});

// for sorter button = to make active indicator (background color etc)
const sorterButtons = document.querySelectorAll('.sorter-button');

sorterButtons.forEach (a => {
    a.addEventListener('click', b => {
        for (let i = 0; i < sorterButtons.length; i++) {
            sorterButtons[i].classList.remove('active');
        };
        a.classList.add('active');
        projectCounter();
    });
});


// for the number of project counter (inside () above sorter button)
const projectsNumberIndicator = document.querySelector('.sorter h2 span');
const projectItem = document.querySelectorAll('.project-item.show');

function projectCounter () {
    let projectNumber = null;
    for (let i = 0; i < projectItem.length; i++){
        if (projectItem[i].classList.contains('show')){
            projectNumber += 1;
        };
    };

    return projectsNumberIndicator.textContent = projectNumber;
};
projectCounter();