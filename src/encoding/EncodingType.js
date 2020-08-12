export default class EncodingType
{
    encode(str)
    {
        throw new Error('Encoding not defined');
    }
    
    decode(str)
    {
        throw new Error('Decoding not defined');
    }
    
    is(str)
    {
        throw new Error('Checking not defined');
    }
    
    getName()
    {
        throw new Error('Encoding not defined');
    }
}
