import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@nextui-org/button";
import "react-quill/dist/quill.snow.css";

import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { Checkbox } from "@nextui-org/checkbox";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Define a custom toolbar with an image button
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"], // Add image support here
      ["clean"],
    ],
    handlers: {
      image: imageHandler, // Custom image handler
    },
  },
};

// Image handler function
function imageHandler() {
  const url = prompt("Enter the image URL");

  if (url) {
    const quill = this.quill; // Get the quill instance
    const range = quill.getSelection(); // Get the cursor position

    quill.insertEmbed(range.index, "image", url); // Insert image at cursor position
  }
}

function ReactQuillsComponents() {
  const [value, setValue] = useState("");
  const [markedImages, setMarkedImages] = useState<Record<string, boolean>>({});
  const [ingredients, setIngredients] = useState<
    { name: string; marked: boolean }[]
  >([]);
  const [useClient, setUseClient] = useState(false); // Checkbox state for "use client"

  // Function to add a new ingredient
  const addIngredient = () => {
    setIngredients((prev) => [...prev, { name: "", marked: false }]);
  };

  // Function to update an ingredient
  const handleIngredientChange = (index: number, name: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].name = name;
    setIngredients(updatedIngredients);
  };

  // Function to toggle ingredient check/uncheck
  const toggleIngredientCheck = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].marked = !updatedIngredients[index].marked;
    setIngredients(updatedIngredients);
  };

  // Function to separate images and text
  const separateImagesAndText = () => {
    // Extract all image URLs
    const imageUrls =
      value.match(/<img[^>]+src="([^">]+)"/g)?.map((imgTag) => {
        const match = imgTag.match(/src="([^">]+)"/);
        return match ? match[1] : null;
      }) || [];

    // Remove images from the content to get the text description
    const description = value.replace(/<img[^>]+>/g, "");

    return { images: imageUrls, description };
  };

  const handleSubmit = () => {
    const { images, description } = separateImagesAndText();
    if (useClient) {
      console.log("Images:", images);
      console.log("Description:", description);
    }
  };

  const onSubmit = (userData: any) => {
    if (useClient) {
      console.log("data: ", userData);
    }
    handleSubmit();
  };

  const { images, description } = separateImagesAndText(); // Separate images and text for display

  return (
    <div>
      {/* React Quill Editor */}
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules} // Use the custom modules
        theme="snow"
      />

      {/* Display the content: Images on one side, Description on the other */}
      <div className="mt-4 flex">
        {/* Display Description */}
        <div className="w-full pl-4">
          <h3 className="text-xl font-semibold">Description:</h3>
          <div className="border p-4 bg-gray-100 rounded">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>

      {/* Custom Input Start */}
      <div>
        <FXForm
          //   resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Title" name="title" type="text" />
          </div>
          <div className="flex gap-4">
            <div className="py-3 flex-1">
              <FXInput label="Time (In min)" name="timeFun" type="number" />
            </div>
            <div className="py-3 flex-1">
              <FXInput label="Tags" name="tags" type="text" />
            </div>
          </div>
          {/* Ingredients Section with dynamic checkboxes */}
          <div className="py-3">
            <h3 className="text-lg font-semibold">Ingredients</h3>
            {ingredients?.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-4 my-2">
                <FXInput
                  label=""
                  name={`ingredient-${index}`}
                  type="text"
                  onChange={(e) =>
                    handleIngredientChange(index, e.target.value)
                  }
                  placeholder="Enter an ingredient"
                />
                <Checkbox
                  isSelected={ingredient.marked}
                  onChange={() => toggleIngredientCheck(index)}
                >
                  Marked
                </Checkbox>
              </div>
            ))}
            <Button onClick={addIngredient} className="mt-2">
              Add Ingredient
            </Button>
          </div>

          <Checkbox
            isSelected={useClient}
            onChange={() => setUseClient(!useClient)}
          >
            Use client
          </Checkbox>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </FXForm>
      </div>
      {/* Custom input end */}
    </div>
  );
}

export default ReactQuillsComponents;
