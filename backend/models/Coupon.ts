import mongoose, { Schema, Document } from "mongoose";

interface ICoupon extends Document {
  code: string;
  discountPercent: number;
}

const CouponSchema: Schema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    discountPercent: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model<ICoupon>("Coupon", CouponSchema);

export default Coupon;
