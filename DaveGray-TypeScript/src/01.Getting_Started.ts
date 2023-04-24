// ts basic commands

// tsc main.js              --> will compile ts files
// tsc init                 --> initialise a tsconfig.json file
// tsc -w                   --> watch the files for changes
// tsc --noEmitOnError -w   --> will set "noEmitOnError" flag as true

// tsconfig.json

// "rootDir"       --> Root folder contain ts files (eg: "rootDir": "./src")
// "outDir"        --> Contain compiled js files (eg: "outDir": "./build/js")
// "target"        --> Convert the js files in to es6 syntax (eg: "target": "es2016")
// "noEmitOnError" --> if the value is true, JS files is not emitted if there is a error (eg: "noEmitOnError": true)

//  * When we delete a ts file in watch mode, it won't delete the js file automatically, we need to do it manually.

// With this setting, the files outside src folder won't be compiled in to js. it only looks for the files inside src/ folder
/* {
    "include": [
        "src"
    ]
}
*/
