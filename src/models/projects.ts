import { models, model, Schema } from "mongoose";

import { ProjectData } from "@/types";

const ProjectSchema: Schema = new Schema<ProjectData>({
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
  duration: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  projectImages: {
    type: [String],
    required: true,
  },
});

const Project = models.Project || model<ProjectData>("Project", ProjectSchema);

export default Project;
