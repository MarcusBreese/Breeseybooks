<!-- hide script from old browsers

$.getJSON("http://localhost:3000/", function (catalogue) {
var data = catalogue;
        var html = '';
        $.each(data, function(index, data) {
            html+= '<tr>';
            html+= '<td>'+data.title+'</td>';
            html+= '<td>'+data.language+'</td>';
            html+= '<td>'+data.language+'</td>';
            html+= '<td>'+data.contributor1+' '+' '+data.contributor2+'</td>';
            html+= '<td>'+data.publisher.PublisherName+'</td>';
            html+= '<td>'+data.publicationDate+'</td>';
            html+= '</tr>';  });
    $('#products').html(html);  });




var $rows = $('#products tbody tr td');
$('#search').keyup(function() {

    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;

    $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
});

// end hiding script from old browsers -->
