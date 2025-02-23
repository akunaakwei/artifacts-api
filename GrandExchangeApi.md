# .GrandExchangeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGeSellHistoryGrandexchangeHistoryCodeGet**](GrandExchangeApi.md#getGeSellHistoryGrandexchangeHistoryCodeGet) | **GET** /grandexchange/history/{code} | Get Ge Sell History
[**getGeSellOrderGrandexchangeOrdersIdGet**](GrandExchangeApi.md#getGeSellOrderGrandexchangeOrdersIdGet) | **GET** /grandexchange/orders/{id} | Get Ge Sell Order
[**getGeSellOrdersGrandexchangeOrdersGet**](GrandExchangeApi.md#getGeSellOrdersGrandexchangeOrdersGet) | **GET** /grandexchange/orders | Get Ge Sell Orders


# **getGeSellHistoryGrandexchangeHistoryCodeGet**
> DataPageGeOrderHistorySchema getGeSellHistoryGrandexchangeHistoryCodeGet()

Fetch the sales history of the item for the last 7 days.

### Example


```typescript
import { createConfiguration, GrandExchangeApi } from '';
import type { GrandExchangeApiGetGeSellHistoryGrandexchangeHistoryCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GrandExchangeApi(configuration);

const request: GrandExchangeApiGetGeSellHistoryGrandexchangeHistoryCodeGetRequest = {
    // The code of the item.
  code: "z",
    // The seller (account name) of the item. (optional)
  seller: "z",
    // The buyer (account name) of the item. (optional)
  buyer: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getGeSellHistoryGrandexchangeHistoryCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the item. | defaults to undefined
 **seller** | [**string**] | The seller (account name) of the item. | (optional) defaults to undefined
 **buyer** | [**string**] | The buyer (account name) of the item. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageGeOrderHistorySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched orders history. |  -  |
**404** | Item not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGeSellOrderGrandexchangeOrdersIdGet**
> GEOrderReponseSchema getGeSellOrderGrandexchangeOrdersIdGet()

Retrieve the sell order of a item.

### Example


```typescript
import { createConfiguration, GrandExchangeApi } from '';
import type { GrandExchangeApiGetGeSellOrderGrandexchangeOrdersIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GrandExchangeApi(configuration);

const request: GrandExchangeApiGetGeSellOrderGrandexchangeOrdersIdGetRequest = {
    // The id of the order.
  id: "z",
};

const data = await apiInstance.getGeSellOrderGrandexchangeOrdersIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the order. | defaults to undefined


### Return type

**GEOrderReponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched order. |  -  |
**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGeSellOrdersGrandexchangeOrdersGet**
> DataPageGEOrderSchema getGeSellOrdersGrandexchangeOrdersGet()

Fetch all sell orders.

### Example


```typescript
import { createConfiguration, GrandExchangeApi } from '';
import type { GrandExchangeApiGetGeSellOrdersGrandexchangeOrdersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GrandExchangeApi(configuration);

const request: GrandExchangeApiGetGeSellOrdersGrandexchangeOrdersGetRequest = {
    // The code of the item. (optional)
  code: "z",
    // The seller (account name) of the item. (optional)
  seller: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getGeSellOrdersGrandexchangeOrdersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the item. | (optional) defaults to undefined
 **seller** | [**string**] | The seller (account name) of the item. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageGEOrderSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched orders details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


