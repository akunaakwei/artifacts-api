// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BankExtensionTransactionResponseSchema } from '../models/BankExtensionTransactionResponseSchema.ts';
import { BankGoldTransactionResponseSchema } from '../models/BankGoldTransactionResponseSchema.ts';
import { BankItemTransactionResponseSchema } from '../models/BankItemTransactionResponseSchema.ts';
import { CharacterFightResponseSchema } from '../models/CharacterFightResponseSchema.ts';
import { CharacterMovementResponseSchema } from '../models/CharacterMovementResponseSchema.ts';
import { CharacterRestResponseSchema } from '../models/CharacterRestResponseSchema.ts';
import { CraftingSchema } from '../models/CraftingSchema.ts';
import { DataPageLogSchema } from '../models/DataPageLogSchema.ts';
import { DeleteItemResponseSchema } from '../models/DeleteItemResponseSchema.ts';
import { DepositWithdrawGoldSchema } from '../models/DepositWithdrawGoldSchema.ts';
import { DestinationSchema } from '../models/DestinationSchema.ts';
import { EquipSchema } from '../models/EquipSchema.ts';
import { EquipmentResponseSchema } from '../models/EquipmentResponseSchema.ts';
import { GEBuyOrderSchema } from '../models/GEBuyOrderSchema.ts';
import { GECancelOrderSchema } from '../models/GECancelOrderSchema.ts';
import { GECreateOrderTransactionResponseSchema } from '../models/GECreateOrderTransactionResponseSchema.ts';
import { GEOrderCreationrSchema } from '../models/GEOrderCreationrSchema.ts';
import { GETransactionResponseSchema } from '../models/GETransactionResponseSchema.ts';
import { MyCharactersListSchema } from '../models/MyCharactersListSchema.ts';
import { NpcMerchantBuySchema } from '../models/NpcMerchantBuySchema.ts';
import { NpcMerchantTransactionResponseSchema } from '../models/NpcMerchantTransactionResponseSchema.ts';
import { RecyclingResponseSchema } from '../models/RecyclingResponseSchema.ts';
import { RecyclingSchema } from '../models/RecyclingSchema.ts';
import { RewardDataResponseSchema } from '../models/RewardDataResponseSchema.ts';
import { SimpleItemSchema } from '../models/SimpleItemSchema.ts';
import { SkillResponseSchema } from '../models/SkillResponseSchema.ts';
import { TaskCancelledResponseSchema } from '../models/TaskCancelledResponseSchema.ts';
import { TaskResponseSchema } from '../models/TaskResponseSchema.ts';
import { TaskTradeResponseSchema } from '../models/TaskTradeResponseSchema.ts';
import { UnequipSchema } from '../models/UnequipSchema.ts';
import { UseItemResponseSchema } from '../models/UseItemResponseSchema.ts';

/**
 * no description
 */
