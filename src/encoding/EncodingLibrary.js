import BasicBinaryEncoding from '@/encoding/BasicBinaryEncoding';

const encodingTypes = [
    new BasicBinaryEncoding('AaAaaA', 'A', 'a'),
    new BasicBinaryEncoding('👌👍', '👌', '👍'),
    new BasicBinaryEncoding('👁👄👁', '👁', '👄')
];

function getTypeFor(str)
{
    for(const check of encodingTypes)
    {
        if(check.is(str))
        {
            return check;
        }
    }
    console.log(`No type for ${str}`);
    console.log(str[0]);
    return null;
}

function decode(str)
{
    return getTypeFor(str).decode(str);
}

export {encodingTypes, getTypeFor, decode};
