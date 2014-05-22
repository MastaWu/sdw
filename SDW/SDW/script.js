
//jQuery code

jQuery.noConflict();

(function ($) {

    $(function () {

        $(document).ready(function () {

            jQuery('#contact').click(function () {

                $('#contact-info').slideToggle('slow');

            });

        });

        $(document).ready(function () {

            jQuery('#resume').click(function () {

                $('#resume-info').slideToggle('slow');

            });

        });

        $(document).ready(function () {

            jQuery('#project').click(function () {

                $('#project-info').slideToggle('slow');

            });

        });

    });

})(jQuery);

//non-jQuery code

function test() {

    console.log(document);

}