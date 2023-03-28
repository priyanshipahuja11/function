// function hello() {
//     console.log("hello");
// }
// function hy() {
//     console.log("hy");
// }

// hello()
// hy()
// hello()
// function show() {
//     function jass() {
//         return 888
//     }
//     return jass
// }
// let a = (show())
// console.log(a())
function show() {
    let li = [1, 2, 3, 4, 9, 11, 27, 56, 8, 9, 14]
    for (let i = 0; i < li.length; i++)
        if (li[i] % 2 == 0) {
            console.log("factorial of 2",li[i])
        }
        else if (li[i] % 3 == 0) {
            console.log("factorial of 3", li[i])
        }

}
show()
