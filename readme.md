# Charextra
Extra chars for Node.js and Typescript.  
[github repository](http://github.com/sjc0910/charextra)  
[Main page](http://sjc0910.github.io/charextra)  
[NPM](http://www.npmjs.com/charextra)
# How to use?
Install:
```
npm i charextra
```
Pattern:
```javascript
charextra.<symbol name>
```
For example:
```javascript
const charextra = require('charextra')
const log = console.log
log(charextra.check)
```
Run it and you'll see a green tick (In fact, it's a green square root symbol)  
# Support charactors
This package only supports few charactors, but I'll add more in the future.
|symbol name|charactor|
|-|-|
|sqrt|A square root symbol|
|check|A green tick(green square root symbol)|
|X|A red 'X'|
|failed|The same as above|
|invaild|The same as above|
|happy|:-)|
|sad|:-(|
|laugh|:-D|
|fatal|A bold red string "FATAL"|
|error|A red string "ERROR"|
|warn|A yellow string "WARN"|
|info|A green string "INFO"|
|copyright|The symbol ©|
|registry|The symbol ®|
|block|A block with black filling|
|square|A square with black filling|
|square_without_filling|A square without filling|
|swf|The same as above|
|TM|The symbol ™|  

<br>
Do you have any other good idea? Send to my email sjc.0910@qq.com!