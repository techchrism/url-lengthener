import BasicBinaryEncoding from '@/encoding/BasicBinaryEncoding';

const encodingTypes = [
    new BasicBinaryEncoding('AAAA', 'A', 'a')
];

function getTypeFor(str)
{
    for(const check of encodingTypes)
    {
        console.log(`Checking ${str} on ${check.getName()}`);
        if(check.is(str))
        {
            console.log('Passed');
            return check;
        }
    }
    return null;
}

function decode(str)
{
    return getTypeFor(str).decode(str);
}

export {encodingTypes, getTypeFor, decode};
