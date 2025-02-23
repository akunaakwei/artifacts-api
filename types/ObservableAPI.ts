import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { AccountAchievementSchema } from '../models/AccountAchievementSchema.ts';
import { AccountDetails } from '../models/AccountDetails.ts';
import { AccountDetailsSchema } from '../models/AccountDetailsSchema.ts';
import { AccountLeaderboardSchema } from '../models/AccountLeaderboardSchema.ts';
import { AccountLeaderboardType } from '../models/AccountLeaderboardType.ts';
import { AccountStatus } from '../models/AccountStatus.ts';
import { AchievementResponseSchema } from '../models/AchievementResponseSchema.ts';
import { AchievementRewardsSchema } from '../models/AchievementRewardsSchema.ts';
import { AchievementSchema } from '../models/AchievementSchema.ts';
import { AchievementType } from '../models/AchievementType.ts';
import { ActionType } from '../models/ActionType.ts';
import { ActiveEventSchema } from '../models/ActiveEventSchema.ts';
import { AddAccountSchema } from '../models/AddAccountSchema.ts';
import { AddCharacterSchema } from '../models/AddCharacterSchema.ts';
import { AnnouncementSchema } from '../models/AnnouncementSchema.ts';
import { BadgeConditionSchema } from '../models/BadgeConditionSchema.ts';
import { BadgeResponseSchema } from '../models/BadgeResponseSchema.ts';
import { BadgeSchema } from '../models/BadgeSchema.ts';
import { BankExtensionSchema } from '../models/BankExtensionSchema.ts';
import { BankExtensionTransactionResponseSchema } from '../models/BankExtensionTransactionResponseSchema.ts';
import { BankExtensionTransactionSchema } from '../models/BankExtensionTransactionSchema.ts';
import { BankGoldTransactionResponseSchema } from '../models/BankGoldTransactionResponseSchema.ts';
import { BankGoldTransactionSchema } from '../models/BankGoldTransactionSchema.ts';
import { BankItemTransactionResponseSchema } from '../models/BankItemTransactionResponseSchema.ts';
import { BankItemTransactionSchema } from '../models/BankItemTransactionSchema.ts';
import { BankResponseSchema } from '../models/BankResponseSchema.ts';
import { BankSchema } from '../models/BankSchema.ts';
import { BlockedHitsSchema } from '../models/BlockedHitsSchema.ts';
import { ChangePassword } from '../models/ChangePassword.ts';
import { CharacterFightDataSchema } from '../models/CharacterFightDataSchema.ts';
import { CharacterFightResponseSchema } from '../models/CharacterFightResponseSchema.ts';
import { CharacterLeaderboardSchema } from '../models/CharacterLeaderboardSchema.ts';
import { CharacterLeaderboardType } from '../models/CharacterLeaderboardType.ts';
import { CharacterMovementDataSchema } from '../models/CharacterMovementDataSchema.ts';
import { CharacterMovementResponseSchema } from '../models/CharacterMovementResponseSchema.ts';
import { CharacterResponseSchema } from '../models/CharacterResponseSchema.ts';
import { CharacterRestDataSchema } from '../models/CharacterRestDataSchema.ts';
import { CharacterRestResponseSchema } from '../models/CharacterRestResponseSchema.ts';
import { CharacterSchema } from '../models/CharacterSchema.ts';
import { CharacterSkin } from '../models/CharacterSkin.ts';
import { CooldownSchema } from '../models/CooldownSchema.ts';
import { CraftSchema } from '../models/CraftSchema.ts';
import { CraftSkill } from '../models/CraftSkill.ts';
import { CraftingSchema } from '../models/CraftingSchema.ts';
import { DataPageAccountAchievementSchema } from '../models/DataPageAccountAchievementSchema.ts';
import { DataPageAccountLeaderboardSchema } from '../models/DataPageAccountLeaderboardSchema.ts';
import { DataPageAchievementSchema } from '../models/DataPageAchievementSchema.ts';
import { DataPageActiveEventSchema } from '../models/DataPageActiveEventSchema.ts';
import { DataPageBadgeSchema } from '../models/DataPageBadgeSchema.ts';
import { DataPageCharacterLeaderboardSchema } from '../models/DataPageCharacterLeaderboardSchema.ts';
import { DataPageDropRateSchema } from '../models/DataPageDropRateSchema.ts';
import { DataPageEffectSchema } from '../models/DataPageEffectSchema.ts';
import { DataPageEventSchema } from '../models/DataPageEventSchema.ts';
import { DataPageGEOrderSchema } from '../models/DataPageGEOrderSchema.ts';
import { DataPageGeOrderHistorySchema } from '../models/DataPageGeOrderHistorySchema.ts';
import { DataPageItemSchema } from '../models/DataPageItemSchema.ts';
import { DataPageLogSchema } from '../models/DataPageLogSchema.ts';
import { DataPageMapSchema } from '../models/DataPageMapSchema.ts';
import { DataPageMonsterSchema } from '../models/DataPageMonsterSchema.ts';
import { DataPageNPCItem } from '../models/DataPageNPCItem.ts';
import { DataPageNPCSchema } from '../models/DataPageNPCSchema.ts';
import { DataPageResourceSchema } from '../models/DataPageResourceSchema.ts';
import { DataPageSimpleItemSchema } from '../models/DataPageSimpleItemSchema.ts';
import { DataPageTaskFullSchema } from '../models/DataPageTaskFullSchema.ts';
import { DeleteCharacterSchema } from '../models/DeleteCharacterSchema.ts';
import { DeleteItemResponseSchema } from '../models/DeleteItemResponseSchema.ts';
import { DeleteItemSchema } from '../models/DeleteItemSchema.ts';
import { DepositWithdrawGoldSchema } from '../models/DepositWithdrawGoldSchema.ts';
import { DestinationSchema } from '../models/DestinationSchema.ts';
import { DropRateSchema } from '../models/DropRateSchema.ts';
import { DropSchema } from '../models/DropSchema.ts';
import { EffectResponseSchema } from '../models/EffectResponseSchema.ts';
import { EffectSchema } from '../models/EffectSchema.ts';
import { EffectSubtype } from '../models/EffectSubtype.ts';
import { EffectType } from '../models/EffectType.ts';
import { EquipRequestSchema } from '../models/EquipRequestSchema.ts';
import { EquipSchema } from '../models/EquipSchema.ts';
import { EquipmentResponseSchema } from '../models/EquipmentResponseSchema.ts';
import { EventContentSchema } from '../models/EventContentSchema.ts';
import { EventMapSchema } from '../models/EventMapSchema.ts';
import { EventSchema } from '../models/EventSchema.ts';
import { FightResult } from '../models/FightResult.ts';
import { FightSchema } from '../models/FightSchema.ts';
import { GEBuyOrderSchema } from '../models/GEBuyOrderSchema.ts';
import { GECancelOrderSchema } from '../models/GECancelOrderSchema.ts';
import { GECreateOrderTransactionResponseSchema } from '../models/GECreateOrderTransactionResponseSchema.ts';
import { GEOrderCreatedSchema } from '../models/GEOrderCreatedSchema.ts';
import { GEOrderCreationrSchema } from '../models/GEOrderCreationrSchema.ts';
import { GEOrderReponseSchema } from '../models/GEOrderReponseSchema.ts';
import { GEOrderSchema } from '../models/GEOrderSchema.ts';
import { GEOrderTransactionSchema } from '../models/GEOrderTransactionSchema.ts';
import { GETransactionListSchema } from '../models/GETransactionListSchema.ts';
import { GETransactionResponseSchema } from '../models/GETransactionResponseSchema.ts';
import { GETransactionSchema } from '../models/GETransactionSchema.ts';
import { GatheringSkill } from '../models/GatheringSkill.ts';
import { GeOrderHistorySchema } from '../models/GeOrderHistorySchema.ts';
import { GoldSchema } from '../models/GoldSchema.ts';
import { HTTPValidationError } from '../models/HTTPValidationError.ts';
import { InventorySlot } from '../models/InventorySlot.ts';
import { ItemResponseSchema } from '../models/ItemResponseSchema.ts';
import { ItemSchema } from '../models/ItemSchema.ts';
import { ItemSlot } from '../models/ItemSlot.ts';
import { ItemType } from '../models/ItemType.ts';
import { LogSchema } from '../models/LogSchema.ts';
import { LogType } from '../models/LogType.ts';
import { MapContentSchema } from '../models/MapContentSchema.ts';
import { MapContentType } from '../models/MapContentType.ts';
import { MapResponseSchema } from '../models/MapResponseSchema.ts';
import { MapSchema } from '../models/MapSchema.ts';
import { MonsterResponseSchema } from '../models/MonsterResponseSchema.ts';
import { MonsterSchema } from '../models/MonsterSchema.ts';
import { MyAccountDetails } from '../models/MyAccountDetails.ts';
import { MyAccountDetailsSchema } from '../models/MyAccountDetailsSchema.ts';
import { MyCharactersListSchema } from '../models/MyCharactersListSchema.ts';
import { NPCItem } from '../models/NPCItem.ts';
import { NPCResponseSchema } from '../models/NPCResponseSchema.ts';
import { NPCSchema } from '../models/NPCSchema.ts';
import { NPCType } from '../models/NPCType.ts';
import { NpcItemTransactionSchema } from '../models/NpcItemTransactionSchema.ts';
import { NpcMerchantBuySchema } from '../models/NpcMerchantBuySchema.ts';
import { NpcMerchantTransactionResponseSchema } from '../models/NpcMerchantTransactionResponseSchema.ts';
import { NpcMerchantTransactionSchema } from '../models/NpcMerchantTransactionSchema.ts';
import { RecyclingDataSchema } from '../models/RecyclingDataSchema.ts';
import { RecyclingItemsSchema } from '../models/RecyclingItemsSchema.ts';
import { RecyclingResponseSchema } from '../models/RecyclingResponseSchema.ts';
import { RecyclingSchema } from '../models/RecyclingSchema.ts';
import { ResourceResponseSchema } from '../models/ResourceResponseSchema.ts';
import { ResourceSchema } from '../models/ResourceSchema.ts';
import { ResponseSchema } from '../models/ResponseSchema.ts';
import { RewardDataResponseSchema } from '../models/RewardDataResponseSchema.ts';
import { RewardDataSchema } from '../models/RewardDataSchema.ts';
import { RewardResponseSchema } from '../models/RewardResponseSchema.ts';
import { RewardsSchema } from '../models/RewardsSchema.ts';
import { SimpleEffectSchema } from '../models/SimpleEffectSchema.ts';
import { SimpleItemSchema } from '../models/SimpleItemSchema.ts';
import { Skill } from '../models/Skill.ts';
import { SkillDataSchema } from '../models/SkillDataSchema.ts';
import { SkillInfoSchema } from '../models/SkillInfoSchema.ts';
import { SkillResponseSchema } from '../models/SkillResponseSchema.ts';
import { StatusResponseSchema } from '../models/StatusResponseSchema.ts';
import { StatusSchema } from '../models/StatusSchema.ts';
import { TaskCancelledResponseSchema } from '../models/TaskCancelledResponseSchema.ts';
import { TaskCancelledSchema } from '../models/TaskCancelledSchema.ts';
import { TaskDataSchema } from '../models/TaskDataSchema.ts';
import { TaskFullResponseSchema } from '../models/TaskFullResponseSchema.ts';
import { TaskFullSchema } from '../models/TaskFullSchema.ts';
import { TaskResponseSchema } from '../models/TaskResponseSchema.ts';
import { TaskSchema } from '../models/TaskSchema.ts';
import { TaskTradeDataSchema } from '../models/TaskTradeDataSchema.ts';
import { TaskTradeResponseSchema } from '../models/TaskTradeResponseSchema.ts';
import { TaskTradeSchema } from '../models/TaskTradeSchema.ts';
import { TaskType } from '../models/TaskType.ts';
import { TokenResponseSchema } from '../models/TokenResponseSchema.ts';
import { UnequipSchema } from '../models/UnequipSchema.ts';
import { UseItemResponseSchema } from '../models/UseItemResponseSchema.ts';
import { UseItemSchema } from '../models/UseItemSchema.ts';
import { ValidationError } from '../models/ValidationError.ts';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner.ts';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi.ts";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * Create Account
     * @param addAccountSchema
     */
    public createAccountAccountsCreatePostWithHttpInfo(addAccountSchema: AddAccountSchema, _options?: Configuration): Observable<HttpInfo<ResponseSchema>> {
        const requestContextPromise = this.requestFactory.createAccountAccountsCreatePost(addAccountSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAccountAccountsCreatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Account
     * @param addAccountSchema
     */
    public createAccountAccountsCreatePost(addAccountSchema: AddAccountSchema, _options?: Configuration): Observable<ResponseSchema> {
        return this.createAccountAccountsCreatePostWithHttpInfo(addAccountSchema, _options).pipe(map((apiResponse: HttpInfo<ResponseSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a character.
     * Get Account
     * @param account The account name.
     */
    public getAccountAccountsAccountGetWithHttpInfo(account: string, _options?: Configuration): Observable<HttpInfo<AccountDetailsSchema>> {
        const requestContextPromise = this.requestFactory.getAccountAccountsAccountGet(account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountAccountsAccountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a character.
     * Get Account
     * @param account The account name.
     */
    public getAccountAccountsAccountGet(account: string, _options?: Configuration): Observable<AccountDetailsSchema> {
        return this.getAccountAccountsAccountGetWithHttpInfo(account, _options).pipe(map((apiResponse: HttpInfo<AccountDetailsSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the achievements of a account.
     * Get Account Achievements
     * @param account The character name.
     * @param [type] Type of achievements.
     * @param [completed] Filter by completed achievements.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(account: string, type?: AchievementType, completed?: boolean, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageAccountAchievementSchema>> {
        const requestContextPromise = this.requestFactory.getAccountAchievementsAccountsAccountAchievementsGet(account, type, completed, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the achievements of a account.
     * Get Account Achievements
     * @param account The character name.
     * @param [type] Type of achievements.
     * @param [completed] Filter by completed achievements.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAccountAchievementsAccountsAccountAchievementsGet(account: string, type?: AchievementType, completed?: boolean, page?: number, size?: number, _options?: Configuration): Observable<DataPageAccountAchievementSchema> {
        return this.getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(account, type, completed, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageAccountAchievementSchema>) => apiResponse.data));
    }

}

import { AchievementsApiRequestFactory, AchievementsApiResponseProcessor} from "../apis/AchievementsApi.ts";
export class ObservableAchievementsApi {
    private requestFactory: AchievementsApiRequestFactory;
    private responseProcessor: AchievementsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AchievementsApiRequestFactory,
        responseProcessor?: AchievementsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AchievementsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AchievementsApiResponseProcessor();
    }

    /**
     * Retrieve the details of a achievement.
     * Get Achievement
     * @param code The code of the achievement.
     */
    public getAchievementAchievementsCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<AchievementResponseSchema>> {
        const requestContextPromise = this.requestFactory.getAchievementAchievementsCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAchievementAchievementsCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a achievement.
     * Get Achievement
     * @param code The code of the achievement.
     */
    public getAchievementAchievementsCodeGet(code: string, _options?: Configuration): Observable<AchievementResponseSchema> {
        return this.getAchievementAchievementsCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<AchievementResponseSchema>) => apiResponse.data));
    }

    /**
     * List of all achievements.
     * Get All Achievements
     * @param [type] Type of achievements.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllAchievementsAchievementsGetWithHttpInfo(type?: AchievementType, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageAchievementSchema>> {
        const requestContextPromise = this.requestFactory.getAllAchievementsAchievementsGet(type, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAchievementsAchievementsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of all achievements.
     * Get All Achievements
     * @param [type] Type of achievements.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllAchievementsAchievementsGet(type?: AchievementType, page?: number, size?: number, _options?: Configuration): Observable<DataPageAchievementSchema> {
        return this.getAllAchievementsAchievementsGetWithHttpInfo(type, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageAchievementSchema>) => apiResponse.data));
    }

}

import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi.ts";
export class ObservableBadgesApi {
    private requestFactory: BadgesApiRequestFactory;
    private responseProcessor: BadgesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgesApiRequestFactory,
        responseProcessor?: BadgesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BadgesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BadgesApiResponseProcessor();
    }

    /**
     * List of all badges.
     * Get All Badges
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllBadgesBadgesGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageBadgeSchema>> {
        const requestContextPromise = this.requestFactory.getAllBadgesBadgesGet(page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBadgesBadgesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of all badges.
     * Get All Badges
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllBadgesBadgesGet(page?: number, size?: number, _options?: Configuration): Observable<DataPageBadgeSchema> {
        return this.getAllBadgesBadgesGetWithHttpInfo(page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageBadgeSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a badge.
     * Get Badge
     * @param code The code of the achievement.
     */
    public getBadgeBadgesCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<BadgeResponseSchema>> {
        const requestContextPromise = this.requestFactory.getBadgeBadgesCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBadgeBadgesCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a badge.
     * Get Badge
     * @param code The code of the achievement.
     */
    public getBadgeBadgesCodeGet(code: string, _options?: Configuration): Observable<BadgeResponseSchema> {
        return this.getBadgeBadgesCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<BadgeResponseSchema>) => apiResponse.data));
    }

}

import { CharactersApiRequestFactory, CharactersApiResponseProcessor} from "../apis/CharactersApi.ts";
export class ObservableCharactersApi {
    private requestFactory: CharactersApiRequestFactory;
    private responseProcessor: CharactersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CharactersApiRequestFactory,
        responseProcessor?: CharactersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CharactersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CharactersApiResponseProcessor();
    }

    /**
     * Create new character on your account. You can create up to 5 characters.
     * Create Character
     * @param addCharacterSchema
     */
    public createCharacterCharactersCreatePostWithHttpInfo(addCharacterSchema: AddCharacterSchema, _options?: Configuration): Observable<HttpInfo<CharacterResponseSchema>> {
        const requestContextPromise = this.requestFactory.createCharacterCharactersCreatePost(addCharacterSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCharacterCharactersCreatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new character on your account. You can create up to 5 characters.
     * Create Character
     * @param addCharacterSchema
     */
    public createCharacterCharactersCreatePost(addCharacterSchema: AddCharacterSchema, _options?: Configuration): Observable<CharacterResponseSchema> {
        return this.createCharacterCharactersCreatePostWithHttpInfo(addCharacterSchema, _options).pipe(map((apiResponse: HttpInfo<CharacterResponseSchema>) => apiResponse.data));
    }

    /**
     * Delete character on your account.
     * Delete Character
     * @param deleteCharacterSchema
     */
    public deleteCharacterCharactersDeletePostWithHttpInfo(deleteCharacterSchema: DeleteCharacterSchema, _options?: Configuration): Observable<HttpInfo<CharacterResponseSchema>> {
        const requestContextPromise = this.requestFactory.deleteCharacterCharactersDeletePost(deleteCharacterSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCharacterCharactersDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete character on your account.
     * Delete Character
     * @param deleteCharacterSchema
     */
    public deleteCharacterCharactersDeletePost(deleteCharacterSchema: DeleteCharacterSchema, _options?: Configuration): Observable<CharacterResponseSchema> {
        return this.deleteCharacterCharactersDeletePostWithHttpInfo(deleteCharacterSchema, _options).pipe(map((apiResponse: HttpInfo<CharacterResponseSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a character.
     * Get Character
     * @param name The character name.
     */
    public getCharacterCharactersNameGetWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<CharacterResponseSchema>> {
        const requestContextPromise = this.requestFactory.getCharacterCharactersNameGet(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCharacterCharactersNameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a character.
     * Get Character
     * @param name The character name.
     */
    public getCharacterCharactersNameGet(name: string, _options?: Configuration): Observable<CharacterResponseSchema> {
        return this.getCharacterCharactersNameGetWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<CharacterResponseSchema>) => apiResponse.data));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Return the status of the game server.
     * Get Status
     */
    public getStatusGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<StatusResponseSchema>> {
        const requestContextPromise = this.requestFactory.getStatusGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return the status of the game server.
     * Get Status
     */
    public getStatusGet(_options?: Configuration): Observable<StatusResponseSchema> {
        return this.getStatusGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<StatusResponseSchema>) => apiResponse.data));
    }

}

import { EffectsApiRequestFactory, EffectsApiResponseProcessor} from "../apis/EffectsApi.ts";
export class ObservableEffectsApi {
    private requestFactory: EffectsApiRequestFactory;
    private responseProcessor: EffectsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EffectsApiRequestFactory,
        responseProcessor?: EffectsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EffectsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EffectsApiResponseProcessor();
    }

    /**
     * List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game.
     * Get All Effects
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEffectsEffectsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageEffectSchema>> {
        const requestContextPromise = this.requestFactory.getAllEffectsEffectsGet(page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllEffectsEffectsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game.
     * Get All Effects
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEffectsEffectsGet(page?: number, size?: number, _options?: Configuration): Observable<DataPageEffectSchema> {
        return this.getAllEffectsEffectsGetWithHttpInfo(page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageEffectSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a badge.
     * Get Effect
     * @param code The code of the achievement.
     */
    public getEffectEffectsCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<EffectResponseSchema>> {
        const requestContextPromise = this.requestFactory.getEffectEffectsCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEffectEffectsCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a badge.
     * Get Effect
     * @param code The code of the achievement.
     */
    public getEffectEffectsCodeGet(code: string, _options?: Configuration): Observable<EffectResponseSchema> {
        return this.getEffectEffectsCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<EffectResponseSchema>) => apiResponse.data));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi.ts";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Fetch active events details.
     * Get All Active Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllActiveEventsEventsActiveGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageActiveEventSchema>> {
        const requestContextPromise = this.requestFactory.getAllActiveEventsEventsActiveGet(page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllActiveEventsEventsActiveGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch active events details.
     * Get All Active Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllActiveEventsEventsActiveGet(page?: number, size?: number, _options?: Configuration): Observable<DataPageActiveEventSchema> {
        return this.getAllActiveEventsEventsActiveGetWithHttpInfo(page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageActiveEventSchema>) => apiResponse.data));
    }

    /**
     * Fetch events details.
     * Get All Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEventsEventsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageEventSchema>> {
        const requestContextPromise = this.requestFactory.getAllEventsEventsGet(page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllEventsEventsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch events details.
     * Get All Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEventsEventsGet(page?: number, size?: number, _options?: Configuration): Observable<DataPageEventSchema> {
        return this.getAllEventsEventsGetWithHttpInfo(page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageEventSchema>) => apiResponse.data));
    }

}

import { GrandExchangeApiRequestFactory, GrandExchangeApiResponseProcessor} from "../apis/GrandExchangeApi.ts";
export class ObservableGrandExchangeApi {
    private requestFactory: GrandExchangeApiRequestFactory;
    private responseProcessor: GrandExchangeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GrandExchangeApiRequestFactory,
        responseProcessor?: GrandExchangeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GrandExchangeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GrandExchangeApiResponseProcessor();
    }

    /**
     * Fetch the sales history of the item for the last 7 days.
     * Get Ge Sell History
     * @param code The code of the item.
     * @param [seller] The seller (account name) of the item.
     * @param [buyer] The buyer (account name) of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellHistoryGrandexchangeHistoryCodeGetWithHttpInfo(code: string, seller?: string, buyer?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageGeOrderHistorySchema>> {
        const requestContextPromise = this.requestFactory.getGeSellHistoryGrandexchangeHistoryCodeGet(code, seller, buyer, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGeSellHistoryGrandexchangeHistoryCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch the sales history of the item for the last 7 days.
     * Get Ge Sell History
     * @param code The code of the item.
     * @param [seller] The seller (account name) of the item.
     * @param [buyer] The buyer (account name) of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellHistoryGrandexchangeHistoryCodeGet(code: string, seller?: string, buyer?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageGeOrderHistorySchema> {
        return this.getGeSellHistoryGrandexchangeHistoryCodeGetWithHttpInfo(code, seller, buyer, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageGeOrderHistorySchema>) => apiResponse.data));
    }

    /**
     * Retrieve the sell order of a item.
     * Get Ge Sell Order
     * @param id The id of the order.
     */
    public getGeSellOrderGrandexchangeOrdersIdGetWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<GEOrderReponseSchema>> {
        const requestContextPromise = this.requestFactory.getGeSellOrderGrandexchangeOrdersIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGeSellOrderGrandexchangeOrdersIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the sell order of a item.
     * Get Ge Sell Order
     * @param id The id of the order.
     */
    public getGeSellOrderGrandexchangeOrdersIdGet(id: string, _options?: Configuration): Observable<GEOrderReponseSchema> {
        return this.getGeSellOrderGrandexchangeOrdersIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<GEOrderReponseSchema>) => apiResponse.data));
    }

    /**
     * Fetch all sell orders.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [seller] The seller (account name) of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersGrandexchangeOrdersGetWithHttpInfo(code?: string, seller?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageGEOrderSchema>> {
        const requestContextPromise = this.requestFactory.getGeSellOrdersGrandexchangeOrdersGet(code, seller, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGeSellOrdersGrandexchangeOrdersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch all sell orders.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [seller] The seller (account name) of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersGrandexchangeOrdersGet(code?: string, seller?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageGEOrderSchema> {
        return this.getGeSellOrdersGrandexchangeOrdersGetWithHttpInfo(code, seller, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageGEOrderSchema>) => apiResponse.data));
    }

}

import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi.ts";
export class ObservableItemsApi {
    private requestFactory: ItemsApiRequestFactory;
    private responseProcessor: ItemsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemsApiRequestFactory,
        responseProcessor?: ItemsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemsApiResponseProcessor();
    }

    /**
     * Fetch items details.
     * Get All Items
     * @param [minLevel] Minimum level items.
     * @param [maxLevel] Maximum level items.
     * @param [name] Name of the item.
     * @param [type] Type of items.
     * @param [craftSkill] Skill to craft items.
     * @param [craftMaterial] Item code of items used as material for crafting.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllItemsItemsGetWithHttpInfo(minLevel?: number, maxLevel?: number, name?: string, type?: ItemType, craftSkill?: CraftSkill, craftMaterial?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageItemSchema>> {
        const requestContextPromise = this.requestFactory.getAllItemsItemsGet(minLevel, maxLevel, name, type, craftSkill, craftMaterial, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllItemsItemsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch items details.
     * Get All Items
     * @param [minLevel] Minimum level items.
     * @param [maxLevel] Maximum level items.
     * @param [name] Name of the item.
     * @param [type] Type of items.
     * @param [craftSkill] Skill to craft items.
     * @param [craftMaterial] Item code of items used as material for crafting.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllItemsItemsGet(minLevel?: number, maxLevel?: number, name?: string, type?: ItemType, craftSkill?: CraftSkill, craftMaterial?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageItemSchema> {
        return this.getAllItemsItemsGetWithHttpInfo(minLevel, maxLevel, name, type, craftSkill, craftMaterial, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageItemSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a item.
     * Get Item
     * @param code The code of the item.
     */
    public getItemItemsCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<ItemResponseSchema>> {
        const requestContextPromise = this.requestFactory.getItemItemsCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemItemsCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a item.
     * Get Item
     * @param code The code of the item.
     */
    public getItemItemsCodeGet(code: string, _options?: Configuration): Observable<ItemResponseSchema> {
        return this.getItemItemsCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ItemResponseSchema>) => apiResponse.data));
    }

}

import { LeaderboardApiRequestFactory, LeaderboardApiResponseProcessor} from "../apis/LeaderboardApi.ts";
export class ObservableLeaderboardApi {
    private requestFactory: LeaderboardApiRequestFactory;
    private responseProcessor: LeaderboardApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeaderboardApiRequestFactory,
        responseProcessor?: LeaderboardApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeaderboardApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeaderboardApiResponseProcessor();
    }

    /**
     * Fetch leaderboard details.
     * Get Accounts Leaderboard
     * @param [sort] Default sort by achievements points.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(sort?: AccountLeaderboardType, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageAccountLeaderboardSchema>> {
        const requestContextPromise = this.requestFactory.getAccountsLeaderboardLeaderboardAccountsGet(sort, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch leaderboard details.
     * Get Accounts Leaderboard
     * @param [sort] Default sort by achievements points.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAccountsLeaderboardLeaderboardAccountsGet(sort?: AccountLeaderboardType, page?: number, size?: number, _options?: Configuration): Observable<DataPageAccountLeaderboardSchema> {
        return this.getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(sort, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageAccountLeaderboardSchema>) => apiResponse.data));
    }

    /**
     * Fetch leaderboard details.
     * Get Characters Leaderboard
     * @param [sort] Default sort by combat total XP.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(sort?: CharacterLeaderboardType, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageCharacterLeaderboardSchema>> {
        const requestContextPromise = this.requestFactory.getCharactersLeaderboardLeaderboardCharactersGet(sort, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch leaderboard details.
     * Get Characters Leaderboard
     * @param [sort] Default sort by combat total XP.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getCharactersLeaderboardLeaderboardCharactersGet(sort?: CharacterLeaderboardType, page?: number, size?: number, _options?: Configuration): Observable<DataPageCharacterLeaderboardSchema> {
        return this.getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(sort, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageCharacterLeaderboardSchema>) => apiResponse.data));
    }

}

import { MapsApiRequestFactory, MapsApiResponseProcessor} from "../apis/MapsApi.ts";
export class ObservableMapsApi {
    private requestFactory: MapsApiRequestFactory;
    private responseProcessor: MapsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MapsApiRequestFactory,
        responseProcessor?: MapsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MapsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MapsApiResponseProcessor();
    }

    /**
     * Fetch maps details.
     * Get All Maps
     * @param [contentType] Type of content on the map.
     * @param [contentCode] Content code on the map.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllMapsMapsGetWithHttpInfo(contentType?: MapContentType, contentCode?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageMapSchema>> {
        const requestContextPromise = this.requestFactory.getAllMapsMapsGet(contentType, contentCode, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMapsMapsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch maps details.
     * Get All Maps
     * @param [contentType] Type of content on the map.
     * @param [contentCode] Content code on the map.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllMapsMapsGet(contentType?: MapContentType, contentCode?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageMapSchema> {
        return this.getAllMapsMapsGetWithHttpInfo(contentType, contentCode, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageMapSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a map.
     * Get Map
     * @param x The position x of the map.
     * @param y The position X of the map.
     */
    public getMapMapsXYGetWithHttpInfo(x: number, y: number, _options?: Configuration): Observable<HttpInfo<MapResponseSchema>> {
        const requestContextPromise = this.requestFactory.getMapMapsXYGet(x, y, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMapMapsXYGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a map.
     * Get Map
     * @param x The position x of the map.
     * @param y The position X of the map.
     */
    public getMapMapsXYGet(x: number, y: number, _options?: Configuration): Observable<MapResponseSchema> {
        return this.getMapMapsXYGetWithHttpInfo(x, y, _options).pipe(map((apiResponse: HttpInfo<MapResponseSchema>) => apiResponse.data));
    }

}

import { MonstersApiRequestFactory, MonstersApiResponseProcessor} from "../apis/MonstersApi.ts";
export class ObservableMonstersApi {
    private requestFactory: MonstersApiRequestFactory;
    private responseProcessor: MonstersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MonstersApiRequestFactory,
        responseProcessor?: MonstersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MonstersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MonstersApiResponseProcessor();
    }

    /**
     * Fetch monsters details.
     * Get All Monsters
     * @param [minLevel] Monster minimum level.
     * @param [maxLevel] Monster maximum level.
     * @param [drop] Item code of the drop.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllMonstersMonstersGetWithHttpInfo(minLevel?: number, maxLevel?: number, drop?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageMonsterSchema>> {
        const requestContextPromise = this.requestFactory.getAllMonstersMonstersGet(minLevel, maxLevel, drop, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMonstersMonstersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch monsters details.
     * Get All Monsters
     * @param [minLevel] Monster minimum level.
     * @param [maxLevel] Monster maximum level.
     * @param [drop] Item code of the drop.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllMonstersMonstersGet(minLevel?: number, maxLevel?: number, drop?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageMonsterSchema> {
        return this.getAllMonstersMonstersGetWithHttpInfo(minLevel, maxLevel, drop, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageMonsterSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a monster.
     * Get Monster
     * @param code The code of the monster.
     */
    public getMonsterMonstersCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<MonsterResponseSchema>> {
        const requestContextPromise = this.requestFactory.getMonsterMonstersCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMonsterMonstersCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a monster.
     * Get Monster
     * @param code The code of the monster.
     */
    public getMonsterMonstersCodeGet(code: string, _options?: Configuration): Observable<MonsterResponseSchema> {
        return this.getMonsterMonstersCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<MonsterResponseSchema>) => apiResponse.data));
    }

}

import { MyAccountApiRequestFactory, MyAccountApiResponseProcessor} from "../apis/MyAccountApi.ts";
export class ObservableMyAccountApi {
    private requestFactory: MyAccountApiRequestFactory;
    private responseProcessor: MyAccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MyAccountApiRequestFactory,
        responseProcessor?: MyAccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MyAccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MyAccountApiResponseProcessor();
    }

    /**
     * Change your account password. Changing the password reset the account token.
     * Change Password
     * @param changePassword
     */
    public changePasswordMyChangePasswordPostWithHttpInfo(changePassword: ChangePassword, _options?: Configuration): Observable<HttpInfo<ResponseSchema>> {
        const requestContextPromise = this.requestFactory.changePasswordMyChangePasswordPost(changePassword, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changePasswordMyChangePasswordPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change your account password. Changing the password reset the account token.
     * Change Password
     * @param changePassword
     */
    public changePasswordMyChangePasswordPost(changePassword: ChangePassword, _options?: Configuration): Observable<ResponseSchema> {
        return this.changePasswordMyChangePasswordPostWithHttpInfo(changePassword, _options).pipe(map((apiResponse: HttpInfo<ResponseSchema>) => apiResponse.data));
    }

    /**
     * Fetch account details.
     * Get Account Details
     */
    public getAccountDetailsMyDetailsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<MyAccountDetailsSchema>> {
        const requestContextPromise = this.requestFactory.getAccountDetailsMyDetailsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountDetailsMyDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch account details.
     * Get Account Details
     */
    public getAccountDetailsMyDetailsGet(_options?: Configuration): Observable<MyAccountDetailsSchema> {
        return this.getAccountDetailsMyDetailsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MyAccountDetailsSchema>) => apiResponse.data));
    }

    /**
     * Fetch bank details.
     * Get Bank Details
     */
    public getBankDetailsMyBankGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<BankResponseSchema>> {
        const requestContextPromise = this.requestFactory.getBankDetailsMyBankGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBankDetailsMyBankGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch bank details.
     * Get Bank Details
     */
    public getBankDetailsMyBankGet(_options?: Configuration): Observable<BankResponseSchema> {
        return this.getBankDetailsMyBankGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BankResponseSchema>) => apiResponse.data));
    }

    /**
     * Fetch all items in your bank.
     * Get Bank Items
     * @param [itemCode] Item to search in your bank.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getBankItemsMyBankItemsGetWithHttpInfo(itemCode?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageSimpleItemSchema>> {
        const requestContextPromise = this.requestFactory.getBankItemsMyBankItemsGet(itemCode, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBankItemsMyBankItemsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch all items in your bank.
     * Get Bank Items
     * @param [itemCode] Item to search in your bank.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getBankItemsMyBankItemsGet(itemCode?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageSimpleItemSchema> {
        return this.getBankItemsMyBankItemsGetWithHttpInfo(itemCode, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageSimpleItemSchema>) => apiResponse.data));
    }

    /**
     * Fetch your sales history of the last 7 days.
     * Get Ge Sell History
     * @param [id] Order ID to search in your history.
     * @param [code] Item to search in your history.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellHistoryMyGrandexchangeHistoryGetWithHttpInfo(id?: string, code?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageGeOrderHistorySchema>> {
        const requestContextPromise = this.requestFactory.getGeSellHistoryMyGrandexchangeHistoryGet(id, code, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGeSellHistoryMyGrandexchangeHistoryGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch your sales history of the last 7 days.
     * Get Ge Sell History
     * @param [id] Order ID to search in your history.
     * @param [code] Item to search in your history.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellHistoryMyGrandexchangeHistoryGet(id?: string, code?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageGeOrderHistorySchema> {
        return this.getGeSellHistoryMyGrandexchangeHistoryGetWithHttpInfo(id, code, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageGeOrderHistorySchema>) => apiResponse.data));
    }

    /**
     * Fetch your sell orders details.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersMyGrandexchangeOrdersGetWithHttpInfo(code?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageGEOrderSchema>> {
        const requestContextPromise = this.requestFactory.getGeSellOrdersMyGrandexchangeOrdersGet(code, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGeSellOrdersMyGrandexchangeOrdersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch your sell orders details.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersMyGrandexchangeOrdersGet(code?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageGEOrderSchema> {
        return this.getGeSellOrdersMyGrandexchangeOrdersGetWithHttpInfo(code, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageGEOrderSchema>) => apiResponse.data));
    }

}

import { MyCharactersApiRequestFactory, MyCharactersApiResponseProcessor} from "../apis/MyCharactersApi.ts";
export class ObservableMyCharactersApi {
    private requestFactory: MyCharactersApiRequestFactory;
    private responseProcessor: MyCharactersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MyCharactersApiRequestFactory,
        responseProcessor?: MyCharactersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MyCharactersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MyCharactersApiResponseProcessor();
    }

    /**
     * Accepting a new task.
     * Action Accept New Task
     * @param name Name of your character.
     */
    public actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<TaskResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionAcceptNewTaskMyNameActionTaskNewPost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepting a new task.
     * Action Accept New Task
     * @param name Name of your character.
     */
    public actionAcceptNewTaskMyNameActionTaskNewPost(name: string, _options?: Configuration): Observable<TaskResponseSchema> {
        return this.actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<TaskResponseSchema>) => apiResponse.data));
    }

    /**
     * Buy a 20 slots bank expansion.
     * Action Buy Bank Expansion
     * @param name Name of your character.
     */
    public actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<BankExtensionTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionBuyBankExpansionMyNameActionBankBuyExpansionPost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Buy a 20 slots bank expansion.
     * Action Buy Bank Expansion
     * @param name Name of your character.
     */
    public actionBuyBankExpansionMyNameActionBankBuyExpansionPost(name: string, _options?: Configuration): Observable<BankExtensionTransactionResponseSchema> {
        return this.actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<BankExtensionTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Complete a task.
     * Action Complete Task
     * @param name Name of your character.
     */
    public actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<RewardDataResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionCompleteTaskMyNameActionTaskCompletePost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Complete a task.
     * Action Complete Task
     * @param name Name of your character.
     */
    public actionCompleteTaskMyNameActionTaskCompletePost(name: string, _options?: Configuration): Observable<RewardDataResponseSchema> {
        return this.actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<RewardDataResponseSchema>) => apiResponse.data));
    }

    /**
     * Crafting an item. The character must be on a map with a workshop.
     * Action Crafting
     * @param name Name of your character.
     * @param craftingSchema
     */
    public actionCraftingMyNameActionCraftingPostWithHttpInfo(name: string, craftingSchema: CraftingSchema, _options?: Configuration): Observable<HttpInfo<SkillResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionCraftingMyNameActionCraftingPost(name, craftingSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionCraftingMyNameActionCraftingPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Crafting an item. The character must be on a map with a workshop.
     * Action Crafting
     * @param name Name of your character.
     * @param craftingSchema
     */
    public actionCraftingMyNameActionCraftingPost(name: string, craftingSchema: CraftingSchema, _options?: Configuration): Observable<SkillResponseSchema> {
        return this.actionCraftingMyNameActionCraftingPostWithHttpInfo(name, craftingSchema, _options).pipe(map((apiResponse: HttpInfo<SkillResponseSchema>) => apiResponse.data));
    }

    /**
     * Delete an item from your character\'s inventory.
     * Action Delete Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDeleteItemMyNameActionDeletePostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<HttpInfo<DeleteItemResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionDeleteItemMyNameActionDeletePost(name, simpleItemSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionDeleteItemMyNameActionDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an item from your character\'s inventory.
     * Action Delete Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDeleteItemMyNameActionDeletePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<DeleteItemResponseSchema> {
        return this.actionDeleteItemMyNameActionDeletePostWithHttpInfo(name, simpleItemSchema, _options).pipe(map((apiResponse: HttpInfo<DeleteItemResponseSchema>) => apiResponse.data));
    }

    /**
     * Deposit gold in a bank on the character\'s map.
     * Action Deposit Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Observable<HttpInfo<BankGoldTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionDepositBankGoldMyNameActionBankDepositGoldPost(name, depositWithdrawGoldSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deposit gold in a bank on the character\'s map.
     * Action Deposit Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionDepositBankGoldMyNameActionBankDepositGoldPost(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Observable<BankGoldTransactionResponseSchema> {
        return this.actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(name, depositWithdrawGoldSchema, _options).pipe(map((apiResponse: HttpInfo<BankGoldTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Deposit an item in a bank on the character\'s map.
     * Action Deposit Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDepositBankMyNameActionBankDepositPostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<HttpInfo<BankItemTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionDepositBankMyNameActionBankDepositPost(name, simpleItemSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionDepositBankMyNameActionBankDepositPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deposit an item in a bank on the character\'s map.
     * Action Deposit Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDepositBankMyNameActionBankDepositPost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<BankItemTransactionResponseSchema> {
        return this.actionDepositBankMyNameActionBankDepositPostWithHttpInfo(name, simpleItemSchema, _options).pipe(map((apiResponse: HttpInfo<BankItemTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Equip an item on your character.
     * Action Equip Item
     * @param name Name of your character.
     * @param equipSchema
     */
    public actionEquipItemMyNameActionEquipPostWithHttpInfo(name: string, equipSchema: EquipSchema, _options?: Configuration): Observable<HttpInfo<EquipmentResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionEquipItemMyNameActionEquipPost(name, equipSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionEquipItemMyNameActionEquipPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Equip an item on your character.
     * Action Equip Item
     * @param name Name of your character.
     * @param equipSchema
     */
    public actionEquipItemMyNameActionEquipPost(name: string, equipSchema: EquipSchema, _options?: Configuration): Observable<EquipmentResponseSchema> {
        return this.actionEquipItemMyNameActionEquipPostWithHttpInfo(name, equipSchema, _options).pipe(map((apiResponse: HttpInfo<EquipmentResponseSchema>) => apiResponse.data));
    }

    /**
     * Start a fight against a monster on the character\'s map.
     * Action Fight
     * @param name Name of your character.
     */
    public actionFightMyNameActionFightPostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<CharacterFightResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionFightMyNameActionFightPost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionFightMyNameActionFightPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start a fight against a monster on the character\'s map.
     * Action Fight
     * @param name Name of your character.
     */
    public actionFightMyNameActionFightPost(name: string, _options?: Configuration): Observable<CharacterFightResponseSchema> {
        return this.actionFightMyNameActionFightPostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<CharacterFightResponseSchema>) => apiResponse.data));
    }

    /**
     * Harvest a resource on the character\'s map.
     * Action Gathering
     * @param name Name of your character.
     */
    public actionGatheringMyNameActionGatheringPostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<SkillResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionGatheringMyNameActionGatheringPost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionGatheringMyNameActionGatheringPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Harvest a resource on the character\'s map.
     * Action Gathering
     * @param name Name of your character.
     */
    public actionGatheringMyNameActionGatheringPost(name: string, _options?: Configuration): Observable<SkillResponseSchema> {
        return this.actionGatheringMyNameActionGatheringPostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<SkillResponseSchema>) => apiResponse.data));
    }

    /**
     * Buy an item at the Grand Exchange on the character\'s map.
     * Action Ge Buy Item
     * @param name Name of your character.
     * @param gEBuyOrderSchema
     */
    public actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(name: string, gEBuyOrderSchema: GEBuyOrderSchema, _options?: Configuration): Observable<HttpInfo<GETransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionGeBuyItemMyNameActionGrandexchangeBuyPost(name, gEBuyOrderSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Buy an item at the Grand Exchange on the character\'s map.
     * Action Ge Buy Item
     * @param name Name of your character.
     * @param gEBuyOrderSchema
     */
    public actionGeBuyItemMyNameActionGrandexchangeBuyPost(name: string, gEBuyOrderSchema: GEBuyOrderSchema, _options?: Configuration): Observable<GETransactionResponseSchema> {
        return this.actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(name, gEBuyOrderSchema, _options).pipe(map((apiResponse: HttpInfo<GETransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Cancel a sell order at the Grand Exchange on the character\'s map.
     * Action Ge Cancel Sell Order
     * @param name Name of your character.
     * @param gECancelOrderSchema
     */
    public actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(name: string, gECancelOrderSchema: GECancelOrderSchema, _options?: Configuration): Observable<HttpInfo<GETransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(name, gECancelOrderSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel a sell order at the Grand Exchange on the character\'s map.
     * Action Ge Cancel Sell Order
     * @param name Name of your character.
     * @param gECancelOrderSchema
     */
    public actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(name: string, gECancelOrderSchema: GECancelOrderSchema, _options?: Configuration): Observable<GETransactionResponseSchema> {
        return this.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(name, gECancelOrderSchema, _options).pipe(map((apiResponse: HttpInfo<GETransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.
     * Action Ge Create Sell Order
     * @param name Name of your character.
     * @param gEOrderCreationrSchema
     */
    public actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(name: string, gEOrderCreationrSchema: GEOrderCreationrSchema, _options?: Configuration): Observable<HttpInfo<GECreateOrderTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(name, gEOrderCreationrSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.
     * Action Ge Create Sell Order
     * @param name Name of your character.
     * @param gEOrderCreationrSchema
     */
    public actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(name: string, gEOrderCreationrSchema: GEOrderCreationrSchema, _options?: Configuration): Observable<GECreateOrderTransactionResponseSchema> {
        return this.actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(name, gEOrderCreationrSchema, _options).pipe(map((apiResponse: HttpInfo<GECreateOrderTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Moves a character on the map using the map\'s X and Y position.
     * Action Move
     * @param name Name of your character.
     * @param destinationSchema
     */
    public actionMoveMyNameActionMovePostWithHttpInfo(name: string, destinationSchema: DestinationSchema, _options?: Configuration): Observable<HttpInfo<CharacterMovementResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionMoveMyNameActionMovePost(name, destinationSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionMoveMyNameActionMovePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Moves a character on the map using the map\'s X and Y position.
     * Action Move
     * @param name Name of your character.
     * @param destinationSchema
     */
    public actionMoveMyNameActionMovePost(name: string, destinationSchema: DestinationSchema, _options?: Configuration): Observable<CharacterMovementResponseSchema> {
        return this.actionMoveMyNameActionMovePostWithHttpInfo(name, destinationSchema, _options).pipe(map((apiResponse: HttpInfo<CharacterMovementResponseSchema>) => apiResponse.data));
    }

    /**
     * Buy an item from an NPC on the character\'s map.
     * Action Npc Buy Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Observable<HttpInfo<NpcMerchantTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionNpcBuyItemMyNameActionNpcBuyPost(name, npcMerchantBuySchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Buy an item from an NPC on the character\'s map.
     * Action Npc Buy Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcBuyItemMyNameActionNpcBuyPost(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Observable<NpcMerchantTransactionResponseSchema> {
        return this.actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(name, npcMerchantBuySchema, _options).pipe(map((apiResponse: HttpInfo<NpcMerchantTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Sell an item from an NPC on the character\'s map.
     * Action Npc Sell Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Observable<HttpInfo<NpcMerchantTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionNpcSellItemMyNameActionNpcSellPost(name, npcMerchantBuySchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sell an item from an NPC on the character\'s map.
     * Action Npc Sell Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcSellItemMyNameActionNpcSellPost(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Observable<NpcMerchantTransactionResponseSchema> {
        return this.actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(name, npcMerchantBuySchema, _options).pipe(map((apiResponse: HttpInfo<NpcMerchantTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).
     * Action Recycling
     * @param name Name of your character.
     * @param recyclingSchema
     */
    public actionRecyclingMyNameActionRecyclingPostWithHttpInfo(name: string, recyclingSchema: RecyclingSchema, _options?: Configuration): Observable<HttpInfo<RecyclingResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionRecyclingMyNameActionRecyclingPost(name, recyclingSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionRecyclingMyNameActionRecyclingPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).
     * Action Recycling
     * @param name Name of your character.
     * @param recyclingSchema
     */
    public actionRecyclingMyNameActionRecyclingPost(name: string, recyclingSchema: RecyclingSchema, _options?: Configuration): Observable<RecyclingResponseSchema> {
        return this.actionRecyclingMyNameActionRecyclingPostWithHttpInfo(name, recyclingSchema, _options).pipe(map((apiResponse: HttpInfo<RecyclingResponseSchema>) => apiResponse.data));
    }

    /**
     * Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)
     * Action Rest
     * @param name Name of your character.
     */
    public actionRestMyNameActionRestPostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<CharacterRestResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionRestMyNameActionRestPost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionRestMyNameActionRestPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)
     * Action Rest
     * @param name Name of your character.
     */
    public actionRestMyNameActionRestPost(name: string, _options?: Configuration): Observable<CharacterRestResponseSchema> {
        return this.actionRestMyNameActionRestPostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<CharacterRestResponseSchema>) => apiResponse.data));
    }

    /**
     * Cancel a task for 1 tasks coin.
     * Action Task Cancel
     * @param name Name of your character.
     */
    public actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<TaskCancelledResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionTaskCancelMyNameActionTaskCancelPost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel a task for 1 tasks coin.
     * Action Task Cancel
     * @param name Name of your character.
     */
    public actionTaskCancelMyNameActionTaskCancelPost(name: string, _options?: Configuration): Observable<TaskCancelledResponseSchema> {
        return this.actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<TaskCancelledResponseSchema>) => apiResponse.data));
    }

    /**
     * Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.
     * Action Task Exchange
     * @param name Name of your character.
     */
    public actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<RewardDataResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionTaskExchangeMyNameActionTaskExchangePost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.
     * Action Task Exchange
     * @param name Name of your character.
     */
    public actionTaskExchangeMyNameActionTaskExchangePost(name: string, _options?: Configuration): Observable<RewardDataResponseSchema> {
        return this.actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<RewardDataResponseSchema>) => apiResponse.data));
    }

    /**
     * Trading items with a Tasks Master.
     * Action Task Trade
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<HttpInfo<TaskTradeResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionTaskTradeMyNameActionTaskTradePost(name, simpleItemSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Trading items with a Tasks Master.
     * Action Task Trade
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionTaskTradeMyNameActionTaskTradePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<TaskTradeResponseSchema> {
        return this.actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(name, simpleItemSchema, _options).pipe(map((apiResponse: HttpInfo<TaskTradeResponseSchema>) => apiResponse.data));
    }

    /**
     * Unequip an item on your character.
     * Action Unequip Item
     * @param name Name of your character.
     * @param unequipSchema
     */
    public actionUnequipItemMyNameActionUnequipPostWithHttpInfo(name: string, unequipSchema: UnequipSchema, _options?: Configuration): Observable<HttpInfo<EquipmentResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionUnequipItemMyNameActionUnequipPost(name, unequipSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionUnequipItemMyNameActionUnequipPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unequip an item on your character.
     * Action Unequip Item
     * @param name Name of your character.
     * @param unequipSchema
     */
    public actionUnequipItemMyNameActionUnequipPost(name: string, unequipSchema: UnequipSchema, _options?: Configuration): Observable<EquipmentResponseSchema> {
        return this.actionUnequipItemMyNameActionUnequipPostWithHttpInfo(name, unequipSchema, _options).pipe(map((apiResponse: HttpInfo<EquipmentResponseSchema>) => apiResponse.data));
    }

    /**
     * Use an item as a consumable.
     * Action Use Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionUseItemMyNameActionUsePostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<HttpInfo<UseItemResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionUseItemMyNameActionUsePost(name, simpleItemSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionUseItemMyNameActionUsePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use an item as a consumable.
     * Action Use Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionUseItemMyNameActionUsePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<UseItemResponseSchema> {
        return this.actionUseItemMyNameActionUsePostWithHttpInfo(name, simpleItemSchema, _options).pipe(map((apiResponse: HttpInfo<UseItemResponseSchema>) => apiResponse.data));
    }

    /**
     * Withdraw gold from your bank.
     * Action Withdraw Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Observable<HttpInfo<BankGoldTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(name, depositWithdrawGoldSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Withdraw gold from your bank.
     * Action Withdraw Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Observable<BankGoldTransactionResponseSchema> {
        return this.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(name, depositWithdrawGoldSchema, _options).pipe(map((apiResponse: HttpInfo<BankGoldTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * Take an item from your bank and put it in the character\'s inventory.
     * Action Withdraw Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<HttpInfo<BankItemTransactionResponseSchema>> {
        const requestContextPromise = this.requestFactory.actionWithdrawBankMyNameActionBankWithdrawPost(name, simpleItemSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Take an item from your bank and put it in the character\'s inventory.
     * Action Withdraw Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionWithdrawBankMyNameActionBankWithdrawPost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Observable<BankItemTransactionResponseSchema> {
        return this.actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(name, simpleItemSchema, _options).pipe(map((apiResponse: HttpInfo<BankItemTransactionResponseSchema>) => apiResponse.data));
    }

    /**
     * History of the last 100 actions of all your characters.
     * Get All Characters Logs
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllCharactersLogsMyLogsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageLogSchema>> {
        const requestContextPromise = this.requestFactory.getAllCharactersLogsMyLogsGet(page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllCharactersLogsMyLogsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * History of the last 100 actions of all your characters.
     * Get All Characters Logs
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllCharactersLogsMyLogsGet(page?: number, size?: number, _options?: Configuration): Observable<DataPageLogSchema> {
        return this.getAllCharactersLogsMyLogsGetWithHttpInfo(page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageLogSchema>) => apiResponse.data));
    }

    /**
     * List of your characters.
     * Get My Characters
     */
    public getMyCharactersMyCharactersGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<MyCharactersListSchema>> {
        const requestContextPromise = this.requestFactory.getMyCharactersMyCharactersGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyCharactersMyCharactersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of your characters.
     * Get My Characters
     */
    public getMyCharactersMyCharactersGet(_options?: Configuration): Observable<MyCharactersListSchema> {
        return this.getMyCharactersMyCharactersGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MyCharactersListSchema>) => apiResponse.data));
    }

}

import { NPCsApiRequestFactory, NPCsApiResponseProcessor} from "../apis/NPCsApi.ts";
export class ObservableNPCsApi {
    private requestFactory: NPCsApiRequestFactory;
    private responseProcessor: NPCsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NPCsApiRequestFactory,
        responseProcessor?: NPCsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NPCsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NPCsApiResponseProcessor();
    }

    /**
     * Fetch NPCs details.
     * Get All Npcs
     * @param [type] The type of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllNpcsNpcsGetWithHttpInfo(type?: NPCType, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageNPCSchema>> {
        const requestContextPromise = this.requestFactory.getAllNpcsNpcsGet(type, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllNpcsNpcsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch NPCs details.
     * Get All Npcs
     * @param [type] The type of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllNpcsNpcsGet(type?: NPCType, page?: number, size?: number, _options?: Configuration): Observable<DataPageNPCSchema> {
        return this.getAllNpcsNpcsGetWithHttpInfo(type, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageNPCSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.
     * Get Npc Items
     * @param code The code of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getNpcItemsNpcsCodeItemsGetWithHttpInfo(code: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageNPCItem>> {
        const requestContextPromise = this.requestFactory.getNpcItemsNpcsCodeItemsGet(code, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNpcItemsNpcsCodeItemsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.
     * Get Npc Items
     * @param code The code of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getNpcItemsNpcsCodeItemsGet(code: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageNPCItem> {
        return this.getNpcItemsNpcsCodeItemsGetWithHttpInfo(code, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageNPCItem>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a NPC.
     * Get Npc
     * @param code The code of the NPC.
     */
    public getNpcNpcsCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<NPCResponseSchema>> {
        const requestContextPromise = this.requestFactory.getNpcNpcsCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNpcNpcsCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a NPC.
     * Get Npc
     * @param code The code of the NPC.
     */
    public getNpcNpcsCodeGet(code: string, _options?: Configuration): Observable<NPCResponseSchema> {
        return this.getNpcNpcsCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<NPCResponseSchema>) => apiResponse.data));
    }

}

import { ResourcesApiRequestFactory, ResourcesApiResponseProcessor} from "../apis/ResourcesApi.ts";
export class ObservableResourcesApi {
    private requestFactory: ResourcesApiRequestFactory;
    private responseProcessor: ResourcesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ResourcesApiRequestFactory,
        responseProcessor?: ResourcesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ResourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ResourcesApiResponseProcessor();
    }

    /**
     * Fetch resources details.
     * Get All Resources
     * @param [minLevel] Skill minimum level.
     * @param [maxLevel] Skill maximum level.
     * @param [skill] The code of the skill.
     * @param [drop] Item code of the drop.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllResourcesResourcesGetWithHttpInfo(minLevel?: number, maxLevel?: number, skill?: GatheringSkill, drop?: string, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageResourceSchema>> {
        const requestContextPromise = this.requestFactory.getAllResourcesResourcesGet(minLevel, maxLevel, skill, drop, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllResourcesResourcesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch resources details.
     * Get All Resources
     * @param [minLevel] Skill minimum level.
     * @param [maxLevel] Skill maximum level.
     * @param [skill] The code of the skill.
     * @param [drop] Item code of the drop.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllResourcesResourcesGet(minLevel?: number, maxLevel?: number, skill?: GatheringSkill, drop?: string, page?: number, size?: number, _options?: Configuration): Observable<DataPageResourceSchema> {
        return this.getAllResourcesResourcesGetWithHttpInfo(minLevel, maxLevel, skill, drop, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageResourceSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a resource.
     * Get Resource
     * @param code The code of the resource.
     */
    public getResourceResourcesCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<ResourceResponseSchema>> {
        const requestContextPromise = this.requestFactory.getResourceResourcesCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResourceResourcesCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a resource.
     * Get Resource
     * @param code The code of the resource.
     */
    public getResourceResourcesCodeGet(code: string, _options?: Configuration): Observable<ResourceResponseSchema> {
        return this.getResourceResourcesCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ResourceResponseSchema>) => apiResponse.data));
    }

}

