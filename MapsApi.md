# .MapsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMapsMapsGet**](MapsApi.md#getAllMapsMapsGet) | **GET** /maps | Get All Maps
[**getMapMapsXYGet**](MapsApi.md#getMapMapsXYGet) | **GET** /maps/{x}/{y} | Get Map


# **getAllMapsMapsGet**
> DataPageMapSchema getAllMapsMapsGet()

Fetch maps details.

### Example


```typescript
import { createConfiguration, MapsApi } from '';
import type { MapsApiGetAllMapsMapsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MapsApi(configuration);

const request: MapsApiGetAllMapsMapsGetRequest = {
    // Type of content on the map. (optional)
  contentType: null,
    // Content code on the map. (optional)
  contentCode: "z",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllMapsMapsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **MapContentType** | Type of content on the map. | (optional) defaults to undefined
 **contentCode** | [**string**] | Content code on the map. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageMapSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched maps details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMapMapsXYGet**
> MapResponseSchema getMapMapsXYGet()

Retrieve the details of a map.

### Example


```typescript
import { createConfiguration, MapsApi } from '';
import type { MapsApiGetMapMapsXYGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MapsApi(configuration);

const request: MapsApiGetMapMapsXYGetRequest = {
    // The position x of the map.
  x: 1,
    // The position X of the map.
  y: 1,
};

const data = await apiInstance.getMapMapsXYGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x** | [**number**] | The position x of the map. | defaults to undefined
 **y** | [**number**] | The position X of the map. | defaults to undefined


### Return type

**MapResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched map. |  -  |
**404** | Map not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