export class MyCharactersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Accepting a new task.
     * Action Accept New Task
     * @param name Name of your character.
     */
    public async actionAcceptNewTaskMyNameActionTaskNewPost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionAcceptNewTaskMyNameActionTaskNewPost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/task/new'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Buy a 20 slots bank expansion.
     * Action Buy Bank Expansion
     * @param name Name of your character.
     */
    public async actionBuyBankExpansionMyNameActionBankBuyExpansionPost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionBuyBankExpansionMyNameActionBankBuyExpansionPost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/bank/buy_expansion'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Complete a task.
     * Action Complete Task
     * @param name Name of your character.
     */
    public async actionCompleteTaskMyNameActionTaskCompletePost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionCompleteTaskMyNameActionTaskCompletePost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/task/complete'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Crafting an item. The character must be on a map with a workshop.
     * Action Crafting
     * @param name Name of your character.
     * @param craftingSchema 
     */
    public async actionCraftingMyNameActionCraftingPost(name: string, craftingSchema: CraftingSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionCraftingMyNameActionCraftingPost", "name");
        }


        // verify required parameter 'craftingSchema' is not null or undefined
        if (craftingSchema === null || craftingSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionCraftingMyNameActionCraftingPost", "craftingSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/crafting'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(craftingSchema, "CraftingSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete an item from your character\'s inventory.
     * Action Delete Item
     * @param name Name of your character.
     * @param simpleItemSchema 
     */
    public async actionDeleteItemMyNameActionDeletePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionDeleteItemMyNameActionDeletePost", "name");
        }


        // verify required parameter 'simpleItemSchema' is not null or undefined
        if (simpleItemSchema === null || simpleItemSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionDeleteItemMyNameActionDeletePost", "simpleItemSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/delete'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simpleItemSchema, "SimpleItemSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deposit gold in a bank on the character\'s map.
     * Action Deposit Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema 
     */
    public async actionDepositBankGoldMyNameActionBankDepositGoldPost(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionDepositBankGoldMyNameActionBankDepositGoldPost", "name");
        }


        // verify required parameter 'depositWithdrawGoldSchema' is not null or undefined
        if (depositWithdrawGoldSchema === null || depositWithdrawGoldSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionDepositBankGoldMyNameActionBankDepositGoldPost", "depositWithdrawGoldSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/bank/deposit/gold'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(depositWithdrawGoldSchema, "DepositWithdrawGoldSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deposit an item in a bank on the character\'s map.
     * Action Deposit Bank
     * @param name Name of your character.
     * @param simpleItemSchema 
     */
    public async actionDepositBankMyNameActionBankDepositPost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionDepositBankMyNameActionBankDepositPost", "name");
        }


        // verify required parameter 'simpleItemSchema' is not null or undefined
        if (simpleItemSchema === null || simpleItemSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionDepositBankMyNameActionBankDepositPost", "simpleItemSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/bank/deposit'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simpleItemSchema, "SimpleItemSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Equip an item on your character.
     * Action Equip Item
     * @param name Name of your character.
     * @param equipSchema 
     */
    public async actionEquipItemMyNameActionEquipPost(name: string, equipSchema: EquipSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionEquipItemMyNameActionEquipPost", "name");
        }


        // verify required parameter 'equipSchema' is not null or undefined
        if (equipSchema === null || equipSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionEquipItemMyNameActionEquipPost", "equipSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/equip'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(equipSchema, "EquipSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Start a fight against a monster on the character\'s map.
     * Action Fight
     * @param name Name of your character.
     */
    public async actionFightMyNameActionFightPost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionFightMyNameActionFightPost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/fight'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Harvest a resource on the character\'s map.
     * Action Gathering
     * @param name Name of your character.
     */
    public async actionGatheringMyNameActionGatheringPost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionGatheringMyNameActionGatheringPost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/gathering'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Buy an item at the Grand Exchange on the character\'s map.
     * Action Ge Buy Item
     * @param name Name of your character.
     * @param gEBuyOrderSchema 
     */
    public async actionGeBuyItemMyNameActionGrandexchangeBuyPost(name: string, gEBuyOrderSchema: GEBuyOrderSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionGeBuyItemMyNameActionGrandexchangeBuyPost", "name");
        }


        // verify required parameter 'gEBuyOrderSchema' is not null or undefined
        if (gEBuyOrderSchema === null || gEBuyOrderSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionGeBuyItemMyNameActionGrandexchangeBuyPost", "gEBuyOrderSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/grandexchange/buy'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gEBuyOrderSchema, "GEBuyOrderSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Cancel a sell order at the Grand Exchange on the character\'s map.
     * Action Ge Cancel Sell Order
     * @param name Name of your character.
     * @param gECancelOrderSchema 
     */
    public async actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(name: string, gECancelOrderSchema: GECancelOrderSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost", "name");
        }


        // verify required parameter 'gECancelOrderSchema' is not null or undefined
        if (gECancelOrderSchema === null || gECancelOrderSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost", "gECancelOrderSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/grandexchange/cancel'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gECancelOrderSchema, "GECancelOrderSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.
     * Action Ge Create Sell Order
     * @param name Name of your character.
     * @param gEOrderCreationrSchema 
     */
    public async actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(name: string, gEOrderCreationrSchema: GEOrderCreationrSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionGeCreateSellOrderMyNameActionGrandexchangeSellPost", "name");
        }


        // verify required parameter 'gEOrderCreationrSchema' is not null or undefined
        if (gEOrderCreationrSchema === null || gEOrderCreationrSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionGeCreateSellOrderMyNameActionGrandexchangeSellPost", "gEOrderCreationrSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/grandexchange/sell'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gEOrderCreationrSchema, "GEOrderCreationrSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Moves a character on the map using the map\'s X and Y position.
     * Action Move
     * @param name Name of your character.
     * @param destinationSchema 
     */
    public async actionMoveMyNameActionMovePost(name: string, destinationSchema: DestinationSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionMoveMyNameActionMovePost", "name");
        }


        // verify required parameter 'destinationSchema' is not null or undefined
        if (destinationSchema === null || destinationSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionMoveMyNameActionMovePost", "destinationSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/move'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(destinationSchema, "DestinationSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Buy an item from an NPC on the character\'s map.
     * Action Npc Buy Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema 
     */
    public async actionNpcBuyItemMyNameActionNpcBuyPost(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionNpcBuyItemMyNameActionNpcBuyPost", "name");
        }


        // verify required parameter 'npcMerchantBuySchema' is not null or undefined
        if (npcMerchantBuySchema === null || npcMerchantBuySchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionNpcBuyItemMyNameActionNpcBuyPost", "npcMerchantBuySchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/npc/buy'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(npcMerchantBuySchema, "NpcMerchantBuySchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sell an item from an NPC on the character\'s map.
     * Action Npc Sell Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema 
     */
    public async actionNpcSellItemMyNameActionNpcSellPost(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionNpcSellItemMyNameActionNpcSellPost", "name");
        }


        // verify required parameter 'npcMerchantBuySchema' is not null or undefined
        if (npcMerchantBuySchema === null || npcMerchantBuySchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionNpcSellItemMyNameActionNpcSellPost", "npcMerchantBuySchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/npc/sell'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(npcMerchantBuySchema, "NpcMerchantBuySchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).
     * Action Recycling
     * @param name Name of your character.
     * @param recyclingSchema 
     */
    public async actionRecyclingMyNameActionRecyclingPost(name: string, recyclingSchema: RecyclingSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionRecyclingMyNameActionRecyclingPost", "name");
        }


        // verify required parameter 'recyclingSchema' is not null or undefined
        if (recyclingSchema === null || recyclingSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionRecyclingMyNameActionRecyclingPost", "recyclingSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/recycling'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(recyclingSchema, "RecyclingSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)
     * Action Rest
     * @param name Name of your character.
     */
    public async actionRestMyNameActionRestPost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionRestMyNameActionRestPost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/rest'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Cancel a task for 1 tasks coin.
     * Action Task Cancel
     * @param name Name of your character.
     */
    public async actionTaskCancelMyNameActionTaskCancelPost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionTaskCancelMyNameActionTaskCancelPost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/task/cancel'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.
     * Action Task Exchange
     * @param name Name of your character.
     */
    public async actionTaskExchangeMyNameActionTaskExchangePost(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionTaskExchangeMyNameActionTaskExchangePost", "name");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/task/exchange'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Trading items with a Tasks Master.
     * Action Task Trade
     * @param name Name of your character.
     * @param simpleItemSchema 
     */
    public async actionTaskTradeMyNameActionTaskTradePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionTaskTradeMyNameActionTaskTradePost", "name");
        }


        // verify required parameter 'simpleItemSchema' is not null or undefined
        if (simpleItemSchema === null || simpleItemSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionTaskTradeMyNameActionTaskTradePost", "simpleItemSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/task/trade'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simpleItemSchema, "SimpleItemSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Unequip an item on your character.
     * Action Unequip Item
     * @param name Name of your character.
     * @param unequipSchema 
     */
    public async actionUnequipItemMyNameActionUnequipPost(name: string, unequipSchema: UnequipSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionUnequipItemMyNameActionUnequipPost", "name");
        }


        // verify required parameter 'unequipSchema' is not null or undefined
        if (unequipSchema === null || unequipSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionUnequipItemMyNameActionUnequipPost", "unequipSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/unequip'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(unequipSchema, "UnequipSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use an item as a consumable.
     * Action Use Item
     * @param name Name of your character.
     * @param simpleItemSchema 
     */
    public async actionUseItemMyNameActionUsePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionUseItemMyNameActionUsePost", "name");
        }


        // verify required parameter 'simpleItemSchema' is not null or undefined
        if (simpleItemSchema === null || simpleItemSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionUseItemMyNameActionUsePost", "simpleItemSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/use'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simpleItemSchema, "SimpleItemSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Withdraw gold from your bank.
     * Action Withdraw Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema 
     */
    public async actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost", "name");
        }


        // verify required parameter 'depositWithdrawGoldSchema' is not null or undefined
        if (depositWithdrawGoldSchema === null || depositWithdrawGoldSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost", "depositWithdrawGoldSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/bank/withdraw/gold'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(depositWithdrawGoldSchema, "DepositWithdrawGoldSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Take an item from your bank and put it in the character\'s inventory.
     * Action Withdraw Bank
     * @param name Name of your character.
     * @param simpleItemSchema 
     */
    public async actionWithdrawBankMyNameActionBankWithdrawPost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MyCharactersApi", "actionWithdrawBankMyNameActionBankWithdrawPost", "name");
        }


        // verify required parameter 'simpleItemSchema' is not null or undefined
        if (simpleItemSchema === null || simpleItemSchema === undefined) {
            throw new RequiredError("MyCharactersApi", "actionWithdrawBankMyNameActionBankWithdrawPost", "simpleItemSchema");
        }


        // Path Params
        const localVarPath = '/my/{name}/action/bank/withdraw'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simpleItemSchema, "SimpleItemSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * History of the last 100 actions of all your characters.
     * Get All Characters Logs
     * @param page Page number
     * @param size Page size
     */
    public async getAllCharactersLogsMyLogsGet(page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/my/logs';

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


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List of your characters.
     * Get My Characters
     */
    public async getMyCharactersMyCharactersGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/my/characters';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["JWTBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MyCharactersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionAcceptNewTaskMyNameActionTaskNewPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TaskResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TaskResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TaskResponseSchema", ""
            ) as TaskResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Tasks Master not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("489", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character already has a task.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TaskResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TaskResponseSchema", ""
            ) as TaskResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionBuyBankExpansionMyNameActionBankBuyExpansionPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BankExtensionTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BankExtensionTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankExtensionTransactionResponseSchema", ""
            ) as BankExtensionTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bank not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("492", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient gold on your character.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BankExtensionTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankExtensionTransactionResponseSchema", ""
            ) as BankExtensionTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionCompleteTaskMyNameActionTaskCompletePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RewardDataResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RewardDataResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RewardDataResponseSchema", ""
            ) as RewardDataResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Tasks Master not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("488", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character has not completed the task.", undefined, response.headers);
        }
        if (isCodeInRange("487", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character has no task.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RewardDataResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RewardDataResponseSchema", ""
            ) as RewardDataResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionCraftingMyNameActionCraftingPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionCraftingMyNameActionCraftingPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SkillResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SkillResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SkillResponseSchema", ""
            ) as SkillResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Craft not found.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Workshop not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("493", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not skill level required.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SkillResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SkillResponseSchema", ""
            ) as SkillResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionDeleteItemMyNameActionDeletePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionDeleteItemMyNameActionDeletePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteItemResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteItemResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteItemResponseSchema", ""
            ) as DeleteItemResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteItemResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteItemResponseSchema", ""
            ) as DeleteItemResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionDepositBankGoldMyNameActionBankDepositGoldPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BankGoldTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BankGoldTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankGoldTransactionResponseSchema", ""
            ) as BankGoldTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bank not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("492", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient gold on your character.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("461", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A transaction is already in progress with this item/your gold in your bank.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BankGoldTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankGoldTransactionResponseSchema", ""
            ) as BankGoldTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionDepositBankMyNameActionBankDepositPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionDepositBankMyNameActionBankDepositPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BankItemTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BankItemTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankItemTransactionResponseSchema", ""
            ) as BankItemTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bank not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }
        if (isCodeInRange("461", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A transaction is already in progress with this item/your gold in your bank.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("462", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Your bank is full.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BankItemTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankItemTransactionResponseSchema", ""
            ) as BankItemTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionEquipItemMyNameActionEquipPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionEquipItemMyNameActionEquipPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EquipmentResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EquipmentResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EquipmentResponseSchema", ""
            ) as EquipmentResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("496", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character level is insufficient.", undefined, response.headers);
        }
        if (isCodeInRange("491", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Slot is not empty.", undefined, response.headers);
        }
        if (isCodeInRange("485", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "This item is already equipped.", undefined, response.headers);
        }
        if (isCodeInRange("484", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character can\&#39;t equip more than 100 utilities in the same slot.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EquipmentResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EquipmentResponseSchema", ""
            ) as EquipmentResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionFightMyNameActionFightPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionFightMyNameActionFightPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CharacterFightResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CharacterFightResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CharacterFightResponseSchema", ""
            ) as CharacterFightResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Monster not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CharacterFightResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CharacterFightResponseSchema", ""
            ) as CharacterFightResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionGatheringMyNameActionGatheringPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionGatheringMyNameActionGatheringPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SkillResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SkillResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SkillResponseSchema", ""
            ) as SkillResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("493", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not skill level required.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SkillResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SkillResponseSchema", ""
            ) as SkillResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionGeBuyItemMyNameActionGrandexchangeBuyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GETransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GETransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GETransactionResponseSchema", ""
            ) as GETransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Grand Exchange not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("436", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A transaction is already in progress on this order by a another character.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("492", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient gold on your character.", undefined, response.headers);
        }
        if (isCodeInRange("434", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "This offer does not contain as many items.", undefined, response.headers);
        }
        if (isCodeInRange("435", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You can\&#39;t buy to yourself.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Order not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GETransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GETransactionResponseSchema", ""
            ) as GETransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GETransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GETransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GETransactionResponseSchema", ""
            ) as GETransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Grand Exchange not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("436", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A transaction is already in progress on this order by a another character.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("438", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You can\&#39;t cancel an order that is not yours.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Order not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GETransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GETransactionResponseSchema", ""
            ) as GETransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionGeCreateSellOrderMyNameActionGrandexchangeSellPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GECreateOrderTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GECreateOrderTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GECreateOrderTransactionResponseSchema", ""
            ) as GECreateOrderTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("492", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient gold on your character.", undefined, response.headers);
        }
        if (isCodeInRange("433", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You can\&#39;t create more than 100 orders at the same time.", undefined, response.headers);
        }
        if (isCodeInRange("437", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "This item cannot be sold.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Grand Exchange not found on this map.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GECreateOrderTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GECreateOrderTransactionResponseSchema", ""
            ) as GECreateOrderTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionMoveMyNameActionMovePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionMoveMyNameActionMovePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CharacterMovementResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CharacterMovementResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CharacterMovementResponseSchema", ""
            ) as CharacterMovementResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("490", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character already at destination.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Map not found.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CharacterMovementResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CharacterMovementResponseSchema", ""
            ) as CharacterMovementResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionNpcBuyItemMyNameActionNpcBuyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NpcMerchantTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpcMerchantTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpcMerchantTransactionResponseSchema", ""
            ) as NpcMerchantTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "NPC not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("492", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient gold on your character.", undefined, response.headers);
        }
        if (isCodeInRange("441", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "This item cannot be purchased.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpcMerchantTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpcMerchantTransactionResponseSchema", ""
            ) as NpcMerchantTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionNpcSellItemMyNameActionNpcSellPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NpcMerchantTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpcMerchantTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpcMerchantTransactionResponseSchema", ""
            ) as NpcMerchantTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "NPC not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("442", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "This item cannot be sold.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpcMerchantTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpcMerchantTransactionResponseSchema", ""
            ) as NpcMerchantTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionRecyclingMyNameActionRecyclingPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionRecyclingMyNameActionRecyclingPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecyclingResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecyclingResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecyclingResponseSchema", ""
            ) as RecyclingResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Workshop not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("493", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not skill level required.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("473", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "This item cannot be recycled.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RecyclingResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecyclingResponseSchema", ""
            ) as RecyclingResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionRestMyNameActionRestPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionRestMyNameActionRestPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CharacterRestResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CharacterRestResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CharacterRestResponseSchema", ""
            ) as CharacterRestResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CharacterRestResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CharacterRestResponseSchema", ""
            ) as CharacterRestResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionTaskCancelMyNameActionTaskCancelPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TaskCancelledResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TaskCancelledResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TaskCancelledResponseSchema", ""
            ) as TaskCancelledResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Tasks Master not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TaskCancelledResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TaskCancelledResponseSchema", ""
            ) as TaskCancelledResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionTaskExchangeMyNameActionTaskExchangePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RewardDataResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RewardDataResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RewardDataResponseSchema", ""
            ) as RewardDataResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Tasks Master not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RewardDataResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RewardDataResponseSchema", ""
            ) as RewardDataResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionTaskTradeMyNameActionTaskTradePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TaskTradeResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TaskTradeResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TaskTradeResponseSchema", ""
            ) as TaskTradeResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Tasks Master not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("475", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character have already completed the task or are trying to trade too many items.", undefined, response.headers);
        }
        if (isCodeInRange("474", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character does not have this task.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TaskTradeResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TaskTradeResponseSchema", ""
            ) as TaskTradeResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionUnequipItemMyNameActionUnequipPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionUnequipItemMyNameActionUnequipPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EquipmentResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EquipmentResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EquipmentResponseSchema", ""
            ) as EquipmentResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("491", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Slot is empty.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("483", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character has no enough HP to unequip this item.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EquipmentResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EquipmentResponseSchema", ""
            ) as EquipmentResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionUseItemMyNameActionUsePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionUseItemMyNameActionUsePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UseItemResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UseItemResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UseItemResponseSchema", ""
            ) as UseItemResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("476", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "This item is not a consumable.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }
        if (isCodeInRange("496", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character level is insufficient.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UseItemResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UseItemResponseSchema", ""
            ) as UseItemResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BankGoldTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BankGoldTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankGoldTransactionResponseSchema", ""
            ) as BankGoldTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("461", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A transaction is already in progress with this item/your gold in your bank.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bank not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("460", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient gold in your bank.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BankGoldTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankGoldTransactionResponseSchema", ""
            ) as BankGoldTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionWithdrawBankMyNameActionBankWithdrawPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BankItemTransactionResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BankItemTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankItemTransactionResponseSchema", ""
            ) as BankItemTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }
        if (isCodeInRange("499", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character in cooldown.", undefined, response.headers);
        }
        if (isCodeInRange("461", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A transaction is already in progress with this item/your gold in your bank.", undefined, response.headers);
        }
        if (isCodeInRange("486", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An action is already in progress by your character.", undefined, response.headers);
        }
        if (isCodeInRange("497", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character inventory is full.", undefined, response.headers);
        }
        if (isCodeInRange("598", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bank not found on this map.", undefined, response.headers);
        }
        if (isCodeInRange("478", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Missing item or insufficient quantity.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BankItemTransactionResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankItemTransactionResponseSchema", ""
            ) as BankItemTransactionResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCharactersLogsMyLogsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllCharactersLogsMyLogsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DataPageLogSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataPageLogSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageLogSchema", ""
            ) as DataPageLogSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logs not found.", undefined, response.headers);
        }
        if (isCodeInRange("498", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Character not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataPageLogSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataPageLogSchema", ""
            ) as DataPageLogSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMyCharactersMyCharactersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMyCharactersMyCharactersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyCharactersListSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MyCharactersListSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MyCharactersListSchema", ""
            ) as MyCharactersListSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MyCharactersListSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MyCharactersListSchema", ""
            ) as MyCharactersListSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
