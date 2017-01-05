export class Api { 
    name:string; // r
    context:string; // r
    description:string;
    version:number; // number instead of string because business rules are enforcing a "v1" convention. Will provide the developer with a number input and prepend the 'v'
    provider:string;
    tags:string[] = [];
    transport:string[] = [];
    visibility:string;
    tiers:string[] = [];
    cacheTimeout:number;
    visibleRoles:string[] = [];
    visibleTenants:string[] = [];
    sequences:string[] = [];
    subscriptionAvailability:string;
    technicalOwner:string;
    technicalOwnerEmail:string;
    businessOwner:string;
    businessOwnerEmail:string;
    destinationStatsEnabled:boolean;
    responseCaching:boolean;
    defaultVersion:boolean;
    gatewayEnvironments:string;
    apiConfigurations:ApiConfiguration[];
}

// https://docs.wso2.com/display/AM1100/Create+and+Publish+an+API

export class ApiConfiguration {
    path:string;
    verb:string;
    contentTypesProduced:string[] = [];
    contentTypesConsumed:string[] = [];
    parameters:ApiConfigurationParameter[] = [];

}

export class ApiConfigurationParameter {
    constructor(public name:string) { }
    description:string = "";
    parameterType:string;
    dataType:string;
    required:boolean = false;
}