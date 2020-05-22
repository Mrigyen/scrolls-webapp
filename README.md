# scrolls

WARNING: We have shutdown the remote server running the transformer model instance used to provide predictions. The rest is up here for demonstrative purposes only.

---

Scrolls is an AI powered text editor that uses Natural Language Generation to predict what comes next in the text given previously written text as the prompt. Think of it as autocompletion for general prose.

The source code given above is for the web app that acts as the driver.

---

# How to use on a Linux System

```bash
# Install yarn package manager
# Source: https://stackoverflow.com/questions/42606941/install-yarn-ubuntu-16-04-linux-mint-18-1
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

# Install the required packages using the package manager
yarn install

# Start the web app server
yarn start
```

# How to use on a Windows system (not recommended)

Open admistrative shell

Paste the following in the shell:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco install yarn
git clone https://github.com/Mrigyen/scrolls-webapp
cd scrolls-webapp
yarn install
yarn start
```

