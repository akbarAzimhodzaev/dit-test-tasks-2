# dit-test-tasks-2

##Task 1

 Write a function in JavaScript that will strip quote characters from a string. An example usage of this function would be ensuring that a string which will be quoted in an article (such as in an editorial sidebar or testimonial block on a page) does not contain quotes in the string itself.
 
###Solution

Code in the /task-1 directory

##Task 2

Implement a React Tooltip component such that given any target element in a page, it will render a tooltip panel relative to the target element. Ideally the component should include some control over where the tooltip panel is positioned and what triggers it to open/close along with any other features you think would be useful for a tooltip to have.

### Solution

There are React project in the /task-2 directory

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can see tooltip use cases.

In the `src/components/Tooltip` directory you can review Tooltip components code.

#### Example

```javascript
<Tooltip content="Tooltip text" placement="top">
    <Button>Click Me</Button>
</Tooltip>
```

### Available options
`placement="top|right|bottom|left"` - Tooltip direction, default value - `top`

`content="Some text"` - Tooltip content

`triggers="hover click"` - Tooltip trigger event, default - `hover`


