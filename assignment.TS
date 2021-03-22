function number_times_visited(array){
const count = {}
const result = []

array.forEach(item => {
    if (count[item]) {
       count[item] +=1
       return
    }
    count[item] = 1
})

for (let prop in count){
    if (count[prop] >=2){
        result.push(prop)       
    }
    console.log(" Delivery truck visited  : " + prop + " store " + count[prop] + " time(s).")
}

return result;

}

const stores = ['{"x":5, "y":3}', '{"x":0, "y":0}','{"x":4, "y":3}', '{"x":3, "y":3}','{"x":2, "y":3}','{"x":1, "y":3}','{"x":0, "y":3}','{"x":-1, "y":3}','{"x":5, "y":3}','{"x":0, "y":0}']
number_times_visited(stores)



