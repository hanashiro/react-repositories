const partialGenerator = require('./plop/partial/partial-generator');
const componentGenerator = require('./plop/component/component-generator');
const storeGenerator = require('./plop/store/store-generator');
const hookGenerator = require('./plop/hook/hook-generator');
const serviceGenerator = require('./plop/service/service-generator');
const apiServiceGenerator = require('./plop/api-service/service-api-generator');

module.exports = function (plop) {
    Object.keys(handlers).forEach((functionName) => {
        plop.setHelper(functionName, handlers[functionName]);
    });

    [
        partialGenerator,
        componentGenerator,
        storeGenerator,
        hookGenerator,
        serviceGenerator,
        apiServiceGenerator,
    ].forEach((generator) => generator(plop, handlers));
};

const handlers = {
    getPath(folder, name) {
        let path = '';
        if (folder) {
            path += `${folder.toLowerCase()}/`;
        }
        path += `${name.toLowerCase()}`;
        return path;
    },
    createFilename(componentName) {
        return componentName
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .toLowerCase()
            .split(' ')
            .join('-');
    },
};
