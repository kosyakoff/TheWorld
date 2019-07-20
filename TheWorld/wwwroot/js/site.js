
(function () {

    //var ele = $("#username");
    //ele.text("Kosyakoff");

    //var main = $("#main");
    //main.on("mouseenter", function () {
    //    main.css("background-color", "#888");
    //});
    //main.on("mouseleave", function () {
    //    main.css("background-color", "");
    //});

    //$(".menu li a").on("click", function () {
    //    alert($(this).text());
    //    return false;
    //});

    var sideBarAndWrapper = $("#sidebar,#wrapper");

    $("#sidebarToggle").on("click", function () {
        sideBarAndWrapper.toggleClass("hide-sidebar");

        if (sideBarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show sidebar");
        }
        else {
            $(this).text("Hide sidebar");
        }

    });

})();

