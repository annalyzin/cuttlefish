# Cuttlefish: Fabric Cut Optimizer

Cutting rectangles (or squares) of varying sizes from a piece of fabric?

This lightweight app provides a heuristic to optimize the use of your fabric, minimizing scraps and wastage.

- Indicate the width of your fabric roll
- Indicate the width and height of your rectangles required
- Use either inches or cm, just be consistent
- You may use decimal places in your measurements

Note that rectangles will **not** be rotated to preserve how you'd like the pieces to be patterned along the fabric grain

# Demo

Use the Cuttlefish app here: <a href="https://cottonrays.github.io/cuttlefish/">https://cottonrays.github.io/cuttlefish/</a>

# Feedback

Do you have suggestions on how I can improve your experience?

Complete this 3-question survey: <a href="https://forms.gle/MSXG9oHt3z6gwaMh9">https://forms.gle/MSXG9oHt3z6gwaMh9</a>

# Technical Notes

Cuttlefish was built on top of Mapbox (Copyright 2018, ISC License), which uses a heuristic for the 2D bin packing problem. It packs rectangles from largest to smallest, and fills up smaller spaces in the upper left hand corners first.

Cuttlefish features the additional enhancements listed below.

- Constraint of overall fabric width added
- Customized dimensions of rectangles enabled
- Optimized for use on mobile phones
- Positions rectangles closer to the cut edge to minimize resulting scraps
- Input validation and error catching for non-numerical and zero/negative numbers
- Fuses spaces which are perfectly adjacent in the vertical axis for more optimal packing
```
|-------------------|           |-------------------|
|     |             |           |     |             |
|     |   space #1  |           |     |             |
|     |_____________|  becomes  |     |   space #1  |
|     |             |           |     |             |
|     |   space #2  |           |     |             |
|_____|_____________|           |_____|_____________|

```
