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
  thumbnail_url: String
  content_url: String
}
```

## Products

Product object:

```
{
    id: objectId
    title: String
    price: Number
    product_url: String
}
```

## Comments

Comment object:

```
{
    user_id: objectId
    content: String
    timestamp: Date
}
```

## Users

Users object:

```
{
  id: objectId
  username: String
  picture_url: String
}
```

# API Structure

# How to Run
