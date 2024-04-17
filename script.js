function charekter(name,pawer,helth){
    this.name = name;
    this.pawer = pawer;
    this.helth = helth;
    this.elemnt= new ULElemnts(name)
    
}
function ULElemnts(name){
    this.attackbtn = document.querySelector(`#${name}-attak`)
    this.healthbtn = document.querySelector(`#${name}-make-heleth`)
    this.life = document.querySelector(`.${name}-h span`)
    this.healthDisplay = document.querySelector(`#${name}-sapnP`);
    this.backClife = document.querySelector(".life")
    this.fail = document.querySelector(`#${name}-fail`)
}

charekter.prototype.attack = function(opperment){
    if(opperment.helth > 0 ){
        opperment.helth -= this.pawer;
        opperment.elemnt.life.style.width = `${opperment.helth}%`
        opperment.elemnt.healthDisplay.textContent = `${opperment.helth}%`;


    }
    else{
        opperment.elemnt.attackbtn.remove()
        opperment.elemnt.healthbtn.remove()
        opperment.elemnt.fail.innerHTML = `${opperment.name} fail`;
        opperment.elemnt.backClife.style.backgroundColor="rgb(207, 0, 0)";
    }
}
charekter.prototype.status = function(){
    console.log(`name: ${this.name}`)
    console.log(`strong: ${this.pawer}`)
    console.log(`health: ${this.helth}`)
}
charekter.prototype.makefullH = function(){
    if(this.helth < 100){
        this.helth += 10;
        
        if(this.helth > 100){
            this.helth = 100
        }
        this.elemnt.life.style.width = `${this.helth}%`
        this.elemnt.healthDisplay.textContent = `${this.helth}%`;
}
    
}
 // let naroto = new charekter("naroto",10,100);
// console.log(naroto);
let naroto =new charekter("naroto",10,100)
let saski = new charekter("saski",10,100)



naroto.elemnt.attackbtn.addEventListener("click" , function(){
    naroto.attack(saski)
})
saski.elemnt.attackbtn.addEventListener("click" , function(){
    saski.attack(naroto)
})

naroto.elemnt.healthbtn.addEventListener("click" , function(){
    naroto.makefullH()
})
saski.elemnt.healthbtn.addEventListener("click" , function(){
    saski.makefullH()
})

