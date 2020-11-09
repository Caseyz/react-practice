export default function (a) {
    return new Promise(resolve => {
        setTimeout(() => {
            let result = 0
            if (a === 5) {
                result = 1
            }
            resolve({
                code: 200,
                data: result
            })
        })
    })
}