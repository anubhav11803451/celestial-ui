export default function (plop) {
  plop.setGenerator("package", {
    description: "package",
    prompts: [
      {
        type: "input",
        name: "type",
        message: "Package type",
        validate: function (type) {
          return ["component"].includes(type)
        },
      },
      {
        type: "input",
        name: "name",
        message: "Package name",
      },
      {
        type: "input",
        name: "description",
        message: "Package description",
      },
      {
        type: "input",
        name: "authorName",
        message: "Author name",
      },
    ],
    actions: (data) => {
      const actions = []

      switch (data.type) {
        case "component": {
          actions.push({
            type: "addMany",
            skipIfExists: true,
            globOptions: {
              dot: true,
            },
            base: "./plop-templates/package/component",
            destination: "packages/{{name}}",
            templateFiles: [
              "./plop-templates/package/component/*",
              "./plop-templates/package/component/**",
            ],
          })

          actions.push({
            type: "modify",
            path: "packages/{{name}}/package.json",
            pattern: /{name}/g,
            template: "{{name}}",
          })

          actions.push({
            type: "modify",
            path: "packages/{{name}}/package.json",
            pattern: /{description}/g,
            template: "{{description}}",
          })

          actions.push({
            type: "modify",
            path: "packages/{{name}}/package.json",
            pattern: /{authorName}/g,
            template: "{{authorName}}",
          })

          break
        }
      }

      return actions
    },
  })
}
