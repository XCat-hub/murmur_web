# 修改历史

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
- 写上呢喃+ / Murmur+ 自动续期年订阅：价格以 App Store 为准，试用结束前至少 24 小时可取消，可恢复购买。日记、导出、锁、备份和危机关怀不收费。
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

## 2026-08-27 为 Murmur（呢喃）建立产品官网（隐私政策、服务条款、介绍）

**需求**：在 `murmur_web` 目录下做关于 `aifriend`（应用名 Murmur / 呢喃）的网站，主要内容为隐私政策、服务条款，以及介绍性信息。

**方案**：

- 做成静态站点（无框架、无第三方字体/分析），气质对齐 App：深色、低饱和、安静。中英可切换，便于上架审核。
- 三页：`index.html` 产品介绍（定位、四条原则、Luna / Atlas / Milo、AI 处理说明）；`privacy.html` 隐私政策；`terms.html` 服务条款。
- 法律文案严格按现有产品行为写，不夸大：日记本地加密；图片不上传、不送模型；AI 经 Firebase Callable（`us-central1`）代理 OpenRouter / DeepSeek，代理不落库；Google / Apple 登录只绑定 AI 代理身份、不同步日记；位置单次用于地点名；危机走本地规则不上报；无广告、不卖数据、不拿用户内容训通用模型。联系邮箱使用 Firebase 中已配置的 `xuetingcat@gmail.com`。
- 预留 Firebase Hosting 配置（项目 `murmur-journal`），对应应用里已使用的 `https://murmur-journal.web.app`。

**涉及文件**：`index.html`、`privacy.html`、`terms.html`、`404.html`、`css/style.css`、`js/site.js`、`assets/favicon.svg`、`firebase.json`、`.firebaserc`、`robots.txt`、`sitemap.xml`、`.gitignore`、`history.md`。
