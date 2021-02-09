# ReactJS-example
Курс по ReactJS

## Команды сборки проекта
1) npm init --y
2) npm i react react-dom
3) npm i -D webpack webpack-cli webpack-dev-server
4) npm i -D @babel/cli @babel/core  @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader css-loader html-webpack-plugin mini-css-extract-plugin

## Ошибки Git
Logon failed, use ctrl+c to cancel basic credential prompt. 
error: unable to read askpass response from 'C:/Program Files/Git/mingw64/libexec/git-core/git-gui--askpass'

Решение: Сбросить параметр core.askPass
git config --global core.askPass ''