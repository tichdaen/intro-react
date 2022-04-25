# ROUTER

**Router**는 우리가 흔히 알고있는 URL에 따른 화면 이동을 할 수 있게 해준다.  
하지만 실제로 화면이동을 하지는 않고, Root 에서 `<BrowserRouter/>`자식 컴포넌트에 지정한  
요소들만 바꿔준다.

```jsx
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}/>
    </Routes>
</BrowserRouter>
```

이와같이 `path`에 지정된 `"/"`URL에선 `<App/>` 컴포넌트만 그리게 되고,  
`"expense"` URL에서는 `<Expense/>` 컴포넌트 만 그려주게 된다.  
공통으로 지정되어야 할 `Layer`나 `footer`는 

```jsx
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}/>
    </Routes>
    <Layer /> <!-- 하단부에 지정해주면 URL이 변경되어도 항상 존재 -->
</BrowserRouter>
```

