# .ResourcesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllResourcesResourcesGet**](ResourcesApi.md#getAllResourcesResourcesGet) | **GET** /resources | Get All Resources
[**getResourceResourcesCodeGet**](ResourcesApi.md#getResourceResourcesCodeGet) | **GET** /resources/{code} | Get Resource


# **getAllResourcesResourcesGet**
> DataPageResourceSchema getAllResourcesResourcesGet()

Fetch resources details.

### Example


```typescript
import { createConfiguration, ResourcesApi } from '';
import type { ResourcesApiGetAllResourcesResourcesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourcesApi(configuration);

const request: ResourcesApiGetAllResourcesResourcesGetRequest = {
    // Skill minimum level. (optional)
  minLevel: 0,
    // Skill maximum level. (optional)
  maxLevel: 0,
    // The code of the skill. (optional)
  skill: null,
    // Item code of the drop. (optional)
  drop: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllResourcesResourcesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minLevel** | [**number**] | Skill minimum level. | (optional) defaults to undefined
 **maxLevel** | [**number**] | Skill maximum level. | (optional) defaults to undefined
 **skill** | **GatheringSkill** | The code of the skill. | (optional) defaults to undefined
 **drop** | [**string**] | Item code of the drop. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageResourceSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched resources details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResourceResourcesCodeGet**
> ResourceResponseSchema getResourceResourcesCodeGet()

Retrieve the details of a resource.

### Example


```typescript
import { createConfiguration, ResourcesApi } from '';
import type { ResourcesApiGetResourceResourcesCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourcesApi(configuration);

const request: ResourcesApiGetResourceResourcesCodeGetRequest = {
    // The code of the resource.
  code: "copper_rocks",
};

const data = await apiInstance.getResourceResourcesCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the resource. | defaults to undefined


### Return type

**ResourceResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched resource. |  -  |
**404** | Resource not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


