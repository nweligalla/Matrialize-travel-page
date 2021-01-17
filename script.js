// sideNav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 500,
    interval: 3000,
});

// search autocomplete

const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "sigiriya": null,
        "anuradhapura": null,
        "dambulla": null,
        "colombo": null,
        "jaffna": null,
        "hikkaduwa": null,
        "ambuluwawa": null,
        "kalkuda": null,
    }
});

const matbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(matbox, {});


const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {});