// Leaflet Junk
L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6Im5EaldBcVUifQ.MTeXi8ZLmYhMBxnZ0nBG3A';
var map = L.mapbox.map('map', 'laurenancona.lgh0leco')
    .setView([38.9, -77.0], 15)
    .addControl(L.mapbox.geocoderControl('mapbox.places', {
        autocomplete: true
    }))
L.control.locate().addTo(map);
var hash = L.hash(map);

// Sharing Methods
var share = new Share('.sharing', {
    url: 'http://blueprintmap.org', // the url you'd like to share. [Default: `window.location.href`]
    title: 'Blueprinted', // title to be shared alongside your link [Default: See below in defaults section]
    description: 'a cyanotype-inspired map style', // text to be shared alongside your link, [Default: See below in defaults section]
    image: 'https://raw.githubusercontent.com/laurenancona/blueprinted/master/images/thumb.png', // image to be shared [Default: See below in defaults section]
    ui: {
        flyout: 'top right', // change the flyout direction of the shares. chose from `top left`, `top center`, `top right`, `bottom left`, `bottom right`, `bottom center`, `middle left`, or `middle right` [Default: `top center`]
    },
    button_text: null, // change the text of the button, [Default: `Share`]
    networks: {
        google_plus: {
            enabled: 'false', // Enable Google+. [Default: true]
        },
        twitter: {
            enabled: 'true', // Enable Twitter. [Default: true]
        },
        facebook: {
            enabled: 'true', // Enable Facebook. [Default: true]
            load_sdk: 'true', // Load the FB SDK. If false, it will default to Facebook's sharer.php implementation.
            // NOTE: This will disable the ability to dynamically set values and rely directly on applicable Open Graph tags.
            // [Default: true]
            // app_id: '1560183814233743',// Facebook app id for tracking shares. if provided, will use the facebook API
            caption: 'Ever wonder what your city might look like as a blueprint?' // caption to be shared alongside your link to Facebook [Default: null]
        },
        pinterest: {
            enabled: 'true' // Enable Pinterest. [Default: true]
        },
        email: {
            enabled: 'true' // Enable Email. [Default: true]
        }
    }
});
