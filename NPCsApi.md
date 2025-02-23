# .NPCsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllNpcsNpcsGet**](NPCsApi.md#getAllNpcsNpcsGet) | **GET** /npcs | Get All Npcs
[**getNpcItemsNpcsCodeItemsGet**](NPCsApi.md#getNpcItemsNpcsCodeItemsGet) | **GET** /npcs/{code}/items | Get Npc Items
[**getNpcNpcsCodeGet**](NPCsApi.md#getNpcNpcsCodeGet) | **GET** /npcs/{code} | Get Npc


# **getAllNpcsNpcsGet**
> DataPageNPCSchema getAllNpcsNpcsGet()

Fetch NPCs details.

### Example


```typescript
import { createConfiguration, NPCsApi } from '';
import type { NPCsApiGetAllNpcsNpcsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NPCsApi(configuration);

const request: NPCsApiGetAllNpcsNpcsGetRequest = {
    // The type of the NPC. (optional)
  type: null,
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllNpcsNpcsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **NPCType** | The type of the NPC. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageNPCSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched NPCs details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNpcItemsNpcsCodeItemsGet**
> DataPageNPCItem getNpcItemsNpcsCodeItemsGet()

Retrieve the items list of a NPC. If the NPC has items to buy or sell, they will be displayed.

### Example


```typescript
import { createConfiguration, NPCsApi } from '';
import type { NPCsApiGetNpcItemsNpcsCodeItemsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NPCsApi(configuration);

const request: NPCsApiGetNpcItemsNpcsCodeItemsGetRequest = {
    // The code of the NPC.
  code: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getNpcItemsNpcsCodeItemsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the NPC. | defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageNPCItem**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched NPC. |  -  |
**404** | NPC not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNpcNpcsCodeGet**
> NPCResponseSchema getNpcNpcsCodeGet()

Retrieve the details of a NPC.

### Example


```typescript
import { createConfiguration, NPCsApi } from '';
import type { NPCsApiGetNpcNpcsCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NPCsApi(configuration);

const request: NPCsApiGetNpcNpcsCodeGetRequest = {
    // The code of the NPC.
  code: "z",
};

const data = await apiInstance.getNpcNpcsCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the NPC. | defaults to undefined


### Return type

**NPCResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched NPC. |  -  |
**404** | NPC not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


