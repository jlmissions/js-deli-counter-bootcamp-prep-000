var katzDeli = []

function takeANumber (katzDeli, name){
  katzDeli.push (`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing (katzDeli){
var i = 0
while (i < katzDeli.length){
  i++
}
if (katzDeli.length===0){
  return ("the line is empty")
}else
  return (`currently serving ${katzDeli.shift ()}`)
}
