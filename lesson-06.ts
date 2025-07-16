// Первая: Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние resolved через ms миллисекунд. Пример использования:


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).
then(() => console.log('Hello!'))

// 2 задача

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("reject1");
        rej("reject1");
    }, 1000);
});


promise1
    .catch((t) => t + "catch1") //t="reject1" -> "reject1catch1"  = resolve
    .catch((t) => t + "catch2")// does nor read
    .then((t) => t + "then1")// t = "reject1catch1" -> "reject1catch1then1"
    .finally((t) => t + "finally")// read but not change t = "reject1catch1then1"
    .then((t) => console.log(t)); /// t="reject1catch1then1"