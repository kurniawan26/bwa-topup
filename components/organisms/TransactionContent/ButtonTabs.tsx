interface ButtonTabsProps {
  title: string;
  isActive?: boolean;
  filter: '*' | 'success' | 'pending' | 'failed';
}

export default function ButtonTabs(props: ButtonTabsProps) {
  const { title, isActive = false, filter } = props;
  return (
    <a
      data-filter={filter}
      href="#"
      className={`btn btn-status rounded-pill text-sm ${
        isActive ? 'btn-active' : ''
      } me-3`}
    >
      {title}
    </a>
  );
}
