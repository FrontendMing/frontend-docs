# PNPM 介绍

### PNPM 的特点：

1.  节约磁盘空间并提升安装速度；
1.  创建非扁平化的 node_modules 文件夹。

### PNPM 与 NodeJs 版本支持：

| Node.js    | pnpm 4 | pnpm 5 | pnpm 6 | pnpm 7 |
| ---------- | ------ | ------ | ------ | ------ |
| Node.js 10 | ✔️     | ✔️     | ❌      | ❌      |
| Node.js 12 | ✔️     | ✔️     | ✔️     | ❌      |
| Node.js 14 | ✔️     | ✔️     | ✔️     | ✔️     |
| Node.js 16 | 未知     | 未知     | ✔️     | ✔️     |
| Node.js 18 | 未知     | 未知     | ✔️     | ✔️     |

上述表格来自：<https://pnpm.io/zh/installation>；

### PNPM 与其他包管理功能对比：

| 功能                 | pnpm                                                                           | Yarn                | npm                    |
| ------------------ | ------------------------------------------------------------------------------ | ------------------- | ---------------------- |
| 工作空间支持（monorepo）   | ✔️                                                                             | ✔️                  | ✔️                     |
| 隔离的 node_modules   | ✔️ - 默认                                                                        | ✔️                  | ❌                      |
| 提升的 node_modules   | ✔️                                                                             | ✔️                  | ✔️ - 默认                |
| 自动安装 peers         | ✔️ - 通过 [auto-install-peers=true](https://pnpm.io/zh/npmrc#auto-install-peers) | ❌                   | ✔️                     |
| Plug'n'Play        | ✔️                                                                             | ✔️ - 默认             | ❌                      |
| 零安装                | ❌                                                                              | ✔️                  | ❌                      |
| 修补依赖项              | ✔️                                                                             | ✔️                  | ❌                      |
| 管理 Node.js 版本      | ✔️                                                                             | ❌                   | ❌                      |
| 有锁文件               | ✔️ - pnpm-lock.yaml                                                            | ✔️ - yarn.lock      | ✔️ - package-lock.json |
| 支持覆盖               | ✔️                                                                             | ✔️ - 通过 resolutions | ✔️                     |
| 内容可寻址存储            | ✔️                                                                             | ❌                   | ❌                      |
| 动态包执行              | ✔️ - 通过 pnpm dlx                                                               | ✔️ - 通过 yarn dlx    | ✔️ - 通过 npx            |
| Side-effects cache | ✔️                                                                             | ❌                   | ❌                      |

上述表格来自：<https://pnpm.io/zh/feature-comparison>；

### 安装 PNPM：

```
npm install -g pnpm
```

更多 pnpm 命令请参阅 <https://pnpm.io/zh/pnpm-cli>；
