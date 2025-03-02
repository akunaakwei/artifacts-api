/**
 * Artifacts API
 *  Artifacts is an API-based MMO game where you can manage 5 characters to explore, fight, gather resources, craft items and much more.  Website: https://artifactsmmo.com/  Documentation: https://docs.artifactsmmo.com/  OpenAPI Spec: https://api.artifactsmmo.com/openapi.json 
 *
 * OpenAPI spec version: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class BankSchema {
    /**
    * Maximum slots in your bank.
    */
    'slots': number;
    /**
    * Bank expansions.
    */
    'expansions': number;
    /**
    * Next expansion cost.
    */
    'nextExpansionCost': number;
    /**
    * Quantity of gold in your bank.
    */
    'gold': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "slots",
            "baseName": "slots",
            "type": "number",
            "format": ""
        },
        {
            "name": "expansions",
            "baseName": "expansions",
            "type": "number",
            "format": ""
        },
        {
            "name": "nextExpansionCost",
            "baseName": "next_expansion_cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "gold",
            "baseName": "gold",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BankSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
