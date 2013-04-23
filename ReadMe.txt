Similar projects:
https://github.com/finkdiff/ATVBrowser-script (node.js with Plex)
https://github.com/iBaa/PlexConnect (python with Plex)
http://forums.plexapp.com/index.php/topic/57831-plex-atv-think-different/page-2 (where this code is from)
https://code.google.com/p/hdweb/source/browse/#svn%2FATV
https://code.google.com/p/appletv/ 让Apple TV直接播放贵国视频
http://bbs.weiphone.com/read-htm-tid-5460032.html 劫持MLB.TV，打造自己的Apple TV本地媒体浏览器（1.3版支持SRT和连续播放）
http://bbs.weiphone.com/read-htm-tid-5136790.html [教程]Apple tv的xml\js简单文档来了

---------------------------------
Docs about Apple TV:

If you're running 5.0.2 then the location is trailers.apple.com/appletv/application.js
If you're running 5.2.1 then the location is trailers.apple.com/appletv/us/js/application.js


---------------------------------
copied from original readme

ATVBrowser - An ATV2/3 trailer app hack.

CREDITS:-
I take no credit for writing the DNS Proxy and Web server code, that was written by a guy/gal on the Weiphone BBS by the username of lionphone. I just modified the code to work for me. This is the original forum post:- http://bbs.weiphone.com/read-htm-tid-5128270.html

DISCLAIMER:- 
Standard disclaimer here, by using this code/source package you do so at your own risk. If you lose data, your computer melts, your house blows up or your current planet of residents is destroyed I take no responsibility. Basically don't blame me if anything goes wrong :)


INSTRUCTIONS:-

1. Download the ATVBrowser zip file.

2. Windows:- Unzip the package to any location you like, just keep the directory structure intact.
   Mac:-     Unzip the package to your Home folder, keep the directory structure intact.
   
3. You need two pieces of information, the IP address of the computer your running the DNS Proxy and Web server on and the DNS address of your ISP.

4. Open up the following file /ATVBrowser/atv.js and change the IP address on the second line to the IP address of your computer.

5. Open up the following file /ATVBrowser/utils.js and change the IP address on the second line to the IP address of your ISP's DNS.

6. You will need any m4v video file that will play on the ATV, it can be a iTunes store purchased file with DRM if you like.

7. Rename the video file to test.m4v and copy it into the /ATBrowser/assets directory.

Now we need to install Node.js

1. Goto www.nodejs.org/download

2. Windows:- Download and run the Windows Installer(.msi). VERY IMPORTANT!!! You need the full Windows installer and you need to reboot your computer for your PATH variable to be updated.
   Mac:-     Download and install the Mac OSX Installer(.pkg) Universal package. VERY IMPORTANT!!! You need the full installer and not just the binaries.
   
Running it all

Windows:-
1. Open a command prompt and cd into the ATVBrowser directory.
2. Type:- node atv.js then press enter.
3. If all goes well you'll get a message saying the DNS Proxy and Web server are running.

Mac:-
1. Open Terminal. The terminal should start up in your home directory.
2. Type:- cd ATVBrowser followed by enter.
3. Type:- sudo node atv.js followed by enter. You'll need to enter your user password. VERY IMPORTANT!!! You need to use sudo.
4. If all goes well you'll get a message saying the DNS Proxy and Web server are running.

Now goto Setting/General/Network on your ATV and change the DNS address to the IP address of your computer, the one you entered into atv.js.
Browse over to the Trailer app on the ATV and have fun.



******* Updated Instructions for installing node.js on Windows *******
   

