
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}


$(".item-service").slice(0, 3).show(); //showing 3 div

$("#load").on("click", function (e) {
    e.preventDefault();
    $(".item-service:hidden").slice(0, 3).slideDown(); //showing 3 hidden div on click

    if ($(".item-service:hidden").length == 0) {
        $("#load").addClass("_nobg"); //this will hide
        //button when length is 0
    }
});

let prices = document.querySelectorAll('.top-item__content')

$(".top-item__content").slice(0, 3).show(); //s

$("#load2").on("click", function (e) {
    $("#load2").addClass('_active')
    e.preventDefault();
    $(".top-item__content:hidden").slice(0, prices.length + 1).slideDown(); //showing 3 hidden div on click

    if ($(".top-item__content:hidden").length == 0) {
        $("#load2").addClass("_nobg"); //this will hide
        $("#load-less").addClass("_active"); //this will hide
    }
});

// let load-less = document


const iconMenu = document.querySelector('.menu__icon')
const menuClose = document.querySelector('.menu__close')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {

    iconMenu.addEventListener('click', function (e) {
        menuBody.classList.add('_active')
    })
    menuClose.addEventListener('click', function (e) {
        menuBody.classList.remove('_active')
    })
}

// const menuLinks = document.querySelectorAll('.menu__link')
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLinks => {
//         menuLinks.addEventListener("click", onMenuLinkClick)
//     })
// }
// function onMenuLinkClick() {
//     if (iconMenu.classList.contains("_active")) {
//         console.log('123')
//     }
// }

const menuLinks = document.querySelectorAll('.menu__link')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", function () {
            iconMenu.classList.remove("_active")
            menuBody.classList.remove("_active")
        })
    })
}
function onMenuLinkClick() {
    if (iconMenu.classList.contains("_active")) {
        iconMenu.classList.remove("_active")
        menuBody.classList.remove("_active")
    }
}


var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

var checkBox = document.getElementById("form__item_checkbox");

// Get the output text
var form__button = document.getElementById("form__button");

// If the checkbox is checked, display the output text
checkBox.addEventListener('change', function (e) {
    if (checkBox.checked == true) {
        form__button.classList.add('checked');
        form__button.disabled = false;
    } else {
        form__button.classList.remove('checked');
        form__button.disabled = true;

    }
})

$(".top-item__content").slice(0, 3).show();

let overlay = document.querySelector('#overlay')

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add("_sending");
            let response = await fetch("https://prepcenter.us/form/forms.php", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                overlay.classList.add('_active')
                form.classList.remove("_sending");
                form.reset();
                form.classList.remove("_sending");


            } else {
                alert('Error')
                form.classList.remove("_sending");

            }
        } else {
            alert("Please enter the required information or fill necessary type");
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll("._req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }


});

let thank__button = document.querySelector('.item-thank__button')
thank__button, addEventListener('click', function (e) {
    overlay.classList.remove('_active')
})