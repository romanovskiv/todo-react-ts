import { StyledFilters } from './styled/TodoFilters.styled';

interface TodoFiltersState {
  countRemaining: () => string | undefined;
  setFilter: (id: string) => void;
  handleClear: () => void;
  allFilterActive: boolean;
  activeFilterActive: boolean;
  completedFilterActive: boolean;
}
export default function TodoFilters({
  countRemaining,
  setFilter,
  handleClear,
  allFilterActive,
  activeFilterActive,
  completedFilterActive,
}: TodoFiltersState) {
  function handleFilterAll() {
    setFilter('all');
  }

  function handleFilterActive() {
    setFilter('active');
  }

  function handleFilterComplete() {
    setFilter('completed');
  }

  return (
    <StyledFilters>
      <p className="remaining">{countRemaining()}</p>
      <div className="filters">
        <button
          className={allFilterActive ? 'filter active-filter' : 'filter'}
          onClick={handleFilterAll}>
          All
        </button>
        <button
          className={activeFilterActive ? 'filter active-filter' : 'filter'}
          onClick={handleFilterActive}>
          Active
        </button>
        <button
          className={completedFilterActive ? 'filter active-filter' : 'filter'}
          onClick={handleFilterComplete}>
          Completed
        </button>
      </div>
      <button className="clear" onClick={handleClear}>
        Clear Completed
      </button>
    </StyledFilters>
  );
}
