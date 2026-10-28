# 修改历史

## 2026-10-28 去掉 Android 相关表述

**需求**：官网不再出现 Android 信息（含 Google Play、包名 `dd.journal.murmur`、Google 登录与 Android 云恢复等）。

**方案**：

- 首页「即将登陆」只保留 App Store，删除 Google Play 与包名。
- 隐私政策：删除 Android 包名；账号与第三方列表改为仅 Sign in with Apple；去掉 Android 云恢复段落，保留 PDF 导出说明；删除账号处去掉「清空应用数据」。
- 服务条款：账号段去掉 Android / Google 绑定，换机恢复表述不再单独强调 iOS。

**涉及文件**：`index.html`、`privacy.html`、`terms.html`、`history.md`。

---

## 2026-10-28 页脚去掉「日记只属于你」

**需求**：页脚不再显示「日记只属于你 / Your journal belongs only to you」。

**方案**：`index.html`、`privacy.html`、`terms.html` 页脚版权行只保留「© 2026 Murmur · 随想。」与「© 2026 Murmur.」。

**涉及文件**：`index.html`、`privacy.html`、`terms.html`、`history.md`。

---

## 2026-10-28 口号同步

**需求**：产品口号改为英文 “Your life, heard.”、中文「分享生活片段，听见不同的理解与回应。」官网主标题和链接预览与之一致。

**方案**：

- 首页主标题中英两行换成新口号。中文在逗号处换行，大字号下仍是两行。
- `description` 与 `og:description` 用新英文口号起头，后面仍保留私密日记、AI 回应、没有广场这几句事实说明。
- 页脚「日记只属于你 / Your journal belongs only to you」是隐私收尾，不是这句口号，未改。

**涉及文件**：`index.html`、`history.md`。

---

## 2026-10-28 官网图标与 App 同步

**需求**：网站 favicon、页眉 logo 与链接预览图应与当前 App 图标一致（Wren 头像版），不再使用旧紫色 SVG 占位。

**方案**：

- 从 `aifriend` 复制 `web/favicon.png`、`web/icons/Icon-192.png`、`Icon-512.png` 及 `assets/brand/app_icon.png` 到 `assets/`（四位 AI 头像 MD5 已与 App 一致，未改）。
- 全站 `<link rel="icon">`、`apple-touch-icon` 指向 PNG；首页增加 `og:image` 用 512 图。
- 页眉 `brand-mark` 改为 `<img>` 显示 192 图标；CSS 圆角与 `object-fit: cover` 对齐 App 观感。
- 删除 `assets/favicon.svg`。

**涉及文件**：`assets/favicon.png`、`assets/app-icon-192.png`、`assets/app-icon-512.png`、`assets/app-icon.png`、`index.html`、`privacy.html`、`terms.html`、`404.html`、`css/style.css`；删除 `assets/favicon.svg`；`history.md`。

---

## 2026-10-28 中文应用名统一为「随想」

**需求**：中文应用名定为「随想」（英文仍为 Murmur），不再使用旧名「呢喃」；官网与文档与 App 文案一致。

**方案**：

- `aifriend`：`app_zh.arb`、导出 PDF 文件名、`Murmur.storekit` 订阅展示名，以及仍写「呢喃 / 呢喃+」的 MD 规格文档，统一为「随想 / 随想+」。
- `murmur_web`：`index.html`、`privacy.html`、`terms.html` 中文里的应用名与页脚版权行改为「随想 / 随想+」。

**涉及文件**：见各仓库 `history.md` 当次记录；`aifriend/history.md` 同步追加本条。

---

## 2026-10-25 官网上架前只保留英文

**需求**：再查一遍会挡住 App Store 的地方。官网先只给审核看英文，中文先隐藏，不删。这一轮专注上架。

**方案**：

- 四个页面的 `lang` 固定为 `en`。不再按浏览器语言或本地保存的选择切到中文，并清掉以前记下的 `murmur-lang`。
- 中文段落和语言开关留在页面里，用样式隐藏。打印时也不再把中文印出来。
- 标题、简介和分享信息改成英文，避免标签页和链接预览仍显示「随想」。首页眉题去掉「随想」。
- 隐私政策里「记住中文 / 英文选择」改为：网站目前只显示英文，不保存语言偏好，也不放追踪 Cookie。

**涉及文件**：`index.html`、`privacy.html`、`terms.html`、`404.html`、`css/style.css`、`js/site.js`、`history.md`。

线上 `https://xcat-hub.github.io/murmur_web/` 要等这次改动发布后，审核打开的才是英文页。

---

## 2026-10-19 隐私政策补上地图瓦片，并收紧模型训练表述

**需求**：隐私政策要跟上随想实际行为。地图瓦片来自 `a.tile.openstreetmap.fr`，此前未披露。原先「不用日记训练通用模型」需要按 Gemini API 付费/未付费条款，以及 OpenRouter 的保留与训练规则改写，不能写成没有条件的保证。

**方案**：

