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

export class ChangePassword {
    /**
    * Your password.
    */
    'currentPassword': string;
    /**
    * New password.
    */
    'newPassword': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentPassword",
            "baseName": "current_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "newPassword",
            "baseName": "new_password",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChangePassword.attributeTypeMap;
    }

    public constructor() {
    }
}
