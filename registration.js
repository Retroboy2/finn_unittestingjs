var FINN = FINN || {};
FINN.registration = (function() {
        var formNode;
        var errors;

        function initForm(frm, errContainer) {
                formNode = frm;
                errors = errContainer;
                $(formNode).submit(function(evnt){
                        if($("#username").val() == "") {
                                $(errors).append("Username is required<br>");
                        } else {
                                $("#registration_form").hide();
                        }
                        return false;
                });
        };
        function formvalidation(form) {
        };
        return {
                validate: formvalidation,
                init: initForm
        };
})();
