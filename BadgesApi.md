# .BadgesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllBadgesBadgesGet**](BadgesApi.md#getAllBadgesBadgesGet) | **GET** /badges | Get All Badges
[**getBadgeBadgesCodeGet**](BadgesApi.md#getBadgeBadgesCodeGet) | **GET** /badges/{code} | Get Badge


# **getAllBadgesBadgesGet**
> DataPageBadgeSchema getAllBadgesBadgesGet()

List of all badges.

### Example


```typescript
import { createConfiguration, BadgesApi } from '';
import type { BadgesApiGetAllBadgesBadgesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BadgesApi(configuration);

const request: BadgesApiGetAllBadgesBadgesGetRequest = {
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllBadgesBadgesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageBadgeSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched badges. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBadgeBadgesCodeGet**
> BadgeResponseSchema getBadgeBadgesCodeGet()

Retrieve the details of a badge.

### Example


```typescript
import { createConfiguration, BadgesApi } from '';
import type { BadgesApiGetBadgeBadgesCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BadgesApi(configuration);

const request: BadgesApiGetBadgeBadgesCodeGetRequest = {
    // The code of the achievement.
  code: "z",
};

const data = await apiInstance.getBadgeBadgesCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the achievement. | defaults to undefined


### Return type

**BadgeResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched badge. |  -  |
**404** | badge not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


