import express from "express";
const router = express.Router();

const categoryRoute = require("./categories")
const productRoute = require("./products.ts")
const authRoute = require("./auth.ts")
const couponRoute = require("./coupons.ts")
// import paymentRoute from "./payment";

router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);
// router.use("/payment", paymentRoute);

export default router;
