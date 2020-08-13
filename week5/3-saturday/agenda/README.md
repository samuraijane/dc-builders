# Week 5 – Saturday

## Agenda
1. `<input />`
2. input types
3. `<label>`
4. other form elements
5. input restrictions

### 1. `<input />`
* is self-closing
* does not have `innerHTML`
* takes a number of attributes such as `id`, `name`, `type`, and `value`
* needs an `id` attribute to link with `<label>`
* needs a `value` attribute in order to use it effectively in a Form

## 2. Input Types
* `checkbox`
* `email`
* `number`
* `password`
* `radio` (keep the same value for each `name` attribute that you want to group in a set of radio buttons)
* `range`
* `submit` (place inside of `<form>` in order to capture data from all other form elements at once)
* `text`

## 3. <label>
* essential for accessibility
* can wrap around `<input />` elements to be associated with them
* if not wrapping an `<input />`, add a `for` attribute with a value that equals the `id` of the `<input />` in order to associate it with the input

## 4. Other Form Elements
* `<fieldset>` (logically groups a number of form elements, essential for accessibility)
* `<form>` (contains the entire form, include an `onsubmit` method if a submit input is part of the form)
* `<legend>` (as a child of `<fieldset>`, use it to provide a caption for the `<fieldset>`, essential for accessibility)
* `<option>` (nest multiple options inside of a `<select>` to populate a dropdown menu, each one needs a unique `value` attribute)
* `<select>` (use this to create dropdown menus, place multiple `<option>` elements within it)
* `<textarea>` (allows for multiple lines of text)

## 5. Input Restrictions
These change the out-of-the-box behavior of an `<input />` element in some way
* checked
* disabled
* max
* min
* required
* value
