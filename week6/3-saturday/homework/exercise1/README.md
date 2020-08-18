# Homework Exercise 1
Chain multiple promises together to mimic the safety checks the are processed before a rocket launch.

## Requirements
The following safety checks have to successfully pass inspection before the countdown begins. They must occur in this order and the time that each one takes to verify is also given.
1. Fuel is primed, 3 seconds
2. Engines are stabilized, 2 seconds
3. Exhaust system fans are running, 2.5 seconds
4. Doors are secured, 1.5 seconds
5. Electronic systems are online, 4 seconds
Create a _Launch Rocket_ button that, when clicked, checks each of these steps in order and for the duration given above. In the UI, show a message that corresponds to the process currently underway. For example, _Checking that the fuel is primed..._, followed by _Checking that engines are stabilized..._, etc...

After the final step is completed, the last message to appear is _All checks have passed. Countdown my begin._
