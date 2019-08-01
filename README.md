# dolly-cli

## 自己的命令行

1.首先执行 npm link 建立软连接（我们全局安装一个 cli 包后，可以全局调用这个命令行工具。那我们在开发调试的时候, 就要用到 npm link 这个命令了）

dolly -h

结果：
➜ dolly-cli git:(master) ✗ dolly -h
Usage: dolly [options]

Options:
-V, --version output the version number
-n, --yourname [yourname] Your name
-g, --glad Tell us you are happy
-h, --help output usage information

dolly -n xiaoming -g true

结果：Hello, xiaoming! I am very happy to see you!
