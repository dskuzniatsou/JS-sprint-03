// fetch('https://yahoo.com/?query=js').then((responcse) => {
//     console.log('yahooData')
// })
// fetch('https://bing.com/?query=js').then((responcse) => {
// console.log('bingData')
// })
// fetch('https://google.com/?query=js').then((responcse) => {
// console.log('googleData')})
// //Что нужно сделать чтобы они выполнялись последовательно? Из метода .then() возвращать новый запрос:
// fetch('https://yahoo.com/?query=js')
//     .then(yahooData => {
//         console.log(yahooData)
//         return fetch('https://bing.com/?query=js')
//     })
//     .then(bingData => {
//         console.log(bingData)
//         return fetch('https://google.com/?query=js')
//     })
//     .then(googleData => {
//         console.log(googleData)
//     })
//асинхронные функции (async - создаает асинхронную функцию, await - вместо then ? gjlgbcxbr
// const run = async () => {
//     const yahooData = await fetch('https://yahoo.com/?query=js')
//     console.log(yahooData.url)
//     const bingData = await fetch('https://bing.com/?query=js')
//     console.log(bingData.url)
//     const googleData = await fetch('https://google.com/?query=js')
//     console.log(googleData.url)
// }
//возвращает Промис, но чтобы подписаться дальше then и увидеть результат нужно return внутри функции run какое либ значение
// run()

//синхронный код выполняется по очереди, при этом движок будет останавливать при первом появлении await там где нужно подождать ответа от сервера и после получения такого ответа - продолжать выполнение асинхронной функции.
// подписка await выполняется после выполнения подписки then, catch, finally
//await подписывается на resolve состояние

//Если нам надо обработать ошибки, то весь асинхронный код мы должны поместить в блок try, а обработку ошибок осуществлять в блоке catch:
// const run = async () => {
//     try {
//         const yahooData = await fetch('https://yahoo.com/?query=js')
//         console.log(yahooData.headers)
//         const bingData = await fetch('https://bing.com/?query=js')
//         console.log(bingData)
//         const googleData = await fetch('https://google.com/?query=js')
//         console.log(googleData)
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// run()
//
// статические методы класса Promise
// Метод all() принимает массив промисов и возвращает новый промис. Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов, причем порядок элементов массива в точности соответствует порядку исходных промисов. Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.
// const bigPromise = Promise.all([
//     fetch('https://google.com/?query=js'),
//     fetch('https://yahoo.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
// ])
//
// bigPromise
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('CATCH ERROR', err.message)
//     })

// // Метод race() ждёт только первый выполненный промис, из которого берёт результат (или ошибку), после этого все остальные промисы игнорируются.
// const bigPromise = Promise.race([
//     fetch('https://google.com/?query=js'),
//     fetch('https://yahoo.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
// ])
//
// bigPromise
//     .then(data => {
//         console.log(data.url)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// Метод any() очень похож на Promise.race, но ждёт только первый успешно выполненный промис, из которого берёт результат. Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.
// const bigPromise = Promise.any([
//     fetch('https://google.com/?query=js'),
//     fetch('https://yahoo.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
// ])
//
// bigPromise
//     .then(data => {
//         console.log(data.url)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//
// Метод allSettled() не похож на все остальные методы, которые мы рассмотрели выше тем, что промис, который возвращает даный метод никогда не зареджектится, а соответственно никогда не отработает catch(). У данного метода всегда будет отрабатывать метод .then() с таким массивом елементов:
// {status:"fulfilled", value:результат} для успешных завершений,
//     {status:"rejected", reason:ошибка} для ошибок.

    const bigPromise = Promise.allSettled([
    fetch('https://googlesdf.com/?query=js'),
    fetch('https://yahoodsf.com/?query=js'),
    fetch('https://bingsad.com/?query=js'),
])

bigPromise.then(data => {
    console.log('then', data)
})