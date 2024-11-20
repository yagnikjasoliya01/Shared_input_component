  import  { useState } from "react";
import SharedInput from "./components/SharedInput";

const App = () => {
  const [formData, setFormData] = useState({
    text: "",
    textarea: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Shared Input Form</h2>

        <form onSubmit={handleSubmit}>
          <SharedInput
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            label="Text Input"
            placeholder="Enter text"
          />

          <SharedInput
            type="textarea"
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
            label="Textarea Input"
            placeholder="Enter details"
          />

          <SharedInput
            type="checkbox"
            name="checkbox"
            value={formData.checkbox}
            onChange={handleChange}
            label="I agree to the terms"
          />

          <SharedInput
            type="radio"
            name="radio"
            value={formData.radio}
            onChange={handleChange}
            label="Select an option"
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
            ]}
          />

          <SharedInput
            type="select"
            name="select"
            value={formData.select}
            onChange={handleChange}
            label="Choose an option"
            options={[
              { value: "value1", label: "Value 1" },
              { value: "value2", label: "Value 2" },
            ]}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="mt-6 p-4 border-t border-gray-300">
            <h3 className="text-lg font-bold text-gray-800">Submitted Data:</h3>
            <pre className="text-sm text-gray-700 bg-gray-100 p-2 rounded">{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
