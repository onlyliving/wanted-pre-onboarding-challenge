# 과제

-   React와 History API 사용하여 SPA Router 기능 구현하기

    -   해당 주소로 진입했을 때 아래 주소에 맞는 렌더링이 되어야 함.
        -   `/` -> `root` 페이지
        -   `/about` -> `about` 페이지
    -   버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 떄 이전 페이지로 이동해야 한다.

        -   힌트) `window.onpopstate`, `window.location.pathname`, History API(`pushState`)

    -   Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같다.

    ```typescript
    ReactDOM.createRoot(container).render(
        <Router>
            <Route path="/" component={<Root />} />
            <Route path="/about" component={<About />} />
        </Router>
    );
    ```

    -   최소한의 push 기능을 가진 useRouter Hook을 작성한다.

    ```typescript
    const { push } = useRouter();
    ```

## 참고) Vite 초기 세팅

```bash
$> yarn create vite
# 실행 후 cli의 지시에 따라 react, react-ts 중 택일하여 초기 세팅할 것
```
