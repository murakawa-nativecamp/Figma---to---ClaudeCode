import {
  Button, CompactButton, IconButton, ToggleButton, TextLink,
  Input, Textarea, Checkbox, Radio, ToggleSwitch, Select, SelectCompact, Stepper, Slider, SearchBar,
  Chip, Tag, Badge, StatusBadge, Avatar, Divider, Spinner, Skeleton, Progress,
  Tab, TabBar, Header, BottomNavItem, BottomNavigation, Accordion, List, ListRow, OptionList, OptionRow, DropdownFilter, DropdownItem, HistoryList, HistoryRow,
  Dialog, Modal, Banner, Toast, ActionSheet, ActionSheetRow, SearchBar as _SB,
  Card, CardRow, CardList, CardAction, LessonCard, Logo,
} from "./components";
import type { ReactNode } from "react";
import type { ButtonVariant } from "./components/Button/Button";
import s from "./Gallery.module.css";

void _SB;
const Star = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z" /></svg>
);
const SearchIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
);
const variants: ButtonVariant[] = ["primary", "gradient", "secondary", "tertiary", "ghost", "danger", "reservation"];
const box = { maxWidth: 360, width: "100%" } as const;

function Sec({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}
function Item({ name, children, vertical }: { name: string; children: ReactNode; vertical?: boolean }) {
  return (
    <>
      <div className={s.variantTag}>{name}</div>
      <div className={s.row} style={vertical ? { flexDirection: "column", alignItems: "stretch", ...box } : undefined}>{children}</div>
    </>
  );
}

export function Gallery() {
  return (
    <div className={s.page}>
      <h1 className={s.h1}>NativeCamp APP — React DS harness</h1>
      <p className={s.note}>canon: tokens/tokens.json (Figma DKl4vZ6OAtXYhuvMHbWkRZ) · 全視覚値は tokens.css の CSS 変数経由 · theme: dark · 50 components</p>

      <Sec title="Buttons & actions">
        <Item name="Button — variants (size l)">
          {variants.map((v) => <Button key={v} variant={v} size="l" label={v} iconLeft={<Star />} />)}
        </Item>
        <Item name="Button — states">
          <Button variant="primary" size="l" label="Default" />
          <Button variant="primary" size="l" state="loading" label="Loading" />
          <Button variant="primary" size="l" state="disabled" label="Disabled" />
        </Item>
        <Item name="CompactButton">
          <CompactButton variant="primary" size="m" label="保存" />
          <CompactButton variant="secondary" size="m" label="キャンセル" />
          <CompactButton variant="tertiary" size="s" label="5分" />
        </Item>
        <Item name="IconButton">
          <IconButton variant="primary" size="l" shape="circle" icon={<Star />} aria-label="fav" />
          <IconButton variant="secondary" size="l" shape="square" icon={<Star />} aria-label="fav" />
          <IconButton variant="danger" size="m" shape="circle" icon={<Star />} aria-label="del" />
          <IconButton variant="ghost" size="m" shape="circle" icon={<Star />} aria-label="menu" state="disabled" />
        </Item>
        <Item name="ToggleButton">
          <ToggleButton size="m" state="unselected" label="Unselected" icon={<Star />} />
          <ToggleButton size="m" state="selected" label="Selected" icon={<Star />} />
          <ToggleButton size="m" state="disabled" label="Disabled" />
        </Item>
        <Item name="TextLink">
          <TextLink size="l" label="Large link" iconRight={<Star />} />
          <TextLink size="m" label="Medium link" />
          <TextLink size="s" label="Disabled" state="disabled" />
        </Item>
      </Sec>

      <Sec title="Form & input">
        <Item name="Input — states" vertical>
          <Input label labelText="Default" placeholder="you@example.com" />
          <Input label labelText="Focus" state="focus" placeholder="you@example.com" />
          <Input label labelText="Error" state="error" helperText="正しい形式で入力してください" defaultValue="invalid" />
          <Input label labelText="Disabled" state="disabled" placeholder="you@example.com" />
        </Item>
        <Item name="Textarea" vertical>
          <Textarea label labelText="Notes" placeholder="メモを入力" />
        </Item>
        <Item name="Checkbox">
          <Checkbox value="unchecked" label labelText="Unchecked" />
          <Checkbox value="checked" label labelText="Checked" />
          <Checkbox value="indeterminate" label labelText="Mixed" />
          <Checkbox value="checked" state="disabled" label labelText="Disabled" />
        </Item>
        <Item name="Radio">
          <Radio value="unselected" label labelText="A" name="g" />
          <Radio value="selected" label labelText="B" name="g" />
          <Radio value="unselected" state="disabled" label labelText="Disabled" name="g" />
        </Item>
        <Item name="ToggleSwitch">
          <ToggleSwitch state="off" />
          <ToggleSwitch state="on" />
          <ToggleSwitch state="disabled" />
        </Item>
        <Item name="Select / SelectCompact" vertical>
          <Select label labelText="Plan" value="Premium" />
          <Select label labelText="Error" state="error" value="—" helperText="必須" />
          <SelectCompact value="JP" />
        </Item>
        <Item name="Stepper · Slider">
          <Stepper value={3} />
          <div style={{ flex: 1, minWidth: 160 }}><Slider value={60} /></div>
        </Item>
        <Item name="SearchBar" vertical>
          <SearchBar placeholder="教材・講師を検索" searchIcon={<SearchIcon />} />
          <SearchBar state="filled" text="日常英会話" searchIcon={<SearchIcon />} />
        </Item>
      </Sec>

      <Sec title="Selection & display">
        <Item name="Chip">
          <Chip size="m" state="default" label="Default" />
          <Chip size="m" state="selected" label="Selected" />
          <Chip size="m" state="disabled" label="Disabled" />
        </Item>
        <Item name="Tag">
          <Tag color="neutral" label="Neutral" />
          <Tag color="success" label="Success" />
          <Tag color="warning" label="Warning" />
          <Tag color="error" label="Error" />
        </Item>
        <Item name="Badge · StatusBadge">
          <Badge type="number" count="3" />
          <Badge type="new" />
          <Badge type="dot" />
          <StatusBadge status="reservation" label="予約" />
          <StatusBadge status="now" label="まもなく" />
          <StatusBadge status="live" label="LIVE" />
        </Item>
        <Item name="Avatar">
          <Avatar size="xl" initials="XL" />
          <Avatar size="l" initials="L" />
          <Avatar size="m" initials="M" />
          <Avatar size="s" initials="S" />
        </Item>
        <Item name="Divider" vertical>
          <Divider type="horizontal" />
          <Divider type="withLabel" label="or" />
        </Item>
        <Item name="Spinner · Progress · Skeleton">
          <Spinner size="l" /><Spinner size="m" /><Spinner size="s" />
          <div style={{ flex: 1, minWidth: 160 }}><Progress value={65} /></div>
        </Item>
        <Item name="Skeleton" vertical>
          <Skeleton type="text" />
          <Skeleton type="listItem" />
          <Skeleton type="thumbnail" />
        </Item>
      </Sec>

      <Sec title="Navigation & structure">
        <Item name="Tab">
          <Tab type="underline" state="active" label="Active" />
          <Tab type="underline" state="inactive" label="Inactive" />
          <Tab type="segmented" state="active" label="Seg A" />
          <Tab type="segmented" state="inactive" label="Seg B" />
        </Item>
        <Item name="TabBar" vertical>
          <TabBar type="underline" labels={["ホーム", "教材", "履歴", "設定"]} activeIndex={0} />
        </Item>
        <Item name="Header" vertical>
          <Header pageTitle="ページタイトル" slotHeaderRight={<Avatar size="s" initials="NC" />} />
        </Item>
        <Item name="Accordion" vertical>
          <Accordion title="よくある質問" state="collapsed" body="折りたたみ時の本文。" />
          <Accordion title="開いた状態" state="expanded" body="展開時に表示される本文テキスト。" />
        </Item>
        <Item name="List · ListRow" vertical>
          <List>
            <ListRow type="navigation" icon iconSlot={<Star />} label="ナビゲーション" value="12" />
            <ListRow type="toggle" label="トグル" trailingSlot={<ToggleSwitch state="on" />} />
            <ListRow type="value" label="値" value="1,200" />
          </List>
        </Item>
        <Item name="OptionList · OptionRow" vertical>
          <OptionList>
            <OptionRow state="selected" title="選択中" description="説明テキスト" showDescription />
            <OptionRow state="default" title="未選択" />
          </OptionList>
        </Item>
        <Item name="DropdownFilter · DropdownItem" vertical>
          <DropdownFilter>
            <DropdownItem state="selected" label="新しい順" />
            <DropdownItem state="default" label="古い順" />
            <DropdownItem state="disabled" label="人気順" />
          </DropdownFilter>
        </Item>
        <Item name="HistoryList · HistoryRow" vertical>
          <HistoryList>
            <HistoryRow type="message" name="John D." timestamp="10:00" message="Great lesson!" showTimestamp showMessage avatarSlot={<Avatar size="m" initials="JD" />} />
            <HistoryRow type="memo" name="メモ" message="復習する" showMessage avatarSlot={<Avatar size="m" initials="M" />} />
          </HistoryList>
        </Item>
        <Item name="BottomNavItem · BottomNavigation" vertical>
          <div className={s.row}>
            <BottomNavItem state="active" label="ホーム" icon={<Star />} />
            <BottomNavItem state="inactive" label="教材" icon={<Star />} badge />
          </div>
          <BottomNavigation activeIndex={0} items={[
            { label: "ホーム", icon: <Star /> }, { label: "教材", icon: <Star /> },
            { label: "履歴", icon: <Star />, badge: true }, { label: "設定", icon: <Star /> },
          ]} />
        </Item>
      </Sec>

      <Sec title="Overlays & feedback">
        <Item name="Banner">
          <div style={box}>
            <Banner color="info" text="お知らせ：メンテナンス予定" showClose />
            <Banner color="success" text="保存しました" />
            <Banner color="warning" text="通信が不安定です" />
            <Banner color="error" text="エラーが発生しました" />
          </div>
        </Item>
        <Item name="Toast">
          <div style={box}>
            <Toast color="success" text="予約しました" showAction actionLabel="取消" />
            <Toast color="error" text="失敗しました" />
          </div>
        </Item>
        <Item name="Dialog">
          <div style={box}><Dialog type="default" title="確認" body="この操作を続けますか？" showBody showCancel confirmLabel="OK" cancelLabel="キャンセル" /></div>
          <div style={box}><Dialog type="destructive" title="削除しますか？" body="元に戻せません。" showBody showCancel confirmLabel="削除" cancelLabel="やめる" /></div>
        </Item>
        <Item name="Modal">
          <div style={box}><Modal variant="dialog" title="モーダル" hasActionButton>本文コンテンツ</Modal></div>
        </Item>
        <Item name="ActionSheet · ActionSheetRow">
          <div style={box}>
            <ActionSheet showCancel cancelLabel="キャンセル">
              <ActionSheetRow state="default" label="共有" />
              <ActionSheetRow state="default" label="編集" />
              <ActionSheetRow state="destructive" label="削除" />
            </ActionSheet>
          </div>
        </Item>
      </Sec>

      <Sec title="Cards & lesson">
        <Item name="Card">
          <div style={box}><Card type="vertical" media title="教材カード" body="説明テキスト" actions actionsSlot={<Button variant="primary" size="m" label="開く" />} /></div>
        </Item>
        <Item name="CardRow · CardList" vertical>
          <CardList count={2}>
            <CardRow media="thumbnail" title="行カード" subtitle="サブタイトル" caption="caption" showChevron mediaSlot={<Avatar size="m" initials="A" />} />
            <CardRow media="avatar" title="講師" subtitle="John D." showChevron mediaSlot={<Avatar size="m" initials="JD" />} />
          </CardList>
        </Item>
        <Item name="CardAction">
          <CardAction label="アクション" icon={<Star />} />
        </Item>
        <Item name="LessonCard" vertical>
          <LessonCard date="今日 21:00" teacher="John D." material="Side by Side 1" showMaterial showButton buttonLabel="レッスンを開始" />
        </Item>
        <Item name="Logo">
          <Logo state="textActive" />
          <Logo state="symbolActive" />
        </Item>
      </Sec>
    </div>
  );
}

export default Gallery;
