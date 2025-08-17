function UtilityPanel({ title, children }) {
  return (
    <section className="flex flex-col gap-narrow">
      <h3 className="text-start">{title}</h3>

      {children}
    </section>
  );
}

export default UtilityPanel; 