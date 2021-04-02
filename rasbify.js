$('#skinator_submit').on('click', function () {

    var url_string = $('#skinator_url').val();

    var rasbaColor = ['ff0000', '00ff00'];

    var url = new URL(url_string);

    for (var i = 1; i <= 5; ++i)
    {
        url.searchParams.set('color' + i, rasbaColor[Math.floor(Math.random() * 2)]);
    }

    window.open(url.href, '_blank').focus();
});

