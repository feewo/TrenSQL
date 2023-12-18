import setCookie from './setCookie';

function updateUser(result) {
    setCookie(
        'fname', 
        `${result.data.fname}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'nname', 
        `${result.data.nname}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'oname', 
        `${result.data.oname}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'group', 
        `${result.data.group}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
}

export default updateUser;