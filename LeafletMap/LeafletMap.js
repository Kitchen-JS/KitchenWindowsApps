class LeafletMap extends WindowTemplate
{
    constructor()
    {
        super(); // to inherit from base class
        this.id = this.randomWindowID();
        this.mapID = this.id + 'map';
        this.map;

        this.canvasImages = [];
        this.canvas;
        this.ctx;

        this.container = document.createElement('div');
        this.container.classList.add("d-flex", "align-items-center", "justify-content-around", "flex-wrap", "mt-0", "scrollMap");

        let newMap = document.createElement('div');
        newMap.id = this.mapID;
        this.container.append(newMap);

        newMap.append(document.createElement('canvas'));
        
        newMap.querySelector('canvas').width = 0;
        newMap.querySelector('canvas').height = 0;

        this.loadingCover = document.createElement('div');
        this.loadingCover.classList.add("loadingCover", "hidden");
        this.loadingCover.innerHTML = '<h1>Loading</h1>';
        this.container.append(this.loadingCover);

        this.canvas = newMap.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        // windows options, REQUIRED
        this.initOptions = {
            body: this.container, //should always be the container you created above
            inject: ['content/js/apps/WindowTemplate.js', 'content/css/apps/HiveMap.css'],
            //'../css/apps/ScrollMap.css'
            //'/content/js/leaflet.legend.js', '/content/css/leaflet.legend.css',
            //inject: [],
            roles: [], //String Array of Roles, OVERWRITTEN B21323000000000000000000000000000000Y DB, pipe delimited "|"
            snapping: true, // makes window snap to grid positions
            draggable:true,
            shadows:true,
            resizeable: true, // enables/disables dragging corners of window to resize (not grid positions)
            width: "100%",
            height: "100%",
            // top: "0%",
            // left: "0%",
            //position: ['middle', 'middle'],
            position: ['middle', 'middle'],
            locked: true, //Have to pick a grid - snap locked to grid (does NOT stop user from dragging)
            id: this.id, //in template base class, should always be a random ID to prevent overlaps
            Icon: "pfi-map",
            IconColor: "gold",
            title: "Beekeeper Map",
            minimize:true,
            maximize:true,
            ClassFile: "content/js/apps/HiveMap.js",
            ClassName: "HiveMap",
            onClose: () =>
            {
                //GlobalWindowManager.removeWindow(this.scrollNotes.id);
            }
        };
    }

    // THIS METHOD REQUIRED TO MAKE YOUR APP FUNCTION
    async initialize()
    {
        //this.startLoading();

        setTimeout(() => 
        {
            this.map = L.map(this.mapID, 
            {
                attributionControl: true,
                continuousWorld: 'false'
            });

            
            this.map.setView([34.70345412225235, -92.22471129074935], 14);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.map);

            

            // Zoom Event
            this.map.on('zoomend', this.mapZoom);
            this.map.on('click', this.mapClick);

            this.stopLoading();

        }, 600);
        
    }

    startLoading()
    {
        this.loadingSpinner.show();
        this.loadingCover.classList.remove("hidden");
    }

    stopLoading()
    {
        this.loadingSpinner.hide();
        this.loadingCover.classList.add("hidden");
    }

    gotoLocation(y, x, zoom)
    {
        if(location)
        {
            if(typeof zoom === 'undefined' || !zoom)
            {
                zoom = this.map.getZoom();
            }
            this.map.setView([y, x], zoom);
        }
    }

    mapClick(e)
    {
        console.log(e.latlng);
    }

    mapZoom(e)
    {
        console.log(e.target._zoom);
    }
}
//add to windows scope - REQUIRED
GlobalWindowManager.AppsManager.addClass({ "LeafletMap": LeafletMap });