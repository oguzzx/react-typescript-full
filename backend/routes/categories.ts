import express, { Request, Response } from "express";
const router = express.Router();
import Category from "../models/Category";

// Yeni kategori oluşturma
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Tüm kategorileri getirme
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// kategori id'sine göre getirme
router.get("/:id", async (req, res) => {
  try {
    const singleCategory = await Category.findById(req.params.id);
    res.status(200).json(singleCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// kategori silme
router.delete("/:id", async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// kategori güncelleme
router.put("/:id", async (req, res) => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
