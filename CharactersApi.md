# .CharactersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCharacterCharactersCreatePost**](CharactersApi.md#createCharacterCharactersCreatePost) | **POST** /characters/create | Create Character
[**deleteCharacterCharactersDeletePost**](CharactersApi.md#deleteCharacterCharactersDeletePost) | **POST** /characters/delete | Delete Character
[**getCharacterCharactersNameGet**](CharactersApi.md#getCharacterCharactersNameGet) | **GET** /characters/{name} | Get Character


# **createCharacterCharactersCreatePost**
> CharacterResponseSchema createCharacterCharactersCreatePost(addCharacterSchema)

Create new character on your account. You can create up to 5 characters.

### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCreateCharacterCharactersCreatePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCreateCharacterCharactersCreatePostRequest = {
  
  addCharacterSchema: {
    name: "z",
    skin: null,
  },
};

const data = await apiInstance.createCharacterCharactersCreatePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addCharacterSchema** | **AddCharacterSchema**|  |


### Return type

**CharacterResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created character. |  -  |
**494** | Name already used. |  -  |
**495** | Maximum characters reached on your account. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCharacterCharactersDeletePost**
> CharacterResponseSchema deleteCharacterCharactersDeletePost(deleteCharacterSchema)

Delete character on your account.

### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiDeleteCharacterCharactersDeletePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiDeleteCharacterCharactersDeletePostRequest = {
  
  deleteCharacterSchema: {
    name: "z",
  },
};

const data = await apiInstance.deleteCharacterCharactersDeletePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteCharacterSchema** | **DeleteCharacterSchema**|  |


### Return type

**CharacterResponseSchema**

### Authorization

[JWTBearer](README.md#JWTBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted character. |  -  |
**498** | Character not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCharacterCharactersNameGet**
> CharacterResponseSchema getCharacterCharactersNameGet()

Retrieve the details of a character.

### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiGetCharacterCharactersNameGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiGetCharacterCharactersNameGetRequest = {
    // The character name.
  name: "z",
};

const data = await apiInstance.getCharacterCharactersNameGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The character name. | defaults to undefined


### Return type

**CharacterResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched character. |  -  |
**404** | Character not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


