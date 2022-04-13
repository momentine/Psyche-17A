async function buttonLog(id, value, buttonPressed) {
    // alert(id)
    date = new Date()

    $.ajax({
        async: false,
        type: "POST",
        url: "saveData.php",
        data: { "name": id, "date": date },
        //dataType: "json",
        success: function(msg) {
            // alert("success")
            // alert(msg)
            window.location.href = value;

        },
        error: function(msg) {
            alert("error");
        },


    });


    url = 'http://192.168.0.32:8224/' + buttonPressed;
    console.log(url);
    fetch(url, { method: 'POST', mode: 'no-cors' })
        .then(data => console.log(data));

    return true;

}