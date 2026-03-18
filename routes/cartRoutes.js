const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");

// ADD TO CART
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { productId } = req.body;

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = new Cart({
        user: req.user.id,
        products: [{ product: productId }]
      });
    } else {
      cart.products.push({ product: productId });
    }

    await cart.save();
    res.json(cart);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET CART
router.get("/", authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("products.product");
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// REMOVE FROM CART
router.delete("/:productId", authMiddleware, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });

    cart.products = cart.products.filter(
      p => p.product.toString() !== req.params.productId
    );

    await cart.save();
    res.json(cart);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;