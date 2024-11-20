import PropTypes from "prop-types";

const SharedInput = ({ type, name, value, onChange, label, options, placeholder, ...rest }) => {
  return (
    <div className="mb-4">
      {label && type !== "checkbox" && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...rest}
        ></textarea>
      ) : type === "checkbox" ? (
        <div className="flex items-center">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={value}
            onChange={onChange}
            className="mr-2 focus:ring-blue-500"
            {...rest}
          />
          <label htmlFor={name} className="text-sm text-gray-600">
            {label}
          </label>
        </div>
      ) : type === "radio" ? (
        options?.map((option, index) => (
          <div key={index} className="flex items-center mb-1">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="mr-2 focus:ring-blue-500"
              {...rest}
            />
            <label htmlFor={`${name}-${option.value}`} className="text-sm text-gray-600">
              {option.label}
            </label>
          </div>
        ))
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...rest}
        >
          <option value="">Select an option</option>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...rest}
        />
      )}
    </div>
  );
};

// PropTypes for validation
SharedInput.propTypes = {
  type: PropTypes.oneOf(["text", "textarea", "checkbox", "radio", "select"]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
};

SharedInput.defaultProps = {
  label: "",
  options: [],
  placeholder: "",
};

export default SharedInput;
