import EncodingType from './EncodingType';

export default class AAAEncoding extends EncodingType
{
    getName()
    {
        return 'AAAA';
    }
    
    encode(str)
    {
        return str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
            .join('').replace(/0/g, 'a').replace(/1/g, 'A');
    }
    
    decode(str)
    {
        let data = '';
        let binaryStr = str.replace(/a/g, '0').replace(/A/g, '1');
        for(let i = 0; i < str.length / 8; i++)
        {
            data += String.fromCharCode(parseInt(binaryStr.substring(i * 8, (i * 8) + 8), 2));
        }
        return data;
    }
    
    is(str)
    {
        return (str.startsWith('a') || str.startsWith('A'));
    }
}
