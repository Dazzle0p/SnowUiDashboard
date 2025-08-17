function ProgressStatus() {
  const inProgressVal = 51;
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="font-extralight">Status</p>

      <div
        className="py-1 px-[5.5px] bg-gradient-to-r from-accent to-dark-faint rounded-regular"
        style={{
          backgroundImage: `linear-gradient(to right, var(--tw-gradient-from) 0%, var(--tw-gradient-from) ${inProgressVal}%, var(--tw-gradient-to) ${inProgressVal}%, var(--tw-gradient-to) 100%)`,
        }}
      >
        <p className="font-strong">
          In Progress <span className="">/</span> {inProgressVal}%
        </p>
      </div>
    </div>
  );
}

export default ProgressStatus; 