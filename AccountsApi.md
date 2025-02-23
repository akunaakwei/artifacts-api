# .AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccountAccountsCreatePost**](AccountsApi.md#createAccountAccountsCreatePost) | **POST** /accounts/create | Create Account
[**getAccountAccountsAccountGet**](AccountsApi.md#getAccountAccountsAccountGet) | **GET** /accounts/{account} | Get Account
[**getAccountAchievementsAccountsAccountAchievementsGet**](AccountsApi.md#getAccountAchievementsAccountsAccountAchievementsGet) | **GET** /accounts/{account}/achievements | Get Account Achievements


# **createAccountAccountsCreatePost**
> ResponseSchema createAccountAccountsCreatePost(addAccountSchema)


### Example


```typescript
import { createConfiguration, AccountsApi } from '';
import type { AccountsApiCreateAccountAccountsCreatePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

const request: AccountsApiCreateAccountAccountsCreatePostRequest = {
  
  addAccountSchema: {
    username: "z",
    password: "k",
    email: "email_example",
  },
};

const data = await apiInstance.createAccountAccountsCreatePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addAccountSchema** | **AddAccountSchema**|  |


### Return type

**ResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account created successfully. |  -  |
**456** | Username already used. |  -  |
**457** | Email already used. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountAccountsAccountGet**
> AccountDetailsSchema getAccountAccountsAccountGet()

Retrieve the details of a character.

### Example


```typescript
import { createConfiguration, AccountsApi } from '';
import type { AccountsApiGetAccountAccountsAccountGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

const request: AccountsApiGetAccountAccountsAccountGetRequest = {
    // The account name.
  account: "z",
};

const data = await apiInstance.getAccountAccountsAccountGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | [**string**] | The account name. | defaults to undefined


### Return type

**AccountDetailsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched account. |  -  |
**404** | Account not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountAchievementsAccountsAccountAchievementsGet**
> DataPageAccountAchievementSchema getAccountAchievementsAccountsAccountAchievementsGet()

Retrieve the achievements of a account.

### Example


```typescript
import { createConfiguration, AccountsApi } from '';
import type { AccountsApiGetAccountAchievementsAccountsAccountAchievementsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

const request: AccountsApiGetAccountAchievementsAccountsAccountAchievementsGetRequest = {
    // The character name.
  account: "z",
    // Type of achievements. (optional)
  type: null,
    // Filter by completed achievements. (optional)
  completed: true,
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAccountAchievementsAccountsAccountAchievementsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | [**string**] | The character name. | defaults to undefined
 **type** | **AchievementType** | Type of achievements. | (optional) defaults to undefined
 **completed** | [**boolean**] | Filter by completed achievements. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageAccountAchievementSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched achievements. |  -  |
**404** | Account not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