- 隐私政策、首页和条款写明：打开地图时，设备直接向 `a.tile.openstreetmap.fr`（OpenStreetMap France）请求瓦片，对方可能看到 IP 和瓦片坐标；链到其使用条件和 OpenStreetMap 版权页。未写具体路径模板，因为这次没能打开 `XCat-hub/aifriend` 核对源码。
- 训练表述改为：我们不用日记训练自己的模型。Gemini 只有在「已开通结算的 Google Cloud 项目」上调用才适用已付费条款（不用于改进产品，但仍可能为滥用检测短期记日志）。未付费额度或把日志数据集分享给 Google 时，内容可能被用于改进甚至训练。OpenRouter 声明自己不训练、默认不存正文，但默认路由仍可能落到会保留或训练的上游提供方。政策写明这些条件，并写明控制台开关和请求参数并未在本页被核实。
- 条款里的有限许可补上打标签；地图请求单独说明不含日记正文。生效日期改为 2026-10-19。

**涉及文件**：`privacy.html`、`index.html`、`terms.html`、`history.md`。

---

## 2026-10-12 首页 AI 头像改用 App 角色图

**需求**：官网「四位 AI 朋友」的头像与 App 中 Wren、Sage、Pip、Rowan 使用的图标不一致，网站仍是纯色不规则色块。

**方案**：把 App `assets/personas/{wren,sage,pip,rowan}.png` 原样复制到网站 `assets/personas/`。首页色块改为圆形裁切的 `<img>`，与 App `AiAvatar` 的圆形 `BoxFit.cover` 一致。名字仍由标题提供，图片 `alt` 留空。

**涉及文件**：`index.html`、`css/style.css`、`assets/personas/wren.png`、`assets/personas/sage.png`、`assets/personas/pip.png`、`assets/personas/rowan.png`、`history.md`。

---

## 2026-10-10 对齐当前 App，供 App Store 审核打开

**需求**：官网是这个 App 的隐私政策和使用条款。页面还停在 Luna / Atlas / Milo、OpenRouter DeepSeek、系统整机备份，以及「以后如果有订阅」。审核对照链接时会对不上现在的 App。

**方案**：

- 朋友改为 Wren、Sage、Pip、Rowan，并写明是 AI、不是医疗建议。
- 回应改为经 Cloud Functions 发给 Google Gemini；打标签发给 OpenRouter。照片仍不上传。
- iOS 备份改为用户自己 iCloud 里的 CloudKit 私有库，可在设置里删除。
- 写上随想+ / Murmur+ 自动续期年订阅：价格以 App Store 为准，试用结束前至少 24 小时可取消，可恢复购买。日记、导出、锁、备份和危机关怀不收费。
- 删除账号会去掉服务端账号以及用量、订阅记录；本机日记和 iCloud 备份不跟着删。
- 去掉系统通知的说法。生效日期改为 2026-10-10。

**涉及文件**：`index.html`、`privacy.html`、`terms.html`、`css/style.css`、`history.md`。

---

## 2026-08-27 中文名改为随想，改为发布到 GitHub Pages

**需求**：中文名统一为「随想」；联系邮箱保持 `xuetingcat@gmail.com`；不发布到 Firebase，改为发布到 GitHub。

**方案**：

- 站点文案中的「呢喃」全部改为「随想」。邮箱不变。
- 去掉 Firebase Hosting 配置。链接改为相对路径，canonical / sitemap 指向 `https://xcat-hub.github.io/murmur_web/`，以便作为 GitHub 项目页托管。
- 用 GitHub Actions（`pages.yml`）在 `master` 推送后发布 GitHub Pages。

**涉及文件**：全部 HTML、`robots.txt`、`sitemap.xml`、`.github/workflows/pages.yml`、`.nojekyll`、`.gitignore`；删除 `firebase.json`、`.firebaserc`；`history.md`。

---

## 2026-08-27 为 Murmur（随想）建立产品官网（隐私政策、服务条款、介绍）

**需求**：在 `murmur_web` 目录下做关于 `aifriend`（应用名 Murmur / 随想）的网站，主要内容为隐私政策、服务条款，以及介绍性信息。

**方案**：

- 做成静态站点（无框架、无第三方字体/分析），气质对齐 App：深色、低饱和、安静。中英可切换，便于上架审核。
- 三页：`index.html` 产品介绍（定位、四条原则、Luna / Atlas / Milo、AI 处理说明）；`privacy.html` 隐私政策；`terms.html` 服务条款。
- 法律文案严格按现有产品行为写，不夸大：日记本地加密；图片不上传、不送模型；AI 经 Firebase Callable（`us-central1`）代理 OpenRouter / DeepSeek，代理不落库；Google / Apple 登录只绑定 AI 代理身份、不同步日记；位置单次用于地点名；危机走本地规则不上报；无广告、不卖数据、不拿用户内容训通用模型。联系邮箱使用 Firebase 中已配置的 `xuetingcat@gmail.com`。
- 预留 Firebase Hosting 配置（项目 `murmur-journal`），对应应用里已使用的 `https://murmur-journal.web.app`。

**涉及文件**：`index.html`、`privacy.html`、`terms.html`、`404.html`、`css/style.css`、`js/site.js`、`assets/favicon.svg`、`firebase.json`、`.firebaserc`、`robots.txt`、`sitemap.xml`、`.gitignore`、`history.md`。
