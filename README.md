#PixKit - CodeKit Kickoff Stack

PixKit is a Codekit kickoff stack with Bootstrap 3, SASS, jQuery, jQuery.mMenu

##Installation

Install PixKit either by [direct download], or git: 

	git clone https://github.com/PixLandMedia/PixKit.git


##Demo

[demo page]


## Compiled files

The following files are automatically compiled by PixKit and should not be edited directly.
- css/style.min.css
- css/style.min.map
- js/app.min.js

##Build Files:

All Build files reside in the **build** directory

## KITS & HTMLS

The project use Codekit's kit language ( [more info to Kit] )
This allows you to build html includes (such as header/footer, etc.) without the need to use a dynamic language. 
All Production HTML files reside in the **html** folder. As mentioned, it is best in most circumstances to not edit these files, since they are compiled from other sources.

## Included libraries:

All third-party library files reside in the **build/bower_components** directory.
The library's js files include the **build/js/app.js** file. For example:

    // @codekit-prepend "../bower_components/jquery/dist/jquery.min.js"

The library's sass files include the **build/sass/style.scss** file. For example: 

    @import '../bower_components/bootstrap-sass-official/assets/stylesheets/_bootstrap';

The library's css files copy the **build/sass/layouts** or **build/sass/modules**. You should change the file's extension .scss for example: 

    /build/bower_components/jQuery.mmenu/dist/css/jquery.mmenu.all.css.css

to

    /build/sass/layouts/_mmenu.scss



##Contact

**PixLand Media**

web: [www.pixlandmedia.com]

email: [support@pixlandmedia.com]


**Tamás Németh**

[nemeth@pixlandmedia.com]


## Project Licensing
 
**The MIT License (MIT)**

Copyright (c) 2015 PixLand Media

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## Changelog


**04.21.15 v0.1.4:**
- ADDED /build/kits/partials/menu.kit
- ADDED jQuery.mMenu
- ADDED .gitignore
- REMOVED Slidebars.js
- UPDATED Bootstrap 3.3.4
- UPDATED Font Awesome 4.3.0


**01.20.15 v0.1.3:**
- CHANGED navigation links
- REMOVED index.html
- ADDED /html/index.html

**01.18.15 v0.1.2:**

- UPDATED README.md


**01.18.15 v0.1.1:**

- UPDATED README.md


**01.18.15 v0.1.0:**

- Initial Release
- ADDED Application structure
- ADDED Bootstrap 3.3.1
- ADDED Font Awesome 4.2.0
- ADDED jQuery 2.1.3
- ADDED normalize-css 3.0.2
- ADDED Slidebars.js 0.10.2 





[www.pixlandmedia.com]: http://www.pixlandmedia.com
[support@pixlandmedia.com]: mailto:support@pixlandmedia.com
[nemeth@pixlandmedia.com]: mailto:nemeth@pixlandmedia.com
[direct download]: https://github.com/PixLandMedia/PixKit/archive/master.zip
[more info to Kit]: http://incident57.com/codekit/kit.php
[demo page]: http://kickoff.pixlandmedia.com/PixKit/html/index.html