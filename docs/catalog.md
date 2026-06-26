# Design System Catalog — NativeCamp APP

> 正典: Figma file `DKl4vZ6OAtXYhuvMHbWkRZ`（library **Design System - APP**）。
> トークンは [`tokens/tokens.json`](../tokens/tokens.json) を唯一のソースとし、
> [`src/styles/tokens.css`](../src/styles/tokens.css)（CSS変数）と
> [`tokens/design-tokens.json`](../tokens/design-tokens.json)（解決済みフラットJSON）を生成。
> ノードマップ全量は [`figma-node-map.md`](./figma-node-map.md)。theme: **dark** / font: **Noto Sans JP**。

## 1. トークン（カタログ）

| グループ | 数 | CSS変数プレフィックス | 例 |
|---|---|---|---|
| color.base | 2 | `--color-base-*` | `--color-base-white` |
| color.primitive | 90 | `--color-primitive-*` | `--color-primitive-orange-500` (#F1890E) |
| color.semantic | 50+ | `--color-semantic-*` | `--color-semantic-brand-primary`, `--color-semantic-text-onbrand` |
| └ gradient | 1 | `--color-semantic-brand-primary-gradient` | `linear-gradient(90deg,#FF6B35 0%,#EEB633 100%)` |
| spacing | 9 | `--spacing-*` | `--spacing-base`(16px), `--spacing-md`(12px) |
| radius | 8 | `--radius-*` | `--radius-full`(9999px), `--radius-lg`(12px) |
| iconSize | 9 | `--icon-size-*` | `--icon-size-l`(24px) |
| controlHeight | 4 | `--control-height-*` | `--control-height-xl`(56px) *(React ハーネス追加トークン)* |
| typography | 24 styles | `--type-<name>-{family,size,weight,line-height}` | `--type-button-xl-size`(20px) |
| borderWidth | 4 | `--border-width-*` | `--border-width-default`(1.5px) |
| elevation (drop) | 3 | `--shadow-*` | `--shadow-md` |

- 色は **primitive → semantic** の2層。コンポーネントは原則 **semantic** を参照する（primitive 直参照は gradient 等の例外のみ）。
- `glass.*` / `composite` 影は CSS 単一プロパティに収まらないため tokens.json に定義のみ保持（必要時に各コンポーネントで合成）。
- 旧命名・タイポは tokens.json `deprecatedAliases` に正規トークンへのマッピングを保持。

## 2. コンポーネント（カタログ + 実装ステータス）

`built` = React 実装済み（`.tsx` + token-bound `.module.css` + `.figma.ts`）。
`scaffold` = 契約（上流 `components/<name>.md`）あり・React 未実装（生成ループ対象）。

### Button family（page `・Button`）
| コンポーネント | Figma node | status |
|---|---|---|
| Button | `973:521` | **built** |
| Compact Button | `1375:2316` | **built** |
| Icon Button | `987:339` | **built** |
| Text Link | `990:227` | **built** |
| Toggle Button | `983:224` | scaffold |
| PlayButton | (lib) `87a5066…` | scaffold |

### Basic / form
| コンポーネント | Figma node | status |
|---|---|---|
| Badge | `2156:5` | **built** |
| Status Badge | `2732:246` | scaffold |
| Input | `2063:27` | scaffold |
| Textarea | `2757:2` | scaffold |
| Checkbox | `2128:42` | scaffold |
| Radio | `2134:23` | scaffold |
| Toggle Switch | `1031:8` | scaffold |
| Select | `2170:39` | scaffold |
| Select Compact | `2178:55` | scaffold |
| Chip | `2239:2` | scaffold |
| Tag | `2259:2` | scaffold |
| Divider | `2249:2` | scaffold |
| Slider | `2294:6` | scaffold |
| Stepper | `2295:18` | scaffold |
| Avatar | `2289:2` | scaffold |
| Spinner | `2283:2` | scaffold |
| Skeleton | `2297:15` | scaffold |
| Progress | `2292:4` | scaffold |
| Icon (set) | `283:856` | scaffold |

### Navigation / structure
| コンポーネント | Figma node | status |
|---|---|---|
| Tab | `2106:650` | scaffold |
| TabBar | `2116:68` | scaffold |
| header | `1719:234` | scaffold |
| BottomNavItem | `2818:36` | scaffold |
| BottomNavigation | `2819:253` | scaffold |
| Accordion | `2427:12` | scaffold |
| List Row | `1040:83` | scaffold |
| List | `1788:176` | scaffold |
| History Row | `2776:1322` | scaffold |
| History List | `2783:1576` | scaffold |
| Option Row | `2543:18` | scaffold |
| Option List | `2544:128` | scaffold |
| DropdownItem | `2141:14` | scaffold |
| DropdownFilter | `2142:37` | scaffold |

### Overlays / feedback
| コンポーネント | Figma node | status |
|---|---|---|
| Dialog | `2337:50` | scaffold |
| Modal | `2371:83` | scaffold |
| Banner | `2457:18` | scaffold |
| Toast | `2468:12` | scaffold |
| ActionSheet | `2440:14` | scaffold |
| ActionSheet Row | `2439:8` | scaffold |
| SearchBar | `2449:20` | scaffold |
| Card | `2524:2` | scaffold |
| Card Row | `2529:49` | scaffold |
| CardList | `2530:215` | scaffold |
| Card Action | `2731:240` | scaffold |
| Lesson Card | `2733:2965` | scaffold |
| Slot / Slot Icon | `2671:30` / `2670:15` | scaffold |

> ⚠️ 命名衝突: `283:1452` の `Button`（page `Basic`）は **ロゴ切替**であり本 Button ではない。実 Button は `973:521`。

## 3. 生成ループ（scaffold → built の手順）
1. **検索**: `search_design_system` / 接続ライブラリで対象コンポーネントを特定（着手前必須）。
2. **契約取得**: 上流 `components/<name>.md` の Props/States/variant を読む（無ければ `get_design_context` で実測）。
3. **トークン束縛**: `.module.css` は `var(--…)` のみ。ハードコード値禁止（`npm run validate` で機械チェック）。
4. **Code Connect**: `<name>.figma.ts` で Figma node ↔ React をマッピング。
5. **スクショ検証**: `Gallery.tsx` に追加 → `npm run dev` → preview で目視・computed-style 確認。
