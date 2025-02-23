// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountLeaderboardType } from '../models/AccountLeaderboardType';
import { CharacterLeaderboardType } from '../models/CharacterLeaderboardType';
import { DataPageAccountLeaderboardSchema } from '../models/DataPageAccountLeaderboardSchema';
import { DataPageCharacterLeaderboardSchema } from '../models/DataPageCharacterLeaderboardSchema';

/**
 * no description
 */
export class LeaderboardApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch leaderboard details.
     * Get Accounts Leaderboard
     * @param sort Default sort by achievements points.
     * @param page Page number
     * @param size Page size
     */
    public async getAccountsLeaderboardLeaderboardAccountsGet(sort?: AccountLeaderboardType, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/leaderboard/accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sort !== undefined) {
            const serializedParams = ObjectSerializer.serialize(sort, "AccountLeaderboardType", "");
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
     * Fetch leaderboard details.
     * Get Characters Leaderboard
     * @param sort Default sort by combat total XP.
     * @param page Page number
     * @param size Page size
     */
    public async getCharactersLeaderboardLeaderboardCharactersGet(sort?: CharacterLeaderboardType, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/leaderboard/characters';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sort !== undefined) {
            const serializedParams = ObjectSerializer.serialize(sort, "CharacterLeaderboardType", "");
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

}

export class LeaderboardApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountsLeaderboardLeaderboardAccountsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DataPageAccountLeaderboardSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataPageAccountLeaderboardSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageAccountLeaderboardSchema", ""
            ) as DataPageAccountLeaderboardSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataPageAccountLeaderboardSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageAccountLeaderboardSchema", ""
            ) as DataPageAccountLeaderboardSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCharactersLeaderboardLeaderboardCharactersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DataPageCharacterLeaderboardSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataPageCharacterLeaderboardSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageCharacterLeaderboardSchema", ""
            ) as DataPageCharacterLeaderboardSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataPageCharacterLeaderboardSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageCharacterLeaderboardSchema", ""
            ) as DataPageCharacterLeaderboardSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
