class DataTableApp extends WindowTemplate
{
    constructor()
    {
        super(); // to inherit from base class
        this.id = this.randomWindowID();

        this.container = document.createElement('div');
        this.container.classList.add("rfidScan", "kw-d-flex", "kw-align-content-center", "kw-align-items-center", "kw-flex-wrap", "kw-mt-8");

        let appContent = `<div class="kw-mt-6 kw-row kw-align-content-center kw-align-items-center kw-text-center kw-m-auto">
            <div class="kw-items-center kw-content-center kw-text-center col-12">
                <i class="pfi-rfid block is-5 p-4"></i>
                <p class="scanMsg">Place phone on RFID/NFC tag located on hive</p>
            </div>
        </div>
        `;

        this.container.innerHTML = appContent;

        // windows options, REQUIRED
        this.initOptions = {
            body: this.container, //should always be the container you created above
            inject: ['content/js/apps/rfidScan.js', '/content/css/apps/rfidScan.css'],
            roles: [], //String Array of Roles, OVERWRITTEN BY DB, pipe delimited "|"
            snapping: true, // makes window snap to grid positions
            draggable:true,
            shadows:true,
            resizeable: false, // enables/disables dragging corners of window to resize (not grid positions)
            position: ["middle", "middle"],
            width: "100%",
            height: "100%",
            locked: true, //Have to pick a grid - snap locked to grid (does NOT stop user from dragging)
            id: this.id, //in template base class, should always be a random ID to prevent overlaps
            Icon: "pfi-rfid",
            IconColor: '#21dbd2',
            IconBkgColor:"black",
            //title: "Icons Package",
            minimize:true,
            maximize:true,
            ClassFile: "content/js/apps/rfidScan.js",
            ClassName: "rfidScan",
            onClose: () =>
            {
                //GlobalWindowManager.removeWindow(this.scrollNotes.id);
            }
        };
    }

    // THIS METHOD REQUIRED TO MAKE YOUR APP FUNCTION
    async initialize()
    {
        
        
    }
}

//add to windows scope - REQUIRED
GlobalWindowManager.AppsManager.addClass({ "DataTableApp": DataTableApp });