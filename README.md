# callvita-task-server

A Node server for a task management web app to be delivered for Callvita

API is deployed on AWS using AWS Lamda (+ AWS CloudFormation & AWS API Gateway)
Check it out [here](https://14i7iomlmc.execute-api.us-east-2.amazonaws.com/prod/)

---

## Routes

`GET /` Displays the content of the README

`GET /api/task` Returns all tasks in the fake "database"

`POST /api/task` Adds a new task to the array with a unique `id`, add the task title and description in the request body

```json
{
	"title": "Example Title",
	"description": "Example Decription"
}
```

`PUT /api/task/:id` Updates the task with the specified `id` in the request params, add the task title or description (or both) in the request body

```json
{
	"description": "Example Decription Update"
}
```

`DELETE /api/task/:id` Deletes the task with the specified `id` in the request params

---

Below you will find a roadplan for the task, with each user story and its current status. This will be updated with every commit so you can check the progress across the commits.

| User Story      | Status             |
| --------------- | ------------------ |
| Set Roadplan    | :heavy_check_mark: |
| Express Server  | :heavy_check_mark: |
| Fake "model"    | :heavy_check_mark: |
| Validation      | :heavy_check_mark: |
| API Controllers | :heavy_check_mark: |
| Deploy on AWS   | :heavy_check_mark: |

---

Paul Ashraf :copyright: 2020
