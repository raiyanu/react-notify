# notifymate

`notifymate` is a simple React notification library that allows you to display notifications in your application.

## Installation

Install the package using npm or yarn:

```bash
npm install notifymate
# or
yarn add notifymate
```

## Usage

To use `notifymate`, you need to wrap your app component with the `NotificationProvider` in your main file (e.g., `main.jsx` or `index.jsx`).

### Wrapping the App Component

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationProvider } from 'notifymate';
import App from './App';

ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  document.getElementById('root')
);
```

### Using the Notification Hook

Once you have wrapped your app component with the `NotificationProvider`, you can use the `useNotify` hook to trigger notifications from anywhere in your component tree.

```jsx
import React from 'react';
import { useNotify } from 'notifymate';

const MyComponent = () => {
  const { alert } = useNotify();

  const handleClick = () => {
    alert('This is a notification!', 'success');
  };

  return (
    <button onClick={handleClick}>
      Show Notification
    </button>
  );
};

export default MyComponent;
```

### Notification Types

You can specify different types of notifications by passing the type as the second argument to the `alert` function. The default type is `info`. Available types are:

- `info`
- `success`
- `warning`
- `error`

### Customizing Timeout

You can also customize the timeout duration (in milliseconds) for the notification to auto-dismiss by passing it as the third argument to the `alert` function. The default timeout is 3000 milliseconds.

```jsx
alert('This is a notification!', 'success', 5000); // Notification will auto-dismiss after 5 seconds
```

## License

This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License. To view a copy of this license, visit [http://creativecommons.org/licenses/by-nc/4.0/](http://creativecommons.org/licenses/by-nc/4.0/).
