import {
  Header,
  SearchBar,
  Avatar,
  StatusBadge,
  LessonCard,
  Progress,
  List,
  ListRow,
  Button,
  TextLink,
  BottomNavigation,
} from "../components";
import s from "./Home.module.css";

/* Inline 1em/currentColor icons — no external asset dependency. */
const I = (p: { d: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={p.d} />
  </svg>
);
const SearchIcon = () => <I d="M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z" />;
const HomeIcon = () => <I d="M3 11l9-8 9 8M5 10v10h14V10" />;
const BookIcon = () => <I d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2z M18 17H6" />;
const ClockIcon = () => <I d="M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z" />;
const PersonIcon = () => <I d="M4 21v-1a6 6 0 0112 0v1M10 11a4 4 0 100-8 4 4 0 000 8z" />;
const StarIcon = () => <I d="M12 3l2.9 6 6.1.9-4.5 4.3 1.1 6L12 17.8 6.4 20.2l1.1-6L3 9.9 9.1 9z" />;

export function Home() {
  return (
    <div className={s.frame}>
      <Header pageTitle="ホーム" slotHeaderRight={<Avatar size="s" initials="NC" />} />

      <div className={s.body}>
        <SearchBar placeholder="教材・講師を検索" searchIcon={<SearchIcon />} />

        <section className={s.section}>
          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>今すぐレッスン</h2>
            <StatusBadge status="now" label="まもなく開始" />
          </div>
          <LessonCard
            date="今日 21:00"
            teacher="John D."
            material="Side by Side 1 — Unit 3"
            showMaterial
            showButton
            buttonLabel="レッスンを開始"
          />
        </section>

        <section className={s.section}>
          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>今週の学習</h2>
            <span className={s.statCaption}>13 / 20 レッスン</span>
          </div>
          <div className={s.statRow}>
            <Progress value={65} />
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>クイックアクセス</h2>
            <TextLink size="m" label="すべて見る" href="#" />
          </div>
          <List>
            <ListRow type="navigation" icon iconSlot={<StarIcon />} label="お気に入り講師" value="12" />
            <ListRow type="navigation" icon iconSlot={<ClockIcon />} label="学習履歴" />
            <ListRow type="value" label="コイン残高" value="1,200" />
          </List>
        </section>

        <Button className={s.cta} variant="primary" size="l" label="今すぐレッスンを開始" />
      </div>

      <BottomNavigation
        className={s.bottomNav}
        activeIndex={0}
        items={[
          { label: "ホーム", icon: <HomeIcon /> },
          { label: "教材", icon: <BookIcon /> },
          { label: "履歴", icon: <ClockIcon />, badge: true },
          { label: "マイページ", icon: <PersonIcon /> },
        ]}
      />
    </div>
  );
}

export default Home;
