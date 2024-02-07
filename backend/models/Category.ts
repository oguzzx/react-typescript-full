import mongoose, { Schema, Document } from "mongoose";

interface ICategory extends Document {
  name: string;
  img: string;
}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
