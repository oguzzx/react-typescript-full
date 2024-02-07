import express, { Request, Response } from "express";
const router = express.Router();
import Product from "../models/Product";

// Yeni ürün oluşturma
router.post("/", async (req, res) => {
  try {
    const { name, price, category, img, review, description, color, size } =
      req.body;
    const newProduct = new Product({
      name,
      price,
      category,
      img,
      review,
      description,
      color,
      size,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// Tüm ürünleri getirme
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// tek bir ürün getirme işlemi
router.get("/:id", async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    res.status(200).json(singleProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// ürün güncelleme işlemi
router.put("/:id", async (req, res) => {
  try {
    const { name, price, category, img, review, description, color, size } =
      req.body;
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
      name,
      price,
      category,
      img,
      review,
      description,
      color,
      size,
    });
    res.status(200).json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// ürün silme işlemi
router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

// ürünleri isme göre getirme
router.get("/search/:name", async (req, res) => {
  try {
    const getProductName = await Product.find({ name: req.params.name });
    res.status(200).json(getProductName);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Sunucu hatası" });
  }
});

module.exports = router;
