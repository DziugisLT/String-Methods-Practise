# String-Methods-Practise

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a `textarea` inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

**Test data (pasted to `textarea`, including spaces):**

underscore_case<br/>
&nbsp;first_name<br/>
Some_Variable<br/>
&nbsp;calculate_AGE<br/>
delayed_departure<br/>

<b>Should produce this output (5 separate `console.log` outputs):</b>

underscoreCase&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅<br/>
firstName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅✅<br/>
someVariable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅✅✅<br/>
calculateAge&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅✅✅✅<br/>
delayedDeparture&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅✅✅✅✅<br/>
