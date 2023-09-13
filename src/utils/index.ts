export function toCombedString(strings: string[]):string{
    return strings.reduce((acc, cur, i) => {
        return (i === 0) ? acc + cur : acc + ', ' + cur;
    })
}