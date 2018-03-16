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
this show and create folder 'coverage' in root folder with information about all imported components(only on exist tests)

All thunk actions need test in singl thread, because jest can test in multithreaded mode, but we redefinition fetch
```
window.fetch = jest.fn().mockImplementation(...)
```