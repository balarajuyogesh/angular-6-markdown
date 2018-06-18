<!-- TOC -->

- [Install Chocolatey for Windows](#install-chocolatey-for-windows)
- [Install git](#install-git)
- [[Using git the right way]('https://www.excella.com/insights/youre-probably-using-github-wrong')](#using-git-the-right-wayhttpswwwexcellacominsightsyoure-probably-using-github-wrong)
  - [Here’s an overview of how the workflow will look like from a developer’s perspective:](#heres-an-overview-of-how-the-workflow-will-look-like-from-a-developers-perspective)
- [Installing globally is an Anti-Pattern [Important Article]](#installing-globally-is-an-anti-pattern-important-article)
- [Installing Node.JS](#installing-nodejs)
- [Instructions noted[Important Article]](#instructions-notedimportant-article)
- [VS Code ( Code editor contains: The best Node.js debugger that exists)](#vs-code--code-editor-contains-the-best-nodejs-debugger-that-exists)
- [Automation for installation of basic softwares for Windows 10 [Importan Article]](#automation-for-installation-of-basic-softwares-for-windows-10-importan-article)

<!-- /TOC -->

```bash
npm list -g --depth 0  # To list all globally installed softwares.
```
<details>
<summary>1.0.0 Mastering the use of CLI-based package managers for windows to speed up and automate the set up of development environments</summary>

# Install Chocolatey for Windows

1. Launch the start menu
2. Start typing in `PowerShell`
3. Run Windows PowerShell as Administrator

```powershell
PS> Set-ExecutionPolicy AllSigned; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
4. Verify your installation by executing `choco` in the `PowerShell`

# Install git

```powershell
PS> choco install git -y
PS> git --version
PS> refreshenv # You can avoid relaunching you Terminal and save some time by refreshing or sourcing your environment variables
```

# [Using git the right way]('https://www.excella.com/insights/youre-probably-using-github-wrong')

> Fully leverage all the capabilities that GitHub provides. You can cut redundancies, errors and save much need time in the process. Also we can use Review Ninja for code reviews.

Why git ??
* Your working copy and your local copy(a.k.a cloned repository) are kept separate.
* You commit your changes against your local copy and then sync your changes with the central copy(a.k.a remote repository)
* You may use [Git Command Line tools](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line) or GUI tools like [Git Extensions](https://gitextensions.github.io/) or [Tower](https://www.git-tower.com/) to interact with your local copy or the central copy. You may encounter merge conflicts along the way, where two people have changed the same line of the source code. There are robust tools available such as [kdiff3](kdiff3.sourceforge.net) or [Kaleidoscope](www.kaleidoscopeapp.com) to efficiently handle such conflicts when they happen.
* GitHub
  * it implements integrated issue tracking
  * collaborative code
  * reviewing
  * team management
  * great integrations
  * security
  * extensibility and more
  * GitHub will automatically link specific commits to issues making it much easier to locate the piece of code that fixes a specific issue.
* [Git Danger Zone 1](https://stackoverflow.com/questions/3895453/how-do-i-make-a-git-commit-in-the-past)
* [Git Danger Zone 2](https://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files)

## Here’s an overview of how the workflow will look like from a developer’s perspective:

* When starting to work on an issue, new feature or even the most minor code change create a branch, include issue number and short description in the title whenever possible
* After creating the new branch, you can publish is without any commits so it’s visible to others for collaboration or observation
* Work on the issue, fix or new feature using the branch until its ready
* You can collaborate with others to work on the branch
* Plan to sync your branch often, at least once a day, so others can potentially pick up where you left
* Once a fix, issue, or feature is ready then create and send a Pull Request (PR) containing your changes
* A PR will be subject to a code-review (enforced via a webhook to Review Ninja)
* A PR will be subject to a successful CI run (enforced via a webhook to CI server)
* Optionally a PR may be subject to automated acceptance tests (enforced via a webhook to 3rd party service)
* You’ll only be able to merge your PR after all aforementioned checks have passed
* If a PR fails to go through all the checks, you can commit changes to the same branch and update the PR that has failed

# Installing globally is an Anti-Pattern [Important Article]

* Ex: While Node.JS Already installed, there may be a chance that Native bindings between your tool and Node have been Invalidated.
* Global tools rapidly fall out of date and project-specific tools quick go out of sync.
* Installing globally is an anti-pattern which has been replaced with better techniques. We use `npx` command for local Installation.
* To see globally installed packages. `npm list -g --depth 0`
* To uninstall global package `npm uninstall -g package-name`
* **It is recommended to uninstall all global packages and restart from scratch by installing packages locally.**

# Installing Node.JS

* Install Node 8.4 or a latest version.
* Odd number versions are mean't to be not long lived. So avoid it

```powershell
PS> choco install nodejs-lts -y # For windows
node -v                         # Verify Node Installation
npm -v                          # Verify npm
```

# Instructions noted[Important Article]

* Never upgrade your npm version using this

```bash
npm install -g npm         # Never upgrade your npm version using this
```

* Highly recommended that you use `npm-windows-upgrade` npm package to Stay Up to Date with Angular updates.

* Useful and mature CLI commands used frequently. 

```bash
npx                                      # Project specific `node_modules` folder
rimraf                                   # Useful in deleting node_modules folder( In unix: rm -rf)
npm-update                               # Reports which package have newer version or not
n                                        # To switch between node versions
http-server                              # zero-config command line HTTP server, great way to locally test static HTML/CSS
                                         # Or even the dist folder in Angular or React project
npm-windows-upgrade                      # To upgrade npm on windows
```

# VS Code ( Code editor contains: The best Node.js debugger that exists)

* Install VS code on windows

```powershell
PS> choco install VisualStudioCode -y
PS> code .                                    # To verify VS Code installation
```

# Automation for installation of basic softwares for Windows 10 [Importan Article]

> If you deal with large teams and frequent turnover, an automation tool will pay dividends handsomely.
> These scripts do not represent a very capable or resilient solution. But basic script is good
> You can explore tools such as Puppet, Chef, Ansible and Vagrant.

* Execute `install-windows-deps.ps1` in PowerShell to install and verify dependencies on Windows

```powershell
# Run this script in an elevated command shell, using 'Run as Administator'

$title = "Execute Installation Script"
$message = "Absolutely NO WARRANTIES or GUARANTEES are provided. Are you sure you want to continue?"

$yes = New-Object System.Management.Automation.Host.ChoiceDescription "&Yes", `
    "Execute script."

$no = New-Object System.Management.Automation.Host.ChoiceDescription "&No", `
    "Do not execute script."

$options = [System.Management.Automation.Host.ChoiceDescription[]]($yes, $no)

$result = $host.ui.PromptForChoice($title, $message, $options, 1)

switch ($result)
    {
        0 {
            # This script is intentionally kept simple to demonstrate basic automation techniques.
            Write-Output "Note: This script assumes a clean environment and therefore is not resilient."
            Write-Output "Installing chocolatey"
            Set-ExecutionPolicy AllSigned; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

            RefreshEnv.cmd

            Write-Output "Installing Git & GitHub Desktop"
            choco install git github-desktop -y
            $gitVersion = git --version
            Write-Output "git: $gitVersion"
            Write-Output "Verify installation of GitHub Desktop manually."

            Write-Output "Installing NodeJS"
            choco install nodejs-lts -y
            $nodeVersion = node -v
            Write-Output "Node: $nodeVersion"
            Write-Output "Remember to avoid odd numbered major Node releases. Keep 8.x.x, avoid 7.x.x."
            $npmVersion = npm -v
            Write-Output "npm: $npmVersion"

            Write-Output "Installing VS Code"
            choco install VisualStudioCode -y
            Write-Output "Verify installation of VS Code manually."
        }
    1 {"Aborted."}
}
```
> To use vagrant [click here](Red-gate.com/simple-talk/sysadmin/general/automating-setup-local-developer-machine)

> End of details 1.0.0
</details>
