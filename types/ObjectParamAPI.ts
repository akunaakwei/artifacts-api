import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

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

import { ObservableAccountsApi } from "./ObservableAPI.ts";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi.ts";

export interface AccountsApiCreateAccountAccountsCreatePostRequest {
    /**
     * 
     * @type AddAccountSchema
     * @memberof AccountsApicreateAccountAccountsCreatePost
     */
    addAccountSchema: AddAccountSchema
}

export interface AccountsApiGetAccountAccountsAccountGetRequest {
    /**
     * The account name.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsApigetAccountAccountsAccountGet
     */
    account: string
}

export interface AccountsApiGetAccountAchievementsAccountsAccountAchievementsGetRequest {
    /**
     * The character name.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsApigetAccountAchievementsAccountsAccountAchievementsGet
     */
    account: string
    /**
     * Type of achievements.
     * Defaults to: undefined
     * @type AchievementType
     * @memberof AccountsApigetAccountAchievementsAccountsAccountAchievementsGet
     */
    type?: AchievementType
    /**
     * Filter by completed achievements.
     * Defaults to: undefined
     * @type boolean
     * @memberof AccountsApigetAccountAchievementsAccountsAccountAchievementsGet
     */
    completed?: boolean
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof AccountsApigetAccountAchievementsAccountsAccountAchievementsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof AccountsApigetAccountAchievementsAccountsAccountAchievementsGet
     */
    size?: number
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Account
     * @param param the request object
     */
    public createAccountAccountsCreatePostWithHttpInfo(param: AccountsApiCreateAccountAccountsCreatePostRequest, options?: Configuration): Promise<HttpInfo<ResponseSchema>> {
        return this.api.createAccountAccountsCreatePostWithHttpInfo(param.addAccountSchema,  options).toPromise();
    }

