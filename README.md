## Installation

```
$ npm install
```

## Start dev server

```
$ npm run dev
```

## Build for production

```
$ npm run build
```

## Testing

```
$ npm run test
$ npm run test:watch
```

## Mockup JSON

Create `.json` files in folder `/JSONMockup` for mockup data from api response

```
/JSONMockup
|-- posts.json
|-- news.json
```

## Setup Fetch API

### Handle service error

Handle is service error `/src/api/createFetcher/isServiceError.js`

### Create error format

Create error message format at `/src/api/createFetcher/createErrorMessage.js`

### Create fetcher

You can use `axios` options [see](https://github.com/axios/axios)

Create Fetch function `/src/api/fetchers.js`

```js
import createFetcher from './createFetcher';

const fetchPostList = () =>
  createFetcher({
    useMock: true,
    jsonMock: 'posts.json', // from /JSONMockup
    delay: 0,
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts'
  });
```

## Utilities

### connectRedux

Auto `bindActionCreators` and actions will be added in props `props.actions`

```js
import { connectRedux } from '../utils';

const mapState = state => {};
const actions = {};

export default connectRedux(mapState, actions)(Component);
```

### createActionWithFetching

Use with Redux action to fetching data without handle `try/catch`

You can custom UI for `loading`, `success` and `catch error` in `/src/utils/createActionWithFetching.js`

```js
import { createActionWithFetching } from '../utils';
import { fetchPostList } from '../api/fetchers';

const getPostList = () => {
  const callAction = async dispatch => {
    const params = {};
    const { data } = await fetchPostList(params);

    // dispatch data
  };

  return createActionWithFetching({
    loadingMessage: 'Fetching data..',
    successMessage: 'Success',
    callAction
  });
};

export { getPostList };
```

### history

You can use any `history` navigate to change the current location [see](https://www.npmjs.com/package/history#navigation)

```js
import { history } from '../utils';
history.push('/login');
```

## Hooks for React component

### useStateLoading

```js
import { useStateLoading } from '../hooks';

const Component = props => {
  const { postLoading, fetchWithLoading } = useStateLoading({
    stateNames: ['postLoading', 'other']
  });

  useEffect(() => {
    fetchWithLoading({
      name: 'postLoading',
      fetcher: () => props.dispatch(getPostList())
    });
  }, []);

  return <Fragment>{postLoading ? <div>{'Loading post ui'}</div> : 'Posts'}</Fragment>;
};
```
