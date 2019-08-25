const fs = require('fs')
const adm_zip = require('adm-zip')
// 目前unzip库似乎与其他库有冲突，所以使用adm_zip库
// const unzip = require('unzip')
const path_package  = require('path')
const electron = require('electron')
const path = require('path')
const url = require('url')

let win

/**
 * 删除一个文件夹下所有的内容
 * deleteall("./dir") 将文件夹传入即可
 * @param {*} path 
 */
function deleteall(path) {
	var files = [];
	if(fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) { // recurse
				deleteall(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

/**
 * 返回给定文件夹中的第一个后缀为svf的文件路径
 * @param {*} path 
 */
function find_first_svf_file(path) {
	var files = [];
	if(fs.existsSync(path)) {
        files = fs.readdirSync(path);
        var result = "";
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if(!(fs.statSync(curPath).isDirectory())) { 
                // 判断当前文件后缀是否为svf,如果是，则返回
                let extension = curPath.split('.').pop().toLocaleLowerCase();
                if (extension=="svf"){
                    if (result==""){
                        result = curPath;
                    }
                }
			} else { // 如果是文件夹,则递归进入
                cur_result = find_first_svf_file(curPath);
                if (cur_result!="" && result==""){
                    result = cur_result;
                }
			}
        });
        return result;
    }
    return "";
};

//Url of viewer.html
const urlViewer = url.format({
    pathname: path.join(__dirname, 'viewer.html'),
    protocol: 'file:',
    slashes: true
});

//Url of help.html
const urlHelp = url.format({
    pathname: path.join(__dirname, 'help.html'),
    protocol: 'file:',
    slashes: true
})

//Generate url to a forge model
function getUrl(filePath) {
    fileUrl = 'file://' + filePath.replace(/\\/g, "/");
    return urlViewer + "#" + encodeURI(fileUrl)
}

//create main window
function createWindow() {
    win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //Disable web security policy 
            //in order to fetch model file via file protocol
            webSecurity: false
        },
        icon: __dirname + '/assets/icon.ico'
    });
    //Build main menu for window
    win.setMenu(new electron.Menu.buildFromTemplate([{
        label: "File",
        submenu: [{
            label: "Open Model",
            click: () => {
                // let filePaths = electron.dialog.showOpenDialog(win, {
                //     title: "Select SVF or F2D file",
                //     filters: [
                //         { name: "Forge Viewer Model", extensions: ['svf', 'f2d'] }
                //     ]
                // });
                // if (filePaths && filePaths[0]) {
                //     win.loadURL(getUrl(filePaths[0]));
                // }


                electron.dialog.showOpenDialog({
                    title: "Select SVF or F2D file",
                    filters: [
                        { name: "Forge Viewer Model", extensions: ['svf', 'f2d'] },
                        { name: "Forge Viewer Model Zip File", extensions: ['zip', 'svfzip'] }
                    ]
                }, (files) => {
                    if (files && files[0]) {
                        let filePath = files[0]
                        let extension = filePath.split('.').pop().toLocaleLowerCase();
                        if (extension=="zip" || extension=="svfzip" ){
                            //先将临时文件夹删除
                            let extractDir = "svf_extract"
                            let extractDirPath = "./"+extractDir
                            deleteall(extractDirPath)
                            //创建临时文件夹
                            fs.mkdir(extractDir, 0777, function(err){
                                if(err){
                                 console.log(err);
                                }
                            })
                            //然后将压缩文件解压到临时文件夹
                            var unzip = new adm_zip(filePath);  
                            unzip.extractAllTo(extractDirPath, /*overwrite*/true);
                            // fs.createReadStream(filePath).pipe(unzip.Extract({ path: extractDirPath }));
                            //打开文件
                            // let svfPath = extractDirPath+"/3d.svf"
                            let svfPath = find_first_svf_file(extractDirPath) 
                            if (svfPath!=""){
                                let the_url = getUrl(path_package.resolve(svfPath))
                                console.log(the_url)
                                win.loadURL(the_url);
                            }
                        }
                        else{
                            let the_url = getUrl(filePath)
                            console.log(the_url)
                            win.loadURL(the_url);
                        }
                    }
                })

            }
        },
        {
            label: "Reload Model",
            click: () => {
                win.reload();
            }
        },
        {
            label: "Close Model",
            click: () => {
                console.log(urlHelp);
                win.loadURL(urlHelp);
            }
        },
        {
            label: "Quit",
            click: () => {
                electron.app.quit();
            }
        }
        ]
    }, {
        label: "Tools",
        submenu: [{
            label: "Open Developing Tools",
            click: () => {
                win.webContents.openDevTools()
            }
        },{
            label: "Delete Cache Folder",
            click: () => {
                let extractDir = "svf_extract";
                let extractDirPath = "./"+extractDir;
                deleteall(extractDirPath);
            }
        }]
    }, {
        label: "About",
        submenu: [{
            label: "AutoDesk SVF Viewer by LiNan"
        }, {
            label: "Home",
            click: () => {
                electron.shell.openExternal("https://github.com/saluzi/linan");
            }
        }]
    }]));
    //handle command line args
    if (process.argv[1]) {
        // console.log(getUrl(process.argv[1]));
        // win.loadURL(getUrl(process.argv[1]));
        win.loadURL(urlHelp)
    } else {
        win.loadURL(urlHelp)
    }

    win.on('closed', () => {
        win = null;
    })
}

electron.app.on('ready', createWindow)

electron.app.on('window-all-closed', () => {
    electron.app.quit()
})