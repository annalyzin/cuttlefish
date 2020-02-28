<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="author" content="cottonrays.com">
    <meta name="keywords" content="sewing,fabric,cut,optimize,cuttlefish,cottonrays"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./imgs/icon.png">
    <title>Cuttlefish: Fabric Cut Optimizer by Cottonrays</title>
    <link rel="stylesheet" type="text/css" href="./css/stylesheet.css">
</head>
<body>
    <script src="./js/pack.js"></script>
    <script>

        var n_box = 0;

        function increment() {
            n_box += 1;
        }

        function addField() {
            var r = document.createElement('div');
            var w = document.createElement('input');
            var h = document.createElement('input');
            var q = document.createElement('input');
            var e1 = document.createElement('p');
            var e2 = document.createElement('p');
            var s1 = document.createElement('span');
            var s2 = document.createElement('span');
            var s3 = document.createElement('span');
            w.setAttribute("type", "number");
            h.setAttribute("type", "number");
            q.setAttribute("type", "number");
            w.setAttribute("min", "1");
            h.setAttribute("min", "1");
            q.setAttribute("min", "1");
            q.setAttribute("max", "100");
            w.setAttribute("onchange", "update();");
            h.setAttribute("onchange", "update();");
            q.setAttribute("onchange", "update();");
            w.setAttribute("onkeyup", "this.onchange();");
            h.setAttribute("onkeyup", "this.onchange();");
            q.setAttribute("onkeyup", "this.onchange();");
            w.setAttribute("onpaste", "this.onchange();");
            h.setAttribute("onpaste", "this.onchange();");
            q.setAttribute("onpaste", "this.onchange();");
            w.setAttribute("oninput", "this.onchange();");
            h.setAttribute("oninput", "this.onchange();");
            q.setAttribute("oninput", "this.onchange();");
            e1.setAttribute("class", "nospace_msg");
            e2.setAttribute("class", "error_msg");
            s1.innerHTML = 'Width: ';
            s2.innerHTML = ' Height: ';
            s3.innerHTML = ' Qty: ';
            increment();
            w.setAttribute("id", "box_width" + n_box);
            h.setAttribute("id", "box_height" + n_box);
            q.setAttribute("id", "box_count" + n_box);
            e1.setAttribute("id", "nospace_msg" + n_box);
            e2.setAttribute("id", "error_msg" + n_box);
            r.appendChild(s1);
            r.appendChild(w);
            r.appendChild(s2);
            r.appendChild(h);
            r.appendChild(s3);
            r.appendChild(q);
            r.appendChild(e1);
            r.appendChild(e2);
            document.getElementById("form-div").appendChild(r);
        }

        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
        }


        function update() {

            var fabric_width = parseFloat(document.getElementById('fabric_width').value);
            var fabric_height = parseFloat(document.getElementById('fabric_height').value);
            var fabric_error_message = document.getElementById("fabric_error_msg");

            try { 
                if(isNaN(fabric_width)) throw "Please input a number.";
                if(fabric_width < 1 || fabric_height < 1) throw "Minimum value is 1.";

                fabric_error_message.innerHTML = ``;

            }
            catch(err) {
                fabric_error_message.innerHTML = err;
            }

            // color boxes by size
            const col_start = 35;
            const col_end = 90;
            const col_interval = Math.round((80-20)/n_box);


            let boxes = [];
            var i;
            for (i = 0; i < (n_box + 1); i++) {

                var box_w = parseFloat(document.getElementById('box_width' + i).value);
                var box_h = parseFloat(document.getElementById('box_height' + i).value);
                var box_c = parseFloat(document.getElementById('box_count' + i).value);

                // validate inputs
                var error_message = document.getElementById("error_msg" + i);
                
                try { 
                    if(isNaN(box_w) || isNaN(box_h) || isNaN(box_c)) throw "Please input numbers.";
                    if(box_w < 1 || box_h < 1 || box_c < 1) throw "Minimum value is 1.";
                    if(box_w > fabric_width) throw "Width exceeds fabric width.";
                    if(!Number.isInteger(box_c)) throw "Number of rectangles must be a whole number.";
                    if(box_c > 100) throw "Number of rectangles cannot exceed 100";

                    error_message.innerHTML = ``;

                    // calculcate area and add to list of valid boxes
                    var box_a = box_w * box_h;
                    var bc;
                    for(bc = 0; bc < box_c; bc += 1) {
                        if (i == 0) {
                            boxes.push({w: box_w, h: box_h, a: box_a, col: `hsl(195,100%,${col_start}%)`});
                        } else {
                            boxes.push({w: box_w, h: box_h, a: box_a, col: `hsl(195,100%,${i*col_interval + col_start}%)`});
                        }
                        
                    }
                    
                }
                catch(err) {
                    error_message.innerHTML = err;
                }

            } 

            var {w, h, fill} = potpack(boxes, fabric_width, fabric_height, hspace=1, vspace=0, hfuse=0, vfuse=1);

            var leftover_total = 0;
            var leftover_total_area = 0;

            // identify boxes that can't fit
            for (j = 0; j < (n_box + 1); j++) {

                var box_w = parseFloat(document.getElementById('box_width' + j).value);
                var box_h = parseFloat(document.getElementById('box_height' + j).value);
                var box_c = parseFloat(document.getElementById('box_count' + j).value);

                var nospace_message = document.getElementById("nospace_msg" + j);
                var leftover = 0;
                var leftover_area = 0;

                for (const box$1 of boxes) {
                    if (isNaN(box$1.x) && box$1.w == box_w && box$1.h == box_h) {
                        leftover += 1;
                        leftover_area += box$1.a;
                    }
                }
                if (leftover > 0) {
                    nospace_message.innerHTML = `${leftover} out of ${box_c} excluded.`;
                } else {
                    nospace_message.innerHTML = ``;
                }
                
                leftover_total += leftover;
                leftover_total_area += leftover_area;

            }


            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            const cw = document.getElementById("container").clientWidth
            const ch = cw * h / w;

            canvas.width = cw * 2;
            canvas.height = ch * 2;
            canvas.style.width = cw + 'px';
            canvas.style.height = ch + 'px';
            ctx.scale(2, 2);

            const r = cw / w;

            ctx.lineWidth = 0.5;
            for (const box of boxes) {
                ctx.beginPath();

                // color 
                ctx.fillStyle = box.col;
                ctx.rect(box.x * r, box.y * r, box.w * r, box.h * r);
                ctx.fill();
                ctx.stroke();

                // text label
                ctx.font = "12px Helvetica";
                ctx.fillStyle = "#000";
                ctx.textAlign = "center";
                ctx.fillText(box.w + "W x " + box.h + "H", (box.x+(0.5*box.w))*r, (box.y+(0.5*box.h))*r); 

            }
            document.getElementById('info').innerHTML = `
            Packed <em>${boxes.length - leftover_total}</em> out of <em>${boxes.length}</em> rectangle(s), using <em>${Math.round( (100 * (fill - leftover_total_area) ) / (w * h) )}%</em> of a <em>${w}x${h}</em> (WxH) fabric.`;

        }

    </script>


    <script type="module">

        // update();
        document.getElementById('gen-button').onclick = update;

    </script>

    <div id="container">
        <h1>Cuttlefish</h1> <h2>Fabric Cut Optimizer</h2>
        <p>Cutting rectangles (or squares) of varying sizes from a piece of fabric?</p>
        <p>This lightweight app helps you to optimize the use of your fabric, minimizing scraps and wastage.</p>
        <p><img class="img" src="./imgs/intro.gif"></p>

        <hr>
        <h2>Try it !</h2>

        <ol>
            <li>Input your fabric's width. Fabric height is optional if you're still deciding how much fabric to buy.</li>
            <li>Input the size and quantity of rectangles you wish to cut from the fabric.</li>
            <li>Click 'Generate' to see how the rectangles can be cut from the fabric.</li>
        </ol> 
        <p>Note that rectangles will <b>not</b> be rotated to preserve how you'd like the pieces to be patterned along the fabric grain.</p> 

        <p>
            <img class="img" src="./imgs/width_orientation.png" alt="Fabric Width Orientation">
        </p>

        <div>
            <h3>Fabric</h3>
            <span>W: </span><input type="number" id="fabric_width" min="1" value="20" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
            <span>H: </span>
            <input type="number" id="fabric_height" min="1" value="" placeholder="Optional" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
            <p class="error_msg" id="fabric_error_msg"></p>
        </div>
        <br>
        <div>
            <h3>Rectangles to Cut</h3>
            <div id="form-div">
                <span>W: </span>
                <input type="number" id="box_width0" min="1" value="16" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
                <span>H: </span>
                <input type="number" id="box_height0" min="1" value="8" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
                <span>Qty: </span>
                <input type="number" id="box_count0" min="1" max="100" value="1" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
                <p class="nospace_msg" id="nospace_msg0"></p>
                <p class="error_msg" id="error_msg0"></p>

            </div>    
        </div>


        <div>
            <button class="add-button" onclick="addField()">Add More</button>
        </div>

        <div id="gen-button-div">
            <p>
                <button class="gen-button" id="gen-button">Generate</button>
            </p>
        </div>

        <div>
            <p id="info"></p>
        </div>

        <canvas id="canvas"></canvas>
        <p></p>

        <div id="feedback">
            <hr>
            <h2>How does it work?</h2>
            <p>
                Finding the optimal way to cut rectangles from a piece of fabric is part of a general class of puzzles called the <i>2D bin packing problem</i> (or, if you've unlimited fabric height, a <i>strip packing problem</i>).</p>
            <p>
                Cuttlefish packs your rectangles in the order of decresing height, weight, and then area. Hence, it works best when your rectangles have similar heights. This is simply a shortcut to solve the problem, which is by no means optimal, but hopefully provides a decent solution for you to improve upon. 
            </p>
            <p>
                For more info: <a href="https://github.com/cottonrays/cuttlefish#technical-notes" target="_blank">https://github.com/cottonrays/cuttlefish#technical-notes</a>.
            </p>
            <p>
                Leave feedback here: <a href="https://forms.gle/MSXG9oHt3z6gwaMh9" target="_blank">https://forms.gle/MSXG9oHt3z6gwaMh9</a>
            </p>
        </div>
    </div>


    <div id="credits">
        <p>Built on top of Mapbox: Copyright &copy; 2018, Mapbox, ISC License.</p>
        <p>Copyright &copy; 2020 to present, <a href="https://github.com/cottonrays/cuttlefish" target="_blank">Cottonrays.com</a></p>
    </div>
</body>
</html>
