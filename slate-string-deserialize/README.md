# Slate String Deserialize

Deserialiaze plain string to slate value. Currently target slate > 0.5x version.

## Example

more example can be found on `__tests__` directory

```
import deserialize from 'slate-string-deserialize'

deserialize('hello world')
/*
[{type: 'paragraph', children: [{text: 'lorem ipsum dollor'}]}]
*/
```
