# .LeaderboardApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountsLeaderboardLeaderboardAccountsGet**](LeaderboardApi.md#getAccountsLeaderboardLeaderboardAccountsGet) | **GET** /leaderboard/accounts | Get Accounts Leaderboard
[**getCharactersLeaderboardLeaderboardCharactersGet**](LeaderboardApi.md#getCharactersLeaderboardLeaderboardCharactersGet) | **GET** /leaderboard/characters | Get Characters Leaderboard


# **getAccountsLeaderboardLeaderboardAccountsGet**
> DataPageAccountLeaderboardSchema getAccountsLeaderboardLeaderboardAccountsGet()

Fetch leaderboard details.

### Example


```typescript
import { createConfiguration, LeaderboardApi } from '';
import type { LeaderboardApiGetAccountsLeaderboardLeaderboardAccountsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeaderboardApi(configuration);

const request: LeaderboardApiGetAccountsLeaderboardLeaderboardAccountsGetRequest = {
    // Default sort by achievements points. (optional)
  sort: null,
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAccountsLeaderboardLeaderboardAccountsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **AccountLeaderboardType** | Default sort by achievements points. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageAccountLeaderboardSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched leaderboard. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCharactersLeaderboardLeaderboardCharactersGet**
> DataPageCharacterLeaderboardSchema getCharactersLeaderboardLeaderboardCharactersGet()

Fetch leaderboard details.

### Example


```typescript
import { createConfiguration, LeaderboardApi } from '';
import type { LeaderboardApiGetCharactersLeaderboardLeaderboardCharactersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeaderboardApi(configuration);

const request: LeaderboardApiGetCharactersLeaderboardLeaderboardCharactersGetRequest = {
    // Default sort by combat total XP. (optional)
  sort: null,
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getCharactersLeaderboardLeaderboardCharactersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **CharacterLeaderboardType** | Default sort by combat total XP. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageCharacterLeaderboardSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched leaderboard. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


