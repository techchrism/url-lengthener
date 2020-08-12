import AAAEncoding from './AAAEncoding';

const encodingTypes = [
    new AAAEncoding()
];

function getTypeFor(str)
{
    for(const check of encodingTypes)
    {
        console.log(`Checking ${str} on ${check.getName()}`);
        if(check.is(str))
        {
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
