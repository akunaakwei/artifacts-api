# .AchievementsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAchievementAchievementsCodeGet**](AchievementsApi.md#getAchievementAchievementsCodeGet) | **GET** /achievements/{code} | Get Achievement
[**getAllAchievementsAchievementsGet**](AchievementsApi.md#getAllAchievementsAchievementsGet) | **GET** /achievements | Get All Achievements


# **getAchievementAchievementsCodeGet**
> AchievementResponseSchema getAchievementAchievementsCodeGet()

Retrieve the details of a achievement.

### Example


```typescript
import { createConfiguration, AchievementsApi } from '';
import type { AchievementsApiGetAchievementAchievementsCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AchievementsApi(configuration);

const request: AchievementsApiGetAchievementAchievementsCodeGetRequest = {
    // The code of the achievement.
  code: "z",
};

const data = await apiInstance.getAchievementAchievementsCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the achievement. | defaults to undefined


### Return type

**AchievementResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched achievement. |  -  |
**404** | Achievement not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllAchievementsAchievementsGet**
> DataPageAchievementSchema getAllAchievementsAchievementsGet()

List of all achievements.

### Example


```typescript
import { createConfiguration, AchievementsApi } from '';
import type { AchievementsApiGetAllAchievementsAchievementsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AchievementsApi(configuration);

const request: AchievementsApiGetAllAchievementsAchievementsGetRequest = {
    // Type of achievements. (optional)
  type: null,
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllAchievementsAchievementsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **AchievementType** | Type of achievements. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageAchievementSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched achievements. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


