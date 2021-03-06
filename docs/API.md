# API reference of :

An exception to throw when the Pigalle context is missing. 

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_undefined-context-error"></a>

### undefined-context-error
An exception to throw when the Pigalle context is missing.

**Example**  
```js
const {UndefinedContextError} = require('@pigalle/errors.undefined-context')

if (!context) {
  throw UndefinedContextError.factory()
}
```

* [undefined-context-error](#module_undefined-context-error)
    * [~UndefinedContextError](#module_undefined-context-error..UndefinedContextError)
        * [new UndefinedContextError(...args)](#new_module_undefined-context-error..UndefinedContextError_new)

<a name="module_undefined-context-error..UndefinedContextError"></a>

#### undefined-context-error~UndefinedContextError
Exception class to raise when missing Pigalle context.

**Kind**: inner class of [<code>undefined-context-error</code>](#module_undefined-context-error)  
**Access**: public  
<a name="new_module_undefined-context-error..UndefinedContextError_new"></a>

##### new UndefinedContextError(...args)
Create a new instance of {UndefinedContextError}


| Param |
| --- |
| ...args | 

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Wed, 28 Feb 2018 13:14:49 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
