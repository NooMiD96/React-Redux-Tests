# Instructions

To start:
```
npm test
```

Comp1 is example right tests

Comp2 is example not right tests

To check covarage component's:
```
npm run testCoverage
```
this show and create folder 'coverage' in root folder with information about all components(only on exist tests)

Thunk actions need test singly, because jest multithreaded and we redefinition fetch
```
window.fetch = jest.fn().mockImplementation(...)
```