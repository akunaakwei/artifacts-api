# .MyCharactersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionAcceptNewTaskMyNameActionTaskNewPost**](MyCharactersApi.md#actionAcceptNewTaskMyNameActionTaskNewPost) | **POST** /my/{name}/action/task/new | Action Accept New Task
[**actionBuyBankExpansionMyNameActionBankBuyExpansionPost**](MyCharactersApi.md#actionBuyBankExpansionMyNameActionBankBuyExpansionPost) | **POST** /my/{name}/action/bank/buy_expansion | Action Buy Bank Expansion
[**actionCompleteTaskMyNameActionTaskCompletePost**](MyCharactersApi.md#actionCompleteTaskMyNameActionTaskCompletePost) | **POST** /my/{name}/action/task/complete | Action Complete Task
[**actionCraftingMyNameActionCraftingPost**](MyCharactersApi.md#actionCraftingMyNameActionCraftingPost) | **POST** /my/{name}/action/crafting | Action Crafting
[**actionDeleteItemMyNameActionDeletePost**](MyCharactersApi.md#actionDeleteItemMyNameActionDeletePost) | **POST** /my/{name}/action/delete | Action Delete Item
[**actionDepositBankGoldMyNameActionBankDepositGoldPost**](MyCharactersApi.md#actionDepositBankGoldMyNameActionBankDepositGoldPost) | **POST** /my/{name}/action/bank/deposit/gold | Action Deposit Bank Gold
[**actionDepositBankMyNameActionBankDepositPost**](MyCharactersApi.md#actionDepositBankMyNameActionBankDepositPost) | **POST** /my/{name}/action/bank/deposit | Action Deposit Bank
[**actionEquipItemMyNameActionEquipPost**](MyCharactersApi.md#actionEquipItemMyNameActionEquipPost) | **POST** /my/{name}/action/equip | Action Equip Item
[**actionFightMyNameActionFightPost**](MyCharactersApi.md#actionFightMyNameActionFightPost) | **POST** /my/{name}/action/fight | Action Fight
[**actionGatheringMyNameActionGatheringPost**](MyCharactersApi.md#actionGatheringMyNameActionGatheringPost) | **POST** /my/{name}/action/gathering | Action Gathering
[**actionGeBuyItemMyNameActionGrandexchangeBuyPost**](MyCharactersApi.md#actionGeBuyItemMyNameActionGrandexchangeBuyPost) | **POST** /my/{name}/action/grandexchange/buy | Action Ge Buy Item
[**actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost**](MyCharactersApi.md#actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost) | **POST** /my/{name}/action/grandexchange/cancel | Action Ge Cancel Sell Order
[**actionGeCreateSellOrderMyNameActionGrandexchangeSellPost**](MyCharactersApi.md#actionGeCreateSellOrderMyNameActionGrandexchangeSellPost) | **POST** /my/{name}/action/grandexchange/sell | Action Ge Create Sell Order
[**actionMoveMyNameActionMovePost**](MyCharactersApi.md#actionMoveMyNameActionMovePost) | **POST** /my/{name}/action/move | Action Move
[**actionNpcBuyItemMyNameActionNpcBuyPost**](MyCharactersApi.md#actionNpcBuyItemMyNameActionNpcBuyPost) | **POST** /my/{name}/action/npc/buy | Action Npc Buy Item
[**actionNpcSellItemMyNameActionNpcSellPost**](MyCharactersApi.md#actionNpcSellItemMyNameActionNpcSellPost) | **POST** /my/{name}/action/npc/sell | Action Npc Sell Item
[**actionRecyclingMyNameActionRecyclingPost**](MyCharactersApi.md#actionRecyclingMyNameActionRecyclingPost) | **POST** /my/{name}/action/recycling | Action Recycling
[**actionRestMyNameActionRestPost**](MyCharactersApi.md#actionRestMyNameActionRestPost) | **POST** /my/{name}/action/rest | Action Rest
[**actionTaskCancelMyNameActionTaskCancelPost**](MyCharactersApi.md#actionTaskCancelMyNameActionTaskCancelPost) | **POST** /my/{name}/action/task/cancel | Action Task Cancel
[**actionTaskExchangeMyNameActionTaskExchangePost**](MyCharactersApi.md#actionTaskExchangeMyNameActionTaskExchangePost) | **POST** /my/{name}/action/task/exchange | Action Task Exchange
[**actionTaskTradeMyNameActionTaskTradePost**](MyCharactersApi.md#actionTaskTradeMyNameActionTaskTradePost) | **POST** /my/{name}/action/task/trade | Action Task Trade
[**actionUnequipItemMyNameActionUnequipPost**](MyCharactersApi.md#actionUnequipItemMyNameActionUnequipPost) | **POST** /my/{name}/action/unequip | Action Unequip Item
[**actionUseItemMyNameActionUsePost**](MyCharactersApi.md#actionUseItemMyNameActionUsePost) | **POST** /my/{name}/action/use | Action Use Item
[**actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost**](MyCharactersApi.md#actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost) | **POST** /my/{name}/action/bank/withdraw/gold | Action Withdraw Bank Gold
[**actionWithdrawBankMyNameActionBankWithdrawPost**](MyCharactersApi.md#actionWithdrawBankMyNameActionBankWithdrawPost) | **POST** /my/{name}/action/bank/withdraw | Action Withdraw Bank
[**getAllCharactersLogsMyLogsGet**](MyCharactersApi.md#getAllCharactersLogsMyLogsGet) | **GET** /my/logs | Get All Characters Logs
[**getMyCharactersMyCharactersGet**](MyCharactersApi.md#getMyCharactersMyCharactersGet) | **GET** /my/characters | Get My Characters


# **actionAcceptNewTaskMyNameActionTaskNewPost**
> TaskResponseSchema actionAcceptNewTaskMyNameActionTaskNewPost()

Accepting a new task.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionAcceptNewTaskMyNameActionTaskNewPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionAcceptNewTaskMyNameActionTaskNewPostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionAcceptNewTaskMyNameActionTaskNewPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**TaskResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | New task successfully accepted. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**598** | Tasks Master not found on this map. |  -  |
**489** | Character already has a task. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionBuyBankExpansionMyNameActionBankBuyExpansionPost**
> BankExtensionTransactionResponseSchema actionBuyBankExpansionMyNameActionBankBuyExpansionPost()

Buy a 20 slots bank expansion.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionBuyBankExpansionMyNameActionBankBuyExpansionPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionBuyBankExpansionMyNameActionBankBuyExpansionPostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionBuyBankExpansionMyNameActionBankBuyExpansionPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**BankExtensionTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bank expansion successfully bought. |  -  |
**598** | Bank not found on this map. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**492** | Insufficient gold on your character. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionCompleteTaskMyNameActionTaskCompletePost**
> RewardDataResponseSchema actionCompleteTaskMyNameActionTaskCompletePost()

Complete a task.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionCompleteTaskMyNameActionTaskCompletePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionCompleteTaskMyNameActionTaskCompletePostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionCompleteTaskMyNameActionTaskCompletePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**RewardDataResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The task has been successfully completed. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**598** | Tasks Master not found on this map. |  -  |
**488** | Character has not completed the task. |  -  |
**487** | Character has no task. |  -  |
**497** | Character inventory is full. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionCraftingMyNameActionCraftingPost**
> SkillResponseSchema actionCraftingMyNameActionCraftingPost(craftingSchema)

Crafting an item. The character must be on a map with a workshop.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionCraftingMyNameActionCraftingPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionCraftingMyNameActionCraftingPostRequest = {
    // Name of your character.
  name: "z",
  
  craftingSchema: {
    code: "z",
    quantity: 1,
  },
};

const data = await apiInstance.actionCraftingMyNameActionCraftingPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **craftingSchema** | **CraftingSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**SkillResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item was successfully crafted. |  -  |
**404** | Craft not found. |  -  |
**598** | Workshop not found on this map. |  -  |
**498** | Character not found. |  -  |
**497** | Character inventory is full. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**493** | Not skill level required. |  -  |
**478** | Missing item or insufficient quantity. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionDeleteItemMyNameActionDeletePost**
> DeleteItemResponseSchema actionDeleteItemMyNameActionDeletePost(simpleItemSchema)

Delete an item from your character\'s inventory.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionDeleteItemMyNameActionDeletePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionDeleteItemMyNameActionDeletePostRequest = {
    // Name of your character.
  name: "z",
  
  simpleItemSchema: {
    code: "z",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionDeleteItemMyNameActionDeletePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simpleItemSchema** | **SimpleItemSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**DeleteItemResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item successfully deleted from your character. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**478** | Missing item or insufficient quantity. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionDepositBankGoldMyNameActionBankDepositGoldPost**
> BankGoldTransactionResponseSchema actionDepositBankGoldMyNameActionBankDepositGoldPost(depositWithdrawGoldSchema)

Deposit gold in a bank on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionDepositBankGoldMyNameActionBankDepositGoldPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionDepositBankGoldMyNameActionBankDepositGoldPostRequest = {
    // Name of your character.
  name: "z",
  
  depositWithdrawGoldSchema: {
    quantity: 1.0,
  },
};

const data = await apiInstance.actionDepositBankGoldMyNameActionBankDepositGoldPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **depositWithdrawGoldSchema** | **DepositWithdrawGoldSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**BankGoldTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Golds successfully deposited in your bank. |  -  |
**598** | Bank not found on this map. |  -  |
**492** | Insufficient gold on your character. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**461** | A transaction is already in progress with this item/your gold in your bank. |  -  |
**486** | An action is already in progress by your character. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionDepositBankMyNameActionBankDepositPost**
> BankItemTransactionResponseSchema actionDepositBankMyNameActionBankDepositPost(simpleItemSchema)

Deposit an item in a bank on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionDepositBankMyNameActionBankDepositPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionDepositBankMyNameActionBankDepositPostRequest = {
    // Name of your character.
  name: "z",
  
  simpleItemSchema: {
    code: "z",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionDepositBankMyNameActionBankDepositPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simpleItemSchema** | **SimpleItemSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**BankItemTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item successfully deposited in your bank. |  -  |
**598** | Bank not found on this map. |  -  |
**404** | Item not found. |  -  |
**461** | A transaction is already in progress with this item/your gold in your bank. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**462** | Your bank is full. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionEquipItemMyNameActionEquipPost**
> EquipmentResponseSchema actionEquipItemMyNameActionEquipPost(equipSchema)

Equip an item on your character.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionEquipItemMyNameActionEquipPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionEquipItemMyNameActionEquipPostRequest = {
    // Name of your character.
  name: "z",
  
  equipSchema: {
    code: "z",
    slot: null,
    quantity: 1,
  },
};

const data = await apiInstance.actionEquipItemMyNameActionEquipPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **equipSchema** | **EquipSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**EquipmentResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item has been successfully equipped on your character. |  -  |
**404** | Item not found. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**496** | Character level is insufficient. |  -  |
**491** | Slot is not empty. |  -  |
**485** | This item is already equipped. |  -  |
**484** | Character can\&#39;t equip more than 100 utilities in the same slot. |  -  |
**497** | Character inventory is full. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionFightMyNameActionFightPost**
> CharacterFightResponseSchema actionFightMyNameActionFightPost()

Start a fight against a monster on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionFightMyNameActionFightPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionFightMyNameActionFightPostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionFightMyNameActionFightPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**CharacterFightResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The fight ended successfully. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**598** | Monster not found on this map. |  -  |
**486** | An action is already in progress by your character. |  -  |
**497** | Character inventory is full. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionGatheringMyNameActionGatheringPost**
> SkillResponseSchema actionGatheringMyNameActionGatheringPost()

Harvest a resource on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionGatheringMyNameActionGatheringPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionGatheringMyNameActionGatheringPostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionGatheringMyNameActionGatheringPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**SkillResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource has been successfully gathered. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**598** | Resource not found on this map. |  -  |
**486** | An action is already in progress by your character. |  -  |
**493** | Not skill level required. |  -  |
**497** | Character inventory is full. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionGeBuyItemMyNameActionGrandexchangeBuyPost**
> GETransactionResponseSchema actionGeBuyItemMyNameActionGrandexchangeBuyPost(gEBuyOrderSchema)

Buy an item at the Grand Exchange on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionGeBuyItemMyNameActionGrandexchangeBuyPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionGeBuyItemMyNameActionGrandexchangeBuyPostRequest = {
    // Name of your character.
  name: "z",
  
  gEBuyOrderSchema: {
    id: "id_example",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionGeBuyItemMyNameActionGrandexchangeBuyPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gEBuyOrderSchema** | **GEBuyOrderSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**GETransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item successfully buy from the Grand Exchange. |  -  |
**598** | Grand Exchange not found on this map. |  -  |
**498** | Character not found. |  -  |
**497** | Character inventory is full. |  -  |
**499** | Character in cooldown. |  -  |
**436** | A transaction is already in progress on this order by a another character. |  -  |
**486** | An action is already in progress by your character. |  -  |
**492** | Insufficient gold on your character. |  -  |
**434** | This offer does not contain as many items. |  -  |
**435** | You can\&#39;t buy to yourself. |  -  |
**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost**
> GETransactionResponseSchema actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(gECancelOrderSchema)

Cancel a sell order at the Grand Exchange on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionGeCancelSellOrderMyNameActionGrandexchangeCancelPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionGeCancelSellOrderMyNameActionGrandexchangeCancelPostRequest = {
    // Name of your character.
  name: "z",
  
  gECancelOrderSchema: {
    id: "id_example",
  },
};

const data = await apiInstance.actionGeCancelSellOrderMyNameActionGrandexchangeCancelPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gECancelOrderSchema** | **GECancelOrderSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**GETransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your sell order has been successfully cancelled. |  -  |
**598** | Grand Exchange not found on this map. |  -  |
**498** | Character not found. |  -  |
**497** | Character inventory is full. |  -  |
**499** | Character in cooldown. |  -  |
**436** | A transaction is already in progress on this order by a another character. |  -  |
**486** | An action is already in progress by your character. |  -  |
**438** | You can\&#39;t cancel an order that is not yours. |  -  |
**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionGeCreateSellOrderMyNameActionGrandexchangeSellPost**
> GECreateOrderTransactionResponseSchema actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(gEOrderCreationrSchema)

Create a sell order at the Grand Exchange on the character\'s map. Please note that a 5% sales tax is charged.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionGeCreateSellOrderMyNameActionGrandexchangeSellPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionGeCreateSellOrderMyNameActionGrandexchangeSellPostRequest = {
    // Name of your character.
  name: "z",
  
  gEOrderCreationrSchema: {
    code: "z",
    quantity: 1.0,
    price: 1.0,
  },
};

const data = await apiInstance.actionGeCreateSellOrderMyNameActionGrandexchangeSellPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gEOrderCreationrSchema** | **GEOrderCreationrSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**GECreateOrderTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The sell order has been successfully created. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**404** | Item not found. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**492** | Insufficient gold on your character. |  -  |
**433** | You can\&#39;t create more than 100 orders at the same time. |  -  |
**437** | This item cannot be sold. |  -  |
**598** | Grand Exchange not found on this map. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionMoveMyNameActionMovePost**
> CharacterMovementResponseSchema actionMoveMyNameActionMovePost(destinationSchema)

Moves a character on the map using the map\'s X and Y position.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionMoveMyNameActionMovePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionMoveMyNameActionMovePostRequest = {
    // Name of your character.
  name: "z",
  
  destinationSchema: {
    x: 1,
    y: 1,
  },
};

const data = await apiInstance.actionMoveMyNameActionMovePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationSchema** | **DestinationSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**CharacterMovementResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The character has moved successfully. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**490** | Character already at destination. |  -  |
**404** | Map not found. |  -  |
**486** | An action is already in progress by your character. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionNpcBuyItemMyNameActionNpcBuyPost**
> NpcMerchantTransactionResponseSchema actionNpcBuyItemMyNameActionNpcBuyPost(npcMerchantBuySchema)

Buy an item from an NPC on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionNpcBuyItemMyNameActionNpcBuyPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionNpcBuyItemMyNameActionNpcBuyPostRequest = {
    // Name of your character.
  name: "z",
  
  npcMerchantBuySchema: {
    code: "code_example",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionNpcBuyItemMyNameActionNpcBuyPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **npcMerchantBuySchema** | **NpcMerchantBuySchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**NpcMerchantTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item successfully buy from the NPC. |  -  |
**598** | NPC not found on this map. |  -  |
**498** | Character not found. |  -  |
**497** | Character inventory is full. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**492** | Insufficient gold on your character. |  -  |
**441** | This item cannot be purchased. |  -  |
**404** | Item not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionNpcSellItemMyNameActionNpcSellPost**
> NpcMerchantTransactionResponseSchema actionNpcSellItemMyNameActionNpcSellPost(npcMerchantBuySchema)

Sell an item from an NPC on the character\'s map.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionNpcSellItemMyNameActionNpcSellPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionNpcSellItemMyNameActionNpcSellPostRequest = {
    // Name of your character.
  name: "z",
  
  npcMerchantBuySchema: {
    code: "code_example",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionNpcSellItemMyNameActionNpcSellPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **npcMerchantBuySchema** | **NpcMerchantBuySchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**NpcMerchantTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item successfully sell to the NPC. |  -  |
**598** | NPC not found on this map. |  -  |
**498** | Character not found. |  -  |
**497** | Character inventory is full. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**442** | This item cannot be sold. |  -  |
**404** | Item not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionRecyclingMyNameActionRecyclingPost**
> RecyclingResponseSchema actionRecyclingMyNameActionRecyclingPost(recyclingSchema)

Recycling an item. The character must be on a map with a workshop (only for equipments and weapons).

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionRecyclingMyNameActionRecyclingPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionRecyclingMyNameActionRecyclingPostRequest = {
    // Name of your character.
  name: "z",
  
  recyclingSchema: {
    code: "z",
    quantity: 1,
  },
};

const data = await apiInstance.actionRecyclingMyNameActionRecyclingPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recyclingSchema** | **RecyclingSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**RecyclingResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The items were successfully recycled. |  -  |
**404** | Item not found. |  -  |
**598** | Workshop not found on this map. |  -  |
**498** | Character not found. |  -  |
**497** | Character inventory is full. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**493** | Not skill level required. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**473** | This item cannot be recycled. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionRestMyNameActionRestPost**
> CharacterRestResponseSchema actionRestMyNameActionRestPost()

Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds)

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionRestMyNameActionRestPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionRestMyNameActionRestPostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionRestMyNameActionRestPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**CharacterRestResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The character has rested successfully. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionTaskCancelMyNameActionTaskCancelPost**
> TaskCancelledResponseSchema actionTaskCancelMyNameActionTaskCancelPost()

Cancel a task for 1 tasks coin.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionTaskCancelMyNameActionTaskCancelPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionTaskCancelMyNameActionTaskCancelPostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionTaskCancelMyNameActionTaskCancelPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**TaskCancelledResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The task has been successfully cancelled. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**598** | Tasks Master not found on this map. |  -  |
**478** | Missing item or insufficient quantity. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionTaskExchangeMyNameActionTaskExchangePost**
> RewardDataResponseSchema actionTaskExchangeMyNameActionTaskExchangePost()

Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionTaskExchangeMyNameActionTaskExchangePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionTaskExchangeMyNameActionTaskExchangePostRequest = {
    // Name of your character.
  name: "z",
};

const data = await apiInstance.actionTaskExchangeMyNameActionTaskExchangePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**RewardDataResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tasks coins have been successfully exchanged. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**598** | Tasks Master not found on this map. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**497** | Character inventory is full. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionTaskTradeMyNameActionTaskTradePost**
> TaskTradeResponseSchema actionTaskTradeMyNameActionTaskTradePost(simpleItemSchema)

Trading items with a Tasks Master.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionTaskTradeMyNameActionTaskTradePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionTaskTradeMyNameActionTaskTradePostRequest = {
    // Name of your character.
  name: "z",
  
  simpleItemSchema: {
    code: "z",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionTaskTradeMyNameActionTaskTradePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simpleItemSchema** | **SimpleItemSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**TaskTradeResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | You have successfully trade items to a Tasks Master. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**598** | Tasks Master not found on this map. |  -  |
**475** | Character have already completed the task or are trying to trade too many items. |  -  |
**474** | Character does not have this task. |  -  |
**478** | Missing item or insufficient quantity. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionUnequipItemMyNameActionUnequipPost**
> EquipmentResponseSchema actionUnequipItemMyNameActionUnequipPost(unequipSchema)

Unequip an item on your character.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionUnequipItemMyNameActionUnequipPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionUnequipItemMyNameActionUnequipPostRequest = {
    // Name of your character.
  name: "z",
  
  unequipSchema: {
    slot: null,
    quantity: 1,
  },
};

const data = await apiInstance.actionUnequipItemMyNameActionUnequipPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unequipSchema** | **UnequipSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**EquipmentResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item has been successfully unequipped and added in his inventory. |  -  |
**404** | Item not found. |  -  |
**498** | Character not found. |  -  |
**486** | An action is already in progress by your character. |  -  |
**491** | Slot is empty. |  -  |
**497** | Character inventory is full. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**483** | Character has no enough HP to unequip this item. |  -  |
**499** | Character in cooldown. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionUseItemMyNameActionUsePost**
> UseItemResponseSchema actionUseItemMyNameActionUsePost(simpleItemSchema)

Use an item as a consumable.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionUseItemMyNameActionUsePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionUseItemMyNameActionUsePostRequest = {
    // Name of your character.
  name: "z",
  
  simpleItemSchema: {
    code: "z",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionUseItemMyNameActionUsePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simpleItemSchema** | **SimpleItemSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**UseItemResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item has been successfully used. |  -  |
**404** | Item not found. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**486** | An action is already in progress by your character. |  -  |
**476** | This item is not a consumable. |  -  |
**478** | Missing item or insufficient quantity. |  -  |
**496** | Character level is insufficient. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost**
> BankGoldTransactionResponseSchema actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(depositWithdrawGoldSchema)

Withdraw gold from your bank.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionWithdrawBankGoldMyNameActionBankWithdrawGoldPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionWithdrawBankGoldMyNameActionBankWithdrawGoldPostRequest = {
    // Name of your character.
  name: "z",
  
  depositWithdrawGoldSchema: {
    quantity: 1.0,
  },
};

const data = await apiInstance.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **depositWithdrawGoldSchema** | **DepositWithdrawGoldSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**BankGoldTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Golds successfully withdraw from your bank. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**461** | A transaction is already in progress with this item/your gold in your bank. |  -  |
**486** | An action is already in progress by your character. |  -  |
**598** | Bank not found on this map. |  -  |
**460** | Insufficient gold in your bank. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionWithdrawBankMyNameActionBankWithdrawPost**
> BankItemTransactionResponseSchema actionWithdrawBankMyNameActionBankWithdrawPost(simpleItemSchema)

Take an item from your bank and put it in the character\'s inventory.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiActionWithdrawBankMyNameActionBankWithdrawPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiActionWithdrawBankMyNameActionBankWithdrawPostRequest = {
    // Name of your character.
  name: "z",
  
  simpleItemSchema: {
    code: "z",
    quantity: 1.0,
  },
};

const data = await apiInstance.actionWithdrawBankMyNameActionBankWithdrawPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simpleItemSchema** | **SimpleItemSchema**|  |
 **name** | [**string**] | Name of your character. | defaults to undefined


### Return type

**BankItemTransactionResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item successfully withdraw from your bank. |  -  |
**404** | Item not found. |  -  |
**498** | Character not found. |  -  |
**499** | Character in cooldown. |  -  |
**461** | A transaction is already in progress with this item/your gold in your bank. |  -  |
**486** | An action is already in progress by your character. |  -  |
**497** | Character inventory is full. |  -  |
**598** | Bank not found on this map. |  -  |
**478** | Missing item or insufficient quantity. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllCharactersLogsMyLogsGet**
> DataPageLogSchema getAllCharactersLogsMyLogsGet()

History of the last 100 actions of all your characters.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';
import type { MyCharactersApiGetAllCharactersLogsMyLogsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request: MyCharactersApiGetAllCharactersLogsMyLogsGetRequest = {
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllCharactersLogsMyLogsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageLogSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched logs. |  -  |
**404** | Logs not found. |  -  |
**498** | Character not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMyCharactersMyCharactersGet**
> MyCharactersListSchema getMyCharactersMyCharactersGet()

List of your characters.

### Example


```typescript
import { createConfiguration, MyCharactersApi } from '';

const configuration = createConfiguration();
const apiInstance = new MyCharactersApi(configuration);

const request = {};

const data = await apiInstance.getMyCharactersMyCharactersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MyCharactersListSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched characters. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


