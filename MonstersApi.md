# .MonstersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMonstersMonstersGet**](MonstersApi.md#getAllMonstersMonstersGet) | **GET** /monsters | Get All Monsters
[**getMonsterMonstersCodeGet**](MonstersApi.md#getMonsterMonstersCodeGet) | **GET** /monsters/{code} | Get Monster


# **getAllMonstersMonstersGet**
> DataPageMonsterSchema getAllMonstersMonstersGet()

Fetch monsters details.

### Example


```typescript
import { createConfiguration, MonstersApi } from '';
import type { MonstersApiGetAllMonstersMonstersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MonstersApi(configuration);

const request: MonstersApiGetAllMonstersMonstersGetRequest = {
    // Monster minimum level. (optional)
  minLevel: 0,
    // Monster maximum level. (optional)
  maxLevel: 0,
    // Item code of the drop. (optional)
  drop: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllMonstersMonstersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minLevel** | [**number**] | Monster minimum level. | (optional) defaults to undefined
 **maxLevel** | [**number**] | Monster maximum level. | (optional) defaults to undefined
 **drop** | [**string**] | Item code of the drop. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageMonsterSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched monsters details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMonsterMonstersCodeGet**
> MonsterResponseSchema getMonsterMonstersCodeGet()

Retrieve the details of a monster.

### Example


```typescript
import { createConfiguration, MonstersApi } from '';
import type { MonstersApiGetMonsterMonstersCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MonstersApi(configuration);

const request: MonstersApiGetMonsterMonstersCodeGetRequest = {
    // The code of the monster.
  code: "z",
};

const data = await apiInstance.getMonsterMonstersCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the monster. | defaults to undefined


### Return type

**MonsterResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched monster. |  -  |
**404** | Monster not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


