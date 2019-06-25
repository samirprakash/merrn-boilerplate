const express = require("express");
const router = express.Router();

// get the sample model
const Sample = require("../../models/sample");

// @route   GET /api/samples
// @desc    Get all samples
// @access  Public
router.get("/", (req, res) => {
  Sample.find()
    .sort({ date: -1 })
    .then(samples => res.json(samples))
    .catch(err => res.status(500).json({ success: false }));
});

// @route   POST /api/samples
// @desc    Add a sample
// @access  Public
router.post("/", (req, res) => {
  const newSample = new Sample({
    name: req.body.name
  });

  newSample
    .save()
    .then(sample => res.json(sample))
    .catch(err => res.status(400).json({ success: false }));
});

// @route   DELETE /api/samples/:id
// @desc    Delete a sample
// @access  Public
router.delete("/:id", (req, res) => {
  Sample.findById(req.params.id)
    .then(item =>
      item
        .remove()
        .then(() =>
          res
            .json({ success: true })
            .catch(err => res.status(500).json({ success: false }))
        )
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
