# .EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllActiveEventsEventsActiveGet**](EventsApi.md#getAllActiveEventsEventsActiveGet) | **GET** /events/active | Get All Active Events
[**getAllEventsEventsGet**](EventsApi.md#getAllEventsEventsGet) | **GET** /events | Get All Events


# **getAllActiveEventsEventsActiveGet**
> DataPageActiveEventSchema getAllActiveEventsEventsActiveGet()

Fetch active events details.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiGetAllActiveEventsEventsActiveGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiGetAllActiveEventsEventsActiveGetRequest = {
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllActiveEventsEventsActiveGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageActiveEventSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched events details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllEventsEventsGet**
> DataPageEventSchema getAllEventsEventsGet()

Fetch events details.

### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiGetAllEventsEventsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiGetAllEventsEventsGetRequest = {
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllEventsEventsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageEventSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched events details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


