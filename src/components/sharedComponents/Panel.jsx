function Panel({ children }) {
  return (
    <section className="p-md lg:p-lg bg-dark-low dark:bg-light-low rounded-large">
      {children}
    </section>
  );
}

export default Panel; 