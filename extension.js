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
async function getFeatureName(){
	var featur_name=await vscode.window.showInputBox();

	return featur_name;
}
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

// project strucher
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


		//features
		createFolder('/lib/app/features')

		
		
	
	
	

	
		vscode.window.showInformationMessage(state);
		context.subscriptions.push(disposable);

	});
// injection container
	let injection_container_command = vscode.commands.registerCommand('myfirstextenchion.create injection container file', function () {
		var state='';
		try{
			if(!fs.existsSync(__dirname+'/lib/injection_container.dart')){
				fs.writeFile(__dirname+'/lib/injection_container.dart',"Future<void> InjectionContainer() async { \n \n //Write your injections variables here \n\n\n }",function(){});
				state= 'Done >>>';
			}
			else{
				state= 'Folder Exisit >>>';
			}

			
		}catch(err){
			state= err;
		}
		finally{
			vscode.window.showInformationMessage(state);
		
			context.subscriptions.push(injection_container_command);

		}

		
		//Injection_container file
		


		
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
		

		
	});
// features folders
let create_feature_folders = vscode.commands.registerCommand('myfirstextenchion.create feature folders',async function () {
	
	
	//vscode.window.showInformationMessage(featur_name);
var	featur_name=await getFeatureName();
	var state=createFolder('/lib/app/features/'+featur_name);
	//data
	var state=createFolder('/lib/app/features/'+featur_name+'/data/');
	var state=createFolder('/lib/app/features/'+featur_name+'/data/data_sources');
	var state=createFolder('/lib/app/features/'+featur_name+'/data/modules');
	var state=createFolder('/lib/app/features/'+featur_name+'/data/repositories');
	//domain
	var state=createFolder('/lib/app/features/'+featur_name+'/domain/');
	var state=createFolder('/lib/app/features/'+featur_name+'/domain/entities');
	var state=createFolder('/lib/app/features/'+featur_name+'/domain/repositories');
	var state=createFolder('/lib/app/features/'+featur_name+'/domain/usecases');
	//presentation
	var state=createFolder('/lib/app/features/'+featur_name+'/presentation/');
	var state=createFolder('/lib/app/features/'+featur_name+'/presentation/state_magament');
	var state=createFolder('/lib/app/features/'+featur_name+'/presentation/pages');
	var state=createFolder('/lib/app/features/'+featur_name+'/presentation/widgets');

	vscode.window.showInformationMessage(state);

		context.subscriptions.push(create_feature_folders);

	

	
	//Injection_container file
	


	
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
	

	
});
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
