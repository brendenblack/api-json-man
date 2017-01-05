import { Component, OnInit } from '@angular/core'
import { Api } from "./Api"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    moduleId: module.id,
    selector: 'json-builder',
    templateUrl: 'json-builder.component.html',
    styleUrls: [ 'json-builder.component.css' ]
})
export class JsonBuilderComponent implements OnInit{
    ngOnInit(): void {
        // Create default choices
        this.visibilities = [ "Public", "Private", "Restricted" ];
        this.transportModes = [ "http", "https" ];
        this.tiers = [ "Unlimited", "Platinum", "Gold", "Silver", "Bronze" ];

        // Initialize the form
        this.resetForm();
    }

    resetForm(): void { 
        this.model = new Api();

        // Set default values were sensible
        this.model.visibility = this.visibilities[0];
        this.model.transport = [ this.transportModes[0] ];
        this.model.tiers = [ this.tiers[this.tiers.length - 1] ];
        this.model.provider = "admin";
        this.model.version = 1;
        this.model.cacheTimeout = 300;
        this.model.responseCaching = false;
        this.model.defaultVersion = true;

        // Assign test values if development mode is enabled
        if (this.devMode) {
            this.model.name = "Test API";
            this.model.context = "/testapi";
            this.model.businessOwner = "Mr. Business";
            this.model.businessOwnerEmail = "business@emails.com";
            this.model.technicalOwner = "Ms. Technical";
            this.model.technicalOwnerEmail = "technical@emails.com";
        }
    }

    visibilities:string[];
    transportModes:string[];
    tiers:string[];
    devMode:boolean = true; // TODO: set to false

    selectedTab:string;

    model:Api;

    get diagnostic() { return JSON.stringify(this.model, null, 2 )}
}

