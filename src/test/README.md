# Jest Test

## Jest

- **describe**
  > `describe('대제목', () => func...)`  
    내부에 `it` 나 `test` 등의 하위테스트를 추가할 수 있다.

  
- **test**



- **it**
  - `skip`
    > `it.skip('could be skipped', () => func...)`  
        Skip 될 테스트함수  
  
## testing-library

- `Queries`
  > 몇가지의 쿼리가 존재 ( `get`, `find`, `query` )  
  이들의 차이점은 컴포넌트를 찾지 못했을 때 에러를 던질지, `Promise` 객체를 던져 다시 시도할지로 구분된다.  
  
  - `getByRole` : 
  - `getByLabelText` : 
  - `getByText` : 반응형이 아닌 `div`, `span`, `paragraph` 를 찾는데 주로 사용
  - `getByDisplayValue` : 

- `waitFor`
  - 뭘 wait 하냐

## User-Event

> `@testing-library/user-event` 사용

- 특정 버튼 클릭 후 생성되는 동적태그는 `async/await` 을 통해 불러오기 가능
    ```javascript
    it('Show List Test', async () => {
        const { debug } = render(<App/ >);
        const listButton = screen.getByText('Assignments');

        userEvent.click(listButton);

        await waitFor(() => {
        expect(screen.getByPlaceholderText('Add Assignment...'));
        
        debug();
        })
    });
    ```
