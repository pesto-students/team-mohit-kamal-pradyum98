const simplifyPath = (path) => {
    const stack = [];
    const parts = path.split('/');

    for (const part of parts) {
        if (part === '..') {
            stack.pop();
        } else if (part !== '.' && part !== '') {
            stack.push(part);
        }
    }

    return '/' + stack.join('/'); 
};

const path = '/home/..///foo/';
const simplifiedPath = simplifyPath(path);
console.log('Simplified path:', simplifiedPath);
