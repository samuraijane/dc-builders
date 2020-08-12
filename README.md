# Digital Crafts Flex Class Wiki

This repository is for students of the DC online flex cohort which commenced in July 2020. It stores student-contributed answers to homework and in-class exercises. It also showcases group projects which launch every two weeks.

## Branch Naming Conventions
### Personal and Class Branches – for class and homework exercises
With the exception of group projects, all your work will be found on either a personal or class branch associated with your first name:
  * `<yourFirstName>/personal`
  This branch is where you will store your own code for the duration of this class. You are welcome to push your personal code to the repo as a way to have a backup but your personal work will not be merged into `master` so do not submit any PRs for it.
  * `<yourFirstName>/class`
  This branch is where you will commit the code to be shared with the rest of the class. You will know what to put here when the instructor assigns a specific task to you and will let you know that it will be shared. You should submit PRs for this branch as soon as they are ready.
### Group Branches – for hackathons which begin every two weeks
Because groups change every two weeks, you will have multiple branches related to them. For example, let's say you are assigned to a group called _DigitalFalcons_. You and your colleagues will have this main group branch so that you can all push to it (in this way, it's very similar to a `master` branch) but each of you will also have a separate branch where you work independently and submit PRs for your main group branch. After you are assigned to a new group during the next two-week period, you will have a new main group branch (e.g. _PenguinsAreDope_) that is shared among your new colleagues along with a branch you will use to submit PRs to this latest group branch. Your branch naming related to groups should follow the pattern below.
  * `group/<yourGroupName>`
  This is the main branch for your group and it works in the same way that you are already used to with a `master` branch.
  * `<yourGroupName>/<yourFirstName>`
  This is where you will work independently from the other members of your group. You should periodically submit PRs for this branch to be merged into the main group branch.

### PR Guidelines
1. All PRs submitted to `master` should be tagged with @selenestica.
2. Additionally, tag the instructor that is teaching for the week, either @samuraijane or @DanStough.
3. Only the DIR or the instructor will approve PRs into `master`.
4. For PRs into `<yourGroupName>`, each group should decide what works best for them. Designating one person to do this has its advantages but so does allowing everyone in the group to merge. There is no right or wrong way– discuss and create the steps that work best for your group.
5. PRs to merge `<yourGroupName>` into `master` should be made regularly. Again this is up for the group to decide but please do this at least twice per week so we can get a sense of where the group is and how we can help.

### General Protocols
1. Always make sure that you have the latest code before creating a new branch.
2. It is always a good idea to pull then merge the main branch (e.g. `master` or `<yourGroupName>`) into the branch where you are working at the beginning of each day. This will make resolving conflicts easier because you will catch them sooner and before they can aggregate into a long list of issues.
3. Take a look at the git cheatsheet in this repo. Feel free to submit PRs to improve it.
