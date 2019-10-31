# Mui-Prompt

> Awesome and simple prompt components

with mui-prompt you can easily ask user for confirmation before executing an important action

<img src="icon.png" alt="drawing" width="75"/>

## Demo

### Dialog

<img src="dialog.png" alt="drawing" />

### Inline

<img src="inline.gif" alt="drawing" />

#### [Demo](http://nikandlv.github.io/mui-prompt)

## Install it

```console
nikandlv@nikandlv.ir:~$ npm i mui-prompt
```

## Import it

```jsx
import Prompt from "mui-prompt";
```

## Dialog

### render the prompt view

```jsx
export default class InlineDemo extends React.Component {
  render() {
    function simplePrompt() {
      Prompt.ask("simple", {
        callback: status => {
          console.log(status);
        },
      });
    }

    return (
      <div>
        <Prompt.View />
        <button onClick={simplePrompt}>click me!</button>
      </div>
    );
  }
}
```

### API

Prompt first parameter is the `key` of dialog and second parameter is the configuration which can be these values

```jsx
const config = {
  callback: callback,
  title: "Are you sure?",
  body: "This action can not be undone!",
  cancel: "Cancel",
  continue: "Continue",
  nested: false,
};
```

#### Note: nested should be applied only on the parents and not the last nested item
