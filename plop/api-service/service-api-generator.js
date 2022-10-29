module.exports = function (plop, handlers) {
    plop.setGenerator('service-api', {
        description: 'Service API',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Service API's Name: ",
                default: 'Product',
            },
            {
                name: 'folder',
                type: 'input',
                message: "Folder's Name: (kebab-case) ",
            },
        ],
        actions(data) {
            const fileName = data.name;
            const folder = data.folder.toLowerCase();

            const actions = [
                {
                    type: 'add',
                    path: `src/data/services/api-service/${folder}/clients/${fileName}Api.ts`,
                    templateFile:
                        'plop/api-service/service-api-client-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/services/api-service/${folder}/models/${fileName}Model.ts`,
                    templateFile:
                        'plop/api-service/service-api-model-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/services/api-service/${folder}/mutations/use${fileName}Mutation.ts`,
                    templateFile:
                        'plop/api-service/service-api-mutation-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/services/api-service/${folder}/queries/use${fileName}sQuery.ts`,
                    templateFile:
                        'plop/api-service/service-api-query-template.hbs',
                },
            ];

            return actions;
        },
    });
};
