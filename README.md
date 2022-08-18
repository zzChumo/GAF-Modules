# GAF Modules

这是一个为[GS App Frame](https://www.zzchat.cf/GAF)准备的拓展程序仓库。你可以通过这些拓展程序来完善GAF的使用体验。     
如果你没有在使用GAF，那么你也可以正常使用仓库内的模块，因为我们要求开发者在模块中加入含有相关依赖库的注释。

## 安装模块

__注意：为了保证数据的绝对安全，你可能需要备份原工程。__

### 对于GAF工程

1. 在您的GAF工程中使用`<script src="target_script"></script>`和`<link rel="stylesheet" href="target_css">`引入相关模块。
2. 查看Demo文件，确保模块与您的工程相兼容（大多数情况下是兼容的），并根据Demo中提供的的用法使用。

### 对于非GAF工程

1. 在您的工程中使用`<script src="target_script"></script>`和`<link rel="stylesheet" href="target_css">`引入相关模块。
2. 解除模块js文件中相关依赖库的注释。
3. 查看Demo文件，确保模块与您的工程相兼容，并根据Demo中提供的的用法使用。

## 模块开发者

[zzChumo](https://github.com/zzChumo) 仓库建立者及GameAuth模块开发者。

## 声明

本仓库中的所有模块均不允许由开发者以外的人员进行二次分发（除非开发者提供了额外声明）。

---

## 致开发者

1. 请在模块中加入GAF依赖库的源代码并注释。
2. 请详细注明依赖GAF的代码。
3. 允许对隐私代码进行混淆。
4. 请以JSON形式在模块js文件中全局声明拓展程序信息，如`var gafExtension={"awa":"uwu"}`。JSON中的必选字段有：
- Author
- Name
- Desp（Description）
5. 拓展程序信息需要解析并使用`console.log()`在控制台中输出。
