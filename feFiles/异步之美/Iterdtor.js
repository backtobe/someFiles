function Iterdtor(arr){
  let data = []
  if(!Array.isArray(arr)){
    data = [arr]
  }else {
    data = arr
  }
  let length = data.length
  let index = 0

  this.next = function (){
    let result = {}
    result.value = data[index]
    result.done = index === length -1?true:false
    if(index !== length){
      index++
      return result
    }
    return 'data is all done'
  }
}

let arr = [1,2,3,4,5,6]
let iterdtor = new Iterdtor(arr)

console.log(iterdtor.next())
console.log(iterdtor.next())
console.log(iterdtor.next())
console.log(iterdtor.next())
console.log(iterdtor.next())
console.log(iterdtor.next())
console.log(iterdtor.next())