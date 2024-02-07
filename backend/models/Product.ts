import mongoose, { Schema, Document } from "mongoose";

interface IReview extends Document {
  text: string;
  rating: number;
  user: mongoose.Types.ObjectId;
}

const ReviewSchema: Schema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

interface IProduct extends Document {
  name: string;
  img: string[];
  review: IReview[];
  description: string;
  color: string[];
  size: string[];
  price: {
    current: number;
    discount?: number;
  };
  category: mongoose.Types.ObjectId;
}

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: [
      {
        type: String,
        required: true,
      },
    ],
    review: [ReviewSchema],
    description: {
      type: String,
      required: true,
    },
    color: [
      {
        type: String,
        required: true,
      },
    ],
    size: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      current: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
