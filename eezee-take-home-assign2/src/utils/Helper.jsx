export function formatNumber(price) {
    return Number(price).toFixed(2)
}

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function capitaliseFirstLetter(string) {
    const whole = string
    const words = whole.split(' ')

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }

    return words.join(' ')
}
