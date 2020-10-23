1. Download and install WAMPServer form https://www.wampserver.com/en/

2. Start WAMPServer
In case if you get error: "WampServer: php-win.exe The program can't start because MSVCR110.dll is missing", you need to install Visual C++ Redistributable for Visual Studio 2012:
http://www.microsoft.com/en-us/download/details.aspx?id=30679

3. Make sure that Wampmanager icon is green in the notification area at the bottom right of the screen.

4. Copy the files from this project into the new folder "{wamp installation folder}\www\form_with_validation\" (final folder name can be changed if necessary)

5. Open the application in your browser using URL: http://localhost/form_with_validation/index.html