# Week 13 – Tuesday, Intro to SQL

## Agenda
1. Database intro
1. Install PostgreSQL
1. Create a database with psql CLI
1. Create tables with psql CLI
1. Class Exercise 1: [Tool Shed Database](./ex1/README.md)
1. Insert, retrieve, update, and delete data with psql CLI
1. Database queries
1. Class Exercise 2: [Tool Shed Database, part 2](./ex2/README.md)
1. Install Postico (Mac only) or Beekeeper Studio (mac and Windows)
1. Databases, tables, and CRUD commands with Postico

## References
1. [`Data Modeling` on the Learning Portal](https://learn.digitalcrafts.com/flex/lessons/databases/data-modeling/#learning-objectives)
1. [PostgreSQL Tutorial](https://www.postgresqltutorial.com)

## Homework
1. Complete Exercise 3: [Historical Events](./ex3/README.md)
1. JavaScripte Exercise to be determined (check back later)

### Install PostgreSQL on Mac
1. If you do not have homebrew, install it first with `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. `brew install postgresql`
1. Confirm the installation with `psql --version` or `psql -V`
1. Spin up a database server with `brew services start postgresql`
1. Interact with the Postgres shell with `psql postgres`


### Install PostgreSQL on Windows
1. Be sure you are using _Ubuntu_ or _Git Bash_ (Window's _Command Prompt_ and _Powershell_ will not work with these instructions)
1. `sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'`
1. `wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`
1. `sudo apt-get update`
1. `sudo apt-get -y install postgresql`
1. Confirm the installation with `psql --version` or `psql -V`
1. Add the installation to your `PATH` (see below for details)
1. Spin up a database server with `sudo service postgresql start`
1. Interact with the Postgres shell with `sudo -u postgres psql`

### Install Postico on Mac
1. If you do not have homebrew, install it first with `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. `brew cask install postico`
1. Verify that Postico is installed at **/Applications/Postico.app**

### Install Beekeeper on Windows
```
# Install our GPG key
wget --quiet -O - https://bintray.com/user/downloadSubjectPublicKey?username=bintray | sudo apt-key add -

# add our repo to your apt lists directory
echo "deb https://dl.bintray.com/beekeeper-studio/releases disco main" | sudo tee /etc/apt/sources.list.d/beekeeper-studio.list

# Update apt and install
sudo apt update
sudo apt install beekeeper-studio
```

### Updating your `PATH` variable
If you have not yet come across this, you will. It may seem intimidating at first but when we talk about `PATH`, we are simply telling the computer where to look for commands that we use in the command line. Both Mac and Windows have a `PATH` variable. What we do below helps Windows recognize the commands related to working with PostgreSQL.
1. On Windows, open a CLI instance and `cd ~`
2. `touch .bash_profile`
3. `vi .bash_profile`
4. Press `i` to enter _insert_ mode
5. Paste the code below. If you are looking at this at some point in the future, the **12** you see below is the version number so it will change over time and you will need to correct it to the version you are using.
```
PATH=$PATH:/usr/lib/postgresql/12/bin/
export PATH
```
6. When you are done, press `esc` to exit _insert_ mode
7. Press `:`, followed by `wq` and then press `return` or `enter` depending on your keyboard
8. You need to close the CLI and open up a new one in order for this change to take effect
