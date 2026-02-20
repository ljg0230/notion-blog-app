import SortSelect from './client/SortSelect';

interface HeaderSectionProps {
  selectTag: string;
}

export default function HeaderSection({ selectTag }: HeaderSectionProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">
        {selectTag === '전체' ? '블로그 목록' : `#${selectTag} 관련 글`}
      </h2>
      <SortSelect />
    </div>
  );
}
