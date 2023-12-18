import setCookie from './setCookie';

function setUser(result) {
    setCookie(
        'token', 
        `${result.token.access_token}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'login', 
        `${result.data[0].login}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'fname', 
        `${result.data[0].fname}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'nname', 
        `${result.data[0].nname}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'oname', 
        `${result.data[0].oname}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'group', 
        `${result.data[0].group}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
    setCookie(
        'score', 
        `${result.data[0].score}`, 
        {
            'max-age': 86400,
            'samesite': 'strict'
        }
    );
}

export default setUser;