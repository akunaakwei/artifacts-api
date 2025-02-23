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

import { EventContentSchema } from '../models/EventContentSchema';
import { EventMapSchema } from '../models/EventMapSchema';
import { HttpFile } from '../http/http';

export class EventSchema {
    /**
    * Name of the event.
    */
    'name': string;
    /**
    * Code of the event.
    */
    'code': string;
    /**
    * Map list of the event.
    */
    'maps': Array<EventMapSchema>;
    /**
    * Map skin of the event.
    */
    'skin': string;
    /**
    * Duration in minutes.
    */
    'duration': number;
    /**
    * Rate spawn of the event. (1/rate every minute)
    */
    'rate': number;
    /**
    * Content of the event.
    */
    'content': EventContentSchema;

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
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "maps",
            "baseName": "maps",
            "type": "Array<EventMapSchema>",
            "format": ""
        },
        {
            "name": "skin",
            "baseName": "skin",
            "type": "string",
            "format": ""
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "EventContentSchema",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
