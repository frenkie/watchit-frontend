var express = require('express');
var mongoose = require('mongoose');

var appIp = process.env.IP || '0.0.0.0';
var appPort = process.env.PORT || 9090;
var app = express();

var indexRoutes = require('./routes/index');
var videoRoutes = require('./routes/video');

/***************************************************
 * ROUTING
 */

app.set('views', './views');
app.set('view engine', 'jade');

app.use( indexRoutes );
app.use( videoRoutes );
app.use( '/static', express.static( __dirname +'/static' ) );

/***************************************************
 *
 */

mongoose.connect( process.env.MONGODB_URI, function ( error ) {

    if ( error ) {
        throw new Error( 'error connecting to database, we really need that one...' );
    } else {
        app.listen( appPort, appIp, function () {
            console.log( '%s: Watch It front end started on %s:%d ...',
                    Date( Date.now() ), appIp, appPort );
        } );
    }
});