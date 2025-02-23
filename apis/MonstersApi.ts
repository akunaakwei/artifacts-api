// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { DataPageMonsterSchema } from '../models/DataPageMonsterSchema';
import { MonsterResponseSchema } from '../models/MonsterResponseSchema';

/**
 * no description
 */
export class MonstersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch monsters details.
     * Get All Monsters
     * @param minLevel Monster minimum level.
     * @param maxLevel Monster maximum level.
     * @param drop Item code of the drop.
     * @param page Page number
     * @param size Page size
     */
    public async getAllMonstersMonstersGet(minLevel?: number, maxLevel?: number, drop?: string, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/monsters';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (minLevel !== undefined) {
            requestContext.setQueryParam("min_level", ObjectSerializer.serialize(minLevel, "number", ""));
        }

        // Query Params
        if (maxLevel !== undefined) {
            requestContext.setQueryParam("max_level", ObjectSerializer.serialize(maxLevel, "number", ""));
        }

        // Query Params
        if (drop !== undefined) {
            requestContext.setQueryParam("drop", ObjectSerializer.serialize(drop, "string", ""));
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
     * Retrieve the details of a monster.
     * Get Monster
     * @param code The code of the monster.
     */
    public async getMonsterMonstersCodeGet(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("MonstersApi", "getMonsterMonstersCodeGet", "code");
        }


        // Path Params
        const localVarPath = '/monsters/{code}'
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

export class MonstersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllMonstersMonstersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllMonstersMonstersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DataPageMonsterSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataPageMonsterSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageMonsterSchema", ""
            ) as DataPageMonsterSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataPageMonsterSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageMonsterSchema", ""
            ) as DataPageMonsterSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonsterMonstersCodeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMonsterMonstersCodeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MonsterResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MonsterResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MonsterResponseSchema", ""
            ) as MonsterResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Monster not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MonsterResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MonsterResponseSchema", ""
            ) as MonsterResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
