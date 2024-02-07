import express from "express";
const router = express.Router();
import Coupon from "../models/Coupon";

// Yeni kupon oluşturma
router.post("/", async (req, res) => {
  try {
    const { code, discountPercent } = req.body;
    const newCoupon = new Coupon({ code, discountPercent });
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// Tüm kuponları getirme
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// tek bir kupon getirme işlemi
router.get("/:id", async (req, res) => {
  try {
    const singleCoupon = await Coupon.findById(req.params.id);
    res.status(200).json(singleCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// kupon güncelleme işlemi
router.put("/:id", async (req, res) => {
  try {
    const { code, discountPercent } = req.body;
    const updateCoupon = await Coupon.findByIdAndUpdate(req.params.id, {
      code,
      discountPercent,
    });
    res.status(200).json(updateCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// kupon silme işlemi
router.delete("/:id", async (req, res) => {
  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

module.exports = router;
