interface InputProps {
  label: string;
  typeInput: string;
  idName: string;
  placeholder: string;
}

export default function Input(props: InputProps) {
  const { label, typeInput, idName, placeholder, ...nativeProps } = props;
  return (
    <>
      <div className="pt-30">
        <label
          htmlFor={idName}
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          {label}
        </label>
        <input
          type={typeInput}
          className="form-control rounded-pill text-lg"
          id={idName}
          name={idName}
          aria-describedby={idName}
          placeholder={placeholder}
          {...nativeProps}
        />
      </div>
    </>
  );
}
