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

        //display the remaining number of characters that a user can enter into their comment box
        $('.postText')
        .on('keyup', ({currentTarget}) => {
            const post = $(currentTarget).val().length,
            remaining = 140 - post

            $('.characters').html(remaining)

            //make the '.wordcount' message turn red if the user runs out of characters
            remaining <=0 && $('.wordcount').addClass('red') || $('.wordcount').removeClass('red')
        })
        .on('focus', () => {
            //This will cause the <textarea> to expect typed text as soon as the page loads
        })
    }
)