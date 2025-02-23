import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AccountAchievementSchema } from '../models/AccountAchievementSchema';
import { AccountDetails } from '../models/AccountDetails';
import { AccountDetailsSchema } from '../models/AccountDetailsSchema';
import { AccountLeaderboardSchema } from '../models/AccountLeaderboardSchema';
import { AccountLeaderboardType } from '../models/AccountLeaderboardType';
import { AccountStatus } from '../models/AccountStatus';
import { AchievementResponseSchema } from '../models/AchievementResponseSchema';
import { AchievementRewardsSchema } from '../models/AchievementRewardsSchema';
import { AchievementSchema } from '../models/AchievementSchema';
import { AchievementType } from '../models/AchievementType';
import { ActionType } from '../models/ActionType';
import { ActiveEventSchema } from '../models/ActiveEventSchema';
import { AddAccountSchema } from '../models/AddAccountSchema';
import { AddCharacterSchema } from '../models/AddCharacterSchema';
import { AnnouncementSchema } from '../models/AnnouncementSchema';
import { BadgeConditionSchema } from '../models/BadgeConditionSchema';
import { BadgeResponseSchema } from '../models/BadgeResponseSchema';
import { BadgeSchema } from '../models/BadgeSchema';
import { BankExtensionSchema } from '../models/BankExtensionSchema';
import { BankExtensionTransactionResponseSchema } from '../models/BankExtensionTransactionResponseSchema';
import { BankExtensionTransactionSchema } from '../models/BankExtensionTransactionSchema';
import { BankGoldTransactionResponseSchema } from '../models/BankGoldTransactionResponseSchema';
import { BankGoldTransactionSchema } from '../models/BankGoldTransactionSchema';
import { BankItemTransactionResponseSchema } from '../models/BankItemTransactionResponseSchema';
import { BankItemTransactionSchema } from '../models/BankItemTransactionSchema';
import { BankResponseSchema } from '../models/BankResponseSchema';
import { BankSchema } from '../models/BankSchema';
import { BlockedHitsSchema } from '../models/BlockedHitsSchema';
import { ChangePassword } from '../models/ChangePassword';
import { CharacterFightDataSchema } from '../models/CharacterFightDataSchema';
import { CharacterFightResponseSchema } from '../models/CharacterFightResponseSchema';
import { CharacterLeaderboardSchema } from '../models/CharacterLeaderboardSchema';
import { CharacterLeaderboardType } from '../models/CharacterLeaderboardType';
import { CharacterMovementDataSchema } from '../models/CharacterMovementDataSchema';
import { CharacterMovementResponseSchema } from '../models/CharacterMovementResponseSchema';
import { CharacterResponseSchema } from '../models/CharacterResponseSchema';
import { CharacterRestDataSchema } from '../models/CharacterRestDataSchema';
import { CharacterRestResponseSchema } from '../models/CharacterRestResponseSchema';
import { CharacterSchema } from '../models/CharacterSchema';
import { CharacterSkin } from '../models/CharacterSkin';
import { CooldownSchema } from '../models/CooldownSchema';
import { CraftSchema } from '../models/CraftSchema';
import { CraftSkill } from '../models/CraftSkill';
import { CraftingSchema } from '../models/CraftingSchema';
import { DataPageAccountAchievementSchema } from '../models/DataPageAccountAchievementSchema';
import { DataPageAccountLeaderboardSchema } from '../models/DataPageAccountLeaderboardSchema';
import { DataPageAchievementSchema } from '../models/DataPageAchievementSchema';
import { DataPageActiveEventSchema } from '../models/DataPageActiveEventSchema';
import { DataPageBadgeSchema } from '../models/DataPageBadgeSchema';
import { DataPageCharacterLeaderboardSchema } from '../models/DataPageCharacterLeaderboardSchema';
import { DataPageDropRateSchema } from '../models/DataPageDropRateSchema';
import { DataPageEffectSchema } from '../models/DataPageEffectSchema';
import { DataPageEventSchema } from '../models/DataPageEventSchema';
import { DataPageGEOrderSchema } from '../models/DataPageGEOrderSchema';
import { DataPageGeOrderHistorySchema } from '../models/DataPageGeOrderHistorySchema';
import { DataPageItemSchema } from '../models/DataPageItemSchema';
import { DataPageLogSchema } from '../models/DataPageLogSchema';
import { DataPageMapSchema } from '../models/DataPageMapSchema';
import { DataPageMonsterSchema } from '../models/DataPageMonsterSchema';
import { DataPageNPCItem } from '../models/DataPageNPCItem';
import { DataPageNPCSchema } from '../models/DataPageNPCSchema';
import { DataPageResourceSchema } from '../models/DataPageResourceSchema';
import { DataPageSimpleItemSchema } from '../models/DataPageSimpleItemSchema';
import { DataPageTaskFullSchema } from '../models/DataPageTaskFullSchema';
import { DeleteCharacterSchema } from '../models/DeleteCharacterSchema';
import { DeleteItemResponseSchema } from '../models/DeleteItemResponseSchema';
import { DeleteItemSchema } from '../models/DeleteItemSchema';
import { DepositWithdrawGoldSchema } from '../models/DepositWithdrawGoldSchema';
import { DestinationSchema } from '../models/DestinationSchema';
import { DropRateSchema } from '../models/DropRateSchema';
import { DropSchema } from '../models/DropSchema';
import { EffectResponseSchema } from '../models/EffectResponseSchema';
import { EffectSchema } from '../models/EffectSchema';
import { EffectSubtype } from '../models/EffectSubtype';
import { EffectType } from '../models/EffectType';
import { EquipRequestSchema } from '../models/EquipRequestSchema';
import { EquipSchema } from '../models/EquipSchema';
import { EquipmentResponseSchema } from '../models/EquipmentResponseSchema';
import { EventContentSchema } from '../models/EventContentSchema';
import { EventMapSchema } from '../models/EventMapSchema';
import { EventSchema } from '../models/EventSchema';
import { FightResult } from '../models/FightResult';
import { FightSchema } from '../models/FightSchema';
import { GEBuyOrderSchema } from '../models/GEBuyOrderSchema';
import { GECancelOrderSchema } from '../models/GECancelOrderSchema';
import { GECreateOrderTransactionResponseSchema } from '../models/GECreateOrderTransactionResponseSchema';
import { GEOrderCreatedSchema } from '../models/GEOrderCreatedSchema';
import { GEOrderCreationrSchema } from '../models/GEOrderCreationrSchema';
import { GEOrderReponseSchema } from '../models/GEOrderReponseSchema';
import { GEOrderSchema } from '../models/GEOrderSchema';
import { GEOrderTransactionSchema } from '../models/GEOrderTransactionSchema';
import { GETransactionListSchema } from '../models/GETransactionListSchema';
import { GETransactionResponseSchema } from '../models/GETransactionResponseSchema';
import { GETransactionSchema } from '../models/GETransactionSchema';
import { GatheringSkill } from '../models/GatheringSkill';
import { GeOrderHistorySchema } from '../models/GeOrderHistorySchema';
import { GoldSchema } from '../models/GoldSchema';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { InventorySlot } from '../models/InventorySlot';
import { ItemResponseSchema } from '../models/ItemResponseSchema';
import { ItemSchema } from '../models/ItemSchema';
import { ItemSlot } from '../models/ItemSlot';
import { ItemType } from '../models/ItemType';
import { LogSchema } from '../models/LogSchema';
import { LogType } from '../models/LogType';
import { MapContentSchema } from '../models/MapContentSchema';
import { MapContentType } from '../models/MapContentType';
import { MapResponseSchema } from '../models/MapResponseSchema';
import { MapSchema } from '../models/MapSchema';
import { MonsterResponseSchema } from '../models/MonsterResponseSchema';
import { MonsterSchema } from '../models/MonsterSchema';
import { MyAccountDetails } from '../models/MyAccountDetails';
import { MyAccountDetailsSchema } from '../models/MyAccountDetailsSchema';
import { MyCharactersListSchema } from '../models/MyCharactersListSchema';
import { NPCItem } from '../models/NPCItem';
import { NPCResponseSchema } from '../models/NPCResponseSchema';
import { NPCSchema } from '../models/NPCSchema';
import { NPCType } from '../models/NPCType';
import { NpcItemTransactionSchema } from '../models/NpcItemTransactionSchema';
import { NpcMerchantBuySchema } from '../models/NpcMerchantBuySchema';
import { NpcMerchantTransactionResponseSchema } from '../models/NpcMerchantTransactionResponseSchema';
import { NpcMerchantTransactionSchema } from '../models/NpcMerchantTransactionSchema';
import { RecyclingDataSchema } from '../models/RecyclingDataSchema';
import { RecyclingItemsSchema } from '../models/RecyclingItemsSchema';
import { RecyclingResponseSchema } from '../models/RecyclingResponseSchema';
import { RecyclingSchema } from '../models/RecyclingSchema';
import { ResourceResponseSchema } from '../models/ResourceResponseSchema';
import { ResourceSchema } from '../models/ResourceSchema';
import { ResponseSchema } from '../models/ResponseSchema';
import { RewardDataResponseSchema } from '../models/RewardDataResponseSchema';
import { RewardDataSchema } from '../models/RewardDataSchema';
import { RewardResponseSchema } from '../models/RewardResponseSchema';
import { RewardsSchema } from '../models/RewardsSchema';
import { SimpleEffectSchema } from '../models/SimpleEffectSchema';
import { SimpleItemSchema } from '../models/SimpleItemSchema';
import { Skill } from '../models/Skill';
import { SkillDataSchema } from '../models/SkillDataSchema';
import { SkillInfoSchema } from '../models/SkillInfoSchema';
import { SkillResponseSchema } from '../models/SkillResponseSchema';
import { StatusResponseSchema } from '../models/StatusResponseSchema';
import { StatusSchema } from '../models/StatusSchema';
import { TaskCancelledResponseSchema } from '../models/TaskCancelledResponseSchema';
import { TaskCancelledSchema } from '../models/TaskCancelledSchema';
import { TaskDataSchema } from '../models/TaskDataSchema';
import { TaskFullResponseSchema } from '../models/TaskFullResponseSchema';
import { TaskFullSchema } from '../models/TaskFullSchema';
import { TaskResponseSchema } from '../models/TaskResponseSchema';
import { TaskSchema } from '../models/TaskSchema';
import { TaskTradeDataSchema } from '../models/TaskTradeDataSchema';
import { TaskTradeResponseSchema } from '../models/TaskTradeResponseSchema';
import { TaskTradeSchema } from '../models/TaskTradeSchema';
import { TaskType } from '../models/TaskType';
import { TokenResponseSchema } from '../models/TokenResponseSchema';
import { UnequipSchema } from '../models/UnequipSchema';
import { UseItemResponseSchema } from '../models/UseItemResponseSchema';
import { UseItemSchema } from '../models/UseItemSchema';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Account
     * @param addAccountSchema
     */
    public createAccountAccountsCreatePostWithHttpInfo(addAccountSchema: AddAccountSchema, _options?: Configuration): Promise<HttpInfo<ResponseSchema>> {
        const result = this.api.createAccountAccountsCreatePostWithHttpInfo(addAccountSchema, _options);
        return result.toPromise();
    }

    /**
     * Create Account
     * @param addAccountSchema
     */
    public createAccountAccountsCreatePost(addAccountSchema: AddAccountSchema, _options?: Configuration): Promise<ResponseSchema> {
        const result = this.api.createAccountAccountsCreatePost(addAccountSchema, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Account
     * @param account The account name.
     */
    public getAccountAccountsAccountGetWithHttpInfo(account: string, _options?: Configuration): Promise<HttpInfo<AccountDetailsSchema>> {
        const result = this.api.getAccountAccountsAccountGetWithHttpInfo(account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Account
     * @param account The account name.
     */
    public getAccountAccountsAccountGet(account: string, _options?: Configuration): Promise<AccountDetailsSchema> {
        const result = this.api.getAccountAccountsAccountGet(account, _options);
        return result.toPromise();
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
    public getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(account: string, type?: AchievementType, completed?: boolean, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageAccountAchievementSchema>> {
        const result = this.api.getAccountAchievementsAccountsAccountAchievementsGetWithHttpInfo(account, type, completed, page, size, _options);
        return result.toPromise();
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
    public getAccountAchievementsAccountsAccountAchievementsGet(account: string, type?: AchievementType, completed?: boolean, page?: number, size?: number, _options?: Configuration): Promise<DataPageAccountAchievementSchema> {
        const result = this.api.getAccountAchievementsAccountsAccountAchievementsGet(account, type, completed, page, size, _options);
        return result.toPromise();
    }


}



import { ObservableAchievementsApi } from './ObservableAPI';

import { AchievementsApiRequestFactory, AchievementsApiResponseProcessor} from "../apis/AchievementsApi";
export class PromiseAchievementsApi {
    private api: ObservableAchievementsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AchievementsApiRequestFactory,
        responseProcessor?: AchievementsApiResponseProcessor
    ) {
        this.api = new ObservableAchievementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the details of a achievement.
     * Get Achievement
     * @param code The code of the achievement.
     */
    public getAchievementAchievementsCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<AchievementResponseSchema>> {
        const result = this.api.getAchievementAchievementsCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a achievement.
     * Get Achievement
     * @param code The code of the achievement.
     */
    public getAchievementAchievementsCodeGet(code: string, _options?: Configuration): Promise<AchievementResponseSchema> {
        const result = this.api.getAchievementAchievementsCodeGet(code, _options);
        return result.toPromise();
    }

    /**
     * List of all achievements.
     * Get All Achievements
     * @param [type] Type of achievements.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllAchievementsAchievementsGetWithHttpInfo(type?: AchievementType, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageAchievementSchema>> {
        const result = this.api.getAllAchievementsAchievementsGetWithHttpInfo(type, page, size, _options);
        return result.toPromise();
    }

    /**
     * List of all achievements.
     * Get All Achievements
     * @param [type] Type of achievements.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllAchievementsAchievementsGet(type?: AchievementType, page?: number, size?: number, _options?: Configuration): Promise<DataPageAchievementSchema> {
        const result = this.api.getAllAchievementsAchievementsGet(type, page, size, _options);
        return result.toPromise();
    }


}



import { ObservableBadgesApi } from './ObservableAPI';

import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi";
export class PromiseBadgesApi {
    private api: ObservableBadgesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgesApiRequestFactory,
        responseProcessor?: BadgesApiResponseProcessor
    ) {
        this.api = new ObservableBadgesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all badges.
     * Get All Badges
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllBadgesBadgesGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageBadgeSchema>> {
        const result = this.api.getAllBadgesBadgesGetWithHttpInfo(page, size, _options);
        return result.toPromise();
    }

    /**
     * List of all badges.
     * Get All Badges
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllBadgesBadgesGet(page?: number, size?: number, _options?: Configuration): Promise<DataPageBadgeSchema> {
        const result = this.api.getAllBadgesBadgesGet(page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Badge
     * @param code The code of the achievement.
     */
    public getBadgeBadgesCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<BadgeResponseSchema>> {
        const result = this.api.getBadgeBadgesCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Badge
     * @param code The code of the achievement.
     */
    public getBadgeBadgesCodeGet(code: string, _options?: Configuration): Promise<BadgeResponseSchema> {
        const result = this.api.getBadgeBadgesCodeGet(code, _options);
        return result.toPromise();
    }


}



import { ObservableCharactersApi } from './ObservableAPI';

import { CharactersApiRequestFactory, CharactersApiResponseProcessor} from "../apis/CharactersApi";
export class PromiseCharactersApi {
    private api: ObservableCharactersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CharactersApiRequestFactory,
        responseProcessor?: CharactersApiResponseProcessor
    ) {
        this.api = new ObservableCharactersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new character on your account. You can create up to 5 characters.
     * Create Character
     * @param addCharacterSchema
     */
    public createCharacterCharactersCreatePostWithHttpInfo(addCharacterSchema: AddCharacterSchema, _options?: Configuration): Promise<HttpInfo<CharacterResponseSchema>> {
        const result = this.api.createCharacterCharactersCreatePostWithHttpInfo(addCharacterSchema, _options);
        return result.toPromise();
    }

    /**
     * Create new character on your account. You can create up to 5 characters.
     * Create Character
     * @param addCharacterSchema
     */
    public createCharacterCharactersCreatePost(addCharacterSchema: AddCharacterSchema, _options?: Configuration): Promise<CharacterResponseSchema> {
        const result = this.api.createCharacterCharactersCreatePost(addCharacterSchema, _options);
        return result.toPromise();
    }

    /**
     * Delete character on your account.
     * Delete Character
     * @param deleteCharacterSchema
     */
    public deleteCharacterCharactersDeletePostWithHttpInfo(deleteCharacterSchema: DeleteCharacterSchema, _options?: Configuration): Promise<HttpInfo<CharacterResponseSchema>> {
        const result = this.api.deleteCharacterCharactersDeletePostWithHttpInfo(deleteCharacterSchema, _options);
        return result.toPromise();
    }

    /**
     * Delete character on your account.
     * Delete Character
     * @param deleteCharacterSchema
     */
    public deleteCharacterCharactersDeletePost(deleteCharacterSchema: DeleteCharacterSchema, _options?: Configuration): Promise<CharacterResponseSchema> {
        const result = this.api.deleteCharacterCharactersDeletePost(deleteCharacterSchema, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Character
     * @param name The character name.
     */
    public getCharacterCharactersNameGetWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<CharacterResponseSchema>> {
        const result = this.api.getCharacterCharactersNameGetWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a character.
     * Get Character
     * @param name The character name.
     */
    public getCharacterCharactersNameGet(name: string, _options?: Configuration): Promise<CharacterResponseSchema> {
        const result = this.api.getCharacterCharactersNameGet(name, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return the status of the game server.
     * Get Status
     */
    public getStatusGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<StatusResponseSchema>> {
        const result = this.api.getStatusGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Return the status of the game server.
     * Get Status
     */
    public getStatusGet(_options?: Configuration): Promise<StatusResponseSchema> {
        const result = this.api.getStatusGet(_options);
        return result.toPromise();
    }


}



import { ObservableEffectsApi } from './ObservableAPI';

import { EffectsApiRequestFactory, EffectsApiResponseProcessor} from "../apis/EffectsApi";
export class PromiseEffectsApi {
    private api: ObservableEffectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EffectsApiRequestFactory,
        responseProcessor?: EffectsApiResponseProcessor
    ) {
        this.api = new ObservableEffectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game.
     * Get All Effects
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEffectsEffectsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageEffectSchema>> {
        const result = this.api.getAllEffectsEffectsGetWithHttpInfo(page, size, _options);
        return result.toPromise();
    }

    /**
     * List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game.
     * Get All Effects
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEffectsEffectsGet(page?: number, size?: number, _options?: Configuration): Promise<DataPageEffectSchema> {
        const result = this.api.getAllEffectsEffectsGet(page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Effect
     * @param code The code of the achievement.
     */
    public getEffectEffectsCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<EffectResponseSchema>> {
        const result = this.api.getEffectEffectsCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a badge.
     * Get Effect
     * @param code The code of the achievement.
     */
    public getEffectEffectsCodeGet(code: string, _options?: Configuration): Promise<EffectResponseSchema> {
        const result = this.api.getEffectEffectsCodeGet(code, _options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch active events details.
     * Get All Active Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllActiveEventsEventsActiveGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageActiveEventSchema>> {
        const result = this.api.getAllActiveEventsEventsActiveGetWithHttpInfo(page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch active events details.
     * Get All Active Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllActiveEventsEventsActiveGet(page?: number, size?: number, _options?: Configuration): Promise<DataPageActiveEventSchema> {
        const result = this.api.getAllActiveEventsEventsActiveGet(page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch events details.
     * Get All Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEventsEventsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageEventSchema>> {
        const result = this.api.getAllEventsEventsGetWithHttpInfo(page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch events details.
     * Get All Events
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllEventsEventsGet(page?: number, size?: number, _options?: Configuration): Promise<DataPageEventSchema> {
        const result = this.api.getAllEventsEventsGet(page, size, _options);
        return result.toPromise();
    }


}



import { ObservableGrandExchangeApi } from './ObservableAPI';

import { GrandExchangeApiRequestFactory, GrandExchangeApiResponseProcessor} from "../apis/GrandExchangeApi";
export class PromiseGrandExchangeApi {
    private api: ObservableGrandExchangeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GrandExchangeApiRequestFactory,
        responseProcessor?: GrandExchangeApiResponseProcessor
    ) {
        this.api = new ObservableGrandExchangeApi(configuration, requestFactory, responseProcessor);
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
    public getGeSellHistoryGrandexchangeHistoryCodeGetWithHttpInfo(code: string, seller?: string, buyer?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageGeOrderHistorySchema>> {
        const result = this.api.getGeSellHistoryGrandexchangeHistoryCodeGetWithHttpInfo(code, seller, buyer, page, size, _options);
        return result.toPromise();
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
    public getGeSellHistoryGrandexchangeHistoryCodeGet(code: string, seller?: string, buyer?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageGeOrderHistorySchema> {
        const result = this.api.getGeSellHistoryGrandexchangeHistoryCodeGet(code, seller, buyer, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the sell order of a item.
     * Get Ge Sell Order
     * @param id The id of the order.
     */
    public getGeSellOrderGrandexchangeOrdersIdGetWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<GEOrderReponseSchema>> {
        const result = this.api.getGeSellOrderGrandexchangeOrdersIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the sell order of a item.
     * Get Ge Sell Order
     * @param id The id of the order.
     */
    public getGeSellOrderGrandexchangeOrdersIdGet(id: string, _options?: Configuration): Promise<GEOrderReponseSchema> {
        const result = this.api.getGeSellOrderGrandexchangeOrdersIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch all sell orders.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [seller] The seller (account name) of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersGrandexchangeOrdersGetWithHttpInfo(code?: string, seller?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageGEOrderSchema>> {
        const result = this.api.getGeSellOrdersGrandexchangeOrdersGetWithHttpInfo(code, seller, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch all sell orders.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [seller] The seller (account name) of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersGrandexchangeOrdersGet(code?: string, seller?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageGEOrderSchema> {
        const result = this.api.getGeSellOrdersGrandexchangeOrdersGet(code, seller, page, size, _options);
        return result.toPromise();
    }


}



import { ObservableItemsApi } from './ObservableAPI';

import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi";
export class PromiseItemsApi {
    private api: ObservableItemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemsApiRequestFactory,
        responseProcessor?: ItemsApiResponseProcessor
    ) {
        this.api = new ObservableItemsApi(configuration, requestFactory, responseProcessor);
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
    public getAllItemsItemsGetWithHttpInfo(minLevel?: number, maxLevel?: number, name?: string, type?: ItemType, craftSkill?: CraftSkill, craftMaterial?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageItemSchema>> {
        const result = this.api.getAllItemsItemsGetWithHttpInfo(minLevel, maxLevel, name, type, craftSkill, craftMaterial, page, size, _options);
        return result.toPromise();
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
    public getAllItemsItemsGet(minLevel?: number, maxLevel?: number, name?: string, type?: ItemType, craftSkill?: CraftSkill, craftMaterial?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageItemSchema> {
        const result = this.api.getAllItemsItemsGet(minLevel, maxLevel, name, type, craftSkill, craftMaterial, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a item.
     * Get Item
     * @param code The code of the item.
     */
    public getItemItemsCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<ItemResponseSchema>> {
        const result = this.api.getItemItemsCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a item.
     * Get Item
     * @param code The code of the item.
     */
    public getItemItemsCodeGet(code: string, _options?: Configuration): Promise<ItemResponseSchema> {
        const result = this.api.getItemItemsCodeGet(code, _options);
        return result.toPromise();
    }


}



import { ObservableLeaderboardApi } from './ObservableAPI';

import { LeaderboardApiRequestFactory, LeaderboardApiResponseProcessor} from "../apis/LeaderboardApi";
export class PromiseLeaderboardApi {
    private api: ObservableLeaderboardApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeaderboardApiRequestFactory,
        responseProcessor?: LeaderboardApiResponseProcessor
    ) {
        this.api = new ObservableLeaderboardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch leaderboard details.
     * Get Accounts Leaderboard
     * @param [sort] Default sort by achievements points.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(sort?: AccountLeaderboardType, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageAccountLeaderboardSchema>> {
        const result = this.api.getAccountsLeaderboardLeaderboardAccountsGetWithHttpInfo(sort, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch leaderboard details.
     * Get Accounts Leaderboard
     * @param [sort] Default sort by achievements points.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAccountsLeaderboardLeaderboardAccountsGet(sort?: AccountLeaderboardType, page?: number, size?: number, _options?: Configuration): Promise<DataPageAccountLeaderboardSchema> {
        const result = this.api.getAccountsLeaderboardLeaderboardAccountsGet(sort, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch leaderboard details.
     * Get Characters Leaderboard
     * @param [sort] Default sort by combat total XP.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(sort?: CharacterLeaderboardType, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageCharacterLeaderboardSchema>> {
        const result = this.api.getCharactersLeaderboardLeaderboardCharactersGetWithHttpInfo(sort, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch leaderboard details.
     * Get Characters Leaderboard
     * @param [sort] Default sort by combat total XP.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getCharactersLeaderboardLeaderboardCharactersGet(sort?: CharacterLeaderboardType, page?: number, size?: number, _options?: Configuration): Promise<DataPageCharacterLeaderboardSchema> {
        const result = this.api.getCharactersLeaderboardLeaderboardCharactersGet(sort, page, size, _options);
        return result.toPromise();
    }


}



import { ObservableMapsApi } from './ObservableAPI';

import { MapsApiRequestFactory, MapsApiResponseProcessor} from "../apis/MapsApi";
export class PromiseMapsApi {
    private api: ObservableMapsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MapsApiRequestFactory,
        responseProcessor?: MapsApiResponseProcessor
    ) {
        this.api = new ObservableMapsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch maps details.
     * Get All Maps
     * @param [contentType] Type of content on the map.
     * @param [contentCode] Content code on the map.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllMapsMapsGetWithHttpInfo(contentType?: MapContentType, contentCode?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageMapSchema>> {
        const result = this.api.getAllMapsMapsGetWithHttpInfo(contentType, contentCode, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch maps details.
     * Get All Maps
     * @param [contentType] Type of content on the map.
     * @param [contentCode] Content code on the map.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllMapsMapsGet(contentType?: MapContentType, contentCode?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageMapSchema> {
        const result = this.api.getAllMapsMapsGet(contentType, contentCode, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a map.
     * Get Map
     * @param x The position x of the map.
     * @param y The position X of the map.
     */
    public getMapMapsXYGetWithHttpInfo(x: number, y: number, _options?: Configuration): Promise<HttpInfo<MapResponseSchema>> {
        const result = this.api.getMapMapsXYGetWithHttpInfo(x, y, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a map.
     * Get Map
     * @param x The position x of the map.
     * @param y The position X of the map.
     */
    public getMapMapsXYGet(x: number, y: number, _options?: Configuration): Promise<MapResponseSchema> {
        const result = this.api.getMapMapsXYGet(x, y, _options);
        return result.toPromise();
    }


}



import { ObservableMonstersApi } from './ObservableAPI';

import { MonstersApiRequestFactory, MonstersApiResponseProcessor} from "../apis/MonstersApi";
export class PromiseMonstersApi {
    private api: ObservableMonstersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MonstersApiRequestFactory,
        responseProcessor?: MonstersApiResponseProcessor
    ) {
        this.api = new ObservableMonstersApi(configuration, requestFactory, responseProcessor);
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
    public getAllMonstersMonstersGetWithHttpInfo(minLevel?: number, maxLevel?: number, drop?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageMonsterSchema>> {
        const result = this.api.getAllMonstersMonstersGetWithHttpInfo(minLevel, maxLevel, drop, page, size, _options);
        return result.toPromise();
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
    public getAllMonstersMonstersGet(minLevel?: number, maxLevel?: number, drop?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageMonsterSchema> {
        const result = this.api.getAllMonstersMonstersGet(minLevel, maxLevel, drop, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a monster.
     * Get Monster
     * @param code The code of the monster.
     */
    public getMonsterMonstersCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<MonsterResponseSchema>> {
        const result = this.api.getMonsterMonstersCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a monster.
     * Get Monster
     * @param code The code of the monster.
     */
    public getMonsterMonstersCodeGet(code: string, _options?: Configuration): Promise<MonsterResponseSchema> {
        const result = this.api.getMonsterMonstersCodeGet(code, _options);
        return result.toPromise();
    }


}



import { ObservableMyAccountApi } from './ObservableAPI';

import { MyAccountApiRequestFactory, MyAccountApiResponseProcessor} from "../apis/MyAccountApi";
export class PromiseMyAccountApi {
    private api: ObservableMyAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MyAccountApiRequestFactory,
        responseProcessor?: MyAccountApiResponseProcessor
    ) {
        this.api = new ObservableMyAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change your account password. Changing the password reset the account token.
     * Change Password
     * @param changePassword
     */
    public changePasswordMyChangePasswordPostWithHttpInfo(changePassword: ChangePassword, _options?: Configuration): Promise<HttpInfo<ResponseSchema>> {
        const result = this.api.changePasswordMyChangePasswordPostWithHttpInfo(changePassword, _options);
        return result.toPromise();
    }

    /**
     * Change your account password. Changing the password reset the account token.
     * Change Password
     * @param changePassword
     */
    public changePasswordMyChangePasswordPost(changePassword: ChangePassword, _options?: Configuration): Promise<ResponseSchema> {
        const result = this.api.changePasswordMyChangePasswordPost(changePassword, _options);
        return result.toPromise();
    }

    /**
     * Fetch account details.
     * Get Account Details
     */
    public getAccountDetailsMyDetailsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<MyAccountDetailsSchema>> {
        const result = this.api.getAccountDetailsMyDetailsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Fetch account details.
     * Get Account Details
     */
    public getAccountDetailsMyDetailsGet(_options?: Configuration): Promise<MyAccountDetailsSchema> {
        const result = this.api.getAccountDetailsMyDetailsGet(_options);
        return result.toPromise();
    }

    /**
     * Fetch bank details.
     * Get Bank Details
     */
    public getBankDetailsMyBankGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<BankResponseSchema>> {
        const result = this.api.getBankDetailsMyBankGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Fetch bank details.
     * Get Bank Details
     */
    public getBankDetailsMyBankGet(_options?: Configuration): Promise<BankResponseSchema> {
        const result = this.api.getBankDetailsMyBankGet(_options);
        return result.toPromise();
    }

    /**
     * Fetch all items in your bank.
     * Get Bank Items
     * @param [itemCode] Item to search in your bank.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getBankItemsMyBankItemsGetWithHttpInfo(itemCode?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageSimpleItemSchema>> {
        const result = this.api.getBankItemsMyBankItemsGetWithHttpInfo(itemCode, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch all items in your bank.
     * Get Bank Items
     * @param [itemCode] Item to search in your bank.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getBankItemsMyBankItemsGet(itemCode?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageSimpleItemSchema> {
        const result = this.api.getBankItemsMyBankItemsGet(itemCode, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch your sales history of the last 7 days.
     * Get Ge Sell History
     * @param [id] Order ID to search in your history.
     * @param [code] Item to search in your history.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellHistoryMyGrandexchangeHistoryGetWithHttpInfo(id?: string, code?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageGeOrderHistorySchema>> {
        const result = this.api.getGeSellHistoryMyGrandexchangeHistoryGetWithHttpInfo(id, code, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch your sales history of the last 7 days.
     * Get Ge Sell History
     * @param [id] Order ID to search in your history.
     * @param [code] Item to search in your history.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellHistoryMyGrandexchangeHistoryGet(id?: string, code?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageGeOrderHistorySchema> {
        const result = this.api.getGeSellHistoryMyGrandexchangeHistoryGet(id, code, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch your sell orders details.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersMyGrandexchangeOrdersGetWithHttpInfo(code?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageGEOrderSchema>> {
        const result = this.api.getGeSellOrdersMyGrandexchangeOrdersGetWithHttpInfo(code, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch your sell orders details.
     * Get Ge Sell Orders
     * @param [code] The code of the item.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getGeSellOrdersMyGrandexchangeOrdersGet(code?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageGEOrderSchema> {
        const result = this.api.getGeSellOrdersMyGrandexchangeOrdersGet(code, page, size, _options);
        return result.toPromise();
    }


}



import { ObservableMyCharactersApi } from './ObservableAPI';

import { MyCharactersApiRequestFactory, MyCharactersApiResponseProcessor} from "../apis/MyCharactersApi";
export class PromiseMyCharactersApi {
    private api: ObservableMyCharactersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MyCharactersApiRequestFactory,
        responseProcessor?: MyCharactersApiResponseProcessor
    ) {
        this.api = new ObservableMyCharactersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accepting a new task.
     * Action Accept New Task
     * @param name Name of your character.
     */
    public actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<TaskResponseSchema>> {
        const result = this.api.actionAcceptNewTaskMyNameActionTaskNewPostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Accepting a new task.
     * Action Accept New Task
     * @param name Name of your character.
     */
    public actionAcceptNewTaskMyNameActionTaskNewPost(name: string, _options?: Configuration): Promise<TaskResponseSchema> {
        const result = this.api.actionAcceptNewTaskMyNameActionTaskNewPost(name, _options);
        return result.toPromise();
    }

    /**
     * Buy a 20 slots bank expansion.
     * Action Buy Bank Expansion
     * @param name Name of your character.
     */
    public actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<BankExtensionTransactionResponseSchema>> {
        const result = this.api.actionBuyBankExpansionMyNameActionBankBuyExpansionPostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Buy a 20 slots bank expansion.
     * Action Buy Bank Expansion
     * @param name Name of your character.
     */
    public actionBuyBankExpansionMyNameActionBankBuyExpansionPost(name: string, _options?: Configuration): Promise<BankExtensionTransactionResponseSchema> {
        const result = this.api.actionBuyBankExpansionMyNameActionBankBuyExpansionPost(name, _options);
        return result.toPromise();
    }

    /**
     * Complete a task.
     * Action Complete Task
     * @param name Name of your character.
     */
    public actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<RewardDataResponseSchema>> {
        const result = this.api.actionCompleteTaskMyNameActionTaskCompletePostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Complete a task.
     * Action Complete Task
     * @param name Name of your character.
     */
    public actionCompleteTaskMyNameActionTaskCompletePost(name: string, _options?: Configuration): Promise<RewardDataResponseSchema> {
        const result = this.api.actionCompleteTaskMyNameActionTaskCompletePost(name, _options);
        return result.toPromise();
    }

    /**
     * Crafting an item. The character must be on a map with a workshop.
     * Action Crafting
     * @param name Name of your character.
     * @param craftingSchema
     */
    public actionCraftingMyNameActionCraftingPostWithHttpInfo(name: string, craftingSchema: CraftingSchema, _options?: Configuration): Promise<HttpInfo<SkillResponseSchema>> {
        const result = this.api.actionCraftingMyNameActionCraftingPostWithHttpInfo(name, craftingSchema, _options);
        return result.toPromise();
    }

    /**
     * Crafting an item. The character must be on a map with a workshop.
     * Action Crafting
     * @param name Name of your character.
     * @param craftingSchema
     */
    public actionCraftingMyNameActionCraftingPost(name: string, craftingSchema: CraftingSchema, _options?: Configuration): Promise<SkillResponseSchema> {
        const result = this.api.actionCraftingMyNameActionCraftingPost(name, craftingSchema, _options);
        return result.toPromise();
    }

    /**
     * Delete an item from your character\'s inventory.
     * Action Delete Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDeleteItemMyNameActionDeletePostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<HttpInfo<DeleteItemResponseSchema>> {
        const result = this.api.actionDeleteItemMyNameActionDeletePostWithHttpInfo(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Delete an item from your character\'s inventory.
     * Action Delete Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDeleteItemMyNameActionDeletePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<DeleteItemResponseSchema> {
        const result = this.api.actionDeleteItemMyNameActionDeletePost(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Deposit gold in a bank on the character\'s map.
     * Action Deposit Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Promise<HttpInfo<BankGoldTransactionResponseSchema>> {
        const result = this.api.actionDepositBankGoldMyNameActionBankDepositGoldPostWithHttpInfo(name, depositWithdrawGoldSchema, _options);
        return result.toPromise();
    }

    /**
     * Deposit gold in a bank on the character\'s map.
     * Action Deposit Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionDepositBankGoldMyNameActionBankDepositGoldPost(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Promise<BankGoldTransactionResponseSchema> {
        const result = this.api.actionDepositBankGoldMyNameActionBankDepositGoldPost(name, depositWithdrawGoldSchema, _options);
        return result.toPromise();
    }

    /**
     * Deposit an item in a bank on the character\'s map.
     * Action Deposit Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDepositBankMyNameActionBankDepositPostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<HttpInfo<BankItemTransactionResponseSchema>> {
        const result = this.api.actionDepositBankMyNameActionBankDepositPostWithHttpInfo(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Deposit an item in a bank on the character\'s map.
     * Action Deposit Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionDepositBankMyNameActionBankDepositPost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<BankItemTransactionResponseSchema> {
        const result = this.api.actionDepositBankMyNameActionBankDepositPost(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Equip an item on your character.
     * Action Equip Item
     * @param name Name of your character.
     * @param equipSchema
     */
    public actionEquipItemMyNameActionEquipPostWithHttpInfo(name: string, equipSchema: EquipSchema, _options?: Configuration): Promise<HttpInfo<EquipmentResponseSchema>> {
        const result = this.api.actionEquipItemMyNameActionEquipPostWithHttpInfo(name, equipSchema, _options);
        return result.toPromise();
    }

    /**
     * Equip an item on your character.
     * Action Equip Item
     * @param name Name of your character.
     * @param equipSchema
     */
    public actionEquipItemMyNameActionEquipPost(name: string, equipSchema: EquipSchema, _options?: Configuration): Promise<EquipmentResponseSchema> {
        const result = this.api.actionEquipItemMyNameActionEquipPost(name, equipSchema, _options);
        return result.toPromise();
    }

    /**
     * Start a fight against a monster on the character\'s map.
     * Action Fight
     * @param name Name of your character.
     */
    public actionFightMyNameActionFightPostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<CharacterFightResponseSchema>> {
        const result = this.api.actionFightMyNameActionFightPostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Start a fight against a monster on the character\'s map.
     * Action Fight
     * @param name Name of your character.
     */
    public actionFightMyNameActionFightPost(name: string, _options?: Configuration): Promise<CharacterFightResponseSchema> {
        const result = this.api.actionFightMyNameActionFightPost(name, _options);
        return result.toPromise();
    }

    /**
     * Harvest a resource on the character\'s map.
     * Action Gathering
     * @param name Name of your character.
     */
    public actionGatheringMyNameActionGatheringPostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<SkillResponseSchema>> {
        const result = this.api.actionGatheringMyNameActionGatheringPostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Harvest a resource on the character\'s map.
     * Action Gathering
     * @param name Name of your character.
     */
    public actionGatheringMyNameActionGatheringPost(name: string, _options?: Configuration): Promise<SkillResponseSchema> {
        const result = this.api.actionGatheringMyNameActionGatheringPost(name, _options);
        return result.toPromise();
    }

    /**
     * Buy an item at the Grand Exchange on the character\'s map.
     * Action Ge Buy Item
     * @param name Name of your character.
     * @param gEBuyOrderSchema
     */
    public actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(name: string, gEBuyOrderSchema: GEBuyOrderSchema, _options?: Configuration): Promise<HttpInfo<GETransactionResponseSchema>> {
        const result = this.api.actionGeBuyItemMyNameActionGrandexchangeBuyPostWithHttpInfo(name, gEBuyOrderSchema, _options);
        return result.toPromise();
    }

    /**
     * Buy an item at the Grand Exchange on the character\'s map.
     * Action Ge Buy Item
     * @param name Name of your character.
     * @param gEBuyOrderSchema
     */
    public actionGeBuyItemMyNameActionGrandexchangeBuyPost(name: string, gEBuyOrderSchema: GEBuyOrderSchema, _options?: Configuration): Promise<GETransactionResponseSchema> {
        const result = this.api.actionGeBuyItemMyNameActionGrandexchangeBuyPost(name, gEBuyOrderSchema, _options);
        return result.toPromise();
    }

    /**
     * Cancel a sell order at the Grand Exchange on the character\'s map.
     * Action Ge Cancel Sell Order
     * @param name Name of your character.
     * @param gECancelOrderSchema
     */
    public actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(name: string, gECancelOrderSchema: GECancelOrderSchema, _options?: Configuration): Promise<HttpInfo<GETransactionResponseSchema>> {
        const result = this.api.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPostWithHttpInfo(name, gECancelOrderSchema, _options);
        return result.toPromise();
    }

    /**
     * Cancel a sell order at the Grand Exchange on the character\'s map.
     * Action Ge Cancel Sell Order
     * @param name Name of your character.
     * @param gECancelOrderSchema
     */
    public actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(name: string, gECancelOrderSchema: GECancelOrderSchema, _options?: Configuration): Promise<GETransactionResponseSchema> {
        const result = this.api.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(name, gECancelOrderSchema, _options);
        return result.toPromise();
    }

    /**
     * Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.
     * Action Ge Create Sell Order
     * @param name Name of your character.
     * @param gEOrderCreationrSchema
     */
    public actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(name: string, gEOrderCreationrSchema: GEOrderCreationrSchema, _options?: Configuration): Promise<HttpInfo<GECreateOrderTransactionResponseSchema>> {
        const result = this.api.actionGeCreateSellOrderMyNameActionGrandexchangeSellPostWithHttpInfo(name, gEOrderCreationrSchema, _options);
        return result.toPromise();
    }

    /**
     * Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.
     * Action Ge Create Sell Order
     * @param name Name of your character.
     * @param gEOrderCreationrSchema
     */
    public actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(name: string, gEOrderCreationrSchema: GEOrderCreationrSchema, _options?: Configuration): Promise<GECreateOrderTransactionResponseSchema> {
        const result = this.api.actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(name, gEOrderCreationrSchema, _options);
        return result.toPromise();
    }

    /**
     * Moves a character on the map using the map\'s X and Y position.
     * Action Move
     * @param name Name of your character.
     * @param destinationSchema
     */
    public actionMoveMyNameActionMovePostWithHttpInfo(name: string, destinationSchema: DestinationSchema, _options?: Configuration): Promise<HttpInfo<CharacterMovementResponseSchema>> {
        const result = this.api.actionMoveMyNameActionMovePostWithHttpInfo(name, destinationSchema, _options);
        return result.toPromise();
    }

    /**
     * Moves a character on the map using the map\'s X and Y position.
     * Action Move
     * @param name Name of your character.
     * @param destinationSchema
     */
    public actionMoveMyNameActionMovePost(name: string, destinationSchema: DestinationSchema, _options?: Configuration): Promise<CharacterMovementResponseSchema> {
        const result = this.api.actionMoveMyNameActionMovePost(name, destinationSchema, _options);
        return result.toPromise();
    }

    /**
     * Buy an item from an NPC on the character\'s map.
     * Action Npc Buy Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Promise<HttpInfo<NpcMerchantTransactionResponseSchema>> {
        const result = this.api.actionNpcBuyItemMyNameActionNpcBuyPostWithHttpInfo(name, npcMerchantBuySchema, _options);
        return result.toPromise();
    }

    /**
     * Buy an item from an NPC on the character\'s map.
     * Action Npc Buy Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcBuyItemMyNameActionNpcBuyPost(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Promise<NpcMerchantTransactionResponseSchema> {
        const result = this.api.actionNpcBuyItemMyNameActionNpcBuyPost(name, npcMerchantBuySchema, _options);
        return result.toPromise();
    }

    /**
     * Sell an item from an NPC on the character\'s map.
     * Action Npc Sell Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Promise<HttpInfo<NpcMerchantTransactionResponseSchema>> {
        const result = this.api.actionNpcSellItemMyNameActionNpcSellPostWithHttpInfo(name, npcMerchantBuySchema, _options);
        return result.toPromise();
    }

    /**
     * Sell an item from an NPC on the character\'s map.
     * Action Npc Sell Item
     * @param name Name of your character.
     * @param npcMerchantBuySchema
     */
    public actionNpcSellItemMyNameActionNpcSellPost(name: string, npcMerchantBuySchema: NpcMerchantBuySchema, _options?: Configuration): Promise<NpcMerchantTransactionResponseSchema> {
        const result = this.api.actionNpcSellItemMyNameActionNpcSellPost(name, npcMerchantBuySchema, _options);
        return result.toPromise();
    }

    /**
     * Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).
     * Action Recycling
     * @param name Name of your character.
     * @param recyclingSchema
     */
    public actionRecyclingMyNameActionRecyclingPostWithHttpInfo(name: string, recyclingSchema: RecyclingSchema, _options?: Configuration): Promise<HttpInfo<RecyclingResponseSchema>> {
        const result = this.api.actionRecyclingMyNameActionRecyclingPostWithHttpInfo(name, recyclingSchema, _options);
        return result.toPromise();
    }

    /**
     * Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).
     * Action Recycling
     * @param name Name of your character.
     * @param recyclingSchema
     */
    public actionRecyclingMyNameActionRecyclingPost(name: string, recyclingSchema: RecyclingSchema, _options?: Configuration): Promise<RecyclingResponseSchema> {
        const result = this.api.actionRecyclingMyNameActionRecyclingPost(name, recyclingSchema, _options);
        return result.toPromise();
    }

    /**
     * Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)
     * Action Rest
     * @param name Name of your character.
     */
    public actionRestMyNameActionRestPostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<CharacterRestResponseSchema>> {
        const result = this.api.actionRestMyNameActionRestPostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)
     * Action Rest
     * @param name Name of your character.
     */
    public actionRestMyNameActionRestPost(name: string, _options?: Configuration): Promise<CharacterRestResponseSchema> {
        const result = this.api.actionRestMyNameActionRestPost(name, _options);
        return result.toPromise();
    }

    /**
     * Cancel a task for 1 tasks coin.
     * Action Task Cancel
     * @param name Name of your character.
     */
    public actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<TaskCancelledResponseSchema>> {
        const result = this.api.actionTaskCancelMyNameActionTaskCancelPostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Cancel a task for 1 tasks coin.
     * Action Task Cancel
     * @param name Name of your character.
     */
    public actionTaskCancelMyNameActionTaskCancelPost(name: string, _options?: Configuration): Promise<TaskCancelledResponseSchema> {
        const result = this.api.actionTaskCancelMyNameActionTaskCancelPost(name, _options);
        return result.toPromise();
    }

    /**
     * Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.
     * Action Task Exchange
     * @param name Name of your character.
     */
    public actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<RewardDataResponseSchema>> {
        const result = this.api.actionTaskExchangeMyNameActionTaskExchangePostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.
     * Action Task Exchange
     * @param name Name of your character.
     */
    public actionTaskExchangeMyNameActionTaskExchangePost(name: string, _options?: Configuration): Promise<RewardDataResponseSchema> {
        const result = this.api.actionTaskExchangeMyNameActionTaskExchangePost(name, _options);
        return result.toPromise();
    }

    /**
     * Trading items with a Tasks Master.
     * Action Task Trade
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<HttpInfo<TaskTradeResponseSchema>> {
        const result = this.api.actionTaskTradeMyNameActionTaskTradePostWithHttpInfo(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Trading items with a Tasks Master.
     * Action Task Trade
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionTaskTradeMyNameActionTaskTradePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<TaskTradeResponseSchema> {
        const result = this.api.actionTaskTradeMyNameActionTaskTradePost(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Unequip an item on your character.
     * Action Unequip Item
     * @param name Name of your character.
     * @param unequipSchema
     */
    public actionUnequipItemMyNameActionUnequipPostWithHttpInfo(name: string, unequipSchema: UnequipSchema, _options?: Configuration): Promise<HttpInfo<EquipmentResponseSchema>> {
        const result = this.api.actionUnequipItemMyNameActionUnequipPostWithHttpInfo(name, unequipSchema, _options);
        return result.toPromise();
    }

    /**
     * Unequip an item on your character.
     * Action Unequip Item
     * @param name Name of your character.
     * @param unequipSchema
     */
    public actionUnequipItemMyNameActionUnequipPost(name: string, unequipSchema: UnequipSchema, _options?: Configuration): Promise<EquipmentResponseSchema> {
        const result = this.api.actionUnequipItemMyNameActionUnequipPost(name, unequipSchema, _options);
        return result.toPromise();
    }

    /**
     * Use an item as a consumable.
     * Action Use Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionUseItemMyNameActionUsePostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<HttpInfo<UseItemResponseSchema>> {
        const result = this.api.actionUseItemMyNameActionUsePostWithHttpInfo(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Use an item as a consumable.
     * Action Use Item
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionUseItemMyNameActionUsePost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<UseItemResponseSchema> {
        const result = this.api.actionUseItemMyNameActionUsePost(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Withdraw gold from your bank.
     * Action Withdraw Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Promise<HttpInfo<BankGoldTransactionResponseSchema>> {
        const result = this.api.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPostWithHttpInfo(name, depositWithdrawGoldSchema, _options);
        return result.toPromise();
    }

    /**
     * Withdraw gold from your bank.
     * Action Withdraw Bank Gold
     * @param name Name of your character.
     * @param depositWithdrawGoldSchema
     */
    public actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(name: string, depositWithdrawGoldSchema: DepositWithdrawGoldSchema, _options?: Configuration): Promise<BankGoldTransactionResponseSchema> {
        const result = this.api.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(name, depositWithdrawGoldSchema, _options);
        return result.toPromise();
    }

    /**
     * Take an item from your bank and put it in the character\'s inventory.
     * Action Withdraw Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<HttpInfo<BankItemTransactionResponseSchema>> {
        const result = this.api.actionWithdrawBankMyNameActionBankWithdrawPostWithHttpInfo(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * Take an item from your bank and put it in the character\'s inventory.
     * Action Withdraw Bank
     * @param name Name of your character.
     * @param simpleItemSchema
     */
    public actionWithdrawBankMyNameActionBankWithdrawPost(name: string, simpleItemSchema: SimpleItemSchema, _options?: Configuration): Promise<BankItemTransactionResponseSchema> {
        const result = this.api.actionWithdrawBankMyNameActionBankWithdrawPost(name, simpleItemSchema, _options);
        return result.toPromise();
    }

    /**
     * History of the last 100 actions of all your characters.
     * Get All Characters Logs
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllCharactersLogsMyLogsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageLogSchema>> {
        const result = this.api.getAllCharactersLogsMyLogsGetWithHttpInfo(page, size, _options);
        return result.toPromise();
    }

    /**
     * History of the last 100 actions of all your characters.
     * Get All Characters Logs
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllCharactersLogsMyLogsGet(page?: number, size?: number, _options?: Configuration): Promise<DataPageLogSchema> {
        const result = this.api.getAllCharactersLogsMyLogsGet(page, size, _options);
        return result.toPromise();
    }

    /**
     * List of your characters.
     * Get My Characters
     */
    public getMyCharactersMyCharactersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<MyCharactersListSchema>> {
        const result = this.api.getMyCharactersMyCharactersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List of your characters.
     * Get My Characters
     */
    public getMyCharactersMyCharactersGet(_options?: Configuration): Promise<MyCharactersListSchema> {
        const result = this.api.getMyCharactersMyCharactersGet(_options);
        return result.toPromise();
    }


}



import { ObservableNPCsApi } from './ObservableAPI';

import { NPCsApiRequestFactory, NPCsApiResponseProcessor} from "../apis/NPCsApi";
export class PromiseNPCsApi {
    private api: ObservableNPCsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NPCsApiRequestFactory,
        responseProcessor?: NPCsApiResponseProcessor
    ) {
        this.api = new ObservableNPCsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch NPCs details.
     * Get All Npcs
     * @param [type] The type of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllNpcsNpcsGetWithHttpInfo(type?: NPCType, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageNPCSchema>> {
        const result = this.api.getAllNpcsNpcsGetWithHttpInfo(type, page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch NPCs details.
     * Get All Npcs
     * @param [type] The type of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllNpcsNpcsGet(type?: NPCType, page?: number, size?: number, _options?: Configuration): Promise<DataPageNPCSchema> {
        const result = this.api.getAllNpcsNpcsGet(type, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.
     * Get Npc Items
     * @param code The code of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getNpcItemsNpcsCodeItemsGetWithHttpInfo(code: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageNPCItem>> {
        const result = this.api.getNpcItemsNpcsCodeItemsGetWithHttpInfo(code, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.
     * Get Npc Items
     * @param code The code of the NPC.
     * @param [page] Page number
     * @param [size] Page size
     */
    public getNpcItemsNpcsCodeItemsGet(code: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageNPCItem> {
        const result = this.api.getNpcItemsNpcsCodeItemsGet(code, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a NPC.
     * Get Npc
     * @param code The code of the NPC.
     */
    public getNpcNpcsCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<NPCResponseSchema>> {
        const result = this.api.getNpcNpcsCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a NPC.
     * Get Npc
     * @param code The code of the NPC.
     */
    public getNpcNpcsCodeGet(code: string, _options?: Configuration): Promise<NPCResponseSchema> {
        const result = this.api.getNpcNpcsCodeGet(code, _options);
        return result.toPromise();
    }


}



import { ObservableResourcesApi } from './ObservableAPI';

import { ResourcesApiRequestFactory, ResourcesApiResponseProcessor} from "../apis/ResourcesApi";
export class PromiseResourcesApi {
    private api: ObservableResourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ResourcesApiRequestFactory,
        responseProcessor?: ResourcesApiResponseProcessor
    ) {
        this.api = new ObservableResourcesApi(configuration, requestFactory, responseProcessor);
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
    public getAllResourcesResourcesGetWithHttpInfo(minLevel?: number, maxLevel?: number, skill?: GatheringSkill, drop?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageResourceSchema>> {
        const result = this.api.getAllResourcesResourcesGetWithHttpInfo(minLevel, maxLevel, skill, drop, page, size, _options);
        return result.toPromise();
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
    public getAllResourcesResourcesGet(minLevel?: number, maxLevel?: number, skill?: GatheringSkill, drop?: string, page?: number, size?: number, _options?: Configuration): Promise<DataPageResourceSchema> {
        const result = this.api.getAllResourcesResourcesGet(minLevel, maxLevel, skill, drop, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a resource.
     * Get Resource
     * @param code The code of the resource.
     */
    public getResourceResourcesCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<ResourceResponseSchema>> {
        const result = this.api.getResourceResourcesCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a resource.
     * Get Resource
     * @param code The code of the resource.
     */
    public getResourceResourcesCodeGet(code: string, _options?: Configuration): Promise<ResourceResponseSchema> {
        const result = this.api.getResourceResourcesCodeGet(code, _options);
        return result.toPromise();
    }


}



import { ObservableTasksApi } from './ObservableAPI';

import { TasksApiRequestFactory, TasksApiResponseProcessor} from "../apis/TasksApi";
export class PromiseTasksApi {
    private api: ObservableTasksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TasksApiRequestFactory,
        responseProcessor?: TasksApiResponseProcessor
    ) {
        this.api = new ObservableTasksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master.
     * Get All Tasks Rewards
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllTasksRewardsTasksRewardsGetWithHttpInfo(page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageDropRateSchema>> {
        const result = this.api.getAllTasksRewardsTasksRewardsGetWithHttpInfo(page, size, _options);
        return result.toPromise();
    }

    /**
     * Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master.
     * Get All Tasks Rewards
     * @param [page] Page number
     * @param [size] Page size
     */
    public getAllTasksRewardsTasksRewardsGet(page?: number, size?: number, _options?: Configuration): Promise<DataPageDropRateSchema> {
        const result = this.api.getAllTasksRewardsTasksRewardsGet(page, size, _options);
        return result.toPromise();
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
    public getAllTasksTasksListGetWithHttpInfo(minLevel?: number, maxLevel?: number, skill?: Skill, type?: TaskType, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<DataPageTaskFullSchema>> {
        const result = this.api.getAllTasksTasksListGetWithHttpInfo(minLevel, maxLevel, skill, type, page, size, _options);
        return result.toPromise();
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
    public getAllTasksTasksListGet(minLevel?: number, maxLevel?: number, skill?: Skill, type?: TaskType, page?: number, size?: number, _options?: Configuration): Promise<DataPageTaskFullSchema> {
        const result = this.api.getAllTasksTasksListGet(minLevel, maxLevel, skill, type, page, size, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a task.
     * Get Task
     * @param code The code of the task.
     */
    public getTaskTasksListCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<TaskFullResponseSchema>> {
        const result = this.api.getTaskTasksListCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a task.
     * Get Task
     * @param code The code of the task.
     */
    public getTaskTasksListCodeGet(code: string, _options?: Configuration): Promise<TaskFullResponseSchema> {
        const result = this.api.getTaskTasksListCodeGet(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a tasks reward.
     * Get Tasks Reward
     * @param code The code of the tasks reward.
     */
    public getTasksRewardTasksRewardsCodeGetWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<RewardResponseSchema>> {
        const result = this.api.getTasksRewardTasksRewardsCodeGetWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a tasks reward.
     * Get Tasks Reward
     * @param code The code of the tasks reward.
     */
    public getTasksRewardTasksRewardsCodeGet(code: string, _options?: Configuration): Promise<RewardResponseSchema> {
        const result = this.api.getTasksRewardTasksRewardsCodeGet(code, _options);
        return result.toPromise();
    }


}



import { ObservableTokenApi } from './ObservableAPI';

import { TokenApiRequestFactory, TokenApiResponseProcessor} from "../apis/TokenApi";
export class PromiseTokenApi {
    private api: ObservableTokenApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TokenApiRequestFactory,
        responseProcessor?: TokenApiResponseProcessor
    ) {
        this.api = new ObservableTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.
     * Generate Token
     */
    public generateTokenTokenPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TokenResponseSchema>> {
        const result = this.api.generateTokenTokenPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.
     * Generate Token
     */
    public generateTokenTokenPost(_options?: Configuration): Promise<TokenResponseSchema> {
        const result = this.api.generateTokenTokenPost(_options);
        return result.toPromise();
    }


}



