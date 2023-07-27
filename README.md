# Generasi GIGIH Mid Term Project

This is a repository of my Generasi GIGIH mid-term project. The task is to build a [Tokopedia Play](https://www.tokopedia.com/play/channels) clone, given the guideline on tech requirements and features. For this mid-term project, the task is to make the backend only.

# Features

- User can open, at least two page
  - Home
  - Video Detail Page
- User can see video list on home page
- User can see a list of products, videos, comment list, and comment submission form
- User just needs to input their name and comment when submitting a comment in the form
- User can see their comment in the list of comment sections after successfully submitted the
  comment

# Database Structure

## Videos

Video object:

```
{
  id: objectId
  thumbnailUrl: String
}
```

## Products

Product object:

```
{
    id: objectId
    videoId: String
    title: String
    price: Number
    productUrl: String
}
```

## Comments

Comment object:

```
{
    id: objectId
    videoId: String
    username: String
    content: String
    createdAt: Date
    updatedAt: Date
}
```

## Users

Users object:

```
{
  id: objectId
  username: String
  pictureUrl: String
}
```

# API Structure

## Response Structure

| Response | Type     | Description \*\*\*\*          |
| :------- | :------- | :---------------------------- |
| status   | `Number` | HTTP response status code     |
| message  | `String` | Describe the response message |
| data     | `any`    | Data that returned            |

## API Reference

### /videos

#### Get all videos

```http
  GET /videos
```

##### Response example:

###### Success:

```json
{
  "status": 200,
  "message": "Success",
  "data": [
      {<VideoObject>},
      {<VideoObject>},
      {<VideoObject>},
    ]
}
```

###### Error (code 404):

```json
{
  "status": 404,
  "message": "Videos not found"
}
```

###### Error (code 500):

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

---

#### Get a video

```http
  GET /videos/${id}
```

| Parameter | Type       | Description                        |
| :-------- | :--------- | :--------------------------------- |
| `_id`     | `objectId` | **Required**. Id of video to fetch |

##### Response example:

###### Success:

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "_id": ObjectId,
    "thumbnailUrl": "www.example.com",
  }
}
```

###### Error (code 404):

```json
{
  "status": 404,
  "message": "Video not found"
}
```

###### Error (code 500):

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

---

### /products

#### Get all products

```http
GET /videos/${videoId}/products
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `videoId` | `String` | **Required**. Id of product to fetch |

##### Response example:

###### Success:

```json
{
  "status": 200,
  "message": "Success",
  "data": [
      {<productsObject>},
      {<productsObject>},
      {<productsObject>},
    ]

}
```

###### Error (code 404):

```json
{
  "status": 404,
  "message": "Products not found"
}
```

###### Error (code 500):

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

---

#### Get a product

```http
  GET /videos/${videoId}/products/${id}
```

| Parameter | Type       | Description                          |
| :-------- | :--------- | :----------------------------------- |
| `_id`     | `objectId` | **Required**. Id of product to fetch |

##### Response example:

###### Success:

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "_id": ObjectId,
    "title": "T-Shirt Oversize",
    "Prize": 70000,
    "product_url": "www.example.com/products/23141"
  }
}
```

###### Error (code 404):

```json
{
  "status": 404,
  "message": "Product not found"
}
```

###### Error (code 500):

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

---

### /comments

#### Get all comments

```http
GET /api/videos/${videoId}/comments
```

##### Response example:

###### Success:

```json
{
  "status": 200,
  "message": "Success",
  "data": [
      {<commentObject>},
      {<commentObject>},
      {<commentObject>},
    ]

}
```

###### Error (code 500):

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

---

#### Post a comment

```http
POST /api/videos/${videoId}/comments
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `content`  | `String` | **Required**. Your comment  |
| `username` | `String` | **Required**. Your username |

##### Response example:

###### Success:

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "_id": String,
    "username": "John Doe",
    "content": "This is a comment",
    "timestamp": 2023-07-26T14:31:33.504Z
  }
}
```

###### Error (code 400):

```json
{
  "status": 400,
  "message": "username and content are required"
}
```

###### Error (code 500):

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

---

#### Delete a comment

```http
DELETE /api/videos/${videoId}/comments/${commentId}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `_id`     | `String` | **Required**. id of comment to delete |

##### Response example:

###### Success:

```json
{
  "status": 200,
  "message": "Comment deleted successfully"
}
```

###### Error (code 404):

```json
{
  "status": 404,
  "message": "Comment not found"
}
```

###### Error (code 500):

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

---

# How to Run
