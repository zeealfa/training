function init() {
    document.addEventListener('deviceready', deviceready, true);
}

var db;

function deviceready(){
    db = window.openDatabase('sikad', '1.0.0', 'Sikad', 1000000);
    db.transaction(setup, errorHandler, dbReady);
}

function setup(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS t_config(ID_SIKAD INTEGER PRIMARY KEY AUTOINCREMENT, NOMORINDUK VARCHAR(25), LASTACCESS TIMESTAMP)');
}

function errorHandler(e)
{
    alert(e.message);
}
function dbReady()
{
    $('#menu-toggler').on('click',function() {
        alert('tes');
    })
}