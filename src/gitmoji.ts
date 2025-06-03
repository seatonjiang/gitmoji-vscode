// Links: https://github.com/carloscuesta/gitmoji/blob/master/packages/gitmojis/src/gitmojis.json
import * as vscode from 'vscode';

interface gitmojiList {
    readonly emoji: any;
    readonly code: any;
    readonly description: any;
}

let Gitmoji: Array<gitmojiList> = [
    {
        emoji: '🎨',
        code: ':art:',
        description: vscode.l10n.t('Improve structure/format of the code'),
    },
    {
        emoji: '⚡️',
        code: ':zap:',
        description: vscode.l10n.t('Improve performance'),
    },
    {
        emoji: '🔥',
        code: ':fire:',
        description: vscode.l10n.t('Remove code or files'),
    },
    {
        emoji: '🐛',
        code: ':bug:',
        description: vscode.l10n.t('Fix a bug'),
    },
    {
        emoji: '🚑',
        code: ':ambulance:',
        description: vscode.l10n.t('Critical hotfix'),
    },
    {
        emoji: '✨',
        code: ':sparkles:',
        description: vscode.l10n.t('Introduce new features'),
    },
    {
        emoji: '📝',
        code: ':memo:',
        description: vscode.l10n.t('Add or update documentation'),
    },
    {
        emoji: '🚀',
        code: ':rocket:',
        description: vscode.l10n.t('Deploy stuff'),
    },
    {
        emoji: '💄',
        code: ':lipstick:',
        description: vscode.l10n.t('Add or update the UI and style files'),
    },
    {
        emoji: '🎉',
        code: ':tada:',
        description: vscode.l10n.t('Begin a project'),
    },
    {
        emoji: '✅',
        code: ':white_check_mark:',
        description: vscode.l10n.t('Add, update, or pass tests'),
    },
    {
        emoji: '🔒️',
        code: ':lock:',
        description: vscode.l10n.t('Fix security or privacy issues'),
    },
    {
        emoji: '🔐',
        code: ':closed_lock_with_key:',
        description: vscode.l10n.t('Add or update secrets'),
    },
    {
        emoji: '🔖',
        code: ':bookmark:',
        description: vscode.l10n.t('Release/Version tags'),
    },
    {
        emoji: '🚨',
        code: ':rotating_light:',
        description: vscode.l10n.t('Fix compiler/linter warnings'),
    },
    {
        emoji: '🚧',
        code: ':construction:',
        description: vscode.l10n.t('Work in progress'),
    },
    {
        emoji: '💚',
        code: ':green_heart:',
        description: vscode.l10n.t('Fix CI Build'),
    },
    {
        emoji: '⬇️',
        code: ':arrow_down:',
        description: vscode.l10n.t('Downgrade dependencies'),
    },
    {
        emoji: '⬆️',
        code: ':arrow_up:',
        description: vscode.l10n.t('Upgrade dependencies'),
    },
    {
        emoji: '📌',
        code: ':pushpin:',
        description: vscode.l10n.t('Pin dependencies to specific versions'),
    },
    {
        emoji: '👷',
        code: ':construction_worker:',
        description: vscode.l10n.t('Add or update CI build system'),
    },
    {
        emoji: '📈',
        code: ':chart_with_upwards_trend:',
        description: vscode.l10n.t('Add or update analytics or track code'),
    },
    {
        emoji: '♻️',
        code: ':recycle:',
        description: vscode.l10n.t('Refactor code'),
    },
    {
        emoji: '➕',
        code: ':heavy_plus_sign:',
        description: vscode.l10n.t('Add a dependency'),
    },
    {
        emoji: '➖',
        code: ':heavy_minus_sign:',
        description: vscode.l10n.t('Remove a dependency'),
    },
    {
        emoji: '🔧',
        code: ':wrench:',
        description: vscode.l10n.t('Add or update configuration files'),
    },
    {
        emoji: '🔨',
        code: ':hammer:',
        description: vscode.l10n.t('Add or update development scripts'),
    },
    {
        emoji: '🌐',
        code: ':globe_with_meridians:',
        description: vscode.l10n.t('Internationalization and localization'),
    },
    {
        emoji: '✏️',
        code: ':pencil2:',
        description: vscode.l10n.t('Fix typos'),
    },
    {
        emoji: '💩',
        code: ':poop:',
        description: vscode.l10n.t('Write bad code that needs to be improved'),
    },
    {
        emoji: '⏪',
        code: ':rewind:',
        description: vscode.l10n.t('Revert changes'),
    },
    {
        emoji: '🔀',
        code: ':twisted_rightwards_arrows:',
        description: vscode.l10n.t('Merge branches'),
    },
    {
        emoji: '📦',
        code: ':package:',
        description: vscode.l10n.t('Add or update compiled files or packages'),
    },
    {
        emoji: '👽️',
        code: ':alien:',
        description: vscode.l10n.t('Update code due to external API changes'),
    },
    {
        emoji: '🚚',
        code: ':truck:',
        description: vscode.l10n.t('Move or rename resources (e.g.: files, paths, routes)'),
    },
    {
        emoji: '📄',
        code: ':page_facing_up:',
        description: vscode.l10n.t('Add or update license'),
    },
    {
        emoji: '💥',
        code: ':boom:',
        description: vscode.l10n.t('Introduce breaking changes'),
    },
    {
        emoji: '🍱',
        code: ':bento:',
        description: vscode.l10n.t('Add or update assets'),
    },
    {
        emoji: '♿️',
        code: ':wheelchair:',
        description: vscode.l10n.t('Improve accessibility'),
    },
    {
        emoji: '💡',
        code: ':bulb:',
        description: vscode.l10n.t('Add or update comments in source code'),
    },
    {
        emoji: '🍻',
        code: ':beers:',
        description: vscode.l10n.t('Write code drunkenly'),
    },
    {
        emoji: '💬',
        code: ':speech_balloon:',
        description: vscode.l10n.t('Add or update text and literals'),
    },
    {
        emoji: '🗃️',
        code: ':card_file_box:',
        description: vscode.l10n.t('Perform database related changes'),
    },
    {
        emoji: '🔊',
        code: ':loud_sound:',
        description: vscode.l10n.t('Add or update logs'),
    },
    {
        emoji: '🔇',
        code: ':mute:',
        description: vscode.l10n.t('Remove logs'),
    },
    {
        emoji: '👥',
        code: ':busts_in_silhouette:',
        description: vscode.l10n.t('Add or update contributor(s)'),
    },
    {
        emoji: '🚸',
        code: ':children_crossing:',
        description: vscode.l10n.t('Improve user experience/usability'),
    },
    {
        emoji: '🏗️',
        code: ':building_construction:',
        description: vscode.l10n.t('Make architectural changes'),
    },
    {
        emoji: '📱',
        code: ':iphone:',
        description: vscode.l10n.t('Work on responsive design'),
    },
    {
        emoji: '🤡',
        code: ':clown_face:',
        description: vscode.l10n.t('Mock things'),
    },
    {
        emoji: '🥚',
        code: ':egg:',
        description: vscode.l10n.t('Add or update an easter egg'),
    },
    {
        emoji: '🙈',
        code: ':see_no_evil:',
        description: vscode.l10n.t('Add or update a .gitignore file'),
    },
    {
        emoji: '📸',
        code: ':camera_flash:',
        description: vscode.l10n.t('Add or update snapshots'),
    },
    {
        emoji: '⚗️',
        code: ':alembic:',
        description: vscode.l10n.t('Perform experiments'),
    },
    {
        emoji: '🔍',
        code: ':mag:',
        description: vscode.l10n.t('Improve SEO'),
    },
    {
        emoji: '🏷️',
        code: ':label:',
        description: vscode.l10n.t('Add or update types'),
    },
    {
        emoji: '🌱',
        code: ':seedling:',
        description: vscode.l10n.t('Add or update seed files'),
    },
    {
        emoji: '🚩',
        code: ':triangular_flag_on_post:',
        description: vscode.l10n.t('Add, update, or remove feature flags'),
    },
    {
        emoji: '🥅',
        code: ':goal_net:',
        description: vscode.l10n.t('Catch errors'),
    },
    {
        emoji: '💫',
        code: ':dizzy:',
        description: vscode.l10n.t('Add or update animations and transitions'),
    },
    {
        emoji: '🗑️',
        code: ':wastebasket:',
        description: vscode.l10n.t('Deprecate code that needs to be cleaned up'),
    },
    {
        emoji: '🛂',
        code: ':passport_control:',
        description: vscode.l10n.t('Work on code related to authorization, roles and permissions'),
    },
    {
        emoji: '🩹',
        code: ':adhesive_bandage:',
        description: vscode.l10n.t('Simple fix for a non-critical issue'),
    },
    {
        emoji: '🧐',
        code: ':monocle_face:',
        description: vscode.l10n.t('Data exploration/inspection'),
    },
    {
        emoji: '⚰️',
        code: ':coffin:',
        description: vscode.l10n.t('Remove dead code'),
    },
    {
        emoji: '🧪',
        code: ':test_tube:',
        description: vscode.l10n.t('Add a failing test'),
    },
    {
        emoji: '👔',
        code: ':necktie:',
        description: vscode.l10n.t('Add or update business logic'),
    },
    {
        emoji: '🩺',
        code: ':stethoscope:',
        description: vscode.l10n.t('Add or update healthcheck'),
    },
    {
        emoji: '🧱',
        code: ':bricks:',
        description: vscode.l10n.t('Infrastructure related changes'),
    },
    {
        emoji: '🧑‍💻',
        code: ':technologist:',
        description: vscode.l10n.t('Improve developer experience'),
    },
    {
        emoji: '💸',
        code: ':money_with_wings:',
        description: vscode.l10n.t('Add sponsorships or money related infrastructure'),
    },
    {
        emoji: '🧵',
        code: ':thread:',
        description: vscode.l10n.t('Add or update code related to multithreading or concurrency'),
    },
    {
        emoji: '🦺',
        code: ':safety_vest:',
        description: vscode.l10n.t('Add or update code related to validation'),
    },
    {
        emoji: '✈️',
        code: ':airplane:',
        description: vscode.l10n.t('Improve offline support'),
    },
];

export default Gitmoji;
