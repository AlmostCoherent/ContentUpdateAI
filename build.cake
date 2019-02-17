var target = Argument("Target", "Build");
var configuration = Argument("Configuration", "Release");
var solutionLocation = "./ContentUpdateAI.sln";

Task("RestoreNuget")
	.Does(() =>
	{
		NuGetRestore(solutionLocation);
	});

Task("Build")
	.IsDependentOn("RestoreNuget")
	.Does(() => 
	{
		MSBuild(
		  solutionLocation,
		  settings => settings.SetConfiguration(configuration)
							  .WithTarget("Build"));
	});

	RunTarget(target);