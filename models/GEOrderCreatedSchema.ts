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

import { HttpFile } from '../http/http';

export class GEOrderCreatedSchema {
    /**
    * Order id.
    */
    'id': string;
    /**
    * Order created at.
    */
    'createdAt': Date;
    /**
    * Item code.
    */
    'code': string;
    /**
    * Item quantity.
    */
    'quantity': number;
    /**
    * Item price per unit.
    */
    'price': number;
    /**
    * Total price.
    */
    'totalPrice': number;
    /**
    * Order creation tax (3%, minimum 1)
    */
    'tax': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPrice",
            "baseName": "total_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GEOrderCreatedSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
