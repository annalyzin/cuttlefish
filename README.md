![alt text](https://github.com/cottonrays/cuttlefish/blob/master/imgs/intro.gif "Cuttlefish Explanation")

Cutting rectangles (or squares) of varying sizes from a piece of fabric?

This lightweight app helps you to maximize the use of your fabric, while minimizing scraps and wastage.

# Demo

Use the Cuttlefish app here: <a href="https://cottonrays.github.io/cuttlefish" target="_blank">https://cottonrays.github.io/cuttlefish</a>

# Technical Notes

Finding the optimal way to cut rectangles from a piece of fabric is part of a general class of puzzles called the 2D bin packing problem (or, if you've unlimited fabric height, a strip packing problem). Read more about the different solution algorithms here: <a href="https://cgi.csc.liv.ac.uk/~epa/surveyhtml.html" target="_blank">https://cgi.csc.liv.ac.uk/~epa/surveyhtml.html</a>

Cuttlefish packs your rectangles in the order of decresing height, weight, and then area. Hence, it works best when your rectangles have similar heights. This is simply a shortcut to solve the problem, which is by no means optimal, but hopefully provides a decent solution for you to visualize your project and improve upon. 

Cuttlefish was built on top of Mapbox (Copyright 2018, ISC License), which uses a heuristic for the 2D bin packing problem. Cuttlefish features the following enhancements:

- Constraint of overall fabric width added
- Customized dimensions and quantity of rectangles enabled
- Color-coded rectangles by their dimensions
- Optimized for use on mobile phones
- Input validation and error catching for non-numerical and zero/negative numbers
- Fuses spaces which are perfectly adjacent in the vertical and horizontal axis for more optimal packing
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

Below is a list of known limitations. If you come across any additional ones, feel free to raise an issue or fill in this form: <a href="https://forms.gle/MSXG9oHt3z6gwaMh9" target="_blank">https://forms.gle/MSXG9oHt3z6gwaMh9</a>.

- Tendency to leave empty spaces in between rows, especially if there's great variation in rectangles' heights.
- Handles rectangles and squares only.
- If you can afford to rotate your rectangles, you need to test the rotated dimensions manually.
- I'm new to JavaScript and my script is heinous. Any advice on organizing the code (e.g. variable scoping) would be much appreciated.

# Credits

Cuttlefish was built on top of Mapbox (Copyright 2018, ISC License). I also thank both the willing and unwitting people who helped me to test the app:

- Adele Huang
- Chin Weicheng
- Joel Alexander Ng
- Kenneth Soo
- Yap Bee Ting
