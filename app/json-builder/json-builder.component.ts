import { Component, OnInit } from '@angular/core'
import { Api, ApiConfiguration, ApiConfigurationParameter } from "./Api"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';


@Component({
    moduleId: module.id,
    selector: 'json-builder',
    templateUrl: 'json-builder.component.html',
    styleUrls: [ 'json-builder.component.css' ]
})
export class JsonBuilderComponent implements OnInit{
    ngOnInit(): void {
        // Create default choices
        this.verbs = [ 
            { name: "GET", checked: false },
            { name: "POST", checked: false }, 
            { name: "PUT", checked: false }, 
            { name: "DELETE", checked: false }, 
            { name: "PATCH", checked: false },
            { name: "HEAD", checked: false }
        ];
        this.visibilities = [ "Public", "Private", "Restricted" ];
        this.transportModes = [ "http", "https" ];
        this.tiers = [ "Unlimited", "Gold", "Silver", "Bronze" ];
        this.contentTypes = [ "application/xml", "application/json", "text/xml" ]
        this.parameterTypes = [ "query" ];
        this.dataTypes = [ "string", "number" ];

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
        this.model.apiConfigurations = [];

        // Assign test values if development mode is enabled
        if (this.devMode) {
            this.model.name = "Test API";
            this.model.context = "/testapi";
            this.model.businessOwner = "Mr. Business";
            this.model.businessOwnerEmail = "business@emails.com";
            this.model.technicalOwner = "Ms. Technical";
            this.model.technicalOwnerEmail = "technical@emails.com";
            this.model.tags = [ "mytag", "tag2", "tagerrific" ];
            let config = new ApiConfiguration();
            config.verb = "GET";
            config.path = "/phone";
            let param = new ApiConfigurationParameter("param1");
            param.description = "A cool parameter";
            param.parameterType = this.parameterTypes[0];
            param.dataType = this.dataTypes[0];
            config.parameters.push(param);
            this.model.apiConfigurations.push(config);
        }
    }

    addTag():void {
        if (this.newTag != null) {
            if (this.model.tags.indexOf(this.newTag) < 0) {
                this.model.tags.push(this.newTag);
                this.newTag = "";
            }
        }  
    }

    addApiDefinition():void {
        for (let verb of this.selectedVerbs) {
            // TODO: determine if this path & verb already exists
            let config = new ApiConfiguration();
            config.path = this.urlPatternPath;
            config.verb = verb;
            
            this.model.apiConfigurations.push(config);
        }

        // reset the form
        this.urlPatternPath = "";
        this.verbs.forEach(function(v) { v.checked = false; });
        // for (let verb of this.verbs) {
        //     verb.checked = false;
        // }
        
    }
    apiDefinitionParameter:string;
    addApiDefinitionParameter(index:number, paramName:string, event:Event):void {
        event.preventDefault();

        if (paramName != null && paramName.length > 0) {
            let param = new ApiConfigurationParameter(paramName);
            param.dataType = this.dataTypes[0];
            param.parameterType = this.parameterTypes[0];
            this.model.apiConfigurations[index].parameters.push(param);
        }
        
    }

    verbs:any[];
    get selectedVerbs():string[] {
        return _.map(_.filter(this.verbs, function(v) { return v.checked }), function(v) { return v.name });
    }
    urlPatternPath:string;

    visibilities:string[];
    transportModes:string[];
    contentTypes:string[];
    tiers:string[];
    parameterTypes:string[];
    dataTypes:string[];
    devMode:boolean = true; // TODO: set to false
    newTag:string;

    model:Api;

    get diagnostic() { return JSON.stringify(this.model, null, 2 )}
}

