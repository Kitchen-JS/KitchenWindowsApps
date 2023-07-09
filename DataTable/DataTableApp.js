class DataTableApp extends WindowTemplate
{
    constructor()
    {
        super(); // to inherit from base class
        this.id = this.randomWindowID();

        this.container = document.createElement('div');
        this.container.classList.add("kw-d-flex", "kw-align-content-center", "kw-align-items-center", "kw-flex-wrap", "kw-mt-8");

        let appContent = `<div class="kw-mt-6 kw-row kw-align-content-center kw-align-items-center kw-text-center kw-m-auto">
            <div class="kw-items-center kw-content-center kw-text-center col-12">
                
            </div>
        </div>
        `;

        this.container.innerHTML = appContent;

        // windows options, REQUIRED
        this.initOptions = {
            body: this.container,
            inject: ['content/js/apps/WindowTemplate.js', 'https://raw.githubusercontent.com/Kitchen-JS/KitchenWindowsApps/main/DataTable/DataTableApp.js', 'https://raw.githubusercontent.com/Kitchen-JS/KitchenWindowsApps/main/components/clsDataTable.js', 'https://raw.githubusercontent.com/Kitchen-JS/KitchenWindowsApps/main/components/clsDataTable.css'],
            roles: [],
            snapping: true, 
            draggable:true,
            shadows:true,
            resizeable: true,
            position: ["middle", "middle"],
            width: "100%",
            height: "100%",
            locked: true,
            id: this.id,
            Icon: "pfi-grid-table",
            IconColor: '#000',
            //IconBkgColor:"black",
            title: "DataTable Demo",
            minimize:true,
            maximize:true,
            ClassFile: "https://raw.githubusercontent.com/Kitchen-JS/KitchenWindowsApps/main/DataTable/DataTableApp.js",
            ClassName: "DataTableApp",
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