import { TasksApiRequestFactory, TasksApiResponseProcessor} from "../apis/TasksApi.ts";
export class ObservableTasksApi {
    private requestFactory: TasksApiRequestFactory;
    private responseProcessor: TasksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TasksApiRequestFactory,
        responseProcessor?: TasksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TasksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TasksApiResponseProcessor();
    }

    /**
     * Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master.
     * Get All Tasks Rewards
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllTasksRewardsTasksRewardsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageDropRateSchema>> {
        const requestContextPromise = this.requestFactory.getAllTasksRewardsTasksRewardsGet(page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTasksRewardsTasksRewardsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master.
     * Get All Tasks Rewards
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllTasksRewardsTasksRewardsGet(page?: number, size?: number, _options?: Configuration): Observable<DataPageDropRateSchema> {
        return this.getAllTasksRewardsTasksRewardsGetWithHttpInfo(page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageDropRateSchema>) => apiResponse.data));
    }

    /**
     * Fetch the list of all tasks.
     * Get All Tasks
     * @param [minLevel] Minimum level.
     * @param [maxLevel] Maximum level.
     * @param [skill] The code of the skill.
     * @param [type] The type of tasks.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllTasksTasksListGetWithHttpInfo(minLevel?: number, maxLevel?: number, skill?: Skill, type?: TaskType, page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<DataPageTaskFullSchema>> {
        const requestContextPromise = this.requestFactory.getAllTasksTasksListGet(minLevel, maxLevel, skill, type, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTasksTasksListGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch the list of all tasks.
     * Get All Tasks
     * @param [minLevel] Minimum level.
     * @param [maxLevel] Maximum level.
     * @param [skill] The code of the skill.
     * @param [type] The type of tasks.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllTasksTasksListGet(minLevel?: number, maxLevel?: number, skill?: Skill, type?: TaskType, page?: number, size?: number, _options?: Configuration): Observable<DataPageTaskFullSchema> {
        return this.getAllTasksTasksListGetWithHttpInfo(minLevel, maxLevel, skill, type, page, size, _options).pipe(map((apiResponse: HttpInfo<DataPageTaskFullSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a task.
     * Get Task
     * @param code The code of the task.
     */
    public getTaskTasksListCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<TaskFullResponseSchema>> {
        const requestContextPromise = this.requestFactory.getTaskTasksListCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskTasksListCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a task.
     * Get Task
     * @param code The code of the task.
     */
    public getTaskTasksListCodeGet(code: string, _options?: Configuration): Observable<TaskFullResponseSchema> {
        return this.getTaskTasksListCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<TaskFullResponseSchema>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a tasks reward.
     * Get Tasks Reward
     * @param code The code of the tasks reward.
     */
    public getTasksRewardTasksRewardsCodeGetWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<RewardResponseSchema>> {
        const requestContextPromise = this.requestFactory.getTasksRewardTasksRewardsCodeGet(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTasksRewardTasksRewardsCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a tasks reward.
     * Get Tasks Reward
     * @param code The code of the tasks reward.
     */
    public getTasksRewardTasksRewardsCodeGet(code: string, _options?: Configuration): Observable<RewardResponseSchema> {
        return this.getTasksRewardTasksRewardsCodeGetWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<RewardResponseSchema>) => apiResponse.data));
    }

}

import { TokenApiRequestFactory, TokenApiResponseProcessor} from "../apis/TokenApi.ts";
export class ObservableTokenApi {
    private requestFactory: TokenApiRequestFactory;
    private responseProcessor: TokenApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TokenApiRequestFactory,
        responseProcessor?: TokenApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokenApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokenApiResponseProcessor();
    }

    /**
     * Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.
     * Generate Token
     */
    public generateTokenTokenPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TokenResponseSchema>> {
        const requestContextPromise = this.requestFactory.generateTokenTokenPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateTokenTokenPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.
     * Generate Token
     */
    public generateTokenTokenPost(_options?: Configuration): Observable<TokenResponseSchema> {
        return this.generateTokenTokenPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TokenResponseSchema>) => apiResponse.data));
    }

}
