# Context API란?

- 먼저 Context 객체를 생성한 후에, 해당 객체를 통해 데이터의 공유 범위와, 데이터를 설정함.

# useLayoutEffect란?

- ueseEffect훅과 차이점은 컴포넌트가 그려지기 전에 동기적으로 Effect 함수의 로직이 실행됨.

# Redux ToolKit이란?

- Redux의 복잡한 설정과 보일러플레이트 코드를 줄이기 위해 만들어진 Redux의 상위 래퍼 라이브러리임.

# Redux Store란?

- Redux ToolKit에서 앱의 상태를 저장하고 관리하는 중앙 저장소 역할을 함.

# Redux Slice란?

- Redux ToolKit에서 상태, 액션 생성자, 리듀서를 한 파일에서 효율적으로 관리할 수 있게 해줌.

# Redux Thunk란?

- Redux ToolKit에서 비동기적으로 상태를 변경하고 싶을 때 사용함.

# zustand란?

- 작고 간단하면서도 강력한 리액트 상태 관리 라이브러리임.
- Context API나 Redux ToolKit보다 더 적은 코드와 직관적인 방식으로 상태를 관리할 수 있음.

# middleware

- 미들웨어: zustand의 기능 중 하나로, 스토어의 동작을 확장하거나 가로채서 제어할 수 있도록 도와주는 기능
- persist: 로컬 스토리지나, 세션 스토리지같은 작업을 도와주는 기능을 하는 미들웨어
- subscribeWithSeclector: 특정 상태가 변경될 때를 감지해서 특정 로직을 수행할 수 있는 구독 기능을 사용할 수 있게 해주는 미들웨어
- immer: 자동으로 불변성을 처리해주는 미들웨어
