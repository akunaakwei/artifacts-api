# .TasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllTasksRewardsTasksRewardsGet**](TasksApi.md#getAllTasksRewardsTasksRewardsGet) | **GET** /tasks/rewards | Get All Tasks Rewards
[**getAllTasksTasksListGet**](TasksApi.md#getAllTasksTasksListGet) | **GET** /tasks/list | Get All Tasks
[**getTaskTasksListCodeGet**](TasksApi.md#getTaskTasksListCodeGet) | **GET** /tasks/list/{code} | Get Task
[**getTasksRewardTasksRewardsCodeGet**](TasksApi.md#getTasksRewardTasksRewardsCodeGet) | **GET** /tasks/rewards/{code} | Get Tasks Reward


# **getAllTasksRewardsTasksRewardsGet**
> DataPageDropRateSchema getAllTasksRewardsTasksRewardsGet()

Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master.

### Example


```typescript
import { createConfiguration, TasksApi } from '';
import type { TasksApiGetAllTasksRewardsTasksRewardsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TasksApi(configuration);

const request: TasksApiGetAllTasksRewardsTasksRewardsGetRequest = {
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllTasksRewardsTasksRewardsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageDropRateSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched tasks rewards details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllTasksTasksListGet**
> DataPageTaskFullSchema getAllTasksTasksListGet()

Fetch the list of all tasks.

### Example


```typescript
import { createConfiguration, TasksApi } from '';
import type { TasksApiGetAllTasksTasksListGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TasksApi(configuration);

const request: TasksApiGetAllTasksTasksListGetRequest = {
    // Minimum level. (optional)
  minLevel: 0,
    // Maximum level. (optional)
  maxLevel: 0,
    // The code of the skill. (optional)
  skill: null,
    // The type of tasks. (optional)
  type: null,
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.getAllTasksTasksListGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minLevel** | [**number**] | Minimum level. | (optional) defaults to undefined
 **maxLevel** | [**number**] | Maximum level. | (optional) defaults to undefined
 **skill** | **Skill** | The code of the skill. | (optional) defaults to undefined
 **type** | **TaskType** | The type of tasks. | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**DataPageTaskFullSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched tasks details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaskTasksListCodeGet**
> TaskFullResponseSchema getTaskTasksListCodeGet()

Retrieve the details of a task.

### Example


```typescript
import { createConfiguration, TasksApi } from '';
import type { TasksApiGetTaskTasksListCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TasksApi(configuration);

const request: TasksApiGetTaskTasksListCodeGetRequest = {
    // The code of the task.
  code: "z",
};

const data = await apiInstance.getTaskTasksListCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the task. | defaults to undefined


### Return type

**TaskFullResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched task. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTasksRewardTasksRewardsCodeGet**
> RewardResponseSchema getTasksRewardTasksRewardsCodeGet()

Retrieve the details of a tasks reward.

### Example


```typescript
import { createConfiguration, TasksApi } from '';
import type { TasksApiGetTasksRewardTasksRewardsCodeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TasksApi(configuration);

const request: TasksApiGetTasksRewardTasksRewardsCodeGetRequest = {
    // The code of the tasks reward.
  code: "z",
};

const data = await apiInstance.getTasksRewardTasksRewardsCodeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The code of the tasks reward. | defaults to undefined


### Return type

**RewardResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched tasks reward. |  -  |
**404** | Tasks reward not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


