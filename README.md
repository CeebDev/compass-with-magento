# How to use Gulp and Compass with Magento

### 1. Install [Node.js](https://nodejs.org/en/) on your Computer

### 2. Go to Base Path
```
$ cd ~
```

### 3. Check update of Ruby
```
$ sudo gem update --system
```

### 4. Check [this website](https://markgoodyear.com/2014/01/getting-started-with-gulp/) and install gulp and compass
```

$ sudo npm install gulp-watch gulp-compass path gulp-imagemin del --save-dev;
```

### 5. Copy and configure Gulpfile

Go to your project, copy the Gulpfile to the base of project.
Change the package name in the Gulpfile at line 2.
Create a folder in the same folder of your folder css / images etc...
Name this folder "images_dev"


### 6. How it work ?

Launch "$ gulp" commande on project folder.

When you save a .scss file, it compile css to the .css folder and a mapping in the same folder.
Now, you can see in your browser inspection the exact line and the .scss file of the generated code.

If you want to add an image in your image folder:
Drop your file into the 'images_dev' folder.
Gulp compress image, drop the minified image in the real 'images' folder and clean automatically the 'images_dev' folder.

### 7. FAQ

- Gulp don't install properly, why ?
-- Try to install Ruby Dev Kit.

- Gulp stop compile when I save, why ?
-- Try to Ctrl + C and rerun '$ gulp' command
