interface Emoji {
    readonly emoji: any;
    readonly code: any;
    readonly description: any;
    readonly description_zh_cn: any;
}
let Gitmoji: Array<Emoji> = [
    {
        "emoji": "🎨",
        "code": ":art:",
        "description": "Improving structure / format of the code",
        "description_zh_cn": "改进项目结构/代码格式"
    },
    {
        "emoji": "⚡️",
        "code": ":zap:",
        "description": "Improving performance",
        "description_zh_cn": "提高性能"
    },
    {
        "emoji": "🔥",
        "code": ":fire:",
        "description": "Removing code or files",
        "description_zh_cn": "删除代码或文件"
    },
    {
        "emoji": "🐛",
        "code": ":bug:",
        "description": "Fixing a bug",
        "description_zh_cn": "修复一个 BUG"
    },
    {
        "emoji": "🚑",
        "code": ":ambulance:",
        "description": "Critical hotfix",
        "description_zh_cn": "紧急热修复"
    },
    {
        "emoji": "✨",
        "code": ":sparkles:",
        "description": "Introducing new features",
        "description_zh_cn": "引入新特性"
    },
    {
        "emoji": "📝",
        "code": ":pencil:",
        "description": "Writing docs",
        "description_zh_cn": "书写文档"
    },
    {
        "emoji": "🚀",
        "code": ":rocket:",
        "description": "Deploying stuff",
        "description_zh_cn": "部署项目"
    },
    {
        "emoji": "💄",
        "code": ":lipstick:",
        "description": "Updating the UI and style files",
        "description_zh_cn": "更新 UI 和样式文件"
    },
    {
        "emoji": "🎉",
        "code": ":tada:",
        "description": "Initial commit",
        "description_zh_cn": "初次提交"
    },
    {
        "emoji": "✅",
        "code": ":white_check_mark:",
        "description": "Updating tests",
        "description_zh_cn": "更新测试"
    },
    {
        "emoji": "🔒",
        "code": ":lock:",
        "description": "Fixing security issues",
        "description_zh_cn": "修复安全问题"
    },
    {
        "emoji": "🍎",
        "code": ":apple:",
        "description": "Fixing something on macOS",
        "description_zh_cn": "修复 macOS 平台的问题"
    },
    {
        "emoji": "🐧",
        "code": ":penguin:",
        "description": "Fixing something on Linux",
        "description_zh_cn": "修复 Linux 平台的问题"
    },
    {
        "emoji": "🏁",
        "code": ":checkered_flag:",
        "description": "Fixing something on Windows",
        "description_zh_cn": "修复 Windows 平台的问题"
    },
    {
        "emoji": "🤖",
        "code": ":robot:",
        "description": "Fixing something on Android",
        "description_zh_cn": "修复 Android 平台的问题"
    },
    {
        "emoji": "🍏",
        "code": ":green_apple:",
        "description": "Fixing something on iOS",
        "description_zh_cn": "修复 iOS 平台的问题"
    },
    {
        "emoji": "🔖",
        "code": ":bookmark:",
        "description": "Releasing / Version tags",
        "description_zh_cn": "Releasing / Version 标签"
    },
    {
        "emoji": "🚨",
        "code": ":rotating_light:",
        "description": "Removing linter warnings",
        "description_zh_cn": "移除 linter 报警"
    },
    {
        "emoji": "🚧",
        "code": ":construction:",
        "description": "Work in progress",
        "description_zh_cn": "进行中的工作"
    },
    {
        "emoji": "💚",
        "code": ":green_heart:",
        "description": "Fixing CI Build",
        "description_zh_cn": "修复 CI 构建"
    },
    {
        "emoji": "⬇️",
        "code": ":arrow_down:",
        "description": "Downgrading dependencies",
        "description_zh_cn": "降级依赖版本"
    },
    {
        "emoji": "⬆️",
        "code": ":arrow_up:",
        "description": "Upgrading dependencies",
        "description_zh_cn": "升级依赖版本"
    },
    {
        "emoji": "📌",
        "code": ":pushpin:",
        "description": "Pinning dependencies to specific versions",
        "description_zh_cn": "将依赖设定为指定版本"
    },
    {
        "emoji": "👷",
        "code": ":construction_worker:",
        "description": "Adding CI build system",
        "description_zh_cn": "添加 CI 构建系统"
    },
    {
        "emoji": "📈",
        "code": ":chart_with_upwards_trend:",
        "description": "Adding analytics or tracking code",
        "description_zh_cn": "添加分析或跟踪代码"
    },
    {
        "emoji": "♻️",
        "code": ":recycle:",
        "description": "Refactoring code",
        "description_zh_cn": "重构代码"
    },
    {
        "emoji": "🐳",
        "code": ":whale:",
        "description": "Work about Docker",
        "description_zh_cn": "处理 Docker 相关的工作"
    },
    {
        "emoji": "➕",
        "code": ":heavy_plus_sign:",
        "description": "Adding a dependency",
        "description_zh_cn": "添加一个依赖"
    },
    {
        "emoji": "➖",
        "code": ":heavy_minus_sign:",
        "description": "Removing a dependency",
        "description_zh_cn": "移除一个依赖"
    },
    {
        "emoji": "🔧",
        "code": ":wrench:",
        "description": "Changing configuration files",
        "description_zh_cn": "改变配置文件"
    },
    {
        "emoji": "🌐",
        "code": ":globe_with_meridians:",
        "description": "Internationalization and localization",
        "description_zh_cn": "国际化和本地化 i18n"
    },
    {
        "emoji": "✏️",
        "code": ":pencil2:",
        "description": "Fixing typos",
        "description_zh_cn": "修复拼写错误"
    },
    {
        "emoji": "💩",
        "code": ":poop:",
        "description": "Writing bad code that needs to be improved",
        "description_zh_cn": "这段代码临时瞎写的，写得跟屎一样，后期要改进"
    },
    {
        "emoji": "⏪",
        "code": ":rewind:",
        "description": "Reverting changes",
        "description_zh_cn": "还原修改"
    },
    {
        "emoji": "🔀",
        "code": ":twisted_rightwards_arrows:",
        "description": "Merging branches",
        "description_zh_cn": "合并分支"
    },
    {
        "emoji": "📦",
        "code": ":package:",
        "description": "Updating compiled files or packages",
        "description_zh_cn": "更新已编译的文件或包"
    },
    {
        "emoji": "👽",
        "code": ":alien:",
        "description": "Updating code due to external API changes",
        "description_zh_cn": "由于外部 API 更改而更新代码"
    },
    {
        "emoji": "🚚",
        "code": ":truck:",
        "description": "Moving or renaming files",
        "description_zh_cn": "移动或重命名文件"
    },
    {
        "emoji": "📄",
        "code": ":page_facing_up:",
        "description": "Adding or updating license",
        "description_zh_cn": "添加或更新 License"
    },
    {
        "emoji": "💥",
        "code": ":boom:",
        "description": "Introducing breaking changes",
        "description_zh_cn": "引入重大改变"
    },
    {
        "emoji": "🍱",
        "code": ":bento:",
        "description": "Adding or updating assets",
        "description_zh_cn": "添加或更新资源"
    },
    {
        "emoji": "👌",
        "code": ":ok_hand:",
        "description": "Updating code due to code review changes",
        "description_zh_cn": "由于代码评审更改而更新代码"
    },
    {
        "emoji": "♿️",
        "code": ":wheelchair:",
        "description": "Improving accessibility",
        "description_zh_cn": "提高可访问性"
    },
    {
        "emoji": "💡",
        "code": ":bulb:",
        "description": "Documenting source code",
        "description_zh_cn": "为源代码编写文档"
    },
    {
        "emoji": "🍻",
        "code": ":beers:",
        "description": "Writing code drunkenly",
        "description_zh_cn": "这段代码有问题，仿佛是醉酒后写的"
    },
    {
        "emoji": "💬",
        "code": ":speech_balloon:",
        "description": "Updating text and literals",
        "description_zh_cn": "更新文本和文字意思"
    },
    {
        "emoji": "🗃",
        "code": ":card_file_box:",
        "description": "Performing database related changes",
        "description_zh_cn": "执行与数据库相关的更改"
    },
    {
        "emoji": "🔊",
        "code": ":loud_sound:",
        "description": "Adding logs",
        "description_zh_cn": "添加日志"
    },
    {
        "emoji": "🔇",
        "code": ":mute:",
        "description": "Removing logs",
        "description_zh_cn": "删除日志"
    },
    {
        "emoji": "👥",
        "code": ":busts_in_silhouette:",
        "description": "Adding contributor(s)",
        "description_zh_cn": "添加贡献者"
    },
    {
        "emoji": "🚸",
        "code": ":children_crossing:",
        "description": "Improving user experience / usability",
        "description_zh_cn": "提高用户体验/可用性"
    },
    {
        "emoji": "🏗",
        "code": ":building_construction:",
        "description": "Making architectural changes",
        "description_zh_cn": "进行架构更改"
    },
    {
        "emoji": "📱",
        "code": ":iphone:",
        "description": "Working on responsive design",
        "description_zh_cn": "正在处理响应式设计"
    },
    {
        "emoji": "🤡",
        "code": ":clown_face:",
        "description": "Mocking things",
        "description_zh_cn": "进行 mock 测试"
    },
    {
        "emoji": "🥚",
        "code": ":egg:",
        "description": "Adding an easter egg",
        "description_zh_cn": "添加一个彩蛋"
    },
    {
        "emoji": "🙈",
        "code": ":see_no_evil:",
        "description": "Adding or updating a .gitignore file",
        "description_zh_cn": "添加或更新 .gitignore 文件"
    },
    {
        "emoji": "📸",
        "code": ":camera_flash:",
        "description": "Adding or updating snapshots",
        "description_zh_cn": "添加或更新快照"
    },
    {
        "emoji": "⚗",
        "code": ":alembic:",
        "description": "Experimenting new things",
        "description_zh_cn": "试验新功能"
    },
    {
        "emoji": "🔍",
        "code": ":mag:",
        "description": "Improving SEO",
        "description_zh_cn": "改善 SEO"
    },
    {
        "emoji": "☸️",
        "code": ":wheel_of_dharma:",
        "description": "Work about Kubernetes",
        "description_zh_cn": "处理 Kubernetes 相关的工作 K8S"
    },
    {
        "emoji": "🏷️",
        "code": ":label:",
        "description": "Adding or updating types (Flow, TypeScript)",
        "description_zh_cn": "添加或更新类型（Flow、TypeScript）"
    },
    {
        "emoji": "🌱",
        "code": ":seedling:",
        "description": "Adding or updating seed files",
        "description_zh_cn": "添加或更新 SEED 文件"
    },
    {
        "emoji": "🚩",
        "code": ":triangular_flag_on_post:",
        "description": "Adding, updating, or removing feature flags",
        "description_zh_cn": "添加、更新或删除特性标志"
    },
    {
        "emoji": "💫",
        "code": ":dizzy:",
        "description": "Adding or updating animations and transitions",
        "description_zh_cn": "添加或更新动画和过场"
    },
    {
        "emoji": "🥅",
        "code": ":goal_net:",
        "description": "Catching errors",
        "description_zh_cn": "捕获异常"
    },
    {
        "emoji": "🗑",
        "code": ":wastebasket:",
        "description": "Deprecating code that needs to be cleaned up",
        "description_zh_cn": "需要清理的弃用代码"
    }
];
export { Gitmoji, Emoji } ;
