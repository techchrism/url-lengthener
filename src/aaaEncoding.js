export function aaaEncode(str)
{
    return str.split('').map(char =>
    {
        return char.charCodeAt(0).toString(2).padStart(8, '0').replace(/0/g, 'a')
            .replace(/1/g, 'A');
    }).join('');
}

export function aaaDecode(str)
{
    let data = '';
    console.log('Decoding');
    console.log(str);
    for(let i = 0; i < str.length / 8; i++)
    {
        data += String.fromCharCode(parseInt(str.substring(i * 8, (i * 8) + 8).replace(/a/g, '0')
                    .replace(/A/g, '1'), 2));
    }
    return data;
}
