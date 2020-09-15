# Modules in NodeJS

## Require Statements

When you're coding a website and you want to use someone else's library of code, you need to use a `<script src="path/to/library"></script>` tag. However, in NodeJS programs we don't have access to a HTML file, so `<script>` tags aren't an option!

That's where `require('path/to/library')` statements come in. They essentially do the same work as a script tag - they find the file in question, execute it, and return a pointer to the "module" it just loaded.

```
var myModule = require('./modules/addNumbers.js');
```

Let's try some exercises to get us comfortable with require() statements. Each exercise below has a corresponding folder in this repository.

1) Write an run a program that requires all 3 files in this folder. When you run your program, you should see 3 separate strings logged to the console.
	- This should prove that your require() statments will execute the code within each file, one by one.
2) Write and run a program that requires all 3 files in this folder. Have your program console.log() the values that get returned by each require() statement.
3) Write and run a program that requires "array.js". "array.js" will provide an array to your program. Loop through the array and log its elements.
4) Write and run a program that requires "add.js". "add.js" will provide a function that returns the sum of two parameters. Use that function to console log 1+1, 200+100, and 123 + 321;
5) Write and run a program that requres "dog.js", "cat.js", and "randomValue.js". "dog.js" will provide your program with a picture of a dog. "cat.js" will provide your program with a picture of a cat. "randomValue.js" will provide your program with a function that takes two parameters and randomly returns one of them. Use these modules to randomly log a dog or cat to the console each time you run your program.

See, modules aren't really that complicated! When a module is required, it will run its code and return some value. It's up to you what to do with that value.

## Node's built in modules

I admit, those first exercises were a bit silly, so let's use require statements to utilize some of Node's built in modules. You'll notice that you don't need to provide a full file path to these modules - you just need to pass in the name of the module!
```
var fs = require('fs');
```
Try the exercises below. (These exercises don't have corresponding folders in this repository)

1) Write a program that uses the 'os' module to console log the amount of free memory on your computer
https://www.w3schools.com/nodejs/ref_os.asp
2) Write a program that uses the 'dns' module to console log the IP address of a given URL (pass a URL as an argument to your program)
https://www.w3schools.com/nodejs/ref_dns.asp
3) Use the "timers" module to write a program that logs "tic" and "tock" every second
https://www.w3schools.com/nodejs/ref_timers.asp


## Writing your own modules

If you want to write your own module, all you need to do is write an "export" line at the bottom of your file:

```
// file1.js
module.exports = 3;

// file2.js
var variable = "hi";
variable = "hi".repeat(10);
console.log("You can write whatever code you want in a module!");
console.log("Just make sure to export something at the bottom of the file");
module.exports = variable;

// file3.js
module.exports = {
	foo: "bar",
	otherFoo: "otherBar"
}

// file4.js
module.exports = function() {
	return "someValue"
}
```
You can have your module export any type of JavaScript value! `module.exports` behaves similarly to `return` statements.

Here's another way to think about it. The value on the right hand side of `module.exports =` gets passed to the variable on the left hand side of `= require('./some/file')`

```
// foo.js
module.exports = "this is a value";

// bar.js
var foo = require('./foo.js');
console.log(foo); // "this is a value"
```

1) Write a file that exports the number three. Write a file that exports the number five. Write a program that requires those files and console logs the sum of three and five
2) Write a file named "hello.js" that exports the string 'Hello'. Write another file named "world.js" that requires "hello.js", appends ' World' to that value and exports the new string. Write a third file named "helloworld.js" that requires "world.js" and console logs its value. You should see "Hello World" logged in your console.
3) Write a file named russianDoll.js that defines this variable below and exports it. Write another file that requires russianDoll.js and uses a loop that iterates through the doll, console logging every "value" along the way.
```
var russionDoll = {
	value: "Big Doll",
	child: {
		value: "Medium Doll",
		child: {
			value: "Small Doll",
			child: {
				value: "Tiny Doll"
			}
		}
	}
}
```

## Circular Dependencies

Now that you're getting the hang of modules, you should be aware of "circular dependencies". It's possible for two files to require each other:

```
// file1.js
var file2 = require('./file2.js);
console.log("The value I pulled from file2.js is " + file2);
module.exports = "FOO";

// file2.js
var file1 = require('./file1.js);
console.log("The value I pulled from file1.js is " + file1);
module.exports = "BAR";
```

Node does its best to handle this situation. Let's look at what happens when you try to run file1.js in the example above: 
1) Code execution begins in file1.js
2) Node sees the require() statement on line 1, and checks to see if file2.js has been run yet
3) Since file2.js hasn't been run yet, Node runs file2.js 
4) Node sees the require() statement on line 1 of file2.js, and checks to see if file1.js has been run yet
5) Since file1.js is currently running, Node assumes file1's export has been cached and tries to retrieve it
6) file2.js continues running, console logging the value it required and exporting "BAR" at the end
7) file1.js resumes running, console logging the value it required and exporting "FOO" at the end

Node does an ok job of handling this situation - instead of executing these files over and over in an infinite loop, it first checks to see if a file has been executed yet in the currently running process. Instead of rerunning a file, it'll grab its exported value from a cache. Unfortunately in step 5 of the scenario above, file1 hasn't exported anything to the cache yet! The require() statement will return {} instead of "FOO" as a failsafe.

So, instead of logging what we expected:
```
The value I pulled from file1.js is FOO
The value I pulled from file2.js is BAR
```

The following gets logged instead:
```
The value I pulled from file1.js is [object Object]
The value I pulled from file2.js is BAR
```



1) The example above is a circular dependency with two files `file1.js -> file2.js -> file1.js`. Try to code a circular dependency with three files (with the same console.logs as above) and see what gets logged to the screen. 
`file1.js -> file2.js -> file3.js -> file1.js`


## CHALLENGE PROBLEM:

Write a module named "calculator.js". Have it export an object with four keys, "add", "subtract", "multiply", and "divide". Each of these keys should point to a function that implements the given arithmetic operator.

Test your module by writing another file that requires your calculator and uses the arithmetic functions you implemented.
