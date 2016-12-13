$(function() {
    $.getJSON('questions/trueOrFalse.json', function(data) {
        var subjects = [];
        $.each(data, function(key, val) {
            subjects.push(
                "<li id='question_" + key + "'>" + val.question + "</li>"
            );
            $.each(val.choise, function(i, val) {
                subjects.push(
                    "<li id='choise_" + key + "_" + i + "'>" + val + "</li>"
                );
            });
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: subjects.join("")
        }).appendTo("body");
    });
});
