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
            var e1 = document.createElement('span');
            var e2 = document.createElement('p');
            w.setAttribute("type", "number");
            h.setAttribute("type", "number");
            q.setAttribute("type", "number");
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
            w.setAttribute("placeholder", "Width");
            h.setAttribute("placeholder", "Height");
            q.setAttribute("placeholder", "Qty");
            e1.setAttribute("class", "nospace_msg");
            e2.setAttribute("class", "error_msg");
            increment();
            w.setAttribute("id", "box_width" + n_box);
            h.setAttribute("id", "box_height" + n_box);
            q.setAttribute("id", "box_count" + n_box);
            e1.setAttribute("id", "nospace_msg" + n_box);
            e2.setAttribute("id", "error_msg" + n_box);
            r.appendChild(w);
            r.appendChild(h);
            r.appendChild(q);
            r.appendChild(e1);
            r.appendChild(e2);
            document.getElementById("form-div").appendChild(r);

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

                    error_message.innerHTML = ``;

                    // calculcate area and add to list of valid boxes
                    var box_a = box_w * box_h;
                    var bc;
                    for(bc = 0; bc < box_c; bc += 1) {
                        boxes.push({w: box_w, h: box_h, a: box_a});
                    }
                    
                }
                catch(err) {
                    error_message.innerHTML = err;
                }

            } 

            var {w, h, fill} = potpack(boxes, fabric_width, fabric_height);
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
                ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
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
        <h1>Cuttlefish: Fabric Cut Optimizer</h1>
        <p>Cutting rectangles (or squares) of varying sizes from a piece of fabric?</p>
        <p>This lightweight app provides a <i>heuristic</i> to optimize the use of your fabric, minimizing scraps and wastage.</p>

        <ul>
          <li>Input the width of your fabric roll</li>
          <li>Input the width and height of your rectangles</li>
          <li>Use either inches or cm, just be consistent</li>
          <li>You may use decimal places in your inputs</li>
      </ul> 

      <p>Note that rectangles will <b>not</b> be rotated to preserve how you'd like the pieces to be patterned along the fabric grain.</p> 

      <p>
        <img class="img" src="./imgs/width_orientation.png" alt="Fabric Width Orientation">
    </p>

    <div>
        <h3>Fabric</h3>
        <input type="number" id="fabric_width" min="1" value="20" placeholder="Width" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
        <input type="number" id="fabric_height" min="1" value="20" placeholder="Height" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
        <p class="error_msg" id="fabric_error_msg"></p>
    </div>
    <br>
    <div>
        <h3>Rectangles to Cut</h3>
        <div id="form-div">
            <input type="number" id="box_width0" min="1" value="16" placeholder="Width" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
            <input type="number" id="box_height0" min="1" value="8" placeholder="Height" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
            <input type="number" id="box_count0" min="1" value="1" placeholder="Qty" onchange="update();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();"/>
            <span class="nospace_msg" id="nospace_msg0"></span>
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


    <div id="feedback">
        <p>
            For how this app works and its known limitations, visit <a href="https://github.com/cottonrays/cuttlefish#technical-notes" target="_blank">https://github.com/cottonrays/cuttlefish#technical-notes</a>.
        </p>
        <p>
            Got feedback? Let me know here: <a href="https://forms.gle/MSXG9oHt3z6gwaMh9" target="_blank">https://forms.gle/MSXG9oHt3z6gwaMh9</a>
        </p>
    </div>
</div>





<div id="credits">
    <p>Built on top of Mapbox: Copyright &copy; 2018, Mapbox, ISC License.</p>
    <p>Copyright &copy; 2020 to present, <a href="https://github.com/cottonrays/cuttlefish" target="_blank">Cottonrays.com</a></p>
</div>
</body>
</html>
