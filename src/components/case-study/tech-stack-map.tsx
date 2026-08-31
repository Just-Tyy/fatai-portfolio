export function TechStackMap({ groups }: { groups: [string, string[]][] }) {
  return (
    <div className="tech-map">
      {groups.map(([group, technologies]) => (
        <div className="tech-map-row" key={group}>
          <span>{group}</span>
          <div>
            {technologies.map((technology) => (
              <strong key={technology}>{technology}</strong>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