    /**
     * Create Account
     * @param param the request object
     */
    public createAccountAccountsCreatePost(param: AccountsApiCreateAccountAccountsCreatePostRequest, options?: Configuration): Promise<ResponseSchema> {
        return this.api.createAccountAccountsCreatePost(param.addAccountSchema,  options).toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Account
     * @param param the request object
     */
    public getAccountAccountsAccountGetWithHttpInfo(param: AccountsApiGetAccountAccountsAccountGetRequest, options?: Configuration): Promise<HttpInfo<AccountDetailsSchema>> {
        return this.api.getAccountAccountsAccountGetWithHttpInfo(param.account,  options).toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Account
     * @param param the request object
     */
    public getAccountAccountsAccountGet(param: AccountsApiGetAccountAccountsAccountGetRequest, options?: Configuration): Promise<AccountDetailsSchema> {
        return this.api.getAccountAccountsAccountGet(param.account,  options).toPromise();
    }

    /**
     * Retrieve the achievements of a account.
     * Get Account Achievements
     * @param param the request object
     */
    public getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(param: AccountsApiGetAccountAchievementsAccountsAccountAchievementsGetRequest, options?: Configuration): Promise<HttpInfo<DataPageAccountAchievementSchema>> {
        return this.api.getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(param.account, param.type, param.completed, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the achievements of a account.
     * Get Account Achievements
     * @param param the request object
     */
    public getAccountAchievementsAccountsAccountAchievementsGet(param: AccountsApiGetAccountAchievementsAccountsAccountAchievementsGetRequest, options?: Configuration): Promise<DataPageAccountAchievementSchema> {
        return this.api.getAccountAchievementsAccountsAccountAchievementsGet(param.account, param.type, param.completed, param.page, param.size,  options).toPromise();
    }

}

import { ObservableAchievementsApi } from "./ObservableAPI.ts";
import { AchievementsApiRequestFactory, AchievementsApiResponseProcessor} from "../apis/AchievementsApi.ts";

export interface AchievementsApiGetAchievementAchievementsCodeGetRequest {
    /**
     * The code of the achievement.
     * Defaults to: undefined
     * @type string
     * @memberof AchievementsApigetAchievementAchievementsCodeGet
     */
    code: string
}

export interface AchievementsApiGetAllAchievementsAchievementsGetRequest {
    /**
     * Type of achievements.
     * Defaults to: undefined
     * @type AchievementType
     * @memberof AchievementsApigetAllAchievementsAchievementsGet
     */
    type?: AchievementType
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof AchievementsApigetAllAchievementsAchievementsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof AchievementsApigetAllAchievementsAchievementsGet
     */
    size?: number
}

export class ObjectAchievementsApi {
    private api: ObservableAchievementsApi

    public constructor(configuration: Configuration, requestFactory?: AchievementsApiRequestFactory, responseProcessor?: AchievementsApiResponseProcessor) {
        this.api = new ObservableAchievementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the details of a achievement.
     * Get Achievement
     * @param param the request object
     */
    public getAchievementAchievementsCodeGetWithHttpInfo(param: AchievementsApiGetAchievementAchievementsCodeGetRequest, options?: Configuration): Promise<HttpInfo<AchievementResponseSchema>> {
        return this.api.getAchievementAchievementsCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a achievement.
     * Get Achievement
     * @param param the request object
     */
    public getAchievementAchievementsCodeGet(param: AchievementsApiGetAchievementAchievementsCodeGetRequest, options?: Configuration): Promise<AchievementResponseSchema> {
        return this.api.getAchievementAchievementsCodeGet(param.code,  options).toPromise();
    }

    /**
     * List of all achievements.
     * Get All Achievements
     * @param param the request object
     */
    public getAllAchievementsAchievementsGetWithHttpInfo(param: AchievementsApiGetAllAchievementsAchievementsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageAchievementSchema>> {
        return this.api.getAllAchievementsAchievementsGetWithHttpInfo(param.type, param.page, param.size,  options).toPromise();
    }

    /**
     * List of all achievements.
     * Get All Achievements
     * @param param the request object
     */
    public getAllAchievementsAchievementsGet(param: AchievementsApiGetAllAchievementsAchievementsGetRequest = {}, options?: Configuration): Promise<DataPageAchievementSchema> {
        return this.api.getAllAchievementsAchievementsGet(param.type, param.page, param.size,  options).toPromise();
    }

}

import { ObservableBadgesApi } from "./ObservableAPI.ts";
import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi.ts";

export interface BadgesApiGetAllBadgesBadgesGetRequest {
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof BadgesApigetAllBadgesBadgesGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof BadgesApigetAllBadgesBadgesGet
     */
    size?: number
}

export interface BadgesApiGetBadgeBadgesCodeGetRequest {
    /**
     * The code of the achievement.
     * Defaults to: undefined
     * @type string
     * @memberof BadgesApigetBadgeBadgesCodeGet
     */
    code: string
}

export class ObjectBadgesApi {
    private api: ObservableBadgesApi

    public constructor(configuration: Configuration, requestFactory?: BadgesApiRequestFactory, responseProcessor?: BadgesApiResponseProcessor) {
        this.api = new ObservableBadgesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all badges.
     * Get All Badges
     * @param param the request object
     */
    public getAllBadgesBadgesGetWithHttpInfo(param: BadgesApiGetAllBadgesBadgesGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageBadgeSchema>> {
        return this.api.getAllBadgesBadgesGetWithHttpInfo(param.page, param.size,  options).toPromise();
    }

    /**
     * List of all badges.
     * Get All Badges
     * @param param the request object
     */
    public getAllBadgesBadgesGet(param: BadgesApiGetAllBadgesBadgesGetRequest = {}, options?: Configuration): Promise<DataPageBadgeSchema> {
        return this.api.getAllBadgesBadgesGet(param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Badge
     * @param param the request object
     */
    public getBadgeBadgesCodeGetWithHttpInfo(param: BadgesApiGetBadgeBadgesCodeGetRequest, options?: Configuration): Promise<HttpInfo<BadgeResponseSchema>> {
        return this.api.getBadgeBadgesCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Badge
     * @param param the request object
     */
    public getBadgeBadgesCodeGet(param: BadgesApiGetBadgeBadgesCodeGetRequest, options?: Configuration): Promise<BadgeResponseSchema> {
        return this.api.getBadgeBadgesCodeGet(param.code,  options).toPromise();
    }

}

import { ObservableCharactersApi } from "./ObservableAPI.ts";
import { CharactersApiRequestFactory, CharactersApiResponseProcessor} from "../apis/CharactersApi.ts";

export interface CharactersApiCreateCharacterCharactersCreatePostRequest {
    /**
     * 
     * @type AddCharacterSchema
     * @memberof CharactersApicreateCharacterCharactersCreatePost
     */
    addCharacterSchema: AddCharacterSchema
}

export interface CharactersApiDeleteCharacterCharactersDeletePostRequest {
    /**
     * 
     * @type DeleteCharacterSchema
     * @memberof CharactersApideleteCharacterCharactersDeletePost
     */
    deleteCharacterSchema: DeleteCharacterSchema
}

export interface CharactersApiGetCharacterCharactersNameGetRequest {
    /**
     * The character name.
     * Defaults to: undefined
     * @type string
     * @memberof CharactersApigetCharacterCharactersNameGet
     */
    name: string
}

export class ObjectCharactersApi {
    private api: ObservableCharactersApi

    public constructor(configuration: Configuration, requestFactory?: CharactersApiRequestFactory, responseProcessor?: CharactersApiResponseProcessor) {
        this.api = new ObservableCharactersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new character on your account. You can create up to 5 characters.
     * Create Character
     * @param param the request object
     */
    public createCharacterCharactersCreatePostWithHttpInfo(param: CharactersApiCreateCharacterCharactersCreatePostRequest, options?: Configuration): Promise<HttpInfo<CharacterResponseSchema>> {
        return this.api.createCharacterCharactersCreatePostWithHttpInfo(param.addCharacterSchema,  options).toPromise();
    }

    /**
     * Create new character on your account. You can create up to 5 characters.
     * Create Character
     * @param param the request object
     */
    public createCharacterCharactersCreatePost(param: CharactersApiCreateCharacterCharactersCreatePostRequest, options?: Configuration): Promise<CharacterResponseSchema> {
        return this.api.createCharacterCharactersCreatePost(param.addCharacterSchema,  options).toPromise();
    }

    /**
     * Delete character on your account.
     * Delete Character
     * @param param the request object
     */
    public deleteCharacterCharactersDeletePostWithHttpInfo(param: CharactersApiDeleteCharacterCharactersDeletePostRequest, options?: Configuration): Promise<HttpInfo<CharacterResponseSchema>> {
        return this.api.deleteCharacterCharactersDeletePostWithHttpInfo(param.deleteCharacterSchema,  options).toPromise();
    }

    /**
     * Delete character on your account.
     * Delete Character
     * @param param the request object
     */
    public deleteCharacterCharactersDeletePost(param: CharactersApiDeleteCharacterCharactersDeletePostRequest, options?: Configuration): Promise<CharacterResponseSchema> {
        return this.api.deleteCharacterCharactersDeletePost(param.deleteCharacterSchema,  options).toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Character
     * @param param the request object
     */
    public getCharacterCharactersNameGetWithHttpInfo(param: CharactersApiGetCharacterCharactersNameGetRequest, options?: Configuration): Promise<HttpInfo<CharacterResponseSchema>> {
        return this.api.getCharacterCharactersNameGetWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Character
     * @param param the request object
     */
    public getCharacterCharactersNameGet(param: CharactersApiGetCharacterCharactersNameGetRequest, options?: Configuration): Promise<CharacterResponseSchema> {
        return this.api.getCharacterCharactersNameGet(param.name,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI.ts";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";

export interface DefaultApiGetStatusGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return the status of the game server.
     * Get Status
     * @param param the request object
     */
    public getStatusGetWithHttpInfo(param: DefaultApiGetStatusGetRequest = {}, options?: Configuration): Promise<HttpInfo<StatusResponseSchema>> {
        return this.api.getStatusGetWithHttpInfo( options).toPromise();
    }

    /**
     * Return the status of the game server.
     * Get Status
     * @param param the request object
     */
    public getStatusGet(param: DefaultApiGetStatusGetRequest = {}, options?: Configuration): Promise<StatusResponseSchema> {
        return this.api.getStatusGet( options).toPromise();
    }

}

import { ObservableEffectsApi } from "./ObservableAPI.ts";
import { EffectsApiRequestFactory, EffectsApiResponseProcessor} from "../apis/EffectsApi.ts";

export interface EffectsApiGetAllEffectsEffectsGetRequest {
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof EffectsApigetAllEffectsEffectsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof EffectsApigetAllEffectsEffectsGet
     */
    size?: number
}

export interface EffectsApiGetEffectEffectsCodeGetRequest {
    /**
     * The code of the achievement.
     * Defaults to: undefined
     * @type string
     * @memberof EffectsApigetEffectEffectsCodeGet
     */
    code: string
}

export class ObjectEffectsApi {
    private api: ObservableEffectsApi

    public constructor(configuration: Configuration, requestFactory?: EffectsApiRequestFactory, responseProcessor?: EffectsApiResponseProcessor) {
        this.api = new ObservableEffectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game.
     * Get All Effects
     * @param param the request object
     */
    public getAllEffectsEffectsGetWithHttpInfo(param: EffectsApiGetAllEffectsEffectsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageEffectSchema>> {
        return this.api.getAllEffectsEffectsGetWithHttpInfo(param.page, param.size,  options).toPromise();
    }

    /**
     * List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game.
     * Get All Effects
     * @param param the request object
     */
    public getAllEffectsEffectsGet(param: EffectsApiGetAllEffectsEffectsGetRequest = {}, options?: Configuration): Promise<DataPageEffectSchema> {
        return this.api.getAllEffectsEffectsGet(param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Effect
     * @param param the request object
     */
    public getEffectEffectsCodeGetWithHttpInfo(param: EffectsApiGetEffectEffectsCodeGetRequest, options?: Configuration): Promise<HttpInfo<EffectResponseSchema>> {
        return this.api.getEffectEffectsCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Effect
     * @param param the request object
     */
    public getEffectEffectsCodeGet(param: EffectsApiGetEffectEffectsCodeGetRequest, options?: Configuration): Promise<EffectResponseSchema> {
        return this.api.getEffectEffectsCodeGet(param.code,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI.ts";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi.ts";

export interface EventsApiGetAllActiveEventsEventsActiveGetRequest {
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof EventsApigetAllActiveEventsEventsActiveGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof EventsApigetAllActiveEventsEventsActiveGet
     */
    size?: number
}

export interface EventsApiGetAllEventsEventsGetRequest {
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof EventsApigetAllEventsEventsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof EventsApigetAllEventsEventsGet
     */
    size?: number
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch active events details.
     * Get All Active Events
     * @param param the request object
     */
    public getAllActiveEventsEventsActiveGetWithHttpInfo(param: EventsApiGetAllActiveEventsEventsActiveGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageActiveEventSchema>> {
        return this.api.getAllActiveEventsEventsActiveGetWithHttpInfo(param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch active events details.
     * Get All Active Events
     * @param param the request object
     */
    public getAllActiveEventsEventsActiveGet(param: EventsApiGetAllActiveEventsEventsActiveGetRequest = {}, options?: Configuration): Promise<DataPageActiveEventSchema> {
        return this.api.getAllActiveEventsEventsActiveGet(param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch events details.
     * Get All Events
     * @param param the request object
     */
    public getAllEventsEventsGetWithHttpInfo(param: EventsApiGetAllEventsEventsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageEventSchema>> {
        return this.api.getAllEventsEventsGetWithHttpInfo(param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch events details.
     * Get All Events
     * @param param the request object
     */
    public getAllEventsEventsGet(param: EventsApiGetAllEventsEventsGetRequest = {}, options?: Configuration): Promise<DataPageEventSchema> {
        return this.api.getAllEventsEventsGet(param.page, param.size,  options).toPromise();
    }

}

import { ObservableGrandExchangeApi } from "./ObservableAPI.ts";
import { GrandExchangeApiRequestFactory, GrandExchangeApiResponseProcessor} from "../apis/GrandExchangeApi.ts";

export interface GrandExchangeApiGetGeSellHistoryGrandexchangeHistoryCodeGetRequest {
    /**
     * The code of the item.
     * Defaults to: undefined
     * @type string
     * @memberof GrandExchangeApigetGeSellHistoryGrandexchangeHistoryCodeGet
     */
    code: string
    /**
     * The seller (account name) of the item.
     * Defaults to: undefined
     * @type string
     * @memberof GrandExchangeApigetGeSellHistoryGrandexchangeHistoryCodeGet
     */
    seller?: string
    /**
     * The buyer (account name) of the item.
     * Defaults to: undefined
     * @type string
     * @memberof GrandExchangeApigetGeSellHistoryGrandexchangeHistoryCodeGet
     */
    buyer?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof GrandExchangeApigetGeSellHistoryGrandexchangeHistoryCodeGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof GrandExchangeApigetGeSellHistoryGrandexchangeHistoryCodeGet
     */
    size?: number
}

export interface GrandExchangeApiGetGeSellOrderGrandexchangeOrdersIdGetRequest {
    /**
     * The id of the order.
     * Defaults to: undefined
     * @type string
     * @memberof GrandExchangeApigetGeSellOrderGrandexchangeOrdersIdGet
     */
    id: string
}

export interface GrandExchangeApiGetGeSellOrdersGrandexchangeOrdersGetRequest {
    /**
     * The code of the item.
     * Defaults to: undefined
     * @type string
     * @memberof GrandExchangeApigetGeSellOrdersGrandexchangeOrdersGet
     */
    code?: string
    /**
     * The seller (account name) of the item.
     * Defaults to: undefined
     * @type string
     * @memberof GrandExchangeApigetGeSellOrdersGrandexchangeOrdersGet
     */
    seller?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof GrandExchangeApigetGeSellOrdersGrandexchangeOrdersGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof GrandExchangeApigetGeSellOrdersGrandexchangeOrdersGet
     */
    size?: number
}

export class ObjectGrandExchangeApi {
    private api: ObservableGrandExchangeApi

    public constructor(configuration: Configuration, requestFactory?: GrandExchangeApiRequestFactory, responseProcessor?: GrandExchangeApiResponseProcessor) {
        this.api = new ObservableGrandExchangeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch the sales history of the item for the last 7 days.
     * Get Ge Sell History
     * @param param the request object
     */
    public getGeSellHistoryGrandexchangeHistoryCodeGetWithHttpInfo(param: GrandExchangeApiGetGeSellHistoryGrandexchangeHistoryCodeGetRequest, options?: Configuration): Promise<HttpInfo<DataPageGeOrderHistorySchema>> {
        return this.api.getGeSellHistoryGrandexchangeHistoryCodeGetWithHttpInfo(param.code, param.seller, param.buyer, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch the sales history of the item for the last 7 days.
     * Get Ge Sell History
     * @param param the request object
     */
    public getGeSellHistoryGrandexchangeHistoryCodeGet(param: GrandExchangeApiGetGeSellHistoryGrandexchangeHistoryCodeGetRequest, options?: Configuration): Promise<DataPageGeOrderHistorySchema> {
        return this.api.getGeSellHistoryGrandexchangeHistoryCodeGet(param.code, param.seller, param.buyer, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the sell order of a item.
     * Get Ge Sell Order
     * @param param the request object
     */
    public getGeSellOrderGrandexchangeOrdersIdGetWithHttpInfo(param: GrandExchangeApiGetGeSellOrderGrandexchangeOrdersIdGetRequest, options?: Configuration): Promise<HttpInfo<GEOrderReponseSchema>> {
        return this.api.getGeSellOrderGrandexchangeOrdersIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieve the sell order of a item.
     * Get Ge Sell Order
     * @param param the request object
     */
    public getGeSellOrderGrandexchangeOrdersIdGet(param: GrandExchangeApiGetGeSellOrderGrandexchangeOrdersIdGetRequest, options?: Configuration): Promise<GEOrderReponseSchema> {
        return this.api.getGeSellOrderGrandexchangeOrdersIdGet(param.id,  options).toPromise();
    }

    /**
     * Fetch all sell orders.
     * Get Ge Sell Orders
     * @param param the request object
     */
    public getGeSellOrdersGrandexchangeOrdersGetWithHttpInfo(param: GrandExchangeApiGetGeSellOrdersGrandexchangeOrdersGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageGEOrderSchema>> {
        return this.api.getGeSellOrdersGrandexchangeOrdersGetWithHttpInfo(param.code, param.seller, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch all sell orders.
     * Get Ge Sell Orders
     * @param param the request object
     */
    public getGeSellOrdersGrandexchangeOrdersGet(param: GrandExchangeApiGetGeSellOrdersGrandexchangeOrdersGetRequest = {}, options?: Configuration): Promise<DataPageGEOrderSchema> {
        return this.api.getGeSellOrdersGrandexchangeOrdersGet(param.code, param.seller, param.page, param.size,  options).toPromise();
    }

}

import { ObservableItemsApi } from "./ObservableAPI.ts";
import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi.ts";

export interface ItemsApiGetAllItemsItemsGetRequest {
    /**
     * Minimum level items.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApigetAllItemsItemsGet
     */
    minLevel?: number
    /**
     * Maximum level items.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApigetAllItemsItemsGet
     */
    maxLevel?: number
    /**
     * Name of the item.
     * Defaults to: undefined
     * @type string
     * @memberof ItemsApigetAllItemsItemsGet
     */
    name?: string
    /**
     * Type of items.
     * Defaults to: undefined
     * @type ItemType
     * @memberof ItemsApigetAllItemsItemsGet
     */
    type?: ItemType
    /**
     * Skill to craft items.
     * Defaults to: undefined
     * @type CraftSkill
     * @memberof ItemsApigetAllItemsItemsGet
     */
    craftSkill?: CraftSkill
    /**
     * Item code of items used as material for crafting.
     * Defaults to: undefined
     * @type string
     * @memberof ItemsApigetAllItemsItemsGet
     */
    craftMaterial?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof ItemsApigetAllItemsItemsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof ItemsApigetAllItemsItemsGet
     */
    size?: number
}

export interface ItemsApiGetItemItemsCodeGetRequest {
    /**
     * The code of the item.
     * Defaults to: undefined
     * @type string
     * @memberof ItemsApigetItemItemsCodeGet
     */
    code: string
}

export class ObjectItemsApi {
    private api: ObservableItemsApi

    public constructor(configuration: Configuration, requestFactory?: ItemsApiRequestFactory, responseProcessor?: ItemsApiResponseProcessor) {
        this.api = new ObservableItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch items details.
     * Get All Items
     * @param param the request object
     */
    public getAllItemsItemsGetWithHttpInfo(param: ItemsApiGetAllItemsItemsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageItemSchema>> {
        return this.api.getAllItemsItemsGetWithHttpInfo(param.minLevel, param.maxLevel, param.name, param.type, param.craftSkill, param.craftMaterial, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch items details.
     * Get All Items
     * @param param the request object
     */
    public getAllItemsItemsGet(param: ItemsApiGetAllItemsItemsGetRequest = {}, options?: Configuration): Promise<DataPageItemSchema> {
        return this.api.getAllItemsItemsGet(param.minLevel, param.maxLevel, param.name, param.type, param.craftSkill, param.craftMaterial, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a item.
     * Get Item
     * @param param the request object
     */
    public getItemItemsCodeGetWithHttpInfo(param: ItemsApiGetItemItemsCodeGetRequest, options?: Configuration): Promise<HttpInfo<ItemResponseSchema>> {
        return this.api.getItemItemsCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a item.
     * Get Item
     * @param param the request object
     */
    public getItemItemsCodeGet(param: ItemsApiGetItemItemsCodeGetRequest, options?: Configuration): Promise<ItemResponseSchema> {
        return this.api.getItemItemsCodeGet(param.code,  options).toPromise();
    }

}

import { ObservableLeaderboardApi } from "./ObservableAPI.ts";
import { LeaderboardApiRequestFactory, LeaderboardApiResponseProcessor} from "../apis/LeaderboardApi.ts";

export interface LeaderboardApiGetAccountsLeaderboardLeaderboardAccountsGetRequest {
    /**
     * Default sort by achievements points.
     * Defaults to: undefined
     * @type AccountLeaderboardType
     * @memberof LeaderboardApigetAccountsLeaderboardLeaderboardAccountsGet
     */
    sort?: AccountLeaderboardType
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof LeaderboardApigetAccountsLeaderboardLeaderboardAccountsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof LeaderboardApigetAccountsLeaderboardLeaderboardAccountsGet
     */
    size?: number
}

export interface LeaderboardApiGetCharactersLeaderboardLeaderboardCharactersGetRequest {
    /**
     * Default sort by combat total XP.
     * Defaults to: undefined
     * @type CharacterLeaderboardType
     * @memberof LeaderboardApigetCharactersLeaderboardLeaderboardCharactersGet
     */
    sort?: CharacterLeaderboardType
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof LeaderboardApigetCharactersLeaderboardLeaderboardCharactersGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof LeaderboardApigetCharactersLeaderboardLeaderboardCharactersGet
     */
    size?: number
}

export class ObjectLeaderboardApi {
    private api: ObservableLeaderboardApi

    public constructor(configuration: Configuration, requestFactory?: LeaderboardApiRequestFactory, responseProcessor?: LeaderboardApiResponseProcessor) {
        this.api = new ObservableLeaderboardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch leaderboard details.
     * Get Accounts Leaderboard
     * @param param the request object
     */
    public getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(param: LeaderboardApiGetAccountsLeaderboardLeaderboardAccountsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageAccountLeaderboardSchema>> {
        return this.api.getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(param.sort, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch leaderboard details.
     * Get Accounts Leaderboard
     * @param param the request object
     */
    public getAccountsLeaderboardLeaderboardAccountsGet(param: LeaderboardApiGetAccountsLeaderboardLeaderboardAccountsGetRequest = {}, options?: Configuration): Promise<DataPageAccountLeaderboardSchema> {
        return this.api.getAccountsLeaderboardLeaderboardAccountsGet(param.sort, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch leaderboard details.
     * Get Characters Leaderboard
     * @param param the request object
     */
    public getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(param: LeaderboardApiGetCharactersLeaderboardLeaderboardCharactersGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageCharacterLeaderboardSchema>> {
        return this.api.getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(param.sort, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch leaderboard details.
     * Get Characters Leaderboard
     * @param param the request object
     */
    public getCharactersLeaderboardLeaderboardCharactersGet(param: LeaderboardApiGetCharactersLeaderboardLeaderboardCharactersGetRequest = {}, options?: Configuration): Promise<DataPageCharacterLeaderboardSchema> {
        return this.api.getCharactersLeaderboardLeaderboardCharactersGet(param.sort, param.page, param.size,  options).toPromise();
    }

}

import { ObservableMapsApi } from "./ObservableAPI.ts";
import { MapsApiRequestFactory, MapsApiResponseProcessor} from "../apis/MapsApi.ts";

export interface MapsApiGetAllMapsMapsGetRequest {
    /**
     * Type of content on the map.
     * Defaults to: undefined
     * @type MapContentType
     * @memberof MapsApigetAllMapsMapsGet
     */
    contentType?: MapContentType
    /**
     * Content code on the map.
     * Defaults to: undefined
     * @type string
     * @memberof MapsApigetAllMapsMapsGet
     */
    contentCode?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof MapsApigetAllMapsMapsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof MapsApigetAllMapsMapsGet
     */
    size?: number
}

export interface MapsApiGetMapMapsXYGetRequest {
    /**
     * The position x of the map.
     * Defaults to: undefined
     * @type number
     * @memberof MapsApigetMapMapsXYGet
     */
    x: number
    /**
     * The position X of the map.
     * Defaults to: undefined
     * @type number
     * @memberof MapsApigetMapMapsXYGet
     */
    y: number
}

export class ObjectMapsApi {
    private api: ObservableMapsApi

    public constructor(configuration: Configuration, requestFactory?: MapsApiRequestFactory, responseProcessor?: MapsApiResponseProcessor) {
        this.api = new ObservableMapsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch maps details.
     * Get All Maps
     * @param param the request object
     */
    public getAllMapsMapsGetWithHttpInfo(param: MapsApiGetAllMapsMapsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageMapSchema>> {
        return this.api.getAllMapsMapsGetWithHttpInfo(param.contentType, param.contentCode, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch maps details.
     * Get All Maps
     * @param param the request object
     */
    public getAllMapsMapsGet(param: MapsApiGetAllMapsMapsGetRequest = {}, options?: Configuration): Promise<DataPageMapSchema> {
        return this.api.getAllMapsMapsGet(param.contentType, param.contentCode, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a map.
     * Get Map
     * @param param the request object
     */
    public getMapMapsXYGetWithHttpInfo(param: MapsApiGetMapMapsXYGetRequest, options?: Configuration): Promise<HttpInfo<MapResponseSchema>> {
        return this.api.getMapMapsXYGetWithHttpInfo(param.x, param.y,  options).toPromise();
    }

    /**
     * Retrieve the details of a map.
     * Get Map
     * @param param the request object
     */
    public getMapMapsXYGet(param: MapsApiGetMapMapsXYGetRequest, options?: Configuration): Promise<MapResponseSchema> {
        return this.api.getMapMapsXYGet(param.x, param.y,  options).toPromise();
    }

}

import { ObservableMonstersApi } from "./ObservableAPI.ts";
import { MonstersApiRequestFactory, MonstersApiResponseProcessor} from "../apis/MonstersApi.ts";

export interface MonstersApiGetAllMonstersMonstersGetRequest {
    /**
     * Monster minimum level.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof MonstersApigetAllMonstersMonstersGet
     */
    minLevel?: number
    /**
     * Monster maximum level.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof MonstersApigetAllMonstersMonstersGet
     */
    maxLevel?: number
    /**
     * Item code of the drop.
     * Defaults to: undefined
     * @type string
     * @memberof MonstersApigetAllMonstersMonstersGet
     */
    drop?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof MonstersApigetAllMonstersMonstersGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof MonstersApigetAllMonstersMonstersGet
     */
    size?: number
}

export interface MonstersApiGetMonsterMonstersCodeGetRequest {
    /**
     * The code of the monster.
     * Defaults to: undefined
     * @type string
     * @memberof MonstersApigetMonsterMonstersCodeGet
     */
    code: string
}

export class ObjectMonstersApi {
    private api: ObservableMonstersApi

    public constructor(configuration: Configuration, requestFactory?: MonstersApiRequestFactory, responseProcessor?: MonstersApiResponseProcessor) {
        this.api = new ObservableMonstersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch monsters details.
     * Get All Monsters
     * @param param the request object
     */
    public getAllMonstersMonstersGetWithHttpInfo(param: MonstersApiGetAllMonstersMonstersGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageMonsterSchema>> {
        return this.api.getAllMonstersMonstersGetWithHttpInfo(param.minLevel, param.maxLevel, param.drop, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch monsters details.
     * Get All Monsters
     * @param param the request object
     */
    public getAllMonstersMonstersGet(param: MonstersApiGetAllMonstersMonstersGetRequest = {}, options?: Configuration): Promise<DataPageMonsterSchema> {
        return this.api.getAllMonstersMonstersGet(param.minLevel, param.maxLevel, param.drop, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a monster.
     * Get Monster
     * @param param the request object
     */
    public getMonsterMonstersCodeGetWithHttpInfo(param: MonstersApiGetMonsterMonstersCodeGetRequest, options?: Configuration): Promise<HttpInfo<MonsterResponseSchema>> {
        return this.api.getMonsterMonstersCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a monster.
     * Get Monster
     * @param param the request object
     */
    public getMonsterMonstersCodeGet(param: MonstersApiGetMonsterMonstersCodeGetRequest, options?: Configuration): Promise<MonsterResponseSchema> {
        return this.api.getMonsterMonstersCodeGet(param.code,  options).toPromise();
    }

}

import { ObservableMyAccountApi } from "./ObservableAPI.ts";
import { MyAccountApiRequestFactory, MyAccountApiResponseProcessor} from "../apis/MyAccountApi.ts";

export interface MyAccountApiChangePasswordMyChangePasswordPostRequest {
    /**
     * 
     * @type ChangePassword
     * @memberof MyAccountApichangePasswordMyChangePasswordPost
     */
    changePassword: ChangePassword
}

export interface MyAccountApiGetAccountDetailsMyDetailsGetRequest {
}

export interface MyAccountApiGetBankDetailsMyBankGetRequest {
}

export interface MyAccountApiGetBankItemsMyBankItemsGetRequest {
    /**
     * Item to search in your bank.
     * Defaults to: undefined
     * @type string
     * @memberof MyAccountApigetBankItemsMyBankItemsGet
     */
    itemCode?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof MyAccountApigetBankItemsMyBankItemsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof MyAccountApigetBankItemsMyBankItemsGet
     */
    size?: number
}

export interface MyAccountApiGetGeSellHistoryMyGrandexchangeHistoryGetRequest {
    /**
     * Order ID to search in your history.
     * Defaults to: undefined
     * @type string
     * @memberof MyAccountApigetGeSellHistoryMyGrandexchangeHistoryGet
     */
    id?: string
    /**
     * Item to search in your history.
     * Defaults to: undefined
     * @type string
     * @memberof MyAccountApigetGeSellHistoryMyGrandexchangeHistoryGet
     */
    code?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof MyAccountApigetGeSellHistoryMyGrandexchangeHistoryGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof MyAccountApigetGeSellHistoryMyGrandexchangeHistoryGet
     */
    size?: number
}

export interface MyAccountApiGetGeSellOrdersMyGrandexchangeOrdersGetRequest {
    /**
     * The code of the item.
     * Defaults to: undefined
     * @type string
     * @memberof MyAccountApigetGeSellOrdersMyGrandexchangeOrdersGet
     */
    code?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof MyAccountApigetGeSellOrdersMyGrandexchangeOrdersGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof MyAccountApigetGeSellOrdersMyGrandexchangeOrdersGet
     */
    size?: number
}

export class ObjectMyAccountApi {
    private api: ObservableMyAccountApi

    public constructor(configuration: Configuration, requestFactory?: MyAccountApiRequestFactory, responseProcessor?: MyAccountApiResponseProcessor) {
        this.api = new ObservableMyAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change your account password. Changing the password reset the account token.
     * Change Password
     * @param param the request object
     */
    public changePasswordMyChangePasswordPostWithHttpInfo(param: MyAccountApiChangePasswordMyChangePasswordPostRequest, options?: Configuration): Promise<HttpInfo<ResponseSchema>> {
        return this.api.changePasswordMyChangePasswordPostWithHttpInfo(param.changePassword,  options).toPromise();
    }

    /**
     * Change your account password. Changing the password reset the account token.
     * Change Password
     * @param param the request object
     */
    public changePasswordMyChangePasswordPost(param: MyAccountApiChangePasswordMyChangePasswordPostRequest, options?: Configuration): Promise<ResponseSchema> {
        return this.api.changePasswordMyChangePasswordPost(param.changePassword,  options).toPromise();
    }

    /**
     * Fetch account details.
     * Get Account Details
     * @param param the request object
     */
    public getAccountDetailsMyDetailsGetWithHttpInfo(param: MyAccountApiGetAccountDetailsMyDetailsGetRequest = {}, options?: Configuration): Promise<HttpInfo<MyAccountDetailsSchema>> {
        return this.api.getAccountDetailsMyDetailsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Fetch account details.
     * Get Account Details
     * @param param the request object
     */
    public getAccountDetailsMyDetailsGet(param: MyAccountApiGetAccountDetailsMyDetailsGetRequest = {}, options?: Configuration): Promise<MyAccountDetailsSchema> {
        return this.api.getAccountDetailsMyDetailsGet( options).toPromise();
    }

    /**
     * Fetch bank details.
     * Get Bank Details
     * @param param the request object
     */
    public getBankDetailsMyBankGetWithHttpInfo(param: MyAccountApiGetBankDetailsMyBankGetRequest = {}, options?: Configuration): Promise<HttpInfo<BankResponseSchema>> {
        return this.api.getBankDetailsMyBankGetWithHttpInfo( options).toPromise();
    }

    /**
     * Fetch bank details.
     * Get Bank Details
     * @param param the request object
     */
    public getBankDetailsMyBankGet(param: MyAccountApiGetBankDetailsMyBankGetRequest = {}, options?: Configuration): Promise<BankResponseSchema> {
        return this.api.getBankDetailsMyBankGet( options).toPromise();
    }

    /**
     * Fetch all items in your bank.
     * Get Bank Items
     * @param param the request object
     */
    public getBankItemsMyBankItemsGetWithHttpInfo(param: MyAccountApiGetBankItemsMyBankItemsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageSimpleItemSchema>> {
        return this.api.getBankItemsMyBankItemsGetWithHttpInfo(param.itemCode, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch all items in your bank.
     * Get Bank Items
     * @param param the request object
     */
    public getBankItemsMyBankItemsGet(param: MyAccountApiGetBankItemsMyBankItemsGetRequest = {}, options?: Configuration): Promise<DataPageSimpleItemSchema> {
        return this.api.getBankItemsMyBankItemsGet(param.itemCode, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch your sales history of the last 7 days.
     * Get Ge Sell History
     * @param param the request object
     */
    public getGeSellHistoryMyGrandexchangeHistoryGetWithHttpInfo(param: MyAccountApiGetGeSellHistoryMyGrandexchangeHistoryGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageGeOrderHistorySchema>> {
        return this.api.getGeSellHistoryMyGrandexchangeHistoryGetWithHttpInfo(param.id, param.code, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch your sales history of the last 7 days.
     * Get Ge Sell History
     * @param param the request object
     */
    public getGeSellHistoryMyGrandexchangeHistoryGet(param: MyAccountApiGetGeSellHistoryMyGrandexchangeHistoryGetRequest = {}, options?: Configuration): Promise<DataPageGeOrderHistorySchema> {
        return this.api.getGeSellHistoryMyGrandexchangeHistoryGet(param.id, param.code, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch your sell orders details.
     * Get Ge Sell Orders
     * @param param the request object
     */
    public getGeSellOrdersMyGrandexchangeOrdersGetWithHttpInfo(param: MyAccountApiGetGeSellOrdersMyGrandexchangeOrdersGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageGEOrderSchema>> {
        return this.api.getGeSellOrdersMyGrandexchangeOrdersGetWithHttpInfo(param.code, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch your sell orders details.
     * Get Ge Sell Orders
     * @param param the request object
     */
    public getGeSellOrdersMyGrandexchangeOrdersGet(param: MyAccountApiGetGeSellOrdersMyGrandexchangeOrdersGetRequest = {}, options?: Configuration): Promise<DataPageGEOrderSchema> {
        return this.api.getGeSellOrdersMyGrandexchangeOrdersGet(param.code, param.page, param.size,  options).toPromise();
    }

}

import { ObservableMyCharactersApi } from "./ObservableAPI.ts";
import { MyCharactersApiRequestFactory, MyCharactersApiResponseProcessor} from "../apis/MyCharactersApi.ts";

export interface MyCharactersApiActionAcceptNewTaskMyNameActionTaskNewPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionAcceptNewTaskMyNameActionTaskNewPost
     */
    name: string
}

export interface MyCharactersApiActionBuyBankExpansionMyNameActionBankBuyExpansionPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionBuyBankExpansionMyNameActionBankBuyExpansionPost
     */
    name: string
}

export interface MyCharactersApiActionCompleteTaskMyNameActionTaskCompletePostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionCompleteTaskMyNameActionTaskCompletePost
     */
    name: string
}

export interface MyCharactersApiActionCraftingMyNameActionCraftingPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionCraftingMyNameActionCraftingPost
     */
    name: string
    /**
     * 
     * @type CraftingSchema
     * @memberof MyCharactersApiactionCraftingMyNameActionCraftingPost
     */
    craftingSchema: CraftingSchema
}

export interface MyCharactersApiActionDeleteItemMyNameActionDeletePostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionDeleteItemMyNameActionDeletePost
     */
    name: string
    /**
     * 
     * @type SimpleItemSchema
     * @memberof MyCharactersApiactionDeleteItemMyNameActionDeletePost
     */
    simpleItemSchema: SimpleItemSchema
}

export interface MyCharactersApiActionDepositBankGoldMyNameActionBankDepositGoldPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionDepositBankGoldMyNameActionBankDepositGoldPost
     */
    name: string
    /**
     * 
     * @type DepositWithdrawGoldSchema
     * @memberof MyCharactersApiactionDepositBankGoldMyNameActionBankDepositGoldPost
     */
    depositWithdrawGoldSchema: DepositWithdrawGoldSchema
}

export interface MyCharactersApiActionDepositBankMyNameActionBankDepositPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionDepositBankMyNameActionBankDepositPost
     */
    name: string
    /**
     * 
     * @type SimpleItemSchema
     * @memberof MyCharactersApiactionDepositBankMyNameActionBankDepositPost
     */
    simpleItemSchema: SimpleItemSchema
}

export interface MyCharactersApiActionEquipItemMyNameActionEquipPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionEquipItemMyNameActionEquipPost
     */
    name: string
    /**
     * 
     * @type EquipSchema
     * @memberof MyCharactersApiactionEquipItemMyNameActionEquipPost
     */
    equipSchema: EquipSchema
}

export interface MyCharactersApiActionFightMyNameActionFightPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionFightMyNameActionFightPost
     */
    name: string
}

export interface MyCharactersApiActionGatheringMyNameActionGatheringPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionGatheringMyNameActionGatheringPost
     */
    name: string
}

export interface MyCharactersApiActionGeBuyItemMyNameActionGrandexchangeBuyPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionGeBuyItemMyNameActionGrandexchangeBuyPost
     */
    name: string
    /**
     * 
     * @type GEBuyOrderSchema
     * @memberof MyCharactersApiactionGeBuyItemMyNameActionGrandexchangeBuyPost
     */
    gEBuyOrderSchema: GEBuyOrderSchema
}

export interface MyCharactersApiActionGeCancelSellOrderMyNameActionGrandexchangeCancelPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionGeCancelSellOrderMyNameActionGrandexchangeCancelPost
     */
    name: string
    /**
     * 
     * @type GECancelOrderSchema
     * @memberof MyCharactersApiactionGeCancelSellOrderMyNameActionGrandexchangeCancelPost
     */
    gECancelOrderSchema: GECancelOrderSchema
}

export interface MyCharactersApiActionGeCreateSellOrderMyNameActionGrandexchangeSellPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionGeCreateSellOrderMyNameActionGrandexchangeSellPost
     */
    name: string
    /**
     * 
     * @type GEOrderCreationrSchema
     * @memberof MyCharactersApiactionGeCreateSellOrderMyNameActionGrandexchangeSellPost
     */
    gEOrderCreationrSchema: GEOrderCreationrSchema
}

export interface MyCharactersApiActionMoveMyNameActionMovePostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionMoveMyNameActionMovePost
     */
    name: string
    /**
     * 
     * @type DestinationSchema
     * @memberof MyCharactersApiactionMoveMyNameActionMovePost
     */
    destinationSchema: DestinationSchema
}

export interface MyCharactersApiActionNpcBuyItemMyNameActionNpcBuyPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionNpcBuyItemMyNameActionNpcBuyPost
     */
    name: string
    /**
     * 
     * @type NpcMerchantBuySchema
     * @memberof MyCharactersApiactionNpcBuyItemMyNameActionNpcBuyPost
     */
    npcMerchantBuySchema: NpcMerchantBuySchema
}

export interface MyCharactersApiActionNpcSellItemMyNameActionNpcSellPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionNpcSellItemMyNameActionNpcSellPost
     */
    name: string
    /**
     * 
     * @type NpcMerchantBuySchema
     * @memberof MyCharactersApiactionNpcSellItemMyNameActionNpcSellPost
     */
    npcMerchantBuySchema: NpcMerchantBuySchema
}

export interface MyCharactersApiActionRecyclingMyNameActionRecyclingPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionRecyclingMyNameActionRecyclingPost
     */
    name: string
    /**
     * 
     * @type RecyclingSchema
     * @memberof MyCharactersApiactionRecyclingMyNameActionRecyclingPost
     */
    recyclingSchema: RecyclingSchema
}

export interface MyCharactersApiActionRestMyNameActionRestPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionRestMyNameActionRestPost
     */
    name: string
}

export interface MyCharactersApiActionTaskCancelMyNameActionTaskCancelPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionTaskCancelMyNameActionTaskCancelPost
     */
    name: string
}

export interface MyCharactersApiActionTaskExchangeMyNameActionTaskExchangePostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionTaskExchangeMyNameActionTaskExchangePost
     */
    name: string
}

export interface MyCharactersApiActionTaskTradeMyNameActionTaskTradePostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionTaskTradeMyNameActionTaskTradePost
     */
    name: string
    /**
     * 
     * @type SimpleItemSchema
     * @memberof MyCharactersApiactionTaskTradeMyNameActionTaskTradePost
     */
    simpleItemSchema: SimpleItemSchema
}

export interface MyCharactersApiActionUnequipItemMyNameActionUnequipPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionUnequipItemMyNameActionUnequipPost
     */
    name: string
    /**
     * 
     * @type UnequipSchema
     * @memberof MyCharactersApiactionUnequipItemMyNameActionUnequipPost
     */
    unequipSchema: UnequipSchema
}

export interface MyCharactersApiActionUseItemMyNameActionUsePostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionUseItemMyNameActionUsePost
     */
    name: string
    /**
     * 
     * @type SimpleItemSchema
     * @memberof MyCharactersApiactionUseItemMyNameActionUsePost
     */
    simpleItemSchema: SimpleItemSchema
}

export interface MyCharactersApiActionWithdrawBankGoldMyNameActionBankWithdrawGoldPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionWithdrawBankGoldMyNameActionBankWithdrawGoldPost
     */
    name: string
    /**
     * 
     * @type DepositWithdrawGoldSchema
     * @memberof MyCharactersApiactionWithdrawBankGoldMyNameActionBankWithdrawGoldPost
     */
    depositWithdrawGoldSchema: DepositWithdrawGoldSchema
}

export interface MyCharactersApiActionWithdrawBankMyNameActionBankWithdrawPostRequest {
    /**
     * Name of your character.
     * Defaults to: undefined
     * @type string
     * @memberof MyCharactersApiactionWithdrawBankMyNameActionBankWithdrawPost
     */
    name: string
    /**
     * 
     * @type SimpleItemSchema
     * @memberof MyCharactersApiactionWithdrawBankMyNameActionBankWithdrawPost
     */
    simpleItemSchema: SimpleItemSchema
}

export interface MyCharactersApiGetAllCharactersLogsMyLogsGetRequest {
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof MyCharactersApigetAllCharactersLogsMyLogsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof MyCharactersApigetAllCharactersLogsMyLogsGet
     */
    size?: number
}

export interface MyCharactersApiGetMyCharactersMyCharactersGetRequest {
}

export class ObjectMyCharactersApi {
    private api: ObservableMyCharactersApi

    public constructor(configuration: Configuration, requestFactory?: MyCharactersApiRequestFactory, responseProcessor?: MyCharactersApiResponseProcessor) {
        this.api = new ObservableMyCharactersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accepting a new task.
     * Action Accept New Task
     * @param param the request object
     */
    public actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(param: MyCharactersApiActionAcceptNewTaskMyNameActionTaskNewPostRequest, options?: Configuration): Promise<HttpInfo<TaskResponseSchema>> {
        return this.api.actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Accepting a new task.
     * Action Accept New Task
     * @param param the request object
     */
    public actionAcceptNewTaskMyNameActionTaskNewPost(param: MyCharactersApiActionAcceptNewTaskMyNameActionTaskNewPostRequest, options?: Configuration): Promise<TaskResponseSchema> {
        return this.api.actionAcceptNewTaskMyNameActionTaskNewPost(param.name,  options).toPromise();
    }

    /**
     * Buy a 20 slots bank expansion.
     * Action Buy Bank Expansion
     * @param param the request object
     */
    public actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(param: MyCharactersApiActionBuyBankExpansionMyNameActionBankBuyExpansionPostRequest, options?: Configuration): Promise<HttpInfo<BankExtensionTransactionResponseSchema>> {
        return this.api.actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Buy a 20 slots bank expansion.
     * Action Buy Bank Expansion
     * @param param the request object
     */
    public actionBuyBankExpansionMyNameActionBankBuyExpansionPost(param: MyCharactersApiActionBuyBankExpansionMyNameActionBankBuyExpansionPostRequest, options?: Configuration): Promise<BankExtensionTransactionResponseSchema> {
        return this.api.actionBuyBankExpansionMyNameActionBankBuyExpansionPost(param.name,  options).toPromise();
    }

    /**
     * Complete a task.
     * Action Complete Task
     * @param param the request object
     */
    public actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(param: MyCharactersApiActionCompleteTaskMyNameActionTaskCompletePostRequest, options?: Configuration): Promise<HttpInfo<RewardDataResponseSchema>> {
        return this.api.actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Complete a task.
     * Action Complete Task
     * @param param the request object
     */
    public actionCompleteTaskMyNameActionTaskCompletePost(param: MyCharactersApiActionCompleteTaskMyNameActionTaskCompletePostRequest, options?: Configuration): Promise<RewardDataResponseSchema> {
        return this.api.actionCompleteTaskMyNameActionTaskCompletePost(param.name,  options).toPromise();
    }

    /**
     * Crafting an item. The character must be on a map with a workshop.
     * Action Crafting
     * @param param the request object
     */
    public actionCraftingMyNameActionCraftingPostWithHttpInfo(param: MyCharactersApiActionCraftingMyNameActionCraftingPostRequest, options?: Configuration): Promise<HttpInfo<SkillResponseSchema>> {
        return this.api.actionCraftingMyNameActionCraftingPostWithHttpInfo(param.name, param.craftingSchema,  options).toPromise();
    }

    /**
     * Crafting an item. The character must be on a map with a workshop.
     * Action Crafting
     * @param param the request object
     */
    public actionCraftingMyNameActionCraftingPost(param: MyCharactersApiActionCraftingMyNameActionCraftingPostRequest, options?: Configuration): Promise<SkillResponseSchema> {
        return this.api.actionCraftingMyNameActionCraftingPost(param.name, param.craftingSchema,  options).toPromise();
    }

    /**
     * Delete an item from your character\'s inventory.
     * Action Delete Item
     * @param param the request object
     */
    public actionDeleteItemMyNameActionDeletePostWithHttpInfo(param: MyCharactersApiActionDeleteItemMyNameActionDeletePostRequest, options?: Configuration): Promise<HttpInfo<DeleteItemResponseSchema>> {
        return this.api.actionDeleteItemMyNameActionDeletePostWithHttpInfo(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Delete an item from your character\'s inventory.
     * Action Delete Item
     * @param param the request object
     */
    public actionDeleteItemMyNameActionDeletePost(param: MyCharactersApiActionDeleteItemMyNameActionDeletePostRequest, options?: Configuration): Promise<DeleteItemResponseSchema> {
        return this.api.actionDeleteItemMyNameActionDeletePost(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Deposit gold in a bank on the character\'s map.
     * Action Deposit Bank Gold
     * @param param the request object
     */
    public actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(param: MyCharactersApiActionDepositBankGoldMyNameActionBankDepositGoldPostRequest, options?: Configuration): Promise<HttpInfo<BankGoldTransactionResponseSchema>> {
        return this.api.actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(param.name, param.depositWithdrawGoldSchema,  options).toPromise();
    }

    /**
     * Deposit gold in a bank on the character\'s map.
     * Action Deposit Bank Gold
     * @param param the request object
     */
    public actionDepositBankGoldMyNameActionBankDepositGoldPost(param: MyCharactersApiActionDepositBankGoldMyNameActionBankDepositGoldPostRequest, options?: Configuration): Promise<BankGoldTransactionResponseSchema> {
        return this.api.actionDepositBankGoldMyNameActionBankDepositGoldPost(param.name, param.depositWithdrawGoldSchema,  options).toPromise();
    }

    /**
     * Deposit an item in a bank on the character\'s map.
     * Action Deposit Bank
     * @param param the request object
     */
    public actionDepositBankMyNameActionBankDepositPostWithHttpInfo(param: MyCharactersApiActionDepositBankMyNameActionBankDepositPostRequest, options?: Configuration): Promise<HttpInfo<BankItemTransactionResponseSchema>> {
        return this.api.actionDepositBankMyNameActionBankDepositPostWithHttpInfo(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Deposit an item in a bank on the character\'s map.
     * Action Deposit Bank
     * @param param the request object
     */
    public actionDepositBankMyNameActionBankDepositPost(param: MyCharactersApiActionDepositBankMyNameActionBankDepositPostRequest, options?: Configuration): Promise<BankItemTransactionResponseSchema> {
        return this.api.actionDepositBankMyNameActionBankDepositPost(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Equip an item on your character.
     * Action Equip Item
     * @param param the request object
     */
    public actionEquipItemMyNameActionEquipPostWithHttpInfo(param: MyCharactersApiActionEquipItemMyNameActionEquipPostRequest, options?: Configuration): Promise<HttpInfo<EquipmentResponseSchema>> {
        return this.api.actionEquipItemMyNameActionEquipPostWithHttpInfo(param.name, param.equipSchema,  options).toPromise();
    }

    /**
     * Equip an item on your character.
     * Action Equip Item
     * @param param the request object
     */
    public actionEquipItemMyNameActionEquipPost(param: MyCharactersApiActionEquipItemMyNameActionEquipPostRequest, options?: Configuration): Promise<EquipmentResponseSchema> {
        return this.api.actionEquipItemMyNameActionEquipPost(param.name, param.equipSchema,  options).toPromise();
    }

    /**
     * Start a fight against a monster on the character\'s map.
     * Action Fight
     * @param param the request object
     */
    public actionFightMyNameActionFightPostWithHttpInfo(param: MyCharactersApiActionFightMyNameActionFightPostRequest, options?: Configuration): Promise<HttpInfo<CharacterFightResponseSchema>> {
        return this.api.actionFightMyNameActionFightPostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Start a fight against a monster on the character\'s map.
     * Action Fight
     * @param param the request object
     */
    public actionFightMyNameActionFightPost(param: MyCharactersApiActionFightMyNameActionFightPostRequest, options?: Configuration): Promise<CharacterFightResponseSchema> {
        return this.api.actionFightMyNameActionFightPost(param.name,  options).toPromise();
    }

    /**
     * Harvest a resource on the character\'s map.
     * Action Gathering
     * @param param the request object
     */
    public actionGatheringMyNameActionGatheringPostWithHttpInfo(param: MyCharactersApiActionGatheringMyNameActionGatheringPostRequest, options?: Configuration): Promise<HttpInfo<SkillResponseSchema>> {
        return this.api.actionGatheringMyNameActionGatheringPostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Harvest a resource on the character\'s map.
     * Action Gathering
     * @param param the request object
     */
    public actionGatheringMyNameActionGatheringPost(param: MyCharactersApiActionGatheringMyNameActionGatheringPostRequest, options?: Configuration): Promise<SkillResponseSchema> {
        return this.api.actionGatheringMyNameActionGatheringPost(param.name,  options).toPromise();
    }

    /**
     * Buy an item at the Grand Exchange on the character\'s map.
     * Action Ge Buy Item
     * @param param the request object
     */
    public actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(param: MyCharactersApiActionGeBuyItemMyNameActionGrandexchangeBuyPostRequest, options?: Configuration): Promise<HttpInfo<GETransactionResponseSchema>> {
        return this.api.actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(param.name, param.gEBuyOrderSchema,  options).toPromise();
    }

    /**
     * Buy an item at the Grand Exchange on the character\'s map.
     * Action Ge Buy Item
     * @param param the request object
     */
    public actionGeBuyItemMyNameActionGrandexchangeBuyPost(param: MyCharactersApiActionGeBuyItemMyNameActionGrandexchangeBuyPostRequest, options?: Configuration): Promise<GETransactionResponseSchema> {
        return this.api.actionGeBuyItemMyNameActionGrandexchangeBuyPost(param.name, param.gEBuyOrderSchema,  options).toPromise();
    }

    /**
     * Cancel a sell order at the Grand Exchange on the character\'s map.
     * Action Ge Cancel Sell Order
     * @param param the request object
     */
    public actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(param: MyCharactersApiActionGeCancelSellOrderMyNameActionGrandexchangeCancelPostRequest, options?: Configuration): Promise<HttpInfo<GETransactionResponseSchema>> {
        return this.api.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(param.name, param.gECancelOrderSchema,  options).toPromise();
    }

    /**
     * Cancel a sell order at the Grand Exchange on the character\'s map.
     * Action Ge Cancel Sell Order
     * @param param the request object
     */
    public actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(param: MyCharactersApiActionGeCancelSellOrderMyNameActionGrandexchangeCancelPostRequest, options?: Configuration): Promise<GETransactionResponseSchema> {
        return this.api.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(param.name, param.gECancelOrderSchema,  options).toPromise();
    }

    /**
     * Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.
     * Action Ge Create Sell Order
     * @param param the request object
     */
    public actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(param: MyCharactersApiActionGeCreateSellOrderMyNameActionGrandexchangeSellPostRequest, options?: Configuration): Promise<HttpInfo<GECreateOrderTransactionResponseSchema>> {
        return this.api.actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(param.name, param.gEOrderCreationrSchema,  options).toPromise();
    }

    /**
     * Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.
     * Action Ge Create Sell Order
     * @param param the request object
     */
    public actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(param: MyCharactersApiActionGeCreateSellOrderMyNameActionGrandexchangeSellPostRequest, options?: Configuration): Promise<GECreateOrderTransactionResponseSchema> {
        return this.api.actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(param.name, param.gEOrderCreationrSchema,  options).toPromise();
    }

    /**
     * Moves a character on the map using the map\'s X and Y position.
     * Action Move
     * @param param the request object
     */
    public actionMoveMyNameActionMovePostWithHttpInfo(param: MyCharactersApiActionMoveMyNameActionMovePostRequest, options?: Configuration): Promise<HttpInfo<CharacterMovementResponseSchema>> {
        return this.api.actionMoveMyNameActionMovePostWithHttpInfo(param.name, param.destinationSchema,  options).toPromise();
    }

    /**
     * Moves a character on the map using the map\'s X and Y position.
     * Action Move
     * @param param the request object
     */
    public actionMoveMyNameActionMovePost(param: MyCharactersApiActionMoveMyNameActionMovePostRequest, options?: Configuration): Promise<CharacterMovementResponseSchema> {
        return this.api.actionMoveMyNameActionMovePost(param.name, param.destinationSchema,  options).toPromise();
    }

    /**
     * Buy an item from an NPC on the character\'s map.
     * Action Npc Buy Item
     * @param param the request object
     */
    public actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(param: MyCharactersApiActionNpcBuyItemMyNameActionNpcBuyPostRequest, options?: Configuration): Promise<HttpInfo<NpcMerchantTransactionResponseSchema>> {
        return this.api.actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(param.name, param.npcMerchantBuySchema,  options).toPromise();
    }

    /**
     * Buy an item from an NPC on the character\'s map.
     * Action Npc Buy Item
     * @param param the request object
     */
    public actionNpcBuyItemMyNameActionNpcBuyPost(param: MyCharactersApiActionNpcBuyItemMyNameActionNpcBuyPostRequest, options?: Configuration): Promise<NpcMerchantTransactionResponseSchema> {
        return this.api.actionNpcBuyItemMyNameActionNpcBuyPost(param.name, param.npcMerchantBuySchema,  options).toPromise();
    }

    /**
     * Sell an item from an NPC on the character\'s map.
     * Action Npc Sell Item
     * @param param the request object
     */
    public actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(param: MyCharactersApiActionNpcSellItemMyNameActionNpcSellPostRequest, options?: Configuration): Promise<HttpInfo<NpcMerchantTransactionResponseSchema>> {
        return this.api.actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(param.name, param.npcMerchantBuySchema,  options).toPromise();
    }

    /**
     * Sell an item from an NPC on the character\'s map.
     * Action Npc Sell Item
     * @param param the request object
     */
    public actionNpcSellItemMyNameActionNpcSellPost(param: MyCharactersApiActionNpcSellItemMyNameActionNpcSellPostRequest, options?: Configuration): Promise<NpcMerchantTransactionResponseSchema> {
        return this.api.actionNpcSellItemMyNameActionNpcSellPost(param.name, param.npcMerchantBuySchema,  options).toPromise();
    }

    /**
     * Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).
     * Action Recycling
     * @param param the request object
     */
    public actionRecyclingMyNameActionRecyclingPostWithHttpInfo(param: MyCharactersApiActionRecyclingMyNameActionRecyclingPostRequest, options?: Configuration): Promise<HttpInfo<RecyclingResponseSchema>> {
        return this.api.actionRecyclingMyNameActionRecyclingPostWithHttpInfo(param.name, param.recyclingSchema,  options).toPromise();
    }

    /**
     * Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).
     * Action Recycling
     * @param param the request object
     */
    public actionRecyclingMyNameActionRecyclingPost(param: MyCharactersApiActionRecyclingMyNameActionRecyclingPostRequest, options?: Configuration): Promise<RecyclingResponseSchema> {
        return this.api.actionRecyclingMyNameActionRecyclingPost(param.name, param.recyclingSchema,  options).toPromise();
    }

    /**
     * Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)
     * Action Rest
     * @param param the request object
     */
    public actionRestMyNameActionRestPostWithHttpInfo(param: MyCharactersApiActionRestMyNameActionRestPostRequest, options?: Configuration): Promise<HttpInfo<CharacterRestResponseSchema>> {
        return this.api.actionRestMyNameActionRestPostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)
     * Action Rest
     * @param param the request object
     */
    public actionRestMyNameActionRestPost(param: MyCharactersApiActionRestMyNameActionRestPostRequest, options?: Configuration): Promise<CharacterRestResponseSchema> {
        return this.api.actionRestMyNameActionRestPost(param.name,  options).toPromise();
    }

    /**
     * Cancel a task for 1 tasks coin.
     * Action Task Cancel
     * @param param the request object
     */
    public actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(param: MyCharactersApiActionTaskCancelMyNameActionTaskCancelPostRequest, options?: Configuration): Promise<HttpInfo<TaskCancelledResponseSchema>> {
        return this.api.actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Cancel a task for 1 tasks coin.
     * Action Task Cancel
     * @param param the request object
     */
    public actionTaskCancelMyNameActionTaskCancelPost(param: MyCharactersApiActionTaskCancelMyNameActionTaskCancelPostRequest, options?: Configuration): Promise<TaskCancelledResponseSchema> {
        return this.api.actionTaskCancelMyNameActionTaskCancelPost(param.name,  options).toPromise();
    }

    /**
     * Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.
     * Action Task Exchange
     * @param param the request object
     */
    public actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(param: MyCharactersApiActionTaskExchangeMyNameActionTaskExchangePostRequest, options?: Configuration): Promise<HttpInfo<RewardDataResponseSchema>> {
        return this.api.actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.
     * Action Task Exchange
     * @param param the request object
     */
    public actionTaskExchangeMyNameActionTaskExchangePost(param: MyCharactersApiActionTaskExchangeMyNameActionTaskExchangePostRequest, options?: Configuration): Promise<RewardDataResponseSchema> {
        return this.api.actionTaskExchangeMyNameActionTaskExchangePost(param.name,  options).toPromise();
    }

    /**
     * Trading items with a Tasks Master.
     * Action Task Trade
     * @param param the request object
     */
    public actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(param: MyCharactersApiActionTaskTradeMyNameActionTaskTradePostRequest, options?: Configuration): Promise<HttpInfo<TaskTradeResponseSchema>> {
        return this.api.actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Trading items with a Tasks Master.
     * Action Task Trade
     * @param param the request object
     */
    public actionTaskTradeMyNameActionTaskTradePost(param: MyCharactersApiActionTaskTradeMyNameActionTaskTradePostRequest, options?: Configuration): Promise<TaskTradeResponseSchema> {
        return this.api.actionTaskTradeMyNameActionTaskTradePost(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Unequip an item on your character.
     * Action Unequip Item
     * @param param the request object
     */
    public actionUnequipItemMyNameActionUnequipPostWithHttpInfo(param: MyCharactersApiActionUnequipItemMyNameActionUnequipPostRequest, options?: Configuration): Promise<HttpInfo<EquipmentResponseSchema>> {
        return this.api.actionUnequipItemMyNameActionUnequipPostWithHttpInfo(param.name, param.unequipSchema,  options).toPromise();
    }

    /**
     * Unequip an item on your character.
     * Action Unequip Item
     * @param param the request object
     */
    public actionUnequipItemMyNameActionUnequipPost(param: MyCharactersApiActionUnequipItemMyNameActionUnequipPostRequest, options?: Configuration): Promise<EquipmentResponseSchema> {
        return this.api.actionUnequipItemMyNameActionUnequipPost(param.name, param.unequipSchema,  options).toPromise();
    }

    /**
     * Use an item as a consumable.
     * Action Use Item
     * @param param the request object
     */
    public actionUseItemMyNameActionUsePostWithHttpInfo(param: MyCharactersApiActionUseItemMyNameActionUsePostRequest, options?: Configuration): Promise<HttpInfo<UseItemResponseSchema>> {
        return this.api.actionUseItemMyNameActionUsePostWithHttpInfo(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Use an item as a consumable.
     * Action Use Item
     * @param param the request object
     */
    public actionUseItemMyNameActionUsePost(param: MyCharactersApiActionUseItemMyNameActionUsePostRequest, options?: Configuration): Promise<UseItemResponseSchema> {
        return this.api.actionUseItemMyNameActionUsePost(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Withdraw gold from your bank.
     * Action Withdraw Bank Gold
     * @param param the request object
     */
    public actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(param: MyCharactersApiActionWithdrawBankGoldMyNameActionBankWithdrawGoldPostRequest, options?: Configuration): Promise<HttpInfo<BankGoldTransactionResponseSchema>> {
        return this.api.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(param.name, param.depositWithdrawGoldSchema,  options).toPromise();
    }

    /**
     * Withdraw gold from your bank.
     * Action Withdraw Bank Gold
     * @param param the request object
     */
    public actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(param: MyCharactersApiActionWithdrawBankGoldMyNameActionBankWithdrawGoldPostRequest, options?: Configuration): Promise<BankGoldTransactionResponseSchema> {
        return this.api.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(param.name, param.depositWithdrawGoldSchema,  options).toPromise();
    }

    /**
     * Take an item from your bank and put it in the character\'s inventory.
     * Action Withdraw Bank
     * @param param the request object
     */
    public actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(param: MyCharactersApiActionWithdrawBankMyNameActionBankWithdrawPostRequest, options?: Configuration): Promise<HttpInfo<BankItemTransactionResponseSchema>> {
        return this.api.actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * Take an item from your bank and put it in the character\'s inventory.
     * Action Withdraw Bank
     * @param param the request object
     */
    public actionWithdrawBankMyNameActionBankWithdrawPost(param: MyCharactersApiActionWithdrawBankMyNameActionBankWithdrawPostRequest, options?: Configuration): Promise<BankItemTransactionResponseSchema> {
        return this.api.actionWithdrawBankMyNameActionBankWithdrawPost(param.name, param.simpleItemSchema,  options).toPromise();
    }

    /**
     * History of the last 100 actions of all your characters.
     * Get All Characters Logs
     * @param param the request object
     */
    public getAllCharactersLogsMyLogsGetWithHttpInfo(param: MyCharactersApiGetAllCharactersLogsMyLogsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageLogSchema>> {
        return this.api.getAllCharactersLogsMyLogsGetWithHttpInfo(param.page, param.size,  options).toPromise();
    }

    /**
     * History of the last 100 actions of all your characters.
     * Get All Characters Logs
     * @param param the request object
     */
    public getAllCharactersLogsMyLogsGet(param: MyCharactersApiGetAllCharactersLogsMyLogsGetRequest = {}, options?: Configuration): Promise<DataPageLogSchema> {
        return this.api.getAllCharactersLogsMyLogsGet(param.page, param.size,  options).toPromise();
    }

    /**
     * List of your characters.
     * Get My Characters
     * @param param the request object
     */
    public getMyCharactersMyCharactersGetWithHttpInfo(param: MyCharactersApiGetMyCharactersMyCharactersGetRequest = {}, options?: Configuration): Promise<HttpInfo<MyCharactersListSchema>> {
        return this.api.getMyCharactersMyCharactersGetWithHttpInfo( options).toPromise();
    }

    /**
     * List of your characters.
     * Get My Characters
     * @param param the request object
     */
    public getMyCharactersMyCharactersGet(param: MyCharactersApiGetMyCharactersMyCharactersGetRequest = {}, options?: Configuration): Promise<MyCharactersListSchema> {
        return this.api.getMyCharactersMyCharactersGet( options).toPromise();
    }

}

import { ObservableNPCsApi } from "./ObservableAPI.ts";
import { NPCsApiRequestFactory, NPCsApiResponseProcessor} from "../apis/NPCsApi.ts";

export interface NPCsApiGetAllNpcsNpcsGetRequest {
    /**
     * The type of the NPC.
     * Defaults to: undefined
     * @type NPCType
     * @memberof NPCsApigetAllNpcsNpcsGet
     */
    type?: NPCType
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof NPCsApigetAllNpcsNpcsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof NPCsApigetAllNpcsNpcsGet
     */
    size?: number
}

export interface NPCsApiGetNpcItemsNpcsCodeItemsGetRequest {
    /**
     * The code of the NPC.
     * Defaults to: undefined
     * @type string
     * @memberof NPCsApigetNpcItemsNpcsCodeItemsGet
     */
    code: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof NPCsApigetNpcItemsNpcsCodeItemsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof NPCsApigetNpcItemsNpcsCodeItemsGet
     */
    size?: number
}

export interface NPCsApiGetNpcNpcsCodeGetRequest {
    /**
     * The code of the NPC.
     * Defaults to: undefined
     * @type string
     * @memberof NPCsApigetNpcNpcsCodeGet
     */
    code: string
}

export class ObjectNPCsApi {
    private api: ObservableNPCsApi

    public constructor(configuration: Configuration, requestFactory?: NPCsApiRequestFactory, responseProcessor?: NPCsApiResponseProcessor) {
        this.api = new ObservableNPCsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch NPCs details.
     * Get All Npcs
     * @param param the request object
     */
    public getAllNpcsNpcsGetWithHttpInfo(param: NPCsApiGetAllNpcsNpcsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageNPCSchema>> {
        return this.api.getAllNpcsNpcsGetWithHttpInfo(param.type, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch NPCs details.
     * Get All Npcs
     * @param param the request object
     */
    public getAllNpcsNpcsGet(param: NPCsApiGetAllNpcsNpcsGetRequest = {}, options?: Configuration): Promise<DataPageNPCSchema> {
        return this.api.getAllNpcsNpcsGet(param.type, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.
     * Get Npc Items
     * @param param the request object
     */
    public getNpcItemsNpcsCodeItemsGetWithHttpInfo(param: NPCsApiGetNpcItemsNpcsCodeItemsGetRequest, options?: Configuration): Promise<HttpInfo<DataPageNPCItem>> {
        return this.api.getNpcItemsNpcsCodeItemsGetWithHttpInfo(param.code, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.
     * Get Npc Items
     * @param param the request object
     */
    public getNpcItemsNpcsCodeItemsGet(param: NPCsApiGetNpcItemsNpcsCodeItemsGetRequest, options?: Configuration): Promise<DataPageNPCItem> {
        return this.api.getNpcItemsNpcsCodeItemsGet(param.code, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a NPC.
     * Get Npc
     * @param param the request object
     */
    public getNpcNpcsCodeGetWithHttpInfo(param: NPCsApiGetNpcNpcsCodeGetRequest, options?: Configuration): Promise<HttpInfo<NPCResponseSchema>> {
        return this.api.getNpcNpcsCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a NPC.
     * Get Npc
     * @param param the request object
     */
    public getNpcNpcsCodeGet(param: NPCsApiGetNpcNpcsCodeGetRequest, options?: Configuration): Promise<NPCResponseSchema> {
        return this.api.getNpcNpcsCodeGet(param.code,  options).toPromise();
    }

}

import { ObservableResourcesApi } from "./ObservableAPI.ts";
import { ResourcesApiRequestFactory, ResourcesApiResponseProcessor} from "../apis/ResourcesApi.ts";

export interface ResourcesApiGetAllResourcesResourcesGetRequest {
    /**
     * Skill minimum level.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof ResourcesApigetAllResourcesResourcesGet
     */
    minLevel?: number
    /**
     * Skill maximum level.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof ResourcesApigetAllResourcesResourcesGet
     */
    maxLevel?: number
    /**
     * The code of the skill.
     * Defaults to: undefined
     * @type GatheringSkill
     * @memberof ResourcesApigetAllResourcesResourcesGet
     */
    skill?: GatheringSkill
    /**
     * Item code of the drop.
     * Defaults to: undefined
     * @type string
     * @memberof ResourcesApigetAllResourcesResourcesGet
     */
    drop?: string
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof ResourcesApigetAllResourcesResourcesGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof ResourcesApigetAllResourcesResourcesGet
     */
    size?: number
}

export interface ResourcesApiGetResourceResourcesCodeGetRequest {
    /**
     * The code of the resource.
     * Defaults to: undefined
     * @type string
     * @memberof ResourcesApigetResourceResourcesCodeGet
     */
    code: string
}

export class ObjectResourcesApi {
    private api: ObservableResourcesApi

    public constructor(configuration: Configuration, requestFactory?: ResourcesApiRequestFactory, responseProcessor?: ResourcesApiResponseProcessor) {
        this.api = new ObservableResourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch resources details.
     * Get All Resources
     * @param param the request object
     */
    public getAllResourcesResourcesGetWithHttpInfo(param: ResourcesApiGetAllResourcesResourcesGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageResourceSchema>> {
        return this.api.getAllResourcesResourcesGetWithHttpInfo(param.minLevel, param.maxLevel, param.skill, param.drop, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch resources details.
     * Get All Resources
     * @param param the request object
     */
    public getAllResourcesResourcesGet(param: ResourcesApiGetAllResourcesResourcesGetRequest = {}, options?: Configuration): Promise<DataPageResourceSchema> {
        return this.api.getAllResourcesResourcesGet(param.minLevel, param.maxLevel, param.skill, param.drop, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a resource.
     * Get Resource
     * @param param the request object
     */
    public getResourceResourcesCodeGetWithHttpInfo(param: ResourcesApiGetResourceResourcesCodeGetRequest, options?: Configuration): Promise<HttpInfo<ResourceResponseSchema>> {
        return this.api.getResourceResourcesCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a resource.
     * Get Resource
     * @param param the request object
     */
    public getResourceResourcesCodeGet(param: ResourcesApiGetResourceResourcesCodeGetRequest, options?: Configuration): Promise<ResourceResponseSchema> {
        return this.api.getResourceResourcesCodeGet(param.code,  options).toPromise();
    }

}

import { ObservableTasksApi } from "./ObservableAPI.ts";
import { TasksApiRequestFactory, TasksApiResponseProcessor} from "../apis/TasksApi.ts";

export interface TasksApiGetAllTasksRewardsTasksRewardsGetRequest {
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof TasksApigetAllTasksRewardsTasksRewardsGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof TasksApigetAllTasksRewardsTasksRewardsGet
     */
    size?: number
}

export interface TasksApiGetAllTasksTasksListGetRequest {
    /**
     * Minimum level.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof TasksApigetAllTasksTasksListGet
     */
    minLevel?: number
    /**
     * Maximum level.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof TasksApigetAllTasksTasksListGet
     */
    maxLevel?: number
    /**
     * The code of the skill.
     * Defaults to: undefined
     * @type Skill
     * @memberof TasksApigetAllTasksTasksListGet
     */
    skill?: Skill
    /**
     * The type of tasks.
     * Defaults to: undefined
     * @type TaskType
     * @memberof TasksApigetAllTasksTasksListGet
     */
    type?: TaskType
    /**
     * Page number
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof TasksApigetAllTasksTasksListGet
     */
    page?: number
    /**
     * Page size
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof TasksApigetAllTasksTasksListGet
     */
    size?: number
}

export interface TasksApiGetTaskTasksListCodeGetRequest {
    /**
     * The code of the task.
     * Defaults to: undefined
     * @type string
     * @memberof TasksApigetTaskTasksListCodeGet
     */
    code: string
}

export interface TasksApiGetTasksRewardTasksRewardsCodeGetRequest {
    /**
     * The code of the tasks reward.
     * Defaults to: undefined
     * @type string
     * @memberof TasksApigetTasksRewardTasksRewardsCodeGet
     */
    code: string
}

export class ObjectTasksApi {
    private api: ObservableTasksApi

    public constructor(configuration: Configuration, requestFactory?: TasksApiRequestFactory, responseProcessor?: TasksApiResponseProcessor) {
        this.api = new ObservableTasksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master.
     * Get All Tasks Rewards
     * @param param the request object
     */
    public getAllTasksRewardsTasksRewardsGetWithHttpInfo(param: TasksApiGetAllTasksRewardsTasksRewardsGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageDropRateSchema>> {
        return this.api.getAllTasksRewardsTasksRewardsGetWithHttpInfo(param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master.
     * Get All Tasks Rewards
     * @param param the request object
     */
    public getAllTasksRewardsTasksRewardsGet(param: TasksApiGetAllTasksRewardsTasksRewardsGetRequest = {}, options?: Configuration): Promise<DataPageDropRateSchema> {
        return this.api.getAllTasksRewardsTasksRewardsGet(param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch the list of all tasks.
     * Get All Tasks
     * @param param the request object
     */
    public getAllTasksTasksListGetWithHttpInfo(param: TasksApiGetAllTasksTasksListGetRequest = {}, options?: Configuration): Promise<HttpInfo<DataPageTaskFullSchema>> {
        return this.api.getAllTasksTasksListGetWithHttpInfo(param.minLevel, param.maxLevel, param.skill, param.type, param.page, param.size,  options).toPromise();
    }

    /**
     * Fetch the list of all tasks.
     * Get All Tasks
     * @param param the request object
     */
    public getAllTasksTasksListGet(param: TasksApiGetAllTasksTasksListGetRequest = {}, options?: Configuration): Promise<DataPageTaskFullSchema> {
        return this.api.getAllTasksTasksListGet(param.minLevel, param.maxLevel, param.skill, param.type, param.page, param.size,  options).toPromise();
    }

    /**
     * Retrieve the details of a task.
     * Get Task
     * @param param the request object
     */
    public getTaskTasksListCodeGetWithHttpInfo(param: TasksApiGetTaskTasksListCodeGetRequest, options?: Configuration): Promise<HttpInfo<TaskFullResponseSchema>> {
        return this.api.getTaskTasksListCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a task.
     * Get Task
     * @param param the request object
     */
    public getTaskTasksListCodeGet(param: TasksApiGetTaskTasksListCodeGetRequest, options?: Configuration): Promise<TaskFullResponseSchema> {
        return this.api.getTaskTasksListCodeGet(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a tasks reward.
     * Get Tasks Reward
     * @param param the request object
     */
    public getTasksRewardTasksRewardsCodeGetWithHttpInfo(param: TasksApiGetTasksRewardTasksRewardsCodeGetRequest, options?: Configuration): Promise<HttpInfo<RewardResponseSchema>> {
        return this.api.getTasksRewardTasksRewardsCodeGetWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the details of a tasks reward.
     * Get Tasks Reward
     * @param param the request object
     */
    public getTasksRewardTasksRewardsCodeGet(param: TasksApiGetTasksRewardTasksRewardsCodeGetRequest, options?: Configuration): Promise<RewardResponseSchema> {
        return this.api.getTasksRewardTasksRewardsCodeGet(param.code,  options).toPromise();
    }

}

import { ObservableTokenApi } from "./ObservableAPI.ts";
import { TokenApiRequestFactory, TokenApiResponseProcessor} from "../apis/TokenApi.ts";

export interface TokenApiGenerateTokenTokenPostRequest {
}

export class ObjectTokenApi {
    private api: ObservableTokenApi

    public constructor(configuration: Configuration, requestFactory?: TokenApiRequestFactory, responseProcessor?: TokenApiResponseProcessor) {
        this.api = new ObservableTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.
     * Generate Token
     * @param param the request object
     */
    public generateTokenTokenPostWithHttpInfo(param: TokenApiGenerateTokenTokenPostRequest = {}, options?: Configuration): Promise<HttpInfo<TokenResponseSchema>> {
        return this.api.generateTokenTokenPostWithHttpInfo( options).toPromise();
    }

    /**
     * Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.
     * Generate Token
     * @param param the request object
     */
    public generateTokenTokenPost(param: TokenApiGenerateTokenTokenPostRequest = {}, options?: Configuration): Promise<TokenResponseSchema> {
        return this.api.generateTokenTokenPost( options).toPromise();
    }

}
