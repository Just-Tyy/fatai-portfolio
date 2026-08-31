export function SystemPreview({
  title,
  eyebrow,
  columns,
}: {
  title: string;
  eyebrow: string;
  columns: { title: string; body: string; meta?: string }[];
}) {
  return (
    <div className="system-preview">
      <div className="system-preview-bar">
        <div>
          <span>{eyebrow}</span>
          <strong>{title}</strong>
        </div>
        <div className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="system-preview-grid">
        {columns.map((column) => (
          <article key={column.title}>
            {column.meta && <span>{column.meta}</span>}
            <h3>{column.title}</h3>
            <p>{column.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
