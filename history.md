# 修改历史

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
