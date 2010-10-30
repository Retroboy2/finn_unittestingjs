var FINN = FINN || {};
FINN.registration = (function() {
        function formvalidation() {
		var form = $("#registration_form");
		var errors = $("#error_container");
		if($("#username").val() == "") {
                	$(errors).append("Username is required<br>");
                } else {
                        $("#registration_form").hide();
                }
                return false;
        };
        return {
                validate: formvalidation,
        };
})();
