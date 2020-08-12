import EncodingType from './EncodingType';

export default class BasicBinaryEncoding extends EncodingType
{
    constructor(name, one, zero)
    {
        super();
        this.nameText = name;
        this.one = one;
        this.zero = zero;
        this.oneRegex = new RegExp(one, 'g');
        this.zeroRegex = new RegExp(zero, 'g');
    }
    
    get name()
    {
        return this.nameText;
    }
    
    encode(str)
    {
        return str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
            .join('').replace(/0/g, this.zero).replace(/1/g, this.one);
    }
    
    decode(str)
    {
        let data = '';
        let binaryStr = str.replace(this.zeroRegex, '0').replace(this.oneRegex, '1');
        for(let i = 0; i < str.length / 8; i++)
        {
            data += String.fromCharCode(parseInt(binaryStr.substring(i * 8, (i * 8) + 8), 2));
        }
        return data;
    }
    
    is(str)
    {
        return (str.startsWith(this.zero) || str.startsWith(this.one));
    }
}
