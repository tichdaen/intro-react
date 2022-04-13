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
