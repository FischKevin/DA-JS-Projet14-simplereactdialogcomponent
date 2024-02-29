# simplereactdialogcomponent

A React component to render a simple dialog component.

## Install

```bash
npm i simplereactdialogcomponent
```

## Install dependencies

```bash
npm install react@^18.2.55 react-dom@^18.2.19 prop-types@^15.8.1
```

## Dialog component

### Properties

| Prop    | Type     | Description                                                                                       |
| ------- | -------- | ------------------------------------------------------------------------------------------------- |
| isOpen  | Boolean  | Show if the dialog component is open or closed                                                    |
| onClose | Function | Callback to close the dialog component                                                            |
| content | Object   | Object containing `title` and `buttonText` keys for the dialog's title and the close button text. |

### Usage Examples

```jsx
<Dialog
  isOpen={isOpen}
  onClose={handleClose}
  content={{ title: 'Dialog Title', buttonText: 'Close' }}
/>
```

Example usage within a React component:

```jsx
import React, { useState } from 'react';
import Dialog from 'simplereactdialogcomponent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <button onClick={handleOpen}>Open Dialog</button>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        content={{ title: 'Dialog Title', buttonText: 'Close' }}
      />
    </div>
  );
}
```

You can override the default style by using the style prop:

```jsx
<Dialog
  style={{ backgroundColor: 'lightblue' }}
  isOpen={isOpen}
  onClose={handleClose}
  content={content}
/>
```

## Accessibility

The dialog component respects accessibility best practices, such as trapping focus within the dialog component when open and returning focus to the last focused element upon closure.

Additionally, the dialog component can be closed by:

- clicking on the dialog component close button
- clicking outside of the dialog component
- navigate to the close button using Tab key, and pressing Enter key

## Dependencies

```json
"peerDependencies": {
    "react": "^18.2.55",
    "react-dom": "^18.2.19",
    "prop-types": "^15.8.1"
}
```

## License

This component is distributed under MIT license.
