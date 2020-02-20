(function () {
    console.log('santity check', $);

    $.ajax({
        url: 'http://localhost:3001'
    }).done(function (data) {
        console.log(data);
        alert(data);
    });



    // fetch('http://localhost:8080/').then(response => {
    //     console.log(response);
    //     return response.json();
    // }).then(data => {
    //     console.log(data);
    // });

})();