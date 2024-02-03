exports.index = function (req, res) {
    res.render('index', {
        header: 'Главная',
        hdr: 'VUE Компонент'
    });
}