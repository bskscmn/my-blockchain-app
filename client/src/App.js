import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Comparison from "./components/Comparison";
import Filter from "./components/Filter";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: 'BTC',
            currency: 'USD',
            coinData: [],
            time: Date.now(),
            refresh: false
        };

    }

    handleCoinChange = (event) => {
        this.setState({ coin: event.target.value },()=>{this.callAPI()});
    }

    handleCurrencyChange = (event) => {
        this.setState({ currency: event.target.value },()=>{this.callAPI()});
    }

     callAPI() {
         var coin = this.state.coin;
         var currency = this.state.currency;
         var url = `/api/compare/${coin}/${currency}/`;
         fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ coinData: data })
            })
            .catch(err => console.error(err));
    }

    handleRefresh = (event) => {
        this.setState(prevState => ({
            refresh: !prevState.refresh
        }),()=>{this.refreshPage()});

    }
    refreshPage () {
        if(this.state.refresh === true){
            this.timer = setInterval(()=> this.callAPI(), 60000);
        }else{
            clearInterval(this.timer);
        }
    }

    handleAnimation() {

        var width, height, animationArea, canvas, ctx, points, target, animateHeader = true;

        // Main
        initHeader();
        initAnimation();
        addListeners();
        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight+60;
            target = {x: width/2, y: height/2};

            animationArea = document.getElementById('animation');
            animationArea.style.height = height+'px';

            canvas = document.getElementById('animation-canvas');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');


            // create points
            points = [];
            for(var x = 0; x < width; x = x + width/20) {
                for(var y = 0; y < height; y = y + height/20) {
                    var px = x + Math.random()*width/20;
                    var py = y + Math.random()*height/20;
                    var p = {x: px, originX: px, y: py, originY: py };
                    points.push(p);
                }
            }

            // for each point find the 5 closest points
            for(var i = 0; i < points.length; i++) {
                var closest = [];
                var p1 = points[i];
                for(var j = 0; j < points.length; j++) {
                    var p2 = points[j]
                    if(!(p1 === p2)) {
                        var placed = false;
                        for(var k = 0; k < 5; k++) {
                            if(!placed) {
                                if(closest[k] === undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }

                        for(var t = 0; t < 5; t++) {
                            if(!placed) {
                                if(getDistance(p1, p2) < getDistance(p1, closest[t])) {
                                    closest[t] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            // assign a circle to each point
            for(var n in points) {
                var c = new Circle(points[n], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
                points[n].circle = c;
            }
        }

        // Event handling
        function addListeners() {
            if(!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
            var posx = 0;
            var posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            }
            else if (e.clientX || e.clientY)    {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            target.x = posx;
            target.y = posy;

        }

        function scrollCheck() {
            if(document.body.scrollTop > height) animateHeader = false;
            else animateHeader = true;
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight+60;
            animationArea.style.height = height+'px';
            canvas.width = width;
            canvas.height = height;
        }

        // animation
        function initAnimation() {
            animate();
            for(var i in points) {
                shiftPoint(points[i]);
            }
        }

        function animate() {
            if(animateHeader) {
                ctx.clearRect(0,0,width,height);
                for(var i in points) {
                    // detect points in range
                    if(Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                        points[i].circle.active = 0.6;
                    } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                        points[i].active = 0.1;
                        points[i].circle.active = 0.3;
                    } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.02;
                        points[i].circle.active = 0.1;
                    } else {
                        points[i].active = 0;
                        points[i].circle.active = 0;
                    }

                    drawLines(points[i]);
                    points[i].circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            window.TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
                y: p.originY-50+Math.random()*100, ease:window.Circ.easeInOut,
                onComplete: function() {
                    shiftPoint(p);
                }});
        }

        // Canvas manipulation
        function drawLines(p) {
            if(!p.active) return;
            for(var i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
                ctx.stroke();
            }
        }

        function Circle(pos,rad,color) {
            var _this = this;

            // constructor
            (function() {
                _this.pos = pos || null;
                _this.radius = rad || null;
                _this.color = color || null;
            })();

            this.draw = function() {
                if(!_this.active) return;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
                ctx.fill();
            };
        }

        // Util
        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }

    }

    handleTableColoring() {
        var table = document.getElementById('table2');
        if (table != null){
            var cells = table.getElementsByTagName('td'),
                i = -1,j = -1, biggestVal = 0;

            while(++i < cells.length){
                let val = parseFloat(cells[i].innerHTML);
                if(val > biggestVal){ biggestVal = val; }

                cells[i].style.backgroundColor = val <= 0? "" :"#890268" ;
                cells[i].style.color = val <= 0? "" : "#93b9d6" ;
            }

            while(++j < cells.length){
                let val = parseFloat(cells[j].innerHTML);
                if(val === biggestVal){
                    cells[j].style.color = "white"  ;
                }

            }
        }

    }

    componentDidMount() {
        this.handleAnimation();
        this.callAPI();

    }
    componentDidUpdate() {
        this.handleTableColoring();
    }

    render() {
        return (
            <div className = "App">
                <Header />
                <div id="animation" className="animation" >
                    <canvas id="animation-canvas"></canvas>
                    <div id="data-container">
                        <div className="pull-right">
                            <span className="pr-3">Auto-refresh every minute:</span> <br/>
                            <input type="checkbox" checked={this.state.refresh}
                                   onChange={this.handleRefresh} id='heat'/>

                            <label htmlFor='heat'>ON</label>
                        </div>

                        <Filter
                            coin={this.state.coin}
                            currency={this.state.currency}
                            handleCoinChange={this.handleCoinChange}
                            handleCurrencyChange={this.handleCurrencyChange}/>
                        <Comparison coinData={this.state.coinData} coinName={this.state.coin} currencyName={this.state.currency}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
