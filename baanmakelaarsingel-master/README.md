# baanmakelaarsingel
Development repository for the merge of two different sites. 

Implemented Grunt to be able to automatically concate files, plus there is a SASS compiler. Everything gets thrown into the 'build' directory. 

## Guide for use
From here on, I will describe the steps you need to take to get the enviroment up and running. 

### Install Node.js & git for Windows
Just install nodejs from the official site. For git you'll need to get a project version of git that is specially made for windows. Don't bother getting the desktop version of git, since it will not add a path to your system. Just click next on everything and get it done. 

### Get a clone of the repository
Get in the directory you want to work in, and open it in CMD.
After that just copy paste this:
`git clone https://github.com/khualu/baanmakelaarsingel.git`

It should get a copy of all the files in the wanted/designated directory.

### Install packages and Grunt
For this part, you'll need to install all the necessary modules and npm packages.

first run, `npm install`

then run, `npm install -g grunt-cli`
This will create a global install of the grunt CLI, so it will be available for every user on the pc.
This command makes the use of the 'grunt' command available in the cli. 

then run `npm install -s grunt`
This will install the package for grunt.

### Now you're ready to go
Everything should work now. 

