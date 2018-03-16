# Instructions

### Tests

To run all tests:

```
npm test
```

To run test comp1 or comp2:
```
npm run testComp1
npm run testComp2
```

### Components
Comp1 is example right tests

Comp2 is example failures tests

### Coverage

To check coverage component's:
```
npm run testGlobalCoverage
```
this show and create folder 'coverage' in root folder with information about all imported components(only on exist tests)

To create coverage for comp1 or comp2:
```
npm run testComp1Coverage
npm run testComp2Coverage
```
### Thunk

All thunk actions need test in singl thread, because jest can test in multithreaded mode, but we redefinition fetch
```
window.fetch = jest.fn().mockImplementation(...)
```