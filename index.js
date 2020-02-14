// Your code here

class Polygon{
  constructor(sides){
    this.sides=sides
  }
  get countSides(){return this.sides.length}
  get perimeter(){
    let sum=0
    for(let i of this.sides){
      sum+=i
    } return sum
    
  }
}

class Triangle extends Polygon{
  get isValid(){
    if(this.countrySides!=3)return false
    let arr=this.sides
    if(arr[0]+arr[1]<arr[2]||arr[0]+arr[2]<arr[1]||arr[1]+arr[2]<arr[0]) return false
    return true
  }
}