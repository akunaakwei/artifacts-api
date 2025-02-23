# .ItemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllItemsItemsGet**](ItemsApi.md#getAllItemsItemsGet) | **GET** /items | Get All Items
[**getItemItemsCodeGet**](ItemsApi.md#getItemItemsCodeGet) | **GET** /items/{code} | Get Item


# **getAllItemsItemsGet**
> DataPageItemSchema getAllItemsItemsGet()

Fetch items details.

### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiGetAllItemsItemsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiGetAllItemsItemsGetRequest = {
    // Minimum level items. (optional)
  minLevel: 0,
    // Maximum level items. (optional)
  maxLevel: 0,
    // Name of the item. (optional)
  name: "z",
    // Type of items. (optional)
  type: null,
    // Skill to craft items. (optional)
  craftSkill: null,
    // Item code of items used as material for crafting. (optional)
  craftMaterial: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllItemsItemsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minLevel** | [**number**] | Minimum level items. | (optional) defaults to undefined
 **maxLevel** | [**number**] | Maximum level items. | (optional) defaults to undefined
 **name** | [**string**] | Name of the item. | (optional) defaults to undefined
 **type** | **ItemType** | Type of items. | (optional) defaults to undefined
 **craftSkill** | **CraftSkill** | Skill to craft items. | (optional) defaults to undefined
 **craftMaterial** | [**string**] | Item code of items used as material for crafting. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageItemSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Fetch items details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getItemItemsCodeGet**
> ItemResponseSchema getItemItemsCodeGet()

Retrieve the details of a item.

### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiGetItemItemsCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiGetItemItemsCodeGetRequest = {
    // The code of the item.
  code: "z",
};

const data = await apiInstance.getItemItemsCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the item. | defaults to undefined


### Return type

**ItemResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched item. |  -  |
**404** | Item not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


