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
            var a = document.createElement('input');
            var b = document.createElement('input');
            var c = document.createElement('p');
            a.setAttribute("type", "number");
            b.setAttribute("type", "number");
            a.setAttribute("placeholder", "Width");
            b.setAttribute("placeholder", "Height");
            c.setAttribute("class", "error_msg");
            increment();
            a.setAttribute("id", "box_width" + n_box);
            b.setAttribute("id", "box_height" + n_box);
            c.setAttribute("id", "error_msg" + n_box);
            r.appendChild(a);
            r.appendChild(b);
            r.appendChild(c);
            document.getElementById("form-div").appendChild(r);
        }

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
            <label for="fabric_width">Fabric Width:</label>
            <input type="number" id="fabric_width" min="1" value="20" placeholder="Fabric Width">
        </div>
        <br>
        <div>
            <p>Rectangles Required:</p>
            <div id="form-div">
                <input type="number" id="box_width0" min="1" value="16" placeholder="Width">
                <input type="number" id="box_height0" min="1" value="8" placeholder="Height">
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
                For more information on how this app works and its known limitations, visit <a href="https://github.com/cottonrays/cuttlefish#technical-notes" target="_blank">https://github.com/cottonrays/cuttlefish#technical-notes</a>.
            </p>
            <p>
                Got feedback? Let me know in this 3-question survey: <a href="https://forms.gle/MSXG9oHt3z6gwaMh9" target="_blank">https://forms.gle/MSXG9oHt3z6gwaMh9</a>
            </p>
        </div>
    </div>

    <script type="module">

        // update();
        document.getElementById('gen-button').onclick = update;


        function update() {

            var fabric_width = parseFloat(document.getElementById('fabric_width').value);

            let boxes = [];
            var i;
            for (i = 0; i < (n_box + 1); i++) {

                var box_w = parseFloat(document.getElementById('box_width' + i).value);
                var box_h = parseFloat(document.getElementById('box_height' + i).value);

                // validate inputs
                var error_message = document.getElementById("error_msg" + i);
                
                try { 
                    if(isNaN(box_w) || isNaN(box_h)) throw "Please input numbers.";
                    if(box_w < 1 || box_h < 1) throw "Minimum value is 1.";
                    if(box_w > fabric_width) throw "Width exceeds fabric width.";

                    // calulcate area and add to list of valid boxes
                    var box_a = box_w * box_h;
                    boxes.push({w: box_w, h: box_h, a: box_a});
                    error_message.innerHTML = ``;
                }
                catch(err) {
                    error_message.innerHTML = err;
                }

            } 

            const {w, h, fill} = potpack(boxes, fabric_width);

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
            Packed <em>${boxes.length}</em> rectangle(s) in an area of <em>${w}x${h}</em> (WxH). Fabric utilization: <em>${(Math.round(10000 * fill) / 100)}%</em>.`;

        }
    </script>




    <div id="credits">
        <p>Built on top of Mapbox: Copyright &copy; 2018, Mapbox, ISC License.</p>
        <p>Copyright &copy; 2020 to present, <a href="https://github.com/cottonrays/cuttlefish" target="_blank">Cottonrays.com</a></p>
    </div>
</body>
</html>
