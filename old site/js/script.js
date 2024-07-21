const typed = new Typed('.typing',{
    strings:['Mathematician','Graphic Designer','Backend Developer'],
    typeSpeed:50,
    backSpeed:100,
    loop:true
})


//ASIDE
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll('.section')
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a =  navList[i].querySelector('a');   
    a.addEventListener('click', function() {
        removeBacksection();
        for (let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector('a').classList.contains('active'))
            {
                addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');   
        showSection(this)
        if(window.innerWidth < 1200 )
        {
            asideSectionTogglerBtn()
        }
    });  
}
function removeBacksection()
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}
function addBackSection(num) {
    allSection[num].classList.add('back-section');
}
function showSection(element)
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1]
    document.querySelector('#' + target).classList.add('active')
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1]
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1])
        {
            navList[i].querySelector('a').classList.add('active')
        }
    }
}
document.querySelector('.hire-me').addEventListener('click', function() {
    const sectionIndex = this.getAttribute('data-section-index')
    showSection(this);
    updateNav(this);
    removeBacksection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside= document.querySelector('.aside');
    navTogglerBtn.addEventListener('click', () => {
        asideSectionTogglerBtn()
    });
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle('open')
        navTogglerBtn.classList.toggle('open')
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle('open')  
        }
    }

    const skillButtons = document.querySelectorAll('.skill-btn');

    // Add click event listener to each button
    skillButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target ID from the button's data attribute
            const targetId = button.getAttribute('data-target');
    
            // Hide all skill bars
            document.querySelectorAll('.skills').forEach(skill => {
                skill.style.display = 'none';
            });
    
            // Remove 'active' class from all buttons
            skillButtons.forEach(btn => {
                btn.classList.remove('active');
            });
    
            // Show the selected skill bar
            document.getElementById(targetId).style.display = 'block';
    
            // Add 'active' class to the clicked button
            button.classList.add('active');
        });
    });