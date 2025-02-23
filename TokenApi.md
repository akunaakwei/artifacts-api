# .TokenApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateTokenTokenPost**](TokenApi.md#generateTokenTokenPost) | **POST** /token | Generate Token


# **generateTokenTokenPost**
> TokenResponseSchema generateTokenTokenPost()

Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.

### Example


```typescript
import { createConfiguration, TokenApi } from '';

const configuration = createConfiguration();
const apiInstance = new TokenApi(configuration);

const request = {};

const data = await apiInstance.generateTokenTokenPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TokenResponseSchema**

### Authorization

[HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token generated successfully |  -  |
**455** | Token generation failed. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


