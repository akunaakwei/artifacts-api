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

import { MapContentSchema } from '../models/MapContentSchema.ts';
import { HttpFile } from '../http/http.ts';

export class MapSchema {
    /**
    * Name of the map.
    */
    'name': string;
    /**
    * Skin of the map.
    */
    'skin': string;
    /**
    * Position X of the map.
    */
    'x': number;
    /**
    * Position Y of the map.
    */
    'y': number;
    'content': MapContentSchema | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "skin",
            "baseName": "skin",
            "type": "string",
            "format": ""
        },
        {
            "name": "x",
            "baseName": "x",
            "type": "number",
            "format": ""
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "MapContentSchema",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MapSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
