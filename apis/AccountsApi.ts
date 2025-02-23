// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountDetailsSchema } from '../models/AccountDetailsSchema';
import { AchievementType } from '../models/AchievementType';
import { AddAccountSchema } from '../models/AddAccountSchema';
import { DataPageAccountAchievementSchema } from '../models/DataPageAccountAchievementSchema';
import { ResponseSchema } from '../models/ResponseSchema';

/**
 * no description
 */
export class AccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Account
     * @param addAccountSchema 
     */
    public async createAccountAccountsCreatePost(addAccountSchema: AddAccountSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'addAccountSchema' is not null or undefined
        if (addAccountSchema === null || addAccountSchema === undefined) {
            throw new RequiredError("AccountsApi", "createAccountAccountsCreatePost", "addAccountSchema");
        }


        // Path Params
        const localVarPath = '/accounts/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addAccountSchema, "AddAccountSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the details of a character.
     * Get Account
     * @param account The account name.
     */
    public async getAccountAccountsAccountGet(account: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'account' is not null or undefined
        if (account === null || account === undefined) {
            throw new RequiredError("AccountsApi", "getAccountAccountsAccountGet", "account");
        }


        // Path Params
        const localVarPath = '/accounts/{account}'
            .replace('{' + 'account' + '}', encodeURIComponent(String(account)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the achievements of a account.
     * Get Account Achievements
     * @param account The character name.
     * @param type Type of achievements.
     * @param completed Filter by completed achievements.
     * @param page Page number
     * @param size Page size
     */
    public async getAccountAchievementsAccountsAccountAchievementsGet(account: string, type?: AchievementType, completed?: boolean, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'account' is not null or undefined
        if (account === null || account === undefined) {
            throw new RequiredError("AccountsApi", "getAccountAchievementsAccountsAccountAchievementsGet", "account");
        }






        // Path Params
        const localVarPath = '/accounts/{account}/achievements'
            .replace('{' + 'account' + '}', encodeURIComponent(String(account)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            const serializedParams = ObjectSerializer.serialize(type, "AchievementType", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (completed !== undefined) {
            requestContext.setQueryParam("completed", ObjectSerializer.serialize(completed, "boolean", ""));
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

export class AccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAccountAccountsCreatePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAccountAccountsCreatePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseSchema", ""
            ) as ResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("456", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Username already used.", undefined, response.headers);
        }
        if (isCodeInRange("457", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Email already used.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseSchema", ""
            ) as ResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountAccountsAccountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountAccountsAccountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountDetailsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountDetailsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountDetailsSchema", ""
            ) as AccountDetailsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Account not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountDetailsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountDetailsSchema", ""
            ) as AccountDetailsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountAchievementsAccountsAccountAchievementsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DataPageAccountAchievementSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataPageAccountAchievementSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageAccountAchievementSchema", ""
            ) as DataPageAccountAchievementSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Account not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataPageAccountAchievementSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageAccountAchievementSchema", ""
            ) as DataPageAccountAchievementSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
