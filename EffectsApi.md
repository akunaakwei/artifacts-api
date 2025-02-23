# .EffectsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEffectsEffectsGet**](EffectsApi.md#getAllEffectsEffectsGet) | **GET** /effects | Get All Effects
[**getEffectEffectsCodeGet**](EffectsApi.md#getEffectEffectsCodeGet) | **GET** /effects/{code} | Get Effect


# **getAllEffectsEffectsGet**
> DataPageEffectSchema getAllEffectsEffectsGet()

List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game.

### Example


```typescript
import { createConfiguration, EffectsApi } from '';
import type { EffectsApiGetAllEffectsEffectsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EffectsApi(configuration);

const request: EffectsApiGetAllEffectsEffectsGetRequest = {
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllEffectsEffectsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageEffectSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched effects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEffectEffectsCodeGet**
> EffectResponseSchema getEffectEffectsCodeGet()

Retrieve the details of a badge.

### Example


```typescript
import { createConfiguration, EffectsApi } from '';
import type { EffectsApiGetEffectEffectsCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EffectsApi(configuration);

const request: EffectsApiGetEffectEffectsCodeGetRequest = {
    // The code of the achievement.
  code: "z",
};

const data = await apiInstance.getEffectEffectsCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the achievement. | defaults to undefined


### Return type

**EffectResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched effect. |  -  |
**404** | effect not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


