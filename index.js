class Box {
    constructor(x,y, speed, sprite,direction){       
        this.sprite = sprite
        this.boxLeft = x
        this.boxTop=y
        this.speed = speed
        this.sprite.style.left = `${this.boxLeft}px`
        this.sprite.style.top = `${this.boxTop}px`
        this.direction = direction
        this.timer = null
      
    }
    start() { 
        const self=this
        this.timer = setInterval(()=>{
            self.boxTop += (self.speed * self.direction)           
            self.sprite.style.top = `${self.boxTop}px`           

            if(self.direction === 1 && self.boxTop >= 2000 - 590 - this.speed)self.direction *= -1
        
            if(self.direction === -1 && self.boxTop <= 0 + this.speed)self.direction *= -1
        }
    ,20)}
       
    
    
     stop(){
        clearInterval(this.timer)
    }
}

const box1 = new Box(5,60,1,document.getElementById('box'),1)

const button = document.getElementById('butt')

console.log(button)
button.addEventListener('click',()=>{
    const buttonState = button.textContent
    console.log  ('inicio state '+ buttonState)
    if(buttonState === 'START'){
        button.style.backgroundColor = 'red'
        button.textContent = 'STOP'
        box1.start()
    }else if(buttonState === 'STOP'){
        button.style.backgroundColor = 'green'
        button.textContent = 'START'
        box1.stop()
    }

})

   

