import bcrypt from 'bcrypt-nodejs';




export async function convertScopeToJSON(scope) {
    let json = [];
    if (Object.prototype.toString.call(scope) === '[object Array]') {
        for (let i = 0; i < scope.length; i++) {
            json.push(scope[i]);
        }
    } else {
        if (scope.startsWith('[')) {
            scope = scope.substring(1, scope.length)
        }
        if (scope.endsWith(']')) {
            scope = scope.substring(0, scope.length - 1)
        }
        if (scope.indexOf(',') > -1) {
            let sarr = scope.split(',');
            for (let i = 0; i < sarr.length; i++) {
                json.push(sarr[i]);
            }
        } else {
            json.push(scope);
        }
    }
    return JSON.stringify(json);
}
export async function saltedPassword (password) {
    return await bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}