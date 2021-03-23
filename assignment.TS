function number_times_visited(array){
    //define constants
const count = {}
const result = []

    // looping through the array item to determine item count
array.forEach(item => {
    if (count[item]) {
       count[item] +=1
       return
    }
    count[item] = 1
})

    // looping through the items in the array property to count how many times exact same item appaers in the array
for (let prop in count){
    if (count[prop] >=1){
        result.push(prop)       
    }
    console.log(" Delivery truck visited  : " + prop + " store " + count[prop] + " time(s).")
}

return result;

}

const stores = ['{"x":5, "y":3}', '{"x":0, "y":0}','{"x":4, "y":3}', '{"x":3, "y":3}','{"x":2, "y":3}','{"x":1, "y":3}','{"x":0, "y":3}','{"x":-1, "y":3}','{"x":5, "y":3}','{"x":0, "y":0}']
number_times_visited(stores)



