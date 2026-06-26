# Code Connect — Figma ↔ React マッピング

`/code-connect-components` 相当。Figma コンポーネントと React 実装を `*.figma.tsx` で結び、
Figma Dev Mode 上で「このコンポーネントのコードは `<Button/>`」と表示できるようにする。

## マッピング一覧（50コンポーネント）
| コンポーネント | node-id | React 実装 | Code Connect ファイル |
|---|---|---|---|
| Accordion | `2427:12` | `src/components/Accordion/Accordion.tsx` | `Accordion/Accordion.figma.tsx` |
| ActionSheet | `2440:14` | `src/components/ActionSheet/ActionSheet.tsx` | `ActionSheet/ActionSheet.figma.tsx` |
| ActionSheetRow | `2439:8` | `src/components/ActionSheetRow/ActionSheetRow.tsx` | `ActionSheetRow/ActionSheetRow.figma.tsx` |
| Avatar | `2289:2` | `src/components/Avatar/Avatar.tsx` | `Avatar/Avatar.figma.tsx` |
| Badge | `2156:5` | `src/components/Badge/Badge.tsx` | `Badge/Badge.figma.tsx` |
| Banner | `2457:18` | `src/components/Banner/Banner.tsx` | `Banner/Banner.figma.tsx` |
| BottomNavItem | `2818:36` | `src/components/BottomNavItem/BottomNavItem.tsx` | `BottomNavItem/BottomNavItem.figma.tsx` |
| BottomNavigation | `2819:253` | `src/components/BottomNavigation/BottomNavigation.tsx` | `BottomNavigation/BottomNavigation.figma.tsx` |
| Button | `973:521` | `src/components/Button/Button.tsx` | `Button/Button.figma.tsx` |
| Card | `2524:2` | `src/components/Card/Card.tsx` | `Card/Card.figma.tsx` |
| CardAction | `2731:240` | `src/components/CardAction/CardAction.tsx` | `CardAction/CardAction.figma.tsx` |
| CardList | `2530:215` | `src/components/CardList/CardList.tsx` | `CardList/CardList.figma.tsx` |
| CardRow | `2529:49` | `src/components/CardRow/CardRow.tsx` | `CardRow/CardRow.figma.tsx` |
| Checkbox | `2128:42` | `src/components/Checkbox/Checkbox.tsx` | `Checkbox/Checkbox.figma.tsx` |
| Chip | `2239:2` | `src/components/Chip/Chip.tsx` | `Chip/Chip.figma.tsx` |
| CompactButton | `1375:2316` | `src/components/CompactButton/CompactButton.tsx` | `CompactButton/CompactButton.figma.tsx` |
| Dialog | `2337:50` | `src/components/Dialog/Dialog.tsx` | `Dialog/Dialog.figma.tsx` |
| Divider | `2249:2` | `src/components/Divider/Divider.tsx` | `Divider/Divider.figma.tsx` |
| DropdownFilter | `2142:37` | `src/components/DropdownFilter/DropdownFilter.tsx` | `DropdownFilter/DropdownFilter.figma.tsx` |
| DropdownItem | `2141:14` | `src/components/DropdownItem/DropdownItem.tsx` | `DropdownItem/DropdownItem.figma.tsx` |
| Header | `1719:234` | `src/components/Header/Header.tsx` | `Header/Header.figma.tsx` |
| HistoryList | `2783:1576` | `src/components/HistoryList/HistoryList.tsx` | `HistoryList/HistoryList.figma.tsx` |
| HistoryRow | `2776:1322` | `src/components/HistoryRow/HistoryRow.tsx` | `HistoryRow/HistoryRow.figma.tsx` |
| IconButton | `987:339` | `src/components/IconButton/IconButton.tsx` | `IconButton/IconButton.figma.tsx` |
| Input | `2063:27` | `src/components/Input/Input.tsx` | `Input/Input.figma.tsx` |
| LessonCard | `2733:2965` | `src/components/LessonCard/LessonCard.tsx` | `LessonCard/LessonCard.figma.tsx` |
| List | `1788:176` | `src/components/List/List.tsx` | `List/List.figma.tsx` |
| ListRow | `1040:83` | `src/components/ListRow/ListRow.tsx` | `ListRow/ListRow.figma.tsx` |
| Logo | `283:1452` | `src/components/Logo/Logo.tsx` | `Logo/Logo.figma.tsx` |
| Modal | `2371:83` | `src/components/Modal/Modal.tsx` | `Modal/Modal.figma.tsx` |
| OptionList | `2544:128` | `src/components/OptionList/OptionList.tsx` | `OptionList/OptionList.figma.tsx` |
| OptionRow | `2543:18` | `src/components/OptionRow/OptionRow.tsx` | `OptionRow/OptionRow.figma.tsx` |
| Progress | `2292:4` | `src/components/Progress/Progress.tsx` | `Progress/Progress.figma.tsx` |
| Radio | `2134:23` | `src/components/Radio/Radio.tsx` | `Radio/Radio.figma.tsx` |
| SearchBar | `2449:20` | `src/components/SearchBar/SearchBar.tsx` | `SearchBar/SearchBar.figma.tsx` |
| Select | `2170:39` | `src/components/Select/Select.tsx` | `Select/Select.figma.tsx` |
| SelectCompact | `2178:55` | `src/components/SelectCompact/SelectCompact.tsx` | `SelectCompact/SelectCompact.figma.tsx` |
| Skeleton | `2297:15` | `src/components/Skeleton/Skeleton.tsx` | `Skeleton/Skeleton.figma.tsx` |
| Slider | `2294:6` | `src/components/Slider/Slider.tsx` | `Slider/Slider.figma.tsx` |
| Spinner | `2283:2` | `src/components/Spinner/Spinner.tsx` | `Spinner/Spinner.figma.tsx` |
| StatusBadge | `2732:246` | `src/components/StatusBadge/StatusBadge.tsx` | `StatusBadge/StatusBadge.figma.tsx` |
| Stepper | `2295:18` | `src/components/Stepper/Stepper.tsx` | `Stepper/Stepper.figma.tsx` |
| Tab | `2106:650` | `src/components/Tab/Tab.tsx` | `Tab/Tab.figma.tsx` |
| TabBar | `2116:68` | `src/components/TabBar/TabBar.tsx` | `TabBar/TabBar.figma.tsx` |
| Tag | `2259:2` | `src/components/Tag/Tag.tsx` | `Tag/Tag.figma.tsx` |
| TextLink | `990:227` | `src/components/TextLink/TextLink.tsx` | `TextLink/TextLink.figma.tsx` |
| Textarea | `2757:2` | `src/components/Textarea/Textarea.tsx` | `Textarea/Textarea.figma.tsx` |
| Toast | `2468:12` | `src/components/Toast/Toast.tsx` | `Toast/Toast.figma.tsx` |
| ToggleButton | `983:224` | `src/components/ToggleButton/ToggleButton.tsx` | `ToggleButton/ToggleButton.figma.tsx` |
| ToggleSwitch | `1031:8` | `src/components/ToggleSwitch/ToggleSwitch.tsx` | `ToggleSwitch/ToggleSwitch.figma.tsx` |

未マッピング（未実装）: Icon set `283:856` / Slot・Slot Icon `2671:30`,`2670:15` / Accordions `2495:259` / PlayButton（lib）。

## prop マッピング規約
- Figma の **Variant/Size/State**（enum）→ `figma.enum(...)` で React の文字列 union に対応付け。
- Figma の **IconLeft/IconRight**（boolean）→ `figma.boolean(..., { true: figma.instance(...), false: undefined })` で `ReactNode` スロットに対応。
- Figma の **Label**（text）→ `figma.string("Label")`。

## 公開（publish）
> ⚠️ Figma の共有ファイルへ書き込む**外向き操作**。Dev/Full シートの Figma トークンが必要。
> 実行はユーザー承認のうえで。`add_code_connect_map`(MCP) でファイル側を直接書き換えることはこのリポでは**しない**（誤った上書き防止）。

```bash
export FIGMA_ACCESS_TOKEN=<dev/full-seat token>
npm run connect:publish     # = figma connect publish（figma.config.json を使用）
```

検証のみ（ファイルを変更しない）:
```bash
npm run connect:check
```
