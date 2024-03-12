// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
vscode.window.showInformationMessage('Wecome to clean artchiture extenchion');
function createFolder(folderName){
	var path=__dirname+folderName;
	try{
		if(!fs.existsSync(path)){
			fs.mkdirSync(path);
			return 'Done >>>';
		}
		else{
			return 'Folder Exisit >>>';
		}
	}catch(err){
		return err;
	}
	
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	let disposable = vscode.commands.registerCommand('myfirstextenchion.create project strucher', function () {
		var state='Done >>>';
		
		createFolder('/lib/')
		createFolder('/lib/app')
		//config folder
		createFolder('/lib/app/config')
		createFolder('/lib/app/config/themes')
		createFolder('/lib/app/config/routes')

		//core folder
		createFolder('/lib/')
		createFolder('/lib/app')
		createFolder('/lib/app/core')
		createFolder('/lib/app/core/utile')
		createFolder('/lib/app/core/usecases')
		createFolder('/lib/app/core/resources')
		createFolder('/lib/app/core/errors')
		createFolder('/lib/app/core/widgets')


		//function
		createFolder('/lib/app/features')

		
		
	
	
	

	
		vscode.window.showInformationMessage(state);
	});
	let disposable_1 = vscode.commands.registerCommand('myfirstextenchion.create project injection container file', function () {
		//Injection_container file
	//	fs.open(__dirname+'/app/injection_container.dart','w',function(){});


		
	// 	fs.mkdir(__dirname+'/app/features/featur_name/',function(err){
	
	// 		console.log(err)
	// 	});
	// 	//data
	// fs.mkdir(__dirname+'/app/features/featur_name/data/',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/data/data_sources',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/data/modules',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/data/repositories',function(err){
	
	// 	console.log(err)
	// });
	// //domain
	// fs.mkdir(__dirname+'/app/features/featur_name/domain/',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/domain/entities',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/domain/repositories',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/domain/usecases',function(err){
	
	// 	console.log(err)
	// });
	// //presentation
	// fs.mkdir(__dirname+'/app/features/featur_name/presentation/',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/presentation/pages',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/presentation/widgets',function(err){
	
	// 	console.log(err)
	// });
	// fs.mkdir(__dirname+'/app/features/featur_name/presentation/stat_managment',function(err){
	
	// 	console.log(err)
	// });
		

		vscode.window.showInformationMessage('Done >>>');
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
