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

import { EquipRequestSchema } from '../models/EquipRequestSchema.ts';
import { HttpFile } from '../http/http.ts';

export class EquipmentResponseSchema {
    'data': EquipRequestSchema;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "EquipRequestSchema",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EquipmentResponseSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
