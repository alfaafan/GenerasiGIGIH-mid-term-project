# Generasi GIGIH Mid Term Project

This is a repository of Generasi GIGIH mid term project. The task is to build a [Tokopedia Play](https://www.tokopedia.com/play/channels) clone, given the guideline on tech requirement and features. For this mid-term project, the task is to make the backend only.

# Features

- User can open, at least two page
  - Home
  - Video Detail Page
- User can see video list in home page
- User can see list of products, video, comment list, and comment submit form
- User just need input name and comment when submit comment in form
- User can see their comment in list comment section after success submit
  comment

# Database Structure

## Videos

Video object:

```
{
  id: objectId
  thumbnail_url: string
}
```

## Products

Product object:

```
{
    id: objectId
    product_url: string
    title: string
    price: number
}
```

## Comments

Comment object:

```
{
    username: string
    comment: string
    timetamp: datetime
}
```

# API Structure

# How to Run
