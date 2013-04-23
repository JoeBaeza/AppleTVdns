atv.config =
{ 
    "doesJavaScriptLoadRoot": true,
};

atv.onAppEntry = function()
{
    atv.loadURL('http://trailers.apple.com/index.xml');
}
