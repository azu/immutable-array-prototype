module.exports = {
    "transform": {
        ".(ts|tsx)": "ts-jest"
    },
    "testRegex": "(./test/.*-(test|spec))\\.(ts|tsx|js)$",
    "testPathIgnorePatterns": ["/lib/", "/out/", "/node_modules/"],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
};
