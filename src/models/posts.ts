import { models, model, Schema } from "mongoose";

import { BlogData } from "@/types";

const PostSchema: Schema = new Schema<BlogData>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const Post = models.Post || model<BlogData>("Post", PostSchema);

export default Post;
