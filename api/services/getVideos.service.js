import Video from "../models/video.model.js";
import pkg from "mongoose";
const { PipelineStage } = pkg;

export const getVideosService = async (search) => {
  const pipeline = [];

  if (search) {
    pipeline.push({
      $match: {
        index: "default",
        text: {
          query: search,
          path: {
            wildcard: "*",
          },
          fuzzy: {},
        },
      },
    });
  } else {
    pipeline.push({
      $sort: {
        title: 1,
      },
    });
  }

  return await Video.aggregate([
    ...pipeline,
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "video",
        as: "comments",
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "video",
        as: "products",
      },
    },
    {
      $project: {
        title: 1,
        description: 1,
        thumbnailUrl: 1,
        id: {
          $toString: "$_id",
        },
        _id: 0,
        // comments: {
        //   $map: {
        //     input: "$comments",
        //     as: "comment",
        //     in: {
        //       _id: "$$comment._id",
        //       username: "$$comment.username",
        //       comment: "$$comment.comment",
        //       timestamp: "$$comment.timestamp",
        //     },
        //   },
        // },
        // products: {
        //   $map: {
        //     input: "$products",
        //     as: "product",
        //     in: {
        //       _id: "$$product._id",
        //       title: "$$product.title",
        //       price: "$$product.price",
        //       productUrl: "$$product.productUrl",
        //     },
        //   },
        // },
      },
    },
  ]);
};
