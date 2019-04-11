function Hero(image, top, left, size, speed)
{
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function()
    {
    return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function()
    {
        this.left += this.speed;
    }
    this.moveBottom = function ()
    {
        this.top += this.speed;
    }
    this.moveLeft = function ()
    {
        this.left -= this.speed;
    }
    this.moveTop = function ()
    {
        this.top -= this.speed;
    }
}

var hero = new Hero('chopper.jpg', 20, 20, 200, 10);
let right = hero.left;
let bottom = hero.top;

function start()
{
    if(hero.left < window.innerWidth - hero.size && hero.top === bottom)
    {
        hero.moveRight();
    }
    else
    {
        if (hero.top < window.innerHeight - hero.size && hero.left > right)
        {
            hero.moveBottom();
        }
        else
        {
            if (hero.top > bottom && hero.left === right)
            {
                hero.moveTop();
            }
            else
            {
                hero.moveLeft();
            }
        }
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1);
}

start();