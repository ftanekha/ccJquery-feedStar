$(document).ready(
    () => {
        //make a navigation menu appear when you hover over menu, 
        //and make it disappear when you navigate away from the navigation menu
        $('.menu').on('mouseover', () => $('.nav-menu').slideDown('slow'))
        //hide the .nav-menu element when a user’s mouse leaves the .nav-menu element
        $('.nav-menu').on('mouseleave', () => $('.nav-menu').slideUp('slow'))

        //add/remove the .btn-hover class to .btn elements when a user mouses over/ leaves a .btn element
        $('.btn')
        .on('mouseover', ({currentTarget}) => $(currentTarget).addClass('btn-hover'))
        .on('mouseleave', ({currentTarget}) => $(currentTarget).removeClass('btn-hover'))
    }
)