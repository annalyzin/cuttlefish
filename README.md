# Cuttlefish: Fabric Cut Optimizer

![alt text](https://github.com/cottonrays/cuttlefish/blob/master/imgs/intro.gif "Cuttlefish Explanation")

Cutting rectangles (or squares) of varying sizes from a piece of fabric?

This lightweight app provides a heuristic to optimize the use of your fabric, minimizing scraps and wastage.

- Indicate the width of your fabric roll
- Indicate the width and height of your rectangles required
- Use either inches or cm, just be consistent
- You may use decimal places in your measurements

Note that rectangles will **not** be rotated to preserve how you'd like the pieces to be patterned along the fabric grain

# Demo

Use the Cuttlefish app here: <a href="https://cottonrays.github.io/cuttlefish" target="_blank">https://cottonrays.github.io/cuttlefish</a>

# Feedback

Do you have suggestions on how I can improve your experience?

Complete this 3-question survey: <a href="https://forms.gle/MSXG9oHt3z6gwaMh9" target="_blank">https://forms.gle/MSXG9oHt3z6gwaMh9</a>

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

# Limitations

Cuttlefish attempts to solve a combinatorial NP-hard problem, known as the <a href="https://en.wikipedia.org/wiki/Bin_packing_problem" target="_blank">Bin Packing</a> problem. Since Cuttlefish only uses a heuristic (i.e. approximation), there is a chance that the solution generated is not the most optimal. However, Culttlefish aims to provide you with an initial guide to visualize your fabric utilization, and hopefully inspire you to arrive at a more optimal solution than anything you'd have thought of while panicking over your sewing project deadlines.

Below is a list of known limitations. If you come across any additional ones, feel free to submit a pull request or fill in this form: <a href="https://forms.gle/MSXG9oHt3z6gwaMh9" target="_blank">https://forms.gle/MSXG9oHt3z6gwaMh9</a>.

- Unlimited fabric height assumed
- Tendency to fill upper left hand corners first might result in rectangles lining the left side of the fabric