# .MyAccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePasswordMyChangePasswordPost**](MyAccountApi.md#changePasswordMyChangePasswordPost) | **POST** /my/change_password | Change Password
[**getAccountDetailsMyDetailsGet**](MyAccountApi.md#getAccountDetailsMyDetailsGet) | **GET** /my/details | Get Account Details
[**getBankDetailsMyBankGet**](MyAccountApi.md#getBankDetailsMyBankGet) | **GET** /my/bank | Get Bank Details
[**getBankItemsMyBankItemsGet**](MyAccountApi.md#getBankItemsMyBankItemsGet) | **GET** /my/bank/items | Get Bank Items
[**getGeSellHistoryMyGrandexchangeHistoryGet**](MyAccountApi.md#getGeSellHistoryMyGrandexchangeHistoryGet) | **GET** /my/grandexchange/history | Get Ge Sell History
[**getGeSellOrdersMyGrandexchangeOrdersGet**](MyAccountApi.md#getGeSellOrdersMyGrandexchangeOrdersGet) | **GET** /my/grandexchange/orders | Get Ge Sell Orders


# **changePasswordMyChangePasswordPost**
> ResponseSchema changePasswordMyChangePasswordPost(changePassword)

Change your account password. Changing the password reset the account token.

### Example


```typescript
import { createConfiguration, MyAccountApi } from '';
import type { MyAccountApiChangePasswordMyChangePasswordPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyAccountApi(configuration);

const request: MyAccountApiChangePasswordMyChangePasswordPostRequest = {
  
  changePassword: {
    currentPassword: "k",
    newPassword: "k",
  },
};

const data = await apiInstance.changePasswordMyChangePasswordPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePassword** | **ChangePassword**|  |


### Return type

**ResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Password changed successfully. |  -  |
**458** | Use a different password. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountDetailsMyDetailsGet**
> MyAccountDetailsSchema getAccountDetailsMyDetailsGet()

Fetch account details.

### Example


```typescript
import { createConfiguration, MyAccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new MyAccountApi(configuration);

const request = {};

const data = await apiInstance.getAccountDetailsMyDetailsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MyAccountDetailsSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched account details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBankDetailsMyBankGet**
> BankResponseSchema getBankDetailsMyBankGet()

Fetch bank details.

### Example


```typescript
import { createConfiguration, MyAccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new MyAccountApi(configuration);

const request = {};

const data = await apiInstance.getBankDetailsMyBankGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**BankResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched bank details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBankItemsMyBankItemsGet**
> DataPageSimpleItemSchema getBankItemsMyBankItemsGet()

Fetch all items in your bank.

### Example


```typescript
import { createConfiguration, MyAccountApi } from '';
import type { MyAccountApiGetBankItemsMyBankItemsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyAccountApi(configuration);

const request: MyAccountApiGetBankItemsMyBankItemsGetRequest = {
    // Item to search in your bank. (optional)
  itemCode: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getBankItemsMyBankItemsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCode** | [**string**] | Item to search in your bank. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageSimpleItemSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched items. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGeSellHistoryMyGrandexchangeHistoryGet**
> DataPageGeOrderHistorySchema getGeSellHistoryMyGrandexchangeHistoryGet()

Fetch your sales history of the last 7 days.

### Example


```typescript
import { createConfiguration, MyAccountApi } from '';
import type { MyAccountApiGetGeSellHistoryMyGrandexchangeHistoryGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyAccountApi(configuration);

const request: MyAccountApiGetGeSellHistoryMyGrandexchangeHistoryGetRequest = {
    // Order ID to search in your history. (optional)
  id: "z",
    // Item to search in your history. (optional)
  code: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getGeSellHistoryMyGrandexchangeHistoryGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Order ID to search in your history. | (optional) defaults to undefined
 **code** | [**string**] | Item to search in your history. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageGeOrderHistorySchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched sales history. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGeSellOrdersMyGrandexchangeOrdersGet**
> DataPageGEOrderSchema getGeSellOrdersMyGrandexchangeOrdersGet()

Fetch your sell orders details.

### Example


```typescript
import { createConfiguration, MyAccountApi } from '';
import type { MyAccountApiGetGeSellOrdersMyGrandexchangeOrdersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MyAccountApi(configuration);

const request: MyAccountApiGetGeSellOrdersMyGrandexchangeOrdersGetRequest = {
    // The code of the item. (optional)
  code: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getGeSellOrdersMyGrandexchangeOrdersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the item. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageGEOrderSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched orders details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


