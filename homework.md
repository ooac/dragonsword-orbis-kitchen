# DragonSword: Awakening 航海作业材料

## 关卡 2：关键词清单与页面矩阵

### 关键词清单

| 关键词 | 类型 | 搜索意图 |
|---|---|---|
| dragonsword awakening cooking recipes | 通用需求 | 查看完整配方入口 |
| dragonsword awakening all recipes | 通用需求 | 查询全部菜谱 |
| dragonsword awakening cooking guide | 通用需求 | 理解烹饪系统 |
| dragonsword awakening ingredients | 通用需求 | 查询食材类别和来源 |
| dragonsword awakening best food | 通用需求 | 按战斗用途选食物 |
| dragonsword awakening grilling recipes | 个性需求 | 查询煎烤类配方 |
| dragonsword awakening boiling recipes | 个性需求 | 查询炖煮类配方 |
| dragonsword awakening slicing recipes | 个性需求 | 查询切配类配方 |
| dragonsword awakening honey tea recipe | 个性需求 | 查询复活料理 Honey Tea |
| dragonsword awakening assorted salad recipe | 个性需求 | 查询净化料理 Assorted Salad |
| dragonsword awakening seafood paella recipe | 个性需求 | 查询最大生命增益料理 |
| dragonsword awakening fish and chips recipe | 个性需求 | 查询团队治疗料理 |
| dragonsword awakening ingredient merchants | 个性需求 | 查找商人和食材价格 |
| dragonsword awakening mysterious dish | 个性需求 | 解决配方失败问题 |
| dragonsword awakening recipe quality | 个性需求 | 理解料理品质差异 |

### 页面矩阵

| 页面 | 主关键词 | 用户问题 | 页面类型 |
|---|---|---|---|
| `/` | dragonsword awakening cooking recipes | 我该做什么料理、需要什么材料？ | 首页/工具页 |
| `/recipes` | dragonsword awakening all recipes | 如何搜索和筛选所有配方？ | 导航页/数据库 |
| `/best-food` | dragonsword awakening best food | 治疗、复活、净化或打 Boss 分别带什么？ | 攻略页 |
| `/methods/grilling` | dragonsword awakening grilling recipes | 煎烤有哪些配方？ | 分类页 |
| `/methods/boiling` | dragonsword awakening boiling recipes | 炖煮有哪些配方和团队增益？ | 分类页 |
| `/methods/slice` | dragonsword awakening slicing recipes | 切配有哪些净化和工具料理？ | 分类页 |
| `/ingredients` | dragonsword awakening ingredients | 每种食材属于什么类别、从哪获得？ | 数据库页 |
| `/merchants` | dragonsword awakening ingredient merchants | 哪些商人卖食材、多少钱？ | 攻略页 |
| `/recipes/honey-tea` | dragonsword awakening honey tea recipe | 如何制作复活料理？ | 配方详情页 |
| `/recipes/assorted-salad` | dragonsword awakening assorted salad recipe | 如何制作团队净化料理？ | 配方详情页 |
| `/recipes/seafood-paella` | dragonsword awakening seafood paella recipe | 如何提升团队最大生命？ | 配方详情页 |
| `/fix/mysterious-dish` | dragonsword awakening mysterious dish | 为什么做成了神秘料理？ | 问题解决页 |

### 站点结构

```text
首页（核心搜索 + 用途入口）
├── 全部配方
│   ├── Grilling
│   ├── Boiling
│   ├── Slice
│   └── 单个配方详情
├── 按用途选食物
├── 食材数据库
│   └── 食材商人
└── 常见问题
    └── Mysterious Dish 排错
```

### 收获与卡点

这关最大的收获是把“做一个游戏 Wiki”改成了“解决具体搜索问题”。最初容易把角色、地图、装备等内容全部塞进首版，但竞争页面已经很多，而且会拖慢上线。通过按搜索意图分类，我把第一版收窄到烹饪：通用需求由首页、配方库和用途导航承接，具体菜名和报错问题由独立内页承接。卡点是多个关键词表达不同但意图重复，解决方式是合并同义词，让一个页面集中回答一个问题，避免页面互相竞争。

## 关卡 3：页面素材来源记录

| 页面/用途 | 素材类型 | 来源 | 使用方式 |
|---|---|---|---|
| 首页视觉 | 官方游戏头图 | Steam 商店页 | 本地保存并标注版权归属 |
| 游戏简介/发行信息 | 官方文案 | Steam 商店页 | 改写为简短背景说明 |
| 烹饪机制 | 方法、品质、注册规则 | dragonswordawakening.net 烹饪指南 | 交叉整理，不整段复制 |
| 配方库 | 菜名与分类 | dragonswordawakening.net Cooking Database | 作为结构化查询线索 |
| 配方数量复核 | 料理列表 | Games.gg All Recipes Guide | 用于确认公开攻略口径差异 |
| 玩家问题 | Mysterious Dish、食材名称显示 | Steam Community 讨论 | 转化为排错问题页 |
| 商人记录 | 商人、地点、价格 | dragonswordawakening.net 烹饪指南 | 形成商人速查表 |
| 免责声明 | 游戏名称与资产权属 | 官方与站点通行写法 | 页脚明确独立粉丝站性质 |

### 收获与卡点

最大的收获是素材不只是图片，还包括可核对的事实、数据字段和玩家真实问题。卡点是不同攻略对配方总数存在口径差异，因此首版不宣称“绝对完整”，只展示已经交叉核对的示例配方，并把来源与访问日期保留下来。这样比直接复制竞品页面更可靠，也为后续补页留下清晰依据。

## 关卡 4：本地网站版本

- 项目目录：`/Users/macmini/Desktop/Github/0820`
- 启动方式：`npm start`
- 本地地址：`http://localhost:4173`
- 已实现：响应式首页、菜名/食材搜索、三种烹饪方式筛选、按战斗用途选食物、食材商人速查、来源与独立粉丝站声明。

### 收获与卡点

最大的收获是先做能验证搜索意图的最小版本，而不是提前搭一个庞大的 Wiki。最初的卡点是内容范围容易失控，解决方式是只实现首版页面矩阵里最核心的交互：搜索、分类筛选和按用途决策。这样页面不仅能看，也能真正帮助玩家在几秒内找到可执行答案。

## 事实来源

- https://store.steampowered.com/app/4570720/DragonSword__Awakening/
- https://dragonswordawakening.net/guides/cooking
- https://dragonswordawakening.net/database/cooking
- https://games.gg/dragonsword-awakening/guides/dragon-sword-awakening-how-to-cook-all-recipes/
