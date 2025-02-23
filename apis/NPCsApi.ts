// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { DataPageNPCItem } from '../models/DataPageNPCItem';
import { DataPageNPCSchema } from '../models/DataPageNPCSchema';
import { NPCResponseSchema } from '../models/NPCResponseSchema';
import { NPCType } from '../models/NPCType';

/**
 * no description
 */
export class NPCsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch NPCs details.
     * Get All Npcs
     * @param type The type of the NPC.
     * @param page Page number
     * @param size Page size
     */
    public async getAllNpcsNpcsGet(type?: NPCType, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/npcs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            const serializedParams = ObjectSerializer.serialize(type, "NPCType", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.
     * Get Npc Items
     * @param code The code of the NPC.
     * @param page Page number
     * @param size Page size
     */
    public async getNpcItemsNpcsCodeItemsGet(code: string, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("NPCsApi", "getNpcItemsNpcsCodeItemsGet", "code");
        }




        // Path Params
        const localVarPath = '/npcs/{code}/items'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the details of a NPC.
     * Get Npc
     * @param code The code of the NPC.
     */
    public async getNpcNpcsCodeGet(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("NPCsApi", "getNpcNpcsCodeGet", "code");
        }


        // Path Params
        const localVarPath = '/npcs/{code}'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class NPCsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllNpcsNpcsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllNpcsNpcsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DataPageNPCSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataPageNPCSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageNPCSchema", ""
            ) as DataPageNPCSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataPageNPCSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageNPCSchema", ""
            ) as DataPageNPCSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNpcItemsNpcsCodeItemsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNpcItemsNpcsCodeItemsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DataPageNPCItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataPageNPCItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageNPCItem", ""
            ) as DataPageNPCItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "NPC not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataPageNPCItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageNPCItem", ""
            ) as DataPageNPCItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNpcNpcsCodeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNpcNpcsCodeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NPCResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NPCResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NPCResponseSchema", ""
            ) as NPCResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "NPC not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NPCResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NPCResponseSchema", ""
            ) as NPCResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